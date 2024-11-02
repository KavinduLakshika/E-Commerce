import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Home from '../Home/Home'

const Dashboard = () => {
  return (
    <div className="body" id="body-pd">
      <SideBar />
      <Home />
    </div>
  )
}

export default Dashboard