const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        discount_percent: {
            type: Number, // Corrected type
            required: true
        },
        active: {
            type: Boolean,
            required: true,
        },
        deletedAt: {
            type: Date
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);



module.exports = mongoose.model('productDiscount', discountSchema);
