const express = require('express');
const router = express.Router();
const UserModelPath = require('../models/UsersModels');

router.post('/user/signup', async (req, res) => {

    const user = new UserModelPath({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (er) {
        res.status(400).json({message: er});
    }
});

// Log in

router.post('/user/login', async (req, res) => {

    const {username, password} = req.body;
    const user = await UserModelPath.findOne({

        username: username,
    })

    if (user.password === password) {
        res.status(200).json({"username": user.username, "password": user.password})
    } else {

        res.status(400).send('Invalid username or Incorrect password');
    }
});

module.exports = router;