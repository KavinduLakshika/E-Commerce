import React from 'react'
import Sidebar from '../../../Components/SideBar/SideBar'
import Table from '../../../Components/Table/Table'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const columns = ["ID", "Products"];
  const data = ["ID", "Products"];
  const btnName = 'Add New Product';

  const title = 'Product';
  const invoice = 'Product.pdf';

  const navigate=useNavigate();

  const handleAddBtn=()=>{
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