import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Added to navigate to creator page
import { AppContext } from '../context/AppContext';

const RelatedCreators = ({ creatorId }) => {
    const navigate = useNavigate(); // Use navigate for redirection
    const { creators } = useContext(AppContext); // Access creators from context
    const [relCreator, setRelCreators] = useState([]); // State to hold all creators except the current one

    // UseEffect hook to update related creators whenever the creators list or creatorId changes
    useEffect(() => {
        if (creators.length > 0) {
            // Filter the creators to exclude the current creator based on creatorId
            const related = creators.filter(creator => creator._id !== creatorId);
            setRelCreators(related); // Set the filtered creators in the state
        }
    }, [creators, creatorId]);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-600 md:mx-10'>
            <h1 className='text-3xl font-medium'>Related Creators</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Discover more creators whose works inspire and connect with diverse artistic expressions.
            </p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relCreator.slice(0, 5).map((creator, index) => (
                    <div
                        onClick={() => { navigate(`/art/${creator._id}`); scrollTo(0, 0) }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        key={index}
                    >
                        <img className='bg-pink-500' src={creator.image} alt={creator.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-pink-600'>
                                <p className='w-2 h-2 bg-pink-600 rounded-full'></p> <p>STAR</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{creator.name}</p>
                            <p className='text-gray-600 text-sm'>{creator.speciality || creator.about}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { navigate('/creators'); scrollTo(0, 0); }}
                className='bg-primary text-white px-12 py-3 rounded-full mt-10'
            >
                More
            </button>
        </div>
    );
};

export default RelatedCreators;