const express = require("express");

const router = express.Router();

const {
verifyToken,
isAdmin
} = require("../middleware/authMiddleware");

/* =========================
   ADMIN DASHBOARD
========================= */

router.get(

"/dashboard",

verifyToken,

isAdmin,

(req,res)=>{

res.json({

success:true,

message:"Welcome Admin",

admin:req.user

});

}

);

module.exports = router;