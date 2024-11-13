const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Order = require("./Order");
const Product =require('./Product')

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
        productId:{
            type:DataTypes.INTEGER,
            references:{
                model:'product',
                key:'productId'
            }
        }
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

OrderProduct.belongsTo(Product,{
    foreignKey:"productId",
    as:"product",
})

module.exports = Order;