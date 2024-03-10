const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            required: true
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



module.exports = mongoose.model('productInventory', inventorySchema);
