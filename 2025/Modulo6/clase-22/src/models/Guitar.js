const mongoose = require('mongoose');
const guitarSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Guitar = mongoose.model('Guitar', guitarSchema);
module.exports = Guitar; 