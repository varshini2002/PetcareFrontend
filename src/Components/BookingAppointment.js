import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

function BookingAppointment() {
    const [ownerDetails, setOwnerDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: ""
    });

    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        // Retrieve token from cookie
        const token = Cookies.get('token');
        if (token) {
            // Decode token to get user email
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            // Use email to fetch user data
            axios.get(`http://localhost:8090/api/v1/auth/getuser?email=${email}`)
                .then(response => {
                    const userData = response.data;
                    // Set form data with user details
                    setOwnerDetails({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        phoneNumber: userData.phoneNumber,
                        address: userData.address,
                        email:email,
                    });
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    useEffect(() => {
const token=Cookies.get('token');
if (token) {
    // Decode token to get user email
    const decodedToken = jwtDecode(token);
    const email = decodedToken.sub;
console.log(token);
        const fetchPets = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/getPetByOwnerEmail?email=${email}`)
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();}
    }, []);

    const handlePetChange = (e) => {
        setSelectedPet(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            console.log(startDate);
           
            const response = await axios.post('http://localhost:8090/createBooking', {
                ownerName: ownerDetails.name,
                ownerEmail: ownerDetails.email,
                ownerPhoneNumber: ownerDetails.phoneNumber,
                ownerAddress: ownerDetails.address,
                startTime: startDate, // Pass the actual startDate value
                endTime: endDate,
                petName:selectedPet,
                
                // Pass the actual endDate value
            });
            console.log('Booking submitted:', response.data);
            setSelectedPet('');
            setStartDate(''); // Resetting the input fields
            setEndDate(''); // Resetting the input fields
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };
    

    return (
        <div className="bg-white rounded-lg shadow p-6 w-1/2 mx-auto my-5">
            <h2 className="text-2xl font-semibold mb-2 poppins-semibold">Book Appointment</h2>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Name:</label>
                <input type="text" value={ownerDetails.firstName} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Email:</label>
                <input type="text" value={ownerDetails.email} readOnly className="form-input mt-1 block w-full rounded-md border  px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Phone Number:</label>
                <input type="text" value={ownerDetails.phoneNumber} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Address:</label>
                <input type="text" value={ownerDetails.address} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Select Pet:</label>
                <select value={selectedPet} onChange={handlePetChange} className="form-select mt-1 block w-full rounded-md border">
                    <option value="">Select a pet</option>
                    {pets.map(pet => (
                        <option key={pet.id} value={pet.name}>{pet.name}</option>
                    ))}
                </select>
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Start Date:</label>
                <input type="date" value={startDate} onChange={handleStartDateChange} className="form-input mt-1 block w-full rounded-md border" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">End Date:</label>
                <input type="date" value={endDate} onChange={handleEndDateChange} className="form-input mt-1 block w-full rounded-md border " />
            </div>
            <button onClick={handleSubmit} className="Bg-color text-white py-2 px-4 rounded hover:bg-gray-900 poppins-regular">Book Appointment</button>
        </div>
    );
}

export default BookingAppointment;
