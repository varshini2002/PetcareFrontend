import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function ManageProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
    });

    useEffect(() => {
        // Retrieve token from cookie
        const token = Cookies.get('token');
        if (token) {
            // Decode token to get user email
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            // Use email to fetch user data
            axios.get(`http://65.2.189.241:8090/api/v1/auth/getuser?email=${email}`)
                .then(response => {
                    const userData = response.data;
                    // Set form data with user details
                    setFormData({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        phoneNumber: userData.phoneNumber,
                        address: userData.address
                    });
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle the editing state
    };

    const handleSaveClick = () => {
        const token = Cookies.get('token');
        if (token) {
            // Decode token to get user email
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;
            console.log(email);
        

        // Example of sending edited data to backend
        axios.put('http://65.2.189.241:8090/api/v1/auth/updateUser', formData,{
            headers: {
                email: email
            }
        })
        .then(response => {
            console.log('Profile data updated successfully:', response.data);
            setIsEditing(false); // Turn off editing mode after saving
            console.log('Profile data saved:', formData);
            })
            .catch(error => {
                console.error('Error updating profile data:', error);
            });
    };}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Manage Profile</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={`form-input mt-1 block w-full border rounded-md ${isEditing ? '' : 'bg-gray-100'}`} readOnly={!isEditing} />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={`form-input mt-1 block w-full border rounded-md ${isEditing ? '' : 'bg-gray-100'}`} readOnly={!isEditing} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`form-input mt-1 block w-full border rounded-md ${isEditing ? '' : 'bg-gray-100'}`} readOnly={!isEditing} />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="text" id="password" name="password" value={formData.phoneNumber} onChange={handleChange} className={`form-input mt-1 block w-full border rounded-md ${isEditing ? '' : 'bg-gray-100'}`} readOnly={!isEditing} />
                </div>


                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} className={`form-textarea mt-1 block w-full border rounded-md ${isEditing ? '' : 'bg-gray-100'}`} rows="3" readOnly={!isEditing}></textarea>
                </div>
                {isEditing && (
                    <button type="button" onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                )}
            </form>
            <div className="mt-4">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-500" checked={isEditing} onChange={handleEditClick} />
                    <span className="ml-2">Edit Info</span>
                </label>
            </div>
        </div>
    );
}

export default ManageProfile;
