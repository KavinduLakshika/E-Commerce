/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const CardList = ({
    data,
    pageName,
    itemsPerPage = 20,
    showBtn = true,
    showFilters = true,
    showColor = true,
    showSort = true,
    showSize = true,
    showProdDetails = true,
    showName = true,
    showPrice = true,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [sortOption, setSortOption] = useState('default');
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
    const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleQuickAdd = (product) => {
        navigate('/product', { state: { product } });
    };
    
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

    const handleSortChange = (option) => {
        setSortOption(option);
        setSortDropdownOpen(false);
    };

    const toggleSortDropdown = () => {
        setSortDropdownOpen(!sortDropdownOpen);
        setColorDropdownOpen(false);
        setSizeDropdownOpen(false);
    };

    const toggleColorDropdown = () => {
        setColorDropdownOpen(!colorDropdownOpen);
        setSortDropdownOpen(false);
        setSizeDropdownOpen(false);
    };

    const toggleSizeDropdown = () => {
        setSizeDropdownOpen(!sizeDropdownOpen);
        setSortDropdownOpen(false);
        setColorDropdownOpen(false);
    };

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
                <div className="col-md-9 d-flex justify-content-end sort">
                    {showSort && (
                        <div className="sort-dropdown">
                            <button
                                className="sort-button"
                                onClick={toggleSortDropdown}
                            >
                                Sort By {sortOption !== 'default' && `: ${sortOption}`}
                                <span className={`arrow ${sortDropdownOpen ? 'up' : 'down'}`}></span>
                            </button>
                            {sortDropdownOpen && (
                                <ul className="sort-options">
                                    <li onClick={() => handleSortChange('default')}>Default</li>
                                    <li onClick={() => handleSortChange('name')}>Name</li>
                                    <li onClick={() => handleSortChange('priceAsc')}>Price: Low to High</li>
                                    <li onClick={() => handleSortChange('priceDesc')}>Price: High to Low</li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <hr />

            <div className="row mt-5">
                <div className="col-md-3">
                    {showFilters && (
                        <div className='filter'>
                            <h3>Filters</h3>
                            {showColor && (
                                <div className="dropdown mb-3">
                                    <button
                                        className="btn bg-white dropdown-toggle w-100"
                                        type="button"
                                        onClick={toggleColorDropdown}
                                    >
                                        {selectedColor ? `Color: ${selectedColor.toUpperCase()}` : 'Filter by Colors'}
                                    </button>

                                    {colorDropdownOpen && (
                                        <ul className="color-filter dropdown-menu show w-100">
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
                                                    </button>
                                                ))}
                                            </div>
                                        </ul>
                                    )}
                                    <hr />
                                </div>
                            )}

                            {showSize && (
                                <div className="dropdown mb-3">
                                    <button
                                        className="btn bg-white dropdown-toggle w-100"
                                        type="button"
                                        onClick={toggleSizeDropdown}
                                    >
                                        {selectedSize ? `Size: ${selectedSize}` : 'Select Size'}
                                    </button>
                                    {sizeDropdownOpen && (
                                        <ul className="size-filter dropdown-menu show w-100">
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
                            <hr />
                        </div>
                    )}
                </div>

                <div className="col-md-9">
                    <div className="row">
                        {currentItems.map((item, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div
                                    className="product-card"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={hoveredIndex === index ? item.images[1] : item.images[0]}
                                        className="product-card-img"
                                        alt={item.prodName}
                                    />
                                    {showProdDetails && (
                                        <div className="product-details mt-5">
                                            {showBtn && (
                                                <button className="quick-add-button" onClick={() => handleQuickAdd(item)}>
                                                    <i className="bi bi-plus-lg mx-2"></i>
                                                    QUICK ADD
                                                </button>
                                            )}
                                            {showName && (
                                                <div className="product-name">{item.prodName}</div>
                                            )}
                                            {showPrice && (
                                                <div className="product-price">LKR {item.prodPrice}</div>
                                            )}
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
