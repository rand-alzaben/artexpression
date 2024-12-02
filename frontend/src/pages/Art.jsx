import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';  // Import react-modal
import RelatedCreators from '../compenents/RelatedCreators';

const Art = () => {
  const { creatorId } = useParams();
  const { creators } = useContext(AppContext);
  const [creatorInfo, setCreatorInfo] = useState(null);
  const [creatorArtwork, setCreatorArtwork] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedArtwork, setSelectedArtwork] = useState(''); 

  // Function to go to the next image in the carousel
  const nextArtwork = () => {
    const nextIndex = (currentIndex + 1) % creatorArtwork.length;
    setCurrentIndex(nextIndex);
    setSelectedArtwork(creatorArtwork[nextIndex]); 
  };

  // Function to go to the previous image in the carousel
  const prevArtwork = () => {
    const prevIndex = (currentIndex - 1 + creatorArtwork.length) % creatorArtwork.length;
    setCurrentIndex(prevIndex);
    setSelectedArtwork(creatorArtwork[prevIndex]); 
  };

  // Fetch creator info from context (AppContext)
  const fetchCreatorInfo = async () => {
    const creatorInfo = creators.find(creator => creator._id === creatorId);
    setCreatorInfo(creatorInfo);
    
    // Ensure that artworks_uploaded is an array before setting state
    if (creatorInfo && Array.isArray(creatorInfo.artworks_uploaded)) {
      setCreatorArtwork(creatorInfo.artworks_uploaded); 
    } else {
      setCreatorArtwork([]); // Set an empty array if artworks_uploaded is not an array
    }
  };

  // Fetch the creator information when the component is mounted or creatorId/creators change
  useEffect(() => {
    fetchCreatorInfo();
  }, [creators, creatorId]);

  // Modal open function (To display the enlarged image)
  const openModal = (index) => {
    setSelectedArtwork(creatorArtwork[index]); 
    setCurrentIndex(index); 
    setIsModalOpen(true); 
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return creatorInfo && creatorInfo._id ? (
    <div>
      {/* ---- Artist Details ---- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-custom-pink w-full sm:max-w-72 rounded-lg" src={creatorInfo.image} alt={creatorInfo.name} />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {creatorInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{creatorInfo.speciality}</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-custom-pink mt-3">About</p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{creatorInfo.about}</p>
          </div>
        </div>
      </div>

      {/* ---- Artwork or Poem Section ---- */}
      <div className="mt-8">
        {creatorInfo.speciality === 'Poet' ? (
          <div>
            {/* Display Poems */}
            <p className="text-lg font-bold text-gray-900 mb-4">Poems</p>
            {creatorInfo.poem && creatorInfo.poem.map((poem, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl font-medium text-custom-pink">{poem.title}</p>
                <p className="text-gray-600 mt-2">{poem.content}</p>
              </div>
            ))}
          </div> 
        ) : (
          <div className="relative w-full max-w-2xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {creatorArtwork.map((image, index) => (
                <div key={index} className="min-w-full transition-opacity duration-500">
                  <img
                    src={image}
                    alt={`Creator's artwork ${index + 1}`}
                    onClick={() => openModal(index)} 
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 text-2xl bg-transparent border-none cursor-pointer"
              onClick={prevArtwork}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 text-2xl bg-transparent border-none cursor-pointer"
              onClick={nextArtwork}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>

      {/* Modal Component */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Artwork Modal"
        className="ModalContent"
        overlayClassName="ModalOverlay"
      >
        <div className="relative">
          <img src={selectedArtwork} alt="Artwork" className="w-full h-auto rounded-lg" />
          <button onClick={prevArtwork} className="absolute left-[-50px] top-1/2 transform -translate-y-1/2">&#10094;</button>
          <button onClick={nextArtwork} className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">&#10095;</button>
          <button onClick={closeModal} className="absolute top-0 right-0">&#10006;</button>
        </div>
      </ReactModal>

      {/* Listing Related Creators */}
      <RelatedCreators creatorId={creatorId} />
    </div>
  ) : (
    <div>Loading creator details...</div>
  );
};

export default Art;