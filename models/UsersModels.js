const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        primaryKey: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    }
});

const UsersModel = mongoose.model('user', userSchema);
module.exports = UsersModel;

