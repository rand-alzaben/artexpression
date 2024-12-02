import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCreator = () => {

    const [creatorImg, setCreatorImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('Photographer')
    const [adress1, setAdress1] = useState('')
    const [adress2, setAdress2] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!creatorImg) {
                return toast.error('Image not selected')
            }

            const formData = new FormData()
            formData.append('image', creatorImg)
            formData.append('name', name)
            formData.append('email', email) 
            formData.append('password', password)
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('adress', JSON.stringify({ line1: adress1, line2: adress2 }))

            //console log formdata
            formData.forEach((value, key) => {
                console.log(`${key} : ${value} `);
            })

            const { data } = await axios.post(backendUrl + '/api/admin/add-creator', formData, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                setCreatorImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAbout('')
                setAdress1('')
                setAdress2('')

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }


    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
            <p className="mb-3 text-lg font-medium">Add Creator</p>
            <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-gray-500">
                    <label htmlFor="creator-img">
                        <img className="w-16 bg-primary rounded-full cursor-pointer" src={creatorImg ? URL.createObjectURL(creatorImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setCreatorImg(e.target.files[0])} type="file" id="creator-img" hidden />
                    <p>
                        Upload creator <br /> picture
                    </p>
                </div>

                {/* Creator Details */}
                <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Creator name</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Creator E-Mail</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="border rounded px-3 py-2" type="email" placeholder="Email" required />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Creator Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="border rounded px-3 py-2" type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Speciality</p>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="border rounded px-3 py-2" name="" id="">
                                <option value="Photographer">Photographer</option>
                                <option value="Painter">Painter</option>
                                <option value="Poet">Poet</option>
                            </select>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Adress</p>
                            <input onChange={(e) => setAdress1(e.target.value)} value={adress1} className="border rounded px-3 py-2" type="text" placeholder="Adress 1" required />
                            <input onChange={(e) => setAdress2(e.target.value)} value={adress2} className="border rounded px-3 py-2" type="text" placeholder="Adress 2" required />
                        </div>
                    </div>
                </div>

                {/* About Creator Section */}
                <div className="mt-6">
                    <p className="mb-2">About Creator</p>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about}
                        className="w-full px-4 pt-2 border rounded"
                        placeholder="Write about creator"
                        rows={5}
                        required
                    />
                </div>

                {/* Add Creator Button */}
                <div className="mt-6 flex justify-center">
                    <button type='submit' className="bg-primary px-10 py-3 text-white rounded-full">ADD CREATOR</button>
                </div>
            </div>
        </form>
    );
};

export default AddCreator;
