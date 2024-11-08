const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const Customer = sequelize.define("Customer", {
    cusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cusName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cusEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cusPw: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cusGender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cusPhone1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cusPhone2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cusCountry: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cusDob: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    cusImg: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cusStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Active',
    },
    loginType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "customer",
    timestamps: false,
});

module.exports = Customer;