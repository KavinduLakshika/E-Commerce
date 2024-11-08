const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const DeliveryHasOrder = sequelize.define(
    "DeliveryHasOrder",
    {
        delivery_deliveryId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        order_orderId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    },
    {
        tableName: 'delivery_has_order',
        timestamps: false
    }
);

module.exports = DeliveryHasOrder;