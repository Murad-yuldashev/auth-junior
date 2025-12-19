import express, { Router, RequestHandler } from "express";
import {register, login} from "../controllers/authController";
import {upload} from "../middleware/upload";

const router = express.Router();

// Registration with file upload
router.post('/register', upload.fields([
    { name: 'filePdf', maxCount: 1 },
    { name: 'fileImage', maxCount: 1 }
]) as unknown as RequestHandler, register);

// Login router
router.post('/login', login);

export default router