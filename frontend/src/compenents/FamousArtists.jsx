import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const FamousArtists = () => {
    const navigate = useNavigate()
    const { creators } = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-600 md:mx-10'>
            <h1 className='text-3xl font-medium'>Meet the Visionaries: Famous Artists Who Inspire</h1>
            <p className='sm:w-1/3 text-center text-sm'>Explore the stories of renowned artists whose works have shaped art and inspired cultures, from painters to poets, and discover the masterpieces that made them legends</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {creators.slice(0, 3).map((item, index) => (
                    <div onClick={() => {navigate(`/art/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-pink-500' src={item.image} alt='' />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-pink-600'>
                                <p className='w-2 h-2 bg-pink-600 rounded-full'></p> <p>STAR</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>  {item.name} </p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/creators'); scrollTo(0, 0); }} className='bg-primary text-white px-12 py-3 rounded-full mt-10'>more</button>
          
        </div>
    )
}

export default FamousArtists