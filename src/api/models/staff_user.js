const mongoose = require('mongoose');
const staffUserSchema = new mongoose.Schema({
    provider: {
        type: String,
    },
    role: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: String,
        default: Date.now
    }
});


module.exports = mongoose.model('user', staffUserSchema);
