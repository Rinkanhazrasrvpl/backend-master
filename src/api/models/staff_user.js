const mongoose = require('mongoose');
const staffUserSchema = new mongoose.Schema({
    provider: {
        type: String,
    },
    roleId: {
        type: String
    },
    email: {
        type: String,
    },
    phone : {
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


module.exports = mongoose.model('user_staff', staffUserSchema);
