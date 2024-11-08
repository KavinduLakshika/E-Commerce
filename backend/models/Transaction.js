const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Order = require("./Order");

const Transaction = sequelize.define(
    "Transaction",
    {
        transactionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        transactionMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transactionTotalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        transactionDiscount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        transactionDate: {
            type: DataTypes.DATE,
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
        tableName: "transaction",
        timestamps: false,
    }
);
Transaction.belongsTo(Order, {
    foreignKey: "order_orderId",
    as: "order",
});

module.exports = Transaction;
