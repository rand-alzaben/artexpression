import React from 'react';

// Merged Modal component to display either a larger image or full text (e.g., poems)
export const Modal = ({
    isOpen,
    content,
    image,
    onClose,
    nextContent,
    prevContent,
    nextImage,
    prevImage
}) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg max-w-4xl mx-auto">
                <div className="flex justify-between items-center">
                    <button onClick={onClose} className="text-2xl font-semibold text-gray-700">
                        &times; {/* Close button */}
                    </button>
                    <div className="flex gap-4">
                        {/* Navigation buttons */}
                        {prevContent || prevImage ? (
                            <button
                                onClick={prevContent || prevImage}
                                className="text-2xl text-gray-700"
                            >
                                &#10094;
                            </button>
                        ) : null}
                        {nextContent || nextImage ? (
                            <button
                                onClick={nextContent || nextImage}
                                className="text-2xl text-gray-700"
                            >
                                &#10095;
                            </button>
                        ) : null}
                    </div>
                </div>

                {/* Conditionally render image or content */}
                {image && (
                    <div className="mt-4">
                        <img
                            src={image}
                            alt="Selected Artwork"
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                    </div>
                )}

                {content ? (
                    content.type === 'poem' ? (
                        <div className="mt-4 p-4 text-gray-700">
                            <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                            <p>{content.text}</p> {/* Display the full text of the poem */}
                        </div>
                    ) : null
                ) : null}
            </div>
        </div>
    );
};

export default Modal;