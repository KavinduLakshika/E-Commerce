const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const Category = sequelize.define(
    "Category",
    {
        catId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        catName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "category",
        timestamps: false,
    }
);

module.exports = Category;
