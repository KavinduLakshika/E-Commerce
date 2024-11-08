const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const OrderProductHasProduct = sequelize.define(
    "OrderProductHasProduct",
    {
        orderProduct_orderProductId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        product_productId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    },
    {
        tableName: 'orderProduct_has_product',
        timestamps: false
    }
);

module.exports = OrderProductHasProduct;
