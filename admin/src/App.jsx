import React, { useContext } from 'react'
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './compenents/Navbar';
import Sidebar from './compenents/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AddCreator from './pages/Admin/AddCreator';
import CreatorsList from './pages/Admin/CreatorsList';
import ArtUpload from './pages/Admin/ArtUpload';
import { CreatorContext } from './context/CreatorContext.jsx';
import CreatorDashboard from './pages/Creator/CreatorDashboard';


const App = () => {
 
  const {aToken} = useContext(AdminContext)
  const {cToken} = useContext(CreatorContext)




  return aToken || cToken ?  (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar />
    <div className='flex items-start'>
      <Sidebar />
      <Routes>
     {   /* Admin Routes */}
        <Route path= '/' element={<></>} />
        <Route path= '/admin-dashboard' element={<Dashboard />} />
        <Route path= '/add-creator' element={<AddCreator />} />
        <Route path= '/creator-list' element={<CreatorsList />} />
        <Route path="/art-upload" element={<ArtUpload />} />
        {   /* Creator Routes */}
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        
        
      </Routes>
    </div>




    </div>
  ) : (
    <>
     <Login />
     <ToastContainer/>
    </>
  )
}

export default App
