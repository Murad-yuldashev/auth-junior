import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Simple registration controller
export const register = async (req: Request, res: Response) => {
    try {
        const { username, login, password } = req.body;
        const files = req.files as any;

    //     Check if user exists
        const existingUser = await User.findOne({ login });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

    //     Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

    //     Create new User
        const newUser = new User({
            username,
            login,
            password: hashedPassword,
            pdfFile: files?.filePdf?.[0]?.filename,
            imageFile: files?.fileImage?.[0]?.filename
        })

        await newUser.save();

    //     Generate token
        const token = jwt.sign(
            {userId: newUser._id},
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: newUser._id,
                username: newUser.username,
                login: newUser.login
            }
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

// Simple login controller
export const login = async (req: Request, res: Response) => {
    try {
        const { login, password } = req.body;

    //     Find User
        const user = await User.findOne({ login });
        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

    //     Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

    //     Generate token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                login: user.login
            }
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}








