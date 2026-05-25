import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const router = express.Router();

/*
===================================
REGISTER
===================================
*/

router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    // CHECK USER
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {

        if (results.length > 0) {
          return res.status(400).json({
            success: false,
            message: "User already exists"
          });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // INSERT USER
        db.query(
          "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
          [
            name,
            email,
            hashedPassword,
            role || "user"
          ],
          (err, result) => {

            if (err) {
              return res.status(500).json({
                success: false,
                error: err
              });
            }

            res.status(201).json({
              success: true,
              message: "User registered successfully"
            });

          }
        );

      }
    );

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

/*
===================================
LOGIN
===================================
*/

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err
        });
      }

      if (results.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid email"
        });
      }

      const user = results[0];

      // CHECK PASSWORD
      const validPassword = await bcrypt.compare(
        password,
        user.password
      );

      if (!validPassword) {
        return res.status(400).json({
          success: false,
          message: "Invalid password"
        });
      }

      // TOKEN
      const token = jwt.sign(
        {
          id: user.id,
          role: user.role
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

      res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });

    }
  );

});

export default router;