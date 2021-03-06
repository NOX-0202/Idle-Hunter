const mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);

