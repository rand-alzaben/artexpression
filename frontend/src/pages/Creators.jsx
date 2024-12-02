import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Creators = () => {
  const { speciality } = useParams()
  const [filterCreator, setFilterCreator] = useState([])
  const navigate = useNavigate()
  const { creators } = useContext(AppContext)


  const applyFilter = () => {
    if (speciality) {
      setFilterCreator(creators.filter(creator => creator.speciality === speciality))
    } else {
      setFilterCreator(creators)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [creators, speciality])

  return (
    <div>
      <p className='text-gray-600'>Discover each artist's unique specialty.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality === 'Photographer' ? navigate('/creators') : navigate('/creators/Photographer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Photographer" ? "bg-indigo-100 text-black" : ""}`}>Photographer </p>
          <p onClick={() => speciality === 'Painter' ? navigate('/creators') : navigate('/creators/Painter')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Painter" ? "bg-indigo-100 text-black" : ""}`}>Painter</p>
          <p onClick={() => speciality === 'Poet' ? navigate('/creators') : navigate('/creators/Poet')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Poet" ? "bg-indigo-100 text-black" : ""}`}>Poet</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterCreator.map((item, index) => (
              <div onClick={() => navigate(`/art/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-pink-500' src={item.image} alt='' />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-pink-600'>
                    <p className='w-2 h-2 bg-pink-600 rounded-full'></p> <p>STAR</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>  {item.name} </p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Creators