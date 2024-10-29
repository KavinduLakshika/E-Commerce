import { useEffect, useState } from 'react';
import Card from './card';

const CardList = ({ data, onAddToCart, onAddToWishlist }) => {
    const [cardsData, setCardsData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        setCardsData(data);
    }, [data]);

    const totalPages = Math.ceil(cardsData.length / itemsPerPage);
    const currentItems = cardsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container-fluid p-2">
            <div className="row">
                {currentItems.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <Card
                            image={item.image}
                            prodName={item.prodName}
                            prodPrice={item.prodPrice}
                            availableSizes={item.availableSizes}
                            onAddToCart={() => onAddToCart(item)}
                            onAddToWishlist={() => onAddToWishlist(item)}
                        />
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="row mt-2 justify-content-center">
                    <div className="col-md-12">
                        <ul className="pagination justify-content-center">
                            {/* Previous Button */}
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardList;
