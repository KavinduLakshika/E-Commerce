const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Customer = require("./Customer");

const Delivery = sequelize.define(
    "Delivery",
    {
        deliveryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        deliveryCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryPostal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryFName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryLName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryMsg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Pending",
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
        tableName: 'delivery',
        timestamps: false,
    }
);

Delivery.belongsTo(Customer, {
    foreignKey: "customer_cusId",
    as: "customer",
});

module.exports = Delivery;