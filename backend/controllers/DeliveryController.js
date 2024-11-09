const Customer = require("../models/Customer");
const Delivery = require("../models/Delivery");

async function createDelivery(req, res) {
    try {
        const { deliveryCode, deliveryAddress, deliveryCity, deliveryPostal, deliveryPhone, deliveryEmail, deliveryFName, deliveryLName, deliveryMsg, cusId } = req.body;

        // Validate required fields
        if (!deliveryAddress || !deliveryCity || !deliveryPostal || !deliveryPhone || !deliveryEmail || !deliveryFName || !deliveryLName || !cusId) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Validate customer
        if (cusId) {
            const customer = await Customer.findByPk(cusId);
            if (!customer) {
                return res.status(400).json({ message: 'Invalid customer ID' });
            }
        }

        const newDelivery = await Delivery.create({
            deliveryCode,
            deliveryAddress,
            deliveryCity,
            deliveryPostal,
            deliveryPhone,
            deliveryEmail,
            deliveryFName,
            deliveryLName,
            deliveryMsg,
            deliveryStatus: "Pending",
            customer_cusId: cusId
        });

        const deliveryWithCustomer = await Delivery.findByPk(newDelivery.deliveryId, {
            include: [{
                model: Customer,
                as: 'customer'
            }]
        });

        res.status(201).json(deliveryWithCustomer);

    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error.message}` }); ෆ
    }
}

// Get all delivery
async function getAllDelivery(req, res) {
    try {
        const delivery = await Delivery.findAll();
        res.status(200).json(delivery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single delivery by ID
const getDeliveryById = async (req, res) => {
    try {
        const { id } = req.params;
        const delivery = await Delivery.findByPk(id);
        if (!delivery) {
            return res.status(404).json({ message: "Delivery not found" });
        }
        res.status(200).json(delivery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a delivery
async function updatedDelivery(req, res) {
    try {
        const { id } = req.params;

        const { deliveryCode, deliveryAddress, deliveryCity, deliveryPostal, deliveryPhone, deliveryEmail, deliveryFName, deliveryLName, deliveryStatus, deliveryMsg, cusId } = req.body;

        // Validate customer
        if (cusId) {
            const customer = await Customer.findByPk(cusId);
            if (!customer) {
                return res.status(400).json({ message: 'Invalid customer ID' });
            }
        }

        const delivery = await Delivery.findByPk(id);
        if (!delivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }

        await delivery.update({
            deliveryCode,
            deliveryAddress,
            deliveryCity,
            deliveryPostal,
            deliveryPhone,
            deliveryEmail,
            deliveryFName,
            deliveryLName,
            deliveryMsg,
            deliveryStatus,
            customer_cusId: cusId
        });

        const updatedDelivery = await Delivery.findByPk(id, {
            include: [{ model: Customer, as: 'customer' }]
        });

        res.status(200).json(updatedDelivery);
    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error.message}` });
    }
};

// Delete a delivery
async function deleteDelivery(req, res) {
    try {
        const { id } = req.params;
        const delivery = await Delivery.findByPk(id);
        if (!delivery) {
            return res.status(404).json({ message: "Delivery not found" });
        }
        await delivery.destroy();
        res.status(200).json({ message: "Delivery deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createDelivery,
    getAllDelivery,
    getDeliveryById,
    updatedDelivery,
    deleteDelivery,
}