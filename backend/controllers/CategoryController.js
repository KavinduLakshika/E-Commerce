const Category = require("../models/Category");

async function createCategory(req, res) {
    try {
        const { catName } = req.body;

        if (!catName) {
            return res.status(400).json({ error: 'Category name are required' });
        }

        const newCategory = await Category.create({
            catName,
        });

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error.message}` });
    }
};

// Get all category
async function getAllCategories(req, res) {
    try {
        const category = await Category.findAll();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single category by ID
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a category
async function updateCategory(req, res) {
    try {
        const { id } = req.params;
        const {
            catName,
        } = req.body;

        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        await category.update({
            catName
        });

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a category
async function deleteCustomer(req, res) {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await category.destroy();
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCustomer
}