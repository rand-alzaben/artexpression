import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AdminContext } from '../../context/AdminContext';
const ArtUpload = () => {
    const [image, setImage] = useState(null);
    const [textContent, setTextContent] = useState(''); // For poem content
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(''); // e.g., painting, poem
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { backendUrl, aToken } = useContext(AdminContext);

    // Handle file input change
    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    // Handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        // Validate form fields
        if (!title || !description || !category || (!image && !textContent)) {
            setMessage('Please fill in all required fields and provide either an image or text content.');
            setLoading(false);
            return;
        }

        try {
            // Prepare form data
            const formData = new FormData();
            if (image) formData.append('file', image);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);
            if (textContent) formData.append('textContent', textContent);

            // Send data to backend
            const response = await axios.post(`${backendUrl}/api/creator/upload-artwork`, formData, {
                headers: {
                    Authorization: `Bearer ${aToken}`, // Add token if required
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setMessage('Artwork uploaded successfully!');
                setTitle('');
                setDescription('');
                setCategory('');
                setImage(null);
                setTextContent('');
            } else {
                setMessage(response.data.message || 'Failed to upload artwork.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred while uploading artwork.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="m-5 w-full">
            <p className="mb-3 text-lg font-medium">Upload Artwork</p>
            <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

                {/* Title and Category Section */}
                <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Artwork Title</p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border rounded px-3 py-2"
                                placeholder="Enter artwork title"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Category</p>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border rounded px-3 py-2"
                                required
                            >
                                <option value="">Select category</option>
                                <option value="painting">Painting</option>
                                <option value="poem">Poem</option>
                                <option value="photograph">Photograph</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Upload Image</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Poem Content (optional)</p>
                            <textarea
                                value={textContent}
                                onChange={(e) => setTextContent(e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter the poem text here"
                            />
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                    <p className="mb-2">Description</p>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 pt-2 border rounded"
                        placeholder="Enter a description for the artwork"
                        rows={5}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className={`bg-primary px-10 py-3 text-white rounded-full ${loading ? 'opacity-50' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Upload Artwork'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ArtUpload;