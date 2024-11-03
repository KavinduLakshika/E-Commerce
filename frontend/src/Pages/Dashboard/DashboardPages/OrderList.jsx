import React from 'react'
import Sidebar from '../../../Components/SideBar/SideBar'
import Table from '../../../Components/Table/Table'

const OrderList = () => {
  const columns = ["ID", "Products"];
  const data = ["ID", "Products"];

  const title = 'Product';
  const invoice = 'Product.pdf';

  return (
    <div className="body" id="body-pd">
      <Sidebar />
      <div className='pt-4'>
      <h1>Order List</h1>
      <Table
        data={data}
        columns={columns}
        showButton={false}
        title={title}
        invoice={invoice}
        showDate={false}
      />
      </div>
    </div>
  )
}

export default OrderList