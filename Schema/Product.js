const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        sku: {
            type: String,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "productCategory",
            validate: {
                validator: async function (value) {
                    const category = await mongoose.model("productCategory").findById(value);
                    return !!category;
                },
                message: "Category does not exist",
            },
        },
        inventory: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "productInventory",
        },
        discount: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "productDiscount",
        },
        deletedAt:{
            type:Date
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);



module.exports = mongoose.model('product', productSchema);
