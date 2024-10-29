import CardList from "../../Components/Card/CardList";
import prod from '../../assets/prod.jpg';

function Mens() {
    const buttonName = 'Add to Cart';

    const sampleData = [
        {
            prodName: 'Product 1',
            prodPrice: 1000,
            image: prod,
            availableSizes: ['S', 'M', 'L'],
            btnName: buttonName,
        },
        {
            prodName: 'Product 2',
            prodPrice: 1500,
            image: prod,
            availableSizes: ['S', 'M', 'L'],
            btnName: buttonName,
        },

    ];

    const handleAddToCart = (item) => {
        console.log('Added to cart:', item);
    };

    const handleAddToWishlist = (item) => {
        console.log('Added to wishlist:', item);
    };

    return (
        <div className="App">
            <h1>Product List</h1>
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
    )
}

export default Mens