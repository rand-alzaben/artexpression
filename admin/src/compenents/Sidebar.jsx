import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { CreatorContext } from '../context/CreatorContext'

const Sidebar = () => {

const {aToken} = useContext(AdminContext)
const {cToken} = useContext(CreatorContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#ffd2dc] border-r-4 border-primary' : ''}`} to= {'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>DASHBOARD</p>
            </NavLink>

            

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#ffd2dc] border-r-4 border-primary' : ''}`} to= {'/add-creator'}>
                <img src={assets.add_icon} alt="" />
                <p>ADD CREATOR</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#ffd2dc] border-r-4 border-primary' : ''}`} to= {'/creator-list'}>
                <img src={assets.list_icon} alt="" />
                <p>CREATORS LIST</p>
            </NavLink>
            
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#ffd2dc] border-r-4 border-primary' : ''}`} to= {'/art-upload'}>
                <img src={assets.artworks_icon} alt="" />
                <p>Upload Art</p>
            </NavLink>
        </ul>
      }
      {
        cToken && <ul className='text-[#515151] mt-5'>
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#ffd2dc] border-r-4 border-primary' : ''}`} to= {'/creator-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>DASHBOARD</p>
            </NavLink>
          
           
        </ul>
      }
    </div>
  )
}

export default Sidebar
