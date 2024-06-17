import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

//Signup
router.post("/signup", signup);

//Login
router.post("/login", login);

//Logout
router.post("/logout", logout);

export default router;