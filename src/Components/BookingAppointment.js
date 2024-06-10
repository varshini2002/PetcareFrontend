import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useNavigate } from 'react-router-dom';

function BookingAppointment() {
    const [ownerDetails, setOwnerDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: ""
    });
    const navigate = useNavigate();

    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success'); // or 'error'

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
                    setOwnerDetails({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        phoneNumber: userData.phoneNumber,
                        address: userData.address,
                        email: email,
                    });
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            // Decode token to get user email
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;
            console.log(token);
            const fetchPets = async () => {
                try {
                    const response = await axios.get(`http://65.2.189.241:8090/getPetByOwnerEmail?email=${email}`);
                    setPets(response.data);
                } catch (error) {
                    console.error('Error fetching pets:', error);
                }
            };

            fetchPets();
        }
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

            const response = await axios.post('http://65.2.189.241:8090/createBooking', {
                ownerName: `${ownerDetails.firstName} ${ownerDetails.lastName}`,
                ownerEmail: ownerDetails.email,
                ownerPhoneNumber: ownerDetails.phoneNumber,
                ownerAddress: ownerDetails.address,
                startTime: startDate, // Pass the actual startDate value
                endTime: endDate, // Pass the actual endDate value
                petName: selectedPet,
            });
            console.log('Booking submitted:', response.data);

            setSnackbarType('success');
            setSnackbarMessage('Booking successful!');
            setSnackbarOpen(true);

            setSelectedPet('');
            setStartDate(''); // Resetting the input fields
            setEndDate(''); // Resetting the input fields
        } catch (error) {
            console.error('Error submitting booking:', error);
            setSnackbarType('error');
            setSnackbarMessage('Error submitting booking');
            setSnackbarOpen(true);
        }
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
        navigate('/dashboard');
    };

    const isFormValid = () => {
        return selectedPet && startDate && endDate;
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 w-1/2 mx-auto my-5">
            <h2 className="text-2xl font-semibold mb-2 poppins-semibold">Book Appointment</h2>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Name:</label>
                <input type="text" value={`${ownerDetails.firstName} ${ownerDetails.lastName}`} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Email:</label>
                <input type="text" value={ownerDetails.email} readOnly className="form-input mt-1 block w-full rounded-md border  px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Phone Number:</label>
                <input type="text" value={ownerDetails.phoneNumber} onChange={(e) => setOwnerDetails({...ownerDetails, phoneNumber: e.target.value})} className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Address:</label>
                <input type="text" value={ownerDetails.address} onChange={(e) => setOwnerDetails({...ownerDetails, address: e.target.value})} className="form-input mt-1 block w-full rounded-md border px-2" />
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
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    min={new Date().toISOString().split('T')[0]} // Disable past dates
                    className="form-input mt-1 block w-full rounded-md border"
                />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    min={startDate ? new Date(new Date(startDate).getTime() + 86400000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} // Disable past dates and set min date as next day of start date
                    className="form-input mt-1 block w-full rounded-md border"
                />
            </div>
            <button 
    onClick={handleSubmit} 
    disabled={!isFormValid()} 
    className={`py-2 px-4 rounded poppins-regular ${isFormValid() ? 'Bg-color text-white hover:bg-gray-900' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
>
    Book Appointment
</button>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={closeSnackbar}
            >
                <SnackbarContent
                    message={snackbarMessage}
                    style={{ backgroundColor: snackbarType === 'success' ? '#4caf50' : '#f44336' }}
                    action={<button className="text-white" onClick={closeSnackbar}>Close</button>}
                />
            </Snackbar>
        </div>
    );
}

export default BookingAppointment;
