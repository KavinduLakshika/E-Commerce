const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./dbConfig.js");
const path = require('path');

//controllers
const CustomerController = require('./controllers/CustomerController.js');
const AuthController = require("./controllers/Auth/Auth.js");
const ProductController = require("./controllers/ProductController.js");
const CategoryController = require("./controllers/CategoryController.js");
const DeliveryController = require("./controllers/DeliveryController.js");
const UserController = require("./controllers/UserController.js");

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
app.get('/updateProfile', CustomerController.updateProfile);
app.get('/customers', CustomerController.getAllCustomers);
app.get('/customer/:id', CustomerController.getCustomer);
app.put('/changePassword', CustomerController.changePassword);
app.post('/changePassword', CustomerController.userChangePassword);

//Auth Routes
app.post('/sendRecoveryOTP', AuthController.sendRecoveryOTP);
app.post('/resendOtp', AuthController.resendOTP);
app.post('/verify', AuthController.verifyOTP);

//Product Routes
app.post("/createProduct", ProductController.createProduct);
app.get("/products", ProductController.getAllProducts);
app.get("/product/:id", ProductController.geByProductId);
app.put("/product/:id", ProductController.updateProduct);
app.delete("/product/:id", ProductController.deleteProduct);

//Category Routes
app.post("/createCategory", CategoryController.createCategory);
app.get("/categories", CategoryController.getAllCategories);
app.get("/category/:id", CategoryController.getAllCategories);
app.put("/category/:id", CategoryController.updateCategory);
app.delete("/category/:id", CategoryController.deleteCustomer);

//Delivery Routes
app.post("/delivery", DeliveryController.createDelivery);
app.get("/deliveries", DeliveryController.getAllDelivery);
app.get("/delivery/:id", DeliveryController.getDeliveryById);
app.put("/delivery/:id", DeliveryController.updatedDelivery);
app.delete("/delivery/:id", DeliveryController.deleteDelivery);

//User Routes
app.post("/user", UserController.createUser);
app.get("/users", UserController.getAllUsers);
app.get("/user/:id", UserController.getUserById);
app.delete("/user/:id", UserController.deleteUser);
app.post("/userLogin", UserController.userLogin);

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