const Product = require("../models/Product");
const Category = require("../models/Category");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Image upload setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '..', 'uploads', 'product');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const productName = req.body.productName || 'product';
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        const safeProductName = productName.replace(/[^a-zA-Z0-9]/g, '_');
        cb(null, `${safeProductName}_${timestamp}${ext}`);
    }
});

const upload = multer({ storage: storage }).single('productImage');


async function createProduct(req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: 'Image upload failed' });
        } else if (err) {
            return res.status(500).json({ error: 'Unknown error: Image upload failed' });
        }
        try {
            const { productName, productPrice, productQty, productSize, productColor, productDescription, productStatus, catId } = req.body;

            // Validate required fields
            if (!productName || !productPrice || !productQty || !productSize || !productColor) {
                return res.status(400).json({ error: "All fields are required." });
            }

            // Validate category
            if (catId) {
                const category = await Category.findByPk(catId);
                if (!category) {
                    return res.status(400).json({ message: 'Invalid category ID' });
                }
            }

            let productImage = null;
            if (req.file) {
                productImage = `${req.protocol}://${req.get('host')}/uploads/product/${req.file.filename}`;
            }

            const newProduct = await Product.create({
                productName,
                productPrice,
                productQty,
                productSize,
                productColor,
                productDescription,
                productImage,
                productStatus,
                category_catId: catId,
            });

            const productWithCategory = await Product.findByPk(newProduct.productId, {
                include: [{
                    model: Category,
                    as: 'category'
                }]
            });

            res.status(201).json(productWithCategory);

        } catch {
            res.status(500).json({ error: `An error occurred: ${error.message}` });
        }
    });
};

// Get all product
async function getAllProducts(req, res) {
    try {
        const product = await Product.findAll();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single product by ID
const geByProductId = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
async function updateProduct(req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: 'Image upload failed' });
        } else if (err) {
            return res.status(500).json({ error: 'Unknown error: Image upload failed' });
        }

        try {
            const { id } = req.params;

            const { productName, productPrice, productQty, productSize, productColor, productDescription, productStatus, catId } = req.body;

            // Validate category
            if (catId) {
                const category = await Category.findByPk(catId);
                if (!category) {
                    return res.status(400).json({ message: 'Invalid category ID' });
                }
            }

            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            let productImage = product.productImage;
            if (req.file) {
                const oldImagePath = productImage
                    ? path.join(__dirname, '..', 'uploads', 'products', path.basename(productImage))
                    : null;

                if (oldImagePath && fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }

                productImage = `${req.protocol}://${req.get('host')}/uploads/products/${req.file.filename}`;
            }

            await product.update({
                productName,
                productPrice,
                productQty,
                productSize,
                productColor,
                productDescription,
                productImage,
                productStatus,
                category_catId: catId,
            });

            const updatedProduct = await Product.findByPk(id, {
                include: [{ model: Category, as: 'category' }]
            });

            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ error: `An error occurred: ${error.message}` });
        }
    });
};

// Delete a product
async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const productImagePath = product.productImage
            ? path.join(__dirname, '..', 'uploads', 'products', path.basename(product.productImage))
            : null;

        if (productImagePath && fs.existsSync(productImagePath)) {
            fs.unlinkSync(productImagePath);
        }

        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error.message}` });
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    geByProductId,
    updateProduct,
    deleteProduct
}