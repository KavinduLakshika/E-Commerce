import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import CardList from "../../../Components/Card/CardList";

function All() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
       fetchMenProducts();
   }, []);

   const fetchMenProducts = async () => {
       try {
           const response = await axios.get(`${config.BASE_URL}/products`);
           const formattedProducts = response.data.map(product => ({
               prodName: product.productName,
               prodPrice: product.productPrice,
               images: [product.productImage],
               color: JSON.parse(product.productColor),
               availableSizes: JSON.parse(product.productSize),
               description: product.productDescription,
               maxQuantity: product.productQty,
           }));
           setProducts(formattedProducts);
           setLoading(false);
       } catch (err) {
           setError('Failed to fetch men\'s products');
           setLoading(false);
       }
   };

   return (
       <div>
           {loading ? (
               <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                   <div className="spinner-border text-primary" role="status">
                       <span className="visually-hidden">Loading...</span>
                   </div>
               </div>
           ) : (
               <CardList
                   data={products}
                   pageName='All'
               />
           )}
       </div>
   )
}

export default All;