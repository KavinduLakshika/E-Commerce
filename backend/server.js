const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./dbConfig.js");
const path = require('path');

//controllers
const CustomerController = require('./controllers/CustomerController.js');
const AuthController = require("./controllers/Auth/Auth.js");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//customer routes
app.post('/cusLogin', CustomerController.cusLogin);
app.post('/socialSign', CustomerController.socialSignIn);
app.post('/register', CustomerController.register);
app.post('/updateProfile', CustomerController.updateProfile);
app.post('/customers', CustomerController.getAllCustomers);
app.post('/customer/:id', CustomerController.getCustomer);
app.post('/changePassword', CustomerController.changePassword);

// Auth Routes
app.post('/sendRecoveryOTP', AuthController.sendRecoveryOTP);
app.post('/resendOtp', AuthController.resendOTP);
app.post('/verify', AuthController.verifyOTP);


// Sync the database
sequelize
    .sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((err) => {
        console.error("Error synchronizing database:", err);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});