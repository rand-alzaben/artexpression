import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets.js'

const Dashboard = () => {


const {aToken, getDashData, dashData} = useContext(AdminContext)

useEffect(()=>{
if (aToken) {
  getDashData()
}
}, [aToken])


return dashData && (
  <div className='m-5'>
    <div className='flex flex-wrap gap-6'> {/* Increased gap between sections */}
      <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded border-2 border-gray-100 cursor-pointer hover:scale-110 transition-all'>
        <img className='w-16 h-16' src={assets.creator_icon} alt="" /> {/* Enlarged image */}
        <div>
          <p className='text-2xl font-bold text-gray-600'>{dashData.creators}</p> {/* Larger font */}
          <p className='text-lg text-gray-400'>Creators</p> {/* Larger subtext */}
        </div>
      </div>

      <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded border-2 border-gray-100 cursor-pointer hover:scale-110 transition-all'>
        <img className='w-16 h-16' src={assets.artworks_icon} alt="" /> {/* Enlarged image */}
        <div>
          <p className='text-2xl font-bold text-gray-600'>{dashData.artworks}</p> {/* Larger font */}
          <p className='text-lg text-gray-400'>Artworks</p> {/* Larger subtext */}
        </div>
      </div>
      
      <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded border-2 border-gray-100 cursor-pointer hover:scale-110 transition-all'>
        <img className='w-16 h-16' src={assets.aesthete_icon } alt="" /> {/* Enlarged image */}
        <div>
          <p className='text-2xl font-bold text-gray-600'>{dashData.aesthete}</p> {/* Larger font */}
          <p className='text-lg text-gray-400'>Aesthete</p> {/* Larger subtext */}
        </div>
      </div>
    </div>
  </div>
)
}

export default Dashboard
