import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from "../../Components/Card/CardList";
import './Women.css';
import prod from '../../assets/prod.webp';
import prod2 from '../../assets/prod 2.webp';
import prod3 from '../../assets/prod3.webp';

function Women() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category, path) => {
    setActiveCategory(category);
    navigate(path);
  };

  const sampleData = [
    {
      prodName: 'Product 1',
      prodPrice: 1500,
      images: [prod, prod2, prod3],
      color: 'red',
      availableSizes: ['S', 'M', 'L']
    },
    {
      prodName: "Product 2",
      prodPrice: 2000,
      images: [prod, prod2, prod3],
      color: "blue",
      availableSizes: ['S', 'M', 'L'],
    },
    {
      prodName: 'Product 1',
      prodPrice: 1500,
      images: [prod, prod2, prod3],
      color: 'red',
      availableSizes: ['S', 'M', 'L']
    },
    {
      prodName: "Product 2",
      prodPrice: 2000,
      images: [prod, prod2, prod3],
      color: "blue",
      availableSizes: ['S', 'M', 'L'],
    }
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