import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function ViewPets() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success'); // or 'error'

    // Fetch pets data from the backend API
    useEffect(() => {
        const token=Cookies.get('token');
        if (token) {
            // Decode token to get user email
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;
        console.log(token);
                const fetchPets = async () => {
                    try {
                        const response = await axios.get(`http://172.31.40.114:8090/getPetByOwnerEmail?email=${email}`)
                        console.log(response.data)
                        setPets(response.data);
                        setLoading(false); 
                    } catch (error) {
                        console.error('Error fetching pets:', error);
                        setLoading(false);
                    }
                };
        
                fetchPets();}
            }, []);

    const handleEditPet = (petId) => {
        navigate(`/editpet?petId=${petId}`);
    };

    const handleDeletePet = async (petId) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this pet?');
            if (!confirmed) return;

            // Make a DELETE request to delete the pet
            await axios.delete(`http://172.31.40.114:8090/deletePet/${petId}`);
            // Remove the deleted pet from the pets list
            setPets(pets.filter(pet => pet.id !== petId));
            setSnackbarType('success');
            setSnackbarMessage('Pet deleted successfully');
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error deleting pet:', error);
            setSnackbarType('error');
            setSnackbarMessage('Failed to delete pet');
            setSnackbarOpen(true);
        }
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="bg-white rounded-lg  p-6 pb-48 w-full">
            {loading ? (
                <p className='poppins-regular'>Loading pets...</p>
            ) : (
                <div>
                    {pets.length === 0 ? (
                        <p className='poppins-regular'>No pets found.</p>
                    ) : (
                        <div>
                            {pets.map(pet => (
                                <div key={pet.id} className="border-b py-3">
                                    <h4 className="poppins-semibold">{pet.name}</h4>
                                    <p className='poppins-regular'><strong>Age:</strong> {pet.age}</p>
                                    <p className='poppins-regular'><strong>Breed:</strong> {pet.breed}</p>
                                    <p className='poppins-regular'><strong>Species:</strong> {pet.species}</p>
                                    {pet.notes && (
                                        <p className='poppins-regular'><strong>Additional Information:</strong> {pet.notes}</p>
                                    )}
                                    <button onClick={() => handleEditPet(pet.id)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDeletePet(pet.id)} className="bg-gray-800 text-white px-4 py-2 rounded">Delete</button>
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

export default ViewPets;
