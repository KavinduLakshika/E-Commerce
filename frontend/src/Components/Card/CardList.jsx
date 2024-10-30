/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react';
import './Card.css'; // Assuming you're using the existing CSS

const CardList = ({
    data,
    pageName,
    itemsPerPage = 20,
    showFilters = true,
    showColor = true,
    showSort = true,
    showSize = true,
    showProdDetails = true,
    showName = true,
    showPrice = true,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('default');
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
    const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const availableColors = useMemo(
        () => [...new Set(data.map((item) => item.color))],
        [data]
    );

    const availableSizes = useMemo(
        () => [...new Set(data.flatMap((item) => item.availableSizes))],
        [data]
    );

    const filteredData = data
        .filter((item) => !selectedColor || item.color === selectedColor)
        .filter((item) => !selectedSize || item.availableSizes.includes(selectedSize))
        .sort((a, b) => {
            if (sortOption === 'name') return a.prodName.localeCompare(b.prodName);
            if (sortOption === 'priceAsc') return a.prodPrice - b.prodPrice;
            if (sortOption === 'priceDesc') return b.prodPrice - a.prodPrice;
            return 0;
        });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleColorDropdown = () => setColorDropdownOpen(!colorDropdownOpen);
    const toggleSizeDropdown = () => setSizeDropdownOpen(!sizeDropdownOpen);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setColorDropdownOpen(false);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setSizeDropdownOpen(false);
    };

    return (
        <div className="container-fluid">
            <div className="row mb-3">
                <hr />
                <div className="col-md-3">
                    <h1 className="pageName">{pageName}</h1>
                </div>
                <div className="col-md-9 d-flex justify-content-end">
                    {showSort && (
                        <select
                            className="form-select sort-select"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="name">Name</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                        </select>
                    )}
                </div>
            </div>
            <hr />

            <div className="row mt-5">
                <div className="col-md-3">
                    {showFilters && (
                        <div>
                            <h3>Filters</h3>
                            {showColor && (
                                <div className="dropdown mb-3">
                                    <button
                                        className="btn btn-outline-secondary dropdown-toggle w-100"
                                        type="button"
                                        onClick={toggleColorDropdown}
                                    >
                                        {selectedColor ? `Color: ${selectedColor.toUpperCase()}` : 'Select Color'}
                                    </button>
                                    {colorDropdownOpen && (
                                        <ul className="dropdown-menu show w-100">
                                            <div className="color-grid">
                                                {availableColors.map((color) => (
                                                    <button
                                                        key={color}
                                                        className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                                                        onClick={() => handleColorChange(color)}
                                                    >
                                                        <span
                                                            className="color-swatch"
                                                            style={{ backgroundColor: color }}
                                                        ></span>
                                                        {color.toUpperCase()}
                                                    </button>
                                                ))}
                                            </div>
                                        </ul>
                                    )}
                                </div>
                            )}


                            <hr />
                            {showSize && (
                                <div className="dropdown mb-3">
                                    <button
                                        className="btn btn-outline-secondary dropdown-toggle w-100"
                                        type="button"
                                        onClick={toggleSizeDropdown}
                                    >
                                        {selectedSize ? `Size: ${selectedSize}` : 'Select Size'}
                                    </button>
                                    {sizeDropdownOpen && (
                                        <ul className="dropdown-menu show w-100">
                                            <div className="size-grid">
                                                {availableSizes.map((size) => (
                                                    <button
                                                        key={size}
                                                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                                        onClick={() => handleSizeChange(size)}
                                                    >
                                                        {size.toUpperCase()}
                                                    </button>
                                                ))}
                                            </div>
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    <hr />
                </div>

                <div className="col-md-9">
                    <div className="row">
                        {currentItems.map((item, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="product-card">
                                    <img
                                        src={item.image}
                                        className="product-card-img"
                                        alt={item.prodName}
                                    />
                                    {showProdDetails && (
                                        <div className="product-details mt-5">
                                            {showName && <div className="product-name">{item.prodName}</div>}
                                            {showPrice && <div className="product-price">LKR {item.prodPrice}</div>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => setCurrentPage(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                <li
                                    className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardList;
