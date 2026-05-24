const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getDevices,
  addDevice,
  toggleDevice,
  deleteDevice,
} = require(
  "../controllers/deviceController"
);

router.get(
  "/",
  authMiddleware,
  getDevices
);

router.post(
  "/",
  authMiddleware,
  addDevice
);

router.put(
  "/:id",
  authMiddleware,
  toggleDevice
);

router.delete(
  "/:id",
  authMiddleware,
  deleteDevice
);

module.exports = router;