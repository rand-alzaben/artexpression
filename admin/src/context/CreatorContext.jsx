import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CreatorContext = createContext();

const CreatorContextProvider = (props) => {
    const [artworks, setArtworks] = useState([]); // To store uploaded artworks
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state


    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment
    const [cToken , setCToken]= useState(localStorage.getItem('cToken') ? localStorage.getItem('cToken') : '')

    // Function to fetch all artworks
    const fetchArtworks = async () => {
        try {
            setLoading(true);
            setError(null);
           // const response = await axios.get(`${backendUrl}/uploaded-artworks`);
            setArtworks(response.data.artworks);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Function to upload new artwork
    const uploadArtwork = async (formData) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(`${backendUrl}/upload-artwork`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setArtworks((prevArtworks) => [...prevArtworks, response.data.artwork]);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Automatically fetch all artworks on component mount
    useEffect(() => {
        fetchArtworks();
    }, []);

    const value = {
        artworks,
        fetchArtworks,
        uploadArtwork,
        loading,
        error,
        cToken , setCToken,
        backendUrl
    };

    return (
        <CreatorContext.Provider value={value}>
            {props.children}
        </CreatorContext.Provider>
    );
};

export default CreatorContextProvider;