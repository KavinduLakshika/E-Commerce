import CardList from "../../Components/Card/CardList";
import prod from '../../assets/prod.webp';
import './Mens.css';

function Mens() {
    const sampleData = [
        {
            prodName: 'Product 1',
            prodPrice: 1000,
            image: prod,
            availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
        },
        {
            prodName: 'Product 2',
            prodPrice: 1500,
            image: prod,
            availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
        },
        {
            prodName: 'Product 3',
            prodPrice: 1500,
            image: prod,
            availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
        },
        {
            prodName: 'Product 4',
            prodPrice: 1500,
            image: prod,
            availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
        },
    ];

    const handleAddToCart = (item) => {
        console.log('Added to cart:', item);
    };

    const handleAddToWishlist = (item) => {
        console.log('Added to wishlist:', item);
    };

    return (
        <div className="p-4">
            <h1> Men&apos;s Fashion </h1>
            <div className="text-center">
                <blockquote className="blockquote">
                    <p className="para">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid iusto assumenda
                        numquam, qui beatae obcaecati, rerum quo ipsam reprehenderit id ex dolore at veniam tenetur
                        neque quis ipsum odio!
                    </p>
                </blockquote>

                <div className="d-flex justify-content-around my-3">
                    <a href="#formalwear" className="nav-link">Men’s Formalwear</a>
                    <a href="#casualwear" className="nav-link">Men’s Casual Wear</a>
                    <a href="#activewear" className="nav-link">Men’s Activewear</a>
                    <a href="#innerwear" className="nav-link">Men’s Innerwear</a>
                    <a href="#accessories" className="nav-link">Men’s Accessories</a>
                </div>

            </div>

            <CardList
                data={sampleData}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                showIcons={true}
                showProdDetails={true}
                showBtn={true}
                showName={true}
                showPrice={true}
                showSizeOptions={true}
            />
        </div>
    );
}

export default Mens;
