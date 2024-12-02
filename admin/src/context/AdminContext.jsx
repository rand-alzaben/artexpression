import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [creators, setCreators] = useState([])
    const [dashData, setDashData]=useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllCreators = async () => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-creators', {}, { headers: { aToken } })
            if (data.success) {
                setCreators(data.creators)
                console.log(data.creators)

            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    const getDashData= async () =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers: {aToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl, creators,
        getAllCreators,
        dashData,getDashData
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider