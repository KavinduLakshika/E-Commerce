import CardList from "../../../Components/Card/CardList";
import prod from '../../../assets/prod.webp';
import prod2 from '../../../assets/prod 2.webp';
import prod3 from '../../../assets/prod3.webp';

function All() {
    const sampleData = [
        {
            prodName: 'Product 1',
            prodPrice: 1500,
            images: [prod, prod2, prod3],
            color: 'red',
            availableSizes: ['S', 'M', 'L'],
            description: 'A comfortable and stylish white t-shirt made from premium cotton.',
            maxQuantity: 10,
        },
        {
            prodName: "Product 2",
            prodPrice: 2000,
            images: [prod, prod2, prod3],
            color: "blue",
            availableSizes: ['S', 'M', 'L'],
            description: 'A comfortable and stylish white t-shirt made from premium cotton.',
            maxQuantity: 10,
        },
        {
            prodName: 'Product 1',
            prodPrice: 1500,
            images: [prod, prod2, prod3],
            color: 'white',
            availableSizes: ['S', 'M', 'L'],
            description: 'A comfortable and stylish white t-shirt made from premium cotton.',
            maxQuantity: 10,
        },
        {
            prodName: "Product 2",
            prodPrice: 2000,
            images: [prod, prod2, prod3],
            color: "blue",
            availableSizes: ['S', 'M', 'L'],
            description: 'A comfortable and stylish white t-shirt made from premium cotton.',
            maxQuantity: 10,
        }
    ];
    return (
        <div>
            <CardList
                data={sampleData}
                pageName='All'
            />
        </div>
    )
}

export default All