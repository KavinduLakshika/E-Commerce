import Card from "./Components/Card/card";
import prod from './assets/prod.jpg';

function App() {
  return (
    <div>
      <Card
        image={prod}
        prodName="Buddika"
        prodPrice="180"
      />
    </div>
  )
}

export default App
