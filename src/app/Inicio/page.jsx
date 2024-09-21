import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

const Page = () => {
  return (
    <div className="app-container">
      
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Page