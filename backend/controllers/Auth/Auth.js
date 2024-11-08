const Customer = require("../../models/Customer");
const { generateOTP, sendEmail } = require('./Common');
const jwt = require('jsonwebtoken');

// JWT secret key
const secretKey = 'AbCd';

// Send Recovery OTP
async function sendRecoveryOTP(req, res) {
    try {
        const { cusEmail } = req.body;

        // Find user by email
        const customer = await Customer.findOne({ where: { cusEmail } });

        if (customer) {
            // Generate OTP and update customer record
            const otp = generateOTP();
            await Customer.update({ otp }, { where: { cusEmail } });

            // Send OTP via email
            await sendEmail(cusEmail, "NM Test OTP", `Your OTP: ${otp}`);
            return res.json({
                message_type: "success",
                message: "Check your email for an OTP."
            });
        } else {
            return res.status(404).json({
                message_type: "error",
                message: "User not found."
            });
        }
    } catch (error) {
        console.error("Error occurred while sending recovery OTP:", error);
        return res.status(500).json({
            message_type: "error",
            message: error.message
        });
    }
}

// Resend OTP
async function resendOTP(req, res) {
    try {
        const { cusEmail } = req.body;

        // Find the customer by email
        const customer = await Customer.findOne({ where: { cusEmail } });

        if (customer) {
            const otp = generateOTP();

            // Update the OTP in the database
            await Customer.update({ otp }, { where: { cusEmail } });

            // Send the OTP via email
            await sendEmail(cusEmail, "NM Test OTP", `Your Verification Code: ${otp}`);

            return res.json({
                message_type: "success",
                message: "OTP sent successfully. Check your email."
            });
        } else {
            return res.status(404).json({
                message_type: "error",
                message: "User not found."
            });
        }
    } catch (error) {
        console.error("Error occurred while resending OTP:", error);
        return res.status(500).json({
            message_type: "error",
            message: error.message
        });
    }
}

// Verify OTP for Password Recovery
async function verifyOTP(req, res) {
    try {
        const { cusEmail, otp } = req.body;

        const customer = await Customer.findOne({ where: { cusEmail } });

        if (customer) {
            if (customer.otp === otp) {
                return res.json({
                    message_type: "success",
                    message: "OTP verified. You can change your password now."
                });
            } else {
                return res.status(400).json({
                    message_type: "error",
                    message: "Incorrect OTP. Request a new OTP."
                });
            }
        } else {
            return res.status(404).json({
                message_type: "error",
                message: "User not found."
            });
        }
    } catch (error) {
        console.error("Error occurred while verifying OTP:", error);
        return res.status(500).json({
            message_type: "error",
            message: error.message
        });
    }
}

module.exports = {
    sendRecoveryOTP,
    resendOTP,
    verifyOTP
};
