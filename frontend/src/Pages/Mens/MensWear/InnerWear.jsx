import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from "../../../Components/Card/CardList";
import prod from '../../../assets/prod.webp';
import '../../Mens/Mens.css';

function InnerWear() {

    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Inner wear');

    const handleCategoryClick = (category, path) => {
        setActiveCategory(category);
        navigate(path);
    };

    const sampleData = [
        {
            prodName: "Product 1",
            prodPrice: 1000,
            image: prod,
            color: "red",
            availableSizes: ["S", "M", "L", "XL", "2XL", "3XL"]
        },
        {
            prodName: "Product 2",
            prodPrice: 2000,
            image: prod,
            color: "blue",
            availableSizes: ['S', 'M', 'L'],
        },
        {
            prodName: "Product 2",
            prodPrice: 2500,
            image: prod,
            color: "blue",
            availableSizes: ['S', 'M', 'L'],
        },
        {
            prodName: "Product 2",
            prodPrice: 3000,
            image: prod,
            color: "blue",
            availableSizes: ['S', 'M', 'L'],
        },
    ];

    return (
        <div className="p-4">
            <div className="text-center">
                <div className="d-flex justify-content-center cat">
                    <span
                        onClick={() => handleCategoryClick('All', '/men')}
                        className={`cat-link ${activeCategory === 'All' ? 'active' : ''}`}
                    >
                        All
                    </span>
                    <span
                        onClick={() => handleCategoryClick("Men's Formal wear", '/formalwear')}
                        className={`cat-link ${activeCategory === "Formal wear" ? 'active' : ''}`}
                    >
                        Men’s Formal wear
                    </span>
                    <span
                        onClick={() => handleCategoryClick("Men's Casual Wear", '/casualWear')}
                        className={`cat-link ${activeCategory === "Casual Wear" ? 'active' : ''}`}
                    >
                        Men’s Casual Wear
                    </span>
                    <span
                        onClick={() => handleCategoryClick("Men's Active wear", '/activeWear')}
                        className={`cat-link ${activeCategory === "Active wear" ? 'active' : ''}`}
                    >
                        Men’s Active wear
                    </span>
                    <span
                        onClick={() => handleCategoryClick("Men's Inner wear", '/innerWear')}
                        className={`cat-link ${activeCategory === "Inner wear" ? 'active' : ''}`}
                    >
                        Men’s Inner wear
                    </span>
                    <span
                        onClick={() => handleCategoryClick("Men's Accessories", '/accessories')}
                        className={`cat-link ${activeCategory === "Accessories" ? 'active' : ''}`}
                    >
                        Men’s Accessories
                    </span>
                </div>
            </div>

            <div>
                <CardList
                    data={sampleData}
                    pageName='Inner wear'
                />
            </div>
        </div>
    )
}

export default InnerWear