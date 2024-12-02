import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Create the AppContext
export const AppContext = createContext();

const AppContextProvider = (props) => {
    // State variables
    const [galleryItems, setGalleryItems] = useState([]); // For gallery items
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from .env file
    const [user, setUser] = useState(null); // For user authentication
    const [creators, setCreators] = useState([]); // For storing creator data
    const [token, setToken] = useState(localStorage.getItem('token') || ''); // Store token
    const [userData, setUserData] = useState(null); // For user profile data

       // Fetch all gallery items from the backend
       const fetchGalleryItems = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/creator/uploaded-artworks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (data.success) {
                setGalleryItems(data.artworks);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    // Fetch creators data from backend
    const getCreatorsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/creator/list`);
            if (data.success) {
                setCreators(data.creators);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    // Fetch user profile data
    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
                headers: { token },
            });
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

       // Fetch gallery items dynamically when token changes
       useEffect(() => {
        if (token) {
            fetchGalleryItems();
        }
    }, [token]);


    // Simulate fetching the user data (e.g., from localStorage or an API)
    useEffect(() => {
        const storedUser = localStorage.getItem('user'); // Check localStorage for the user
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Set the user from localStorage if available
        }
    }, []);

    // Fetch creators data once on component mount
    useEffect(() => {
        getCreatorsData(); // Fetch creators on mount
    }, []);

    // Load user profile data whenever token changes
    useEffect(() => {
        if (token) {
            loadUserProfileData();
        } else {
            setUserData(null);
        }
    }, [token]);

    // Provide both static creators and dynamic galleryItems to the context
    const value = {
        creators,
        galleryItems, // Provide galleryItems in the context
        setGalleryItems, // Provide function to update galleryItems if needed
        fetchGalleryItems, // Fetch function for gallery items
        user,
        setUser,
        getCreatorsData,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;