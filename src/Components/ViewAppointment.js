import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function ViewAppointments() {
    const [bookedAppointments, setBookedAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState('');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const navigate = useNavigate();

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

    const handleGenerateBill = (appointment) => {
        navigate('/bill', { state: { petName: appointment.petName, startDate: appointment.startTime, endDate: appointment.endTime } });
    };

    const handleCancelAppointment = async (petName) => {
        console.log(petName);
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

    return (
        <div className="bg-white rounded-lg p-6 pb-48">
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
                                    <button onClick={() => handleCancelAppointment(appointment.petName)} className="bg-gray-800 text-white px-4 py-2 rounded">Cancel</button>
                                    <button onClick={() => handleGenerateBill(appointment)} className="Bg-color hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-2">View My Bill</button>
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
