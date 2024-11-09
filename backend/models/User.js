const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const User = sequelize.define(
    "User",
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userFullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userTP: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userSecondTP: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userNic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userImg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'user',
        timestamps: false,
    }
);
module.exports = User;