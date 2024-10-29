import Card from "./Components/Card/card";
import prod from "./assets/prod.jpg";
function App() {
  return (
    <div>
      <Card
        image={prod}
        prodName={"Ruvi & Kani"}
        prodPrice={1000}
      />
    </div>
  )
}

export default App
