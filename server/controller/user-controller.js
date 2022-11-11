import User from "../model/userSchema.js";

export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json({ message: 'User already exists' });
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: user });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

export const userLogIn = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        let user = await User.findOne({ username: username, password: password });
        if (user) {
            res.status(200).json({ message: user });
        } else {
            res.status(401).json({ message: user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};