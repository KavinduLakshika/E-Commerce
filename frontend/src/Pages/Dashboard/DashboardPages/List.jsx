import React from 'react'
import Sidebar from '../../../Components/SideBar/SideBar'
import Table from '../../../Components/Table/Table'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import config from '../../../config';

const List = () => {
  const columns = ["ID", "Products Name",'type','Qty','Price','colors'];
  const [data, setData] = useState([]);
  const btnName = 'Add New Product';
  const [error, setError] = useState(null);

  const title = 'Product';
  const invoice = 'Product.pdf';

  useEffect(() => {
    fetchProductList();
  },)

  const fetchProductList = async () => {
    try {
      const response = await fetch(`${config.BASE_URL}/products`);
      if (!response.ok) {
        setError(`Failed to fetch product: ${response.status} ${response.statusText}`);
      }
      const product=await response.json();
      const formattedData=product.map(product=>[
        product.productId,
        product.productName,
        product.productDescription,
        product.productQty,
        product.productPrice,
        product.productColor
      ])
      setData(formattedData);
    } catch (error) {

    }
  }

  const navigate = useNavigate();

  const handleAddBtn = () => {
    navigate('/add');
  }

  return (
    <div className="body" id="body-pd">
      <Sidebar />
      <div className="pt-4">
        <h1>List</h1>
        <Table
          data={data}
          columns={columns}
          btnName={btnName}
          title={title}
          invoice={invoice}
          showDate={false}
          onAdd={handleAddBtn}
        />
      </div>

    </div>
  )
}

export default List