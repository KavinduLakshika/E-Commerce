import CardList from "../../../Components/Card/CardList";
import '../../Mens/Mens.css';
import prod from '../../../assets/prod.webp';
import prod2 from '../../../assets/prod 2.webp';
import prod3 from '../../../assets/prod3.webp';

function InnerWear() {
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
        <div>
            <CardList
                data={sampleData}
                pageName='Inner wear'
            />
        </div>
    )
}

export default InnerWear