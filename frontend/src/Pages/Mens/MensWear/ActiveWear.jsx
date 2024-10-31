import CardList from "../../../Components/Card/CardList";
import prod from '../../../assets/prod.webp';
import '../../Mens/Mens.css';


function ActiveWear() {
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
        <div>
            <CardList
                data={sampleData}
                pageName='Active Wear'
            />
        </div>
    );
}

export default ActiveWear;
