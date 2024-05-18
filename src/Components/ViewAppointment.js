import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function ViewAppointments() {
    const navigate = useNavigate();
    const [bookedAppointments, setBookedAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
   
    const [snackbarType, setSnackbarType] = useState('');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Fetch booked appointments data from the backend API
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            console.log(email);
            const fetchAppointments = async () => {
                try {
                    const response = await axios.get(`http://localhost:8090/getBookingByOwnerEmail?ownerEmail=${email}`);
                    setBookedAppointments(response.data);
                    console.log(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching bookings:', error);
                    setLoading(false);
                }
            };
            fetchAppointments();
        }
    }, []);

    const handleEditAppointment = (appointmentId) => {
        navigate(`/editappointment?appointmentId=${appointmentId}`);
    };

    const handleCancelAppointment = async (petName, ) => {
        console.log( petName);
        const token = Cookies.get('token');
        const decodedToken = jwtDecode(token);
        const ownerEmail = decodedToken.sub;
        try {


            const confirmed = window.confirm('Are you sure you want to cancel this appointment?');
            if (!confirmed) return;
    
            
            await axios.delete(`http://localhost:8090/deleteBooking`, {
                params: {
                    ownerEmail: ownerEmail,
                    petName: petName
                }
            });

            setSnackbarType('success');
            setSnackbarMessage('Appointment canceled successfully');
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error canceling appointment:', error);
            setSnackbarType('error');
            setSnackbarMessage('Failed to cancel appointment');
            setSnackbarOpen(true);
        }
    };
    
    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    const calculateAmount = (startDate, endDate) => {
        // Here you can implement the logic to calculate the amount based on the start and end dates
        // This is just a placeholder, replace it with your actual calculation logic
        const amount = 500 * (endDate.getDate() - startDate.getDate());
        return amount;
    };


    return (
        <div className="bg-white rounded-lg shadow p-6 pb-48">
            {loading ? (
                <p>Loading appointments...</p>
            ) : (
                <div>
                    {bookedAppointments.length === 0 ? (
                        <p>No booked appointments found.</p>
                    ) : (
                        <div>
                            {bookedAppointments.map(appointment => (
                                <div key={appointment.id} className="border-b py-3">
                                    <p><strong>Start Date:</strong> {appointment.startTime}</p>
                                    <p><strong>End Date:</strong> {appointment.endTime}</p>
                                    <p><strong>Pet:</strong> {appointment.petName}</p>
                                    {/* <button onClick={() => handleEditAppointment(appointment.id)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Edit</button> */}
                                    <button onClick={() => handleCancelAppointment(appointment.petName)} className="bg-gray-800 text-white px-4 py-2 rounded">Cancel</button>
                                    <button onClick={() => alert(`Amount for this appointment: ${calculateAmount(new Date(appointment.startTime), new Date(appointment.endTime))}`)} className="Bg-color hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">View My Bill</button>
                                </div>
                                
                            ))}
                        </div>
                    )}
                </div>
            )}
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

export default ViewAppointments;
