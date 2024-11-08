const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Product = require("./Product");
const Customer = require("./Customer");

const Order = sequelize.define(
    "Order",
    {
        orderId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderDiscount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        orderPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        orderShippingFee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        product_productId: {
            type: DataTypes.INTEGER,
            references: {
                model: "product",
                key: "productId",
            },
        },
        customer_cusId: {
            type: DataTypes.INTEGER,
            references: {
                model: "customer",
                key: "cusId",
            },
        },
    },
    {
        tableName: "order",
        timestamps: false,
    }
);

Order.belongsTo(Product, {
    foreignKey: "product_productId",
    as: "product",
});
Order.belongsTo(Customer, {
    foreignKey: "customer_cusId",
    as: "customer",
});

module.exports = Order;
