import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        // saving the user in the database
        const userSaved = await newUser.save();

        // create access token
        const token = await createAccessToken({
            id: userSaved._id,
        });

        res.cookie("token", token);

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //user exists in data base 
        const userFound = await User.findOne({ email });
        //if no exists
        if (!userFound) return res.status(400).json({
            message: "User not found"
        })
        //if exists compare password
        const isMatch = await bcrypt.compare(password, userFound.password);
        //If no match

        if (!isMatch) return res.status(400).json({
            message: "Password incorrect"
        })

        // create access token
        const token = await createAccessToken({
            id: userFound._id,
        });

        res.cookie("token", token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    })
    return res.sendStatus(200)
}


export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({
        message: "User not found"
    })

    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}