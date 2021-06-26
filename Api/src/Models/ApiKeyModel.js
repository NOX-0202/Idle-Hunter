const mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose');

const ApiKeySchema = new mongoose.Schema({

    KEY:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('ApiKeys', ApiKeySchema);

