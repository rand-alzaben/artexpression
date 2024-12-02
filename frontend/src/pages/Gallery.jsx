import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from '../compenents/Modal';


const Gallery = () => {
    const { galleryItems, creators, fetchGalleryItems } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPoem, setSelectedPoem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filter, setFilter] = useState('all');

    const itemsPerPage = 6;

    // Filter items based on type (painting, poem, etc.)
    const filteredItems = galleryItems.filter((item) => {
        if (filter === 'all') return true;
        return item.category === filter; // Assuming `category` defines item type
    });

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    const openModal = (index) => {
        const item = currentItems[index];
        if (item.textContent) {
            setSelectedPoem(item);
            setSelectedArtwork(null);
        } else if (item.imageUrl) {
            setSelectedArtwork(item.imageUrl);
            setSelectedPoem(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const nextArtwork = () => {
        const nextIndex = (currentIndex + 1) % currentItems.length;
        setCurrentIndex(nextIndex);
        setSelectedArtwork(currentItems[nextIndex]?.imageUrl);
    };

    const prevArtwork = () => {
        const prevIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
        setCurrentIndex(prevIndex);
        setSelectedArtwork(currentItems[prevIndex]?.imageUrl);
    };

    // Fetch gallery items when the component mounts
    useEffect(() => {
        fetchGalleryItems();
    }, []);

    return (
        <div className="flex flex-col items-center my-16 text-gray-500">
            <h1 className="text-3xl font-medium mb-2">
                Gallery of <span className="text-gray-700 font-semibold">ArtExpression</span>
            </h1>
            <p className="text-center text-sm mb-10 w-3/4 md:w-1/2 text-gray-600">
                Discover the artistry and poetry that speak from the heart, and connect with creators from around the world.
            </p>

            {/* Filter buttons */}
            <div className="flex space-x-4 mb-6">
                {['all', 'painting', 'poem', 'photograph'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-full ${
                            filter === type ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {/* Gallery grid */}
            <div className="relative w-full max-w-2xl mx-auto mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentItems.map((item, index) => (
                        <div key={item._id} className="min-w-full transition-opacity duration-500">
                            {item.imageUrl ? (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    onClick={() => openModal(index)}
                                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                                />
                            ) : (
                                <div className="p-6 bg-white rounded-lg shadow-lg">
                                    <h4 className="text-2xl font-semibold text-primary mb-4">{item.title}</h4>
                                    <p className="text-lg text-gray-800 leading-relaxed">{item.textContent}</p>
                                </div>
                            )}
                            <div className="p-4">
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="mt-4 text-gray-700 font-semibold">Artist: {item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10 space-x-4">
                    <button
                        onClick={handlePrevPage}
                        className={`px-4 py-2 rounded-full bg-primary text-white ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        className={`px-4 py-2 rounded-full bg-primary text-white ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                content={selectedPoem}
                image={selectedArtwork}
                onClose={closeModal}
                nextContent={nextArtwork}
                prevContent={prevArtwork}
            />
        </div>
    );
};

export default Gallery;