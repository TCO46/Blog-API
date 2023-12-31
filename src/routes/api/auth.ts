import bcrypt from "bcryptjs";
import express from "express";
import { body } from "express-validator";
const router = express.Router();

import authController from "../../app/controllers/AuthController";

router.post("/login", authController.login);

router.post(
	"/register",
	body("password").customSanitizer((value) => bcrypt.hash(value, 10)),
	authController.register,
);

export default router;
