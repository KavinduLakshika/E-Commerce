import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from "../../Components/Card/CardList";
import prod from '../../assets/prod.webp';
import './Women.css';

function Women() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

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
        <div className="d-flex justify-content-center category">
          <span
            onClick={() => handleCategoryClick('All', '/men')}
            className={`category-link ${activeCategory === 'All' ? 'active' : ''}`}
          >
            All
          </span>
        </div>
      </div>

      <div>
        <CardList
          data={sampleData}
          pageName='Women'
        />
      </div>
    </div>
  )
}

export default Women