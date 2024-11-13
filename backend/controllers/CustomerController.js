const Customer = require("../models/Customer");
const { generateOTP, sendEmail } = require('./Auth/Common');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const secretKey = process.env.SECRET_KEY;
const slotRounds = 10;

// Image upload setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '..', 'uploads', 'customer');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const cusName = req.body.cusName || 'customer';
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        const safeCusName = cusName.replace(/[^a-zA-Z0-9]/g, '_');
        cb(null, `${safeCusName}_${timestamp}${ext}`);
    }
});

const upload = multer({ storage: storage }).single('cusImg');

// Customer Login
async function cusLogin(req, res) {
    try {
        const { cusEmail, cusPw } = req.body;

        if (!cusEmail || !cusPw) {
            return res.status(400).json({
                message_type: "error",
                message: "Email and password are required."
            });
        }

        const customer = await Customer.findOne({ where: { cusEmail } });

        if (!customer) {
            return res.status(404).json({
                message_type: "error",
                message: "Incorrect email or password."
            });
        }

        const passwordMatch = await bcrypt.compare(cusPw, customer.cusPw);
        if (!passwordMatch) {
            return res.status(401).json({
                message_type: "error",
                message: "Incorrect email or password."
            });
        }

        if (customer.cusStatus == "inActive") {
            return res.status(403).json({
                message: "Your account is inactive. Please contact support."
            });
        }

        const token = jwt.sign(
            { cusId: customer.cusId, cusEmail: customer.cusEmail },
            secretKey,
            { expiresIn: '6h' }
        );

        return res.status(200).json({
            message_type: "success",
            message: "User signed in successfully.",
            token,
            user: {
                id: customer.cusId,
                cusEmail: customer.cusEmail,
                cusStatus: customer.cusStatus,
                cusName: customer.cusName
            }
        });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            message: `An error occurred: ${error.message}`
        });
    }
};

// Social Sign-In
async function socialSignIn(req, res) {
    try {
        const { cusName, cusEmail, social, cusImg } = req.body;
        console.log("Received social sign-in data:", { cusName, cusEmail, social, cusImg });

        const customer = await Customer.findOne({ where: { cusEmail } });

        if (!customer) {
            const loginType = social;
            const cusStatus = "Active";

            const newCustomer = await Customer.create({
                cusName,
                cusEmail,
                loginType,
                cusStatus,
                cusImg
            });

            const token = jwt.sign({ cusId: newCustomer.cusEmail }, secretKey, { expiresIn: '12h' });

            return res.json({
                message_type: "success",
                message: "User registered successfully.",
                cusEmail: newCustomer.cusEmail,
                cusName: newCustomer.cusName,
                cusStatus: newCustomer.cusStatus,
                cusImg: newCustomer.cusImg,
                token
            });
        } else {
            if (customer.loginType === social) {
                const token = jwt.sign({ cusId: customer.cusEmail }, secretKey, { expiresIn: '12h' });

                return res.json({
                    message_type: "success",
                    message: "User signed in successfully.",
                    cusEmail: customer.cusEmail,
                    cusName: customer.cusName,
                    cusStatus: customer.cusStatus,
                    cusImg: customer.cusImg,
                    token
                });
            } else {
                return res.status(400).json({
                    message_type: "error",
                    message: "User with this email already exists. Try another sign-in method."
                });
            }
        }
    } catch (error) {
        console.error("Error occurred during social sign-in:", error);
        return res.status(500).json({
            message_type: "error",
            message: "Internal server error. Please try again."
        });
    }
}

// Register New Customer
async function register(req, res) {
    try {
        const { cusName, cusEmail, cusPw } = req.body;

        // Validate required fields
        if (!cusName || !cusEmail || !cusPw) {
            return res.status(400).json({
                message: "Name, email, and password are required."
            });
        }

        // Check if customer already exists
        const existingCustomer = await Customer.findOne({ where: { cusEmail } });
        if (existingCustomer) {
            return res.status(409).json({
                message: "User with this email already exists."
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(cusPw, slotRounds);
        const loginType = "email";
        const cusStatus = "Active";

        // Create new customer
        const newCustomer = await Customer.create({
            cusName,
            cusEmail,
            cusPw: hashedPassword,
            loginType,
            cusStatus,
        });

        // Generate JWT token
        const token = jwt.sign({ cusId: newCustomer.cusId }, secretKey, { expiresIn: '6h' });

        // Successful response
        res.status(201).json({
            message_type: "success",
            message: "User registered successfully.",
            cusEmail: newCustomer.cusEmail,
            cusName: newCustomer.cusName,
            cusStatus: newCustomer.cusStatus,
            token
        });

    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({
            message: `An error occurred: ${error.message}`
        });
    }
}

// Update Profile with Additional Details
async function updateProfile(req, res) {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: 'Image upload failed' });
        } else if (err) {
            return res.status(500).json({ error: 'Unknown error: Image upload failed' });
        }

        try {
            const { cusId, cusGender, cusPhone1, cusPhone2, cusCountry, cusDob } = req.body;

            if (!cusId) {
                return res.status(400).json({ error: "Customer ID is required" });
            }

            let cusImg = null;
            if (req.file) {
                cusImg = `${req.protocol}://${req.get('host')}/uploads/customer/${req.file.filename}`;
            }

            const [updated] = await Customer.update(
                { cusGender, cusPhone1, cusPhone2, cusCountry, cusDob, cusImg },
                { where: { cusId } }
            );

            if (updated === 1) {
                const updatedCustomer = await Customer.findOne({ where: { cusId } });
                res.status(200).json({ message: "Profile updated successfully", customer: updatedCustomer });
            } else {
                res.status(404).json({ error: "Customer not found or no changes made" });
            }
        } catch (error) {
            res.status(500).json({ error: `An error occurred: ${error.message}` });
        }
    });
};

// Get Customer by ID
async function getCustomer(req, res) {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);

        if (customer) {
            return res.status(200).json({ message_type: "success", customer });
        } else {
            return res.status(404).json({ message_type: "error", message: "Customer not found." });
        }
    } catch (error) {
        console.error("Error occurred while fetching customer:", error);
        return res.status(500).json({ message_type: "error", message: error.message });
    }
}

// Get All Customers
async function getAllCustomers(req, res) {
    try {
        const customers = await Customer.findAll();
        return res.status(200).json({ message_type: "success", customers });
    } catch (error) {
        console.error("Error occurred while fetching all customers:", error);
        return res.status(500).json({ message_type: "error", message: error.message });
    }
}

async function changePassword(req, res) {
    try {
        const { cusEmail, cusPw } = req.body;

        // Check if customer exists
        const customer = await Customer.findOne({ where: { cusEmail } });

        if (!customer) {
            return res.status(404).json({
                message_type: "error",
                message: "User not found."
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(cusPw, slotRounds);

        // Update the password and reset OTP
        await Customer.update(
            { cusPw: hashedPassword, otp: null },
            { where: { cusEmail } }
        );

        res.json({
            message_type: "success",
            message: "Password updated. Try logging in again."
        });

    } catch (error) {
        console.error("Error occurred while changing password:", error);
        res.status(500).json({
            message_type: "error",
            message: error.message
        });
    }
}

async function userChangePassword(req, res) {
    try {
        const { oldPassword, newPassword, cusEmail } = req.body;

        const customer = await Customer.findOne({ where: { cusEmail } });
        if (!customer) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(oldPassword, customer.cusPw);
        if (!isMatch) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        customer.cusPw = hashedPassword;
        await customer.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    register,
    updateProfile,
    cusLogin,
    socialSignIn,
    getCustomer,
    getAllCustomers,
    changePassword,
    userChangePassword,
};
