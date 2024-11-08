const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Category = require("./Category");

const Product = sequelize.define(
    "Product",
    {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        productQty: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        productSize: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        productImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        productStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "In stock",
        },
        category_catId: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "catId",
            },
        },
    },
    {
        tableName: "product",
        timestamps: false,
    }
);

Product.belongsTo(Category, {
    foreignKey: "category_catId",
    as: "category",
});


module.exports = Product;
