import CardList from "./Components/Card/CardList";
import prod from './assets/prod.jpg';

function App() {

  const products = [
    {
      image: prod,
      prodName: 'Product 1',
      prodPrice: 1500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
    {
      image: prod,
      prodName: 'Product 2',
      prodPrice: 2500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
    {
      image: prod,
      prodName: 'Product 2',
      prodPrice: 2500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
    {
      image: prod,
      prodName: 'Product 2',
      prodPrice: 2500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <CardList
        data={products}
      />
    </div>
  )
}

export default App;