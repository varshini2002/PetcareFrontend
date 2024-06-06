import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';

function EditPet() {
    const location = useLocation();
    const petId = new URLSearchParams(location.search).get('petId');
    const [editedPet, setEditedPet] = useState({});
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success'); // or 'error'

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get(`http://3.110.197.17:8090/getPet/${petId}`);
                setEditedPet(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching pet details:', error);
                setLoading(false);
            }
        };

        fetchPetDetails();
    }, [petId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPet({ ...editedPet, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://3.110.197.17:8090/updatePet/${petId}`, editedPet);
            console.log('Updated pet details:', editedPet);
            setSnackbarType('success');
            setSnackbarMessage('Pet details updated successfully');
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error updating pet:', error);
            setSnackbarType('error');
            setSnackbarMessage('Failed to update pet details');
            setSnackbarOpen(true);
        }
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            {loading ? (
                <p className='poppins-regular'>Loading pet details...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" readOnly id="name" name="name" value={editedPet.name} onChange={handleChange} className="form-input mt-1 block w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
                        <input type="text" id="age" name="age" value={editedPet.age} onChange={handleChange} className="form-input mt-1 block w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed:</label>
                        <input type="text" id="breed" readOnly name="breed" value={editedPet.breed} onChange={handleChange} className="form-input mt-1 block w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species:</label>
                        <input type="text" id="species" readOnly name="species" value={editedPet.species} onChange={handleChange} className="form-input mt-1 block w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes:</label>
                        <textarea id="notes" name="notes" value={editedPet.notes} onChange={handleChange} className="form-textarea mt-1 block w-full border rounded-md" rows="3"></textarea>
                    </div>
                    <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded">Save Changes</button>
                </form>
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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

export default EditPet;
