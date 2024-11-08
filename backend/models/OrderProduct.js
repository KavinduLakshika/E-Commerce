const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Order = require("./Order");

const OrderProduct = sequelize.define(
    "OrderProduct",
    {
        orderProductId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        TotalAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: "order",
                key: "orderId",
            },
        },
    },
    {
        tableName: "orderProduct",
        timestamps: false,
    }
);

OrderProduct.belongsTo(Order, {
    foreignKey: "order_orderId",
    as: "order",
});

module.exports = Order;