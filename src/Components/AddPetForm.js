import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';

function AddPetForm() {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [notes, setNotes] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success'); // or 'error'

    const handleAddPet = async () => {
        try {
            const response = await axios.post('http://localhost:8090/addPet', {
                name,
                species,
                breed,
                age,
                notes,
                ownerEmail
            });
            console.log('Pet Added:', response.data);
            setSnackbarType('success');
            setSnackbarMessage('Pet added successfully');
            setSnackbarOpen(true);
            // Reset form fields after successful submission (optional)
            setName('');
            setSpecies('');
            setBreed('');
            setAge('');
            setNotes('');
            setOwnerEmail('');
        } catch (error) {
            console.error('Error:', error);
            setSnackbarType('error');
            setSnackbarMessage('Failed to add pet');
            setSnackbarOpen(true);
            // Handle error
        }
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className='flex justify-center bg-gray-100 items-center'>
            <div className="bg-white rounded-lg shadow p-6 w-1/3">
                <h3 className="text-lg font-semibold mb-2">Add Pet</h3>
                <form>
                <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input mt-1 block w-full h-10 border-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Species:</label>
                        <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Breed:</label>
                        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Age:</label>
                        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Notes:</label>
                        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="form-textarea mt-1 h-20 block w-full border-2 rounded-md" rows="3"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Owner Email:</label>
                        <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                    </div>
                    <button type="button" onClick={handleAddPet} className="Bg-color text-white py-2 px-4 rounded hover:bg-gray-900">Add Pet</button>
                </form>
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
        </div>
    );
}

export default AddPetForm;
