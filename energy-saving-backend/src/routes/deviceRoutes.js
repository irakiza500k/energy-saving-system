const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const deviceController = require("../controllers/deviceController");

/* GET DEVICES */
router.get(
  "/",
  authMiddleware,
  deviceController.getDevices
);

/* ADD DEVICE */
router.post(
  "/",
  authMiddleware,
  deviceController.addDevice
);

/* TOGGLE DEVICE */
router.put(
  "/:id",
  authMiddleware,
  deviceController.toggleDevice
);

/* DELETE DEVICE */
router.delete(
  "/:id",
  authMiddleware,
  deviceController.deleteDevice
);

module.exports = router;