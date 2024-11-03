import React from 'react'
import Sidebar from '../../../Components/SideBar/SideBar'
import Table from '../../../Components/Table/Table'

const List = () => {

  const columns = ["ID", "Products"];
  const data = ["ID", "Products"];
  const btnName = 'Add New Product';

  const title = 'Product';
  const invoice = 'Product.pdf';

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
        />
      </div>

    </div>
  )
}

export default List