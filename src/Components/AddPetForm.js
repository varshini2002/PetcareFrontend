import React, { useState } from 'react';

function AddPetForm() {
    const [petName, setPetName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [species, setSpecies] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleAddPet = () => {
        // Here you can implement the logic to add the pet, using the form values
        console.log('Pet Added:', { petName, age, breed, species, additionalInfo });
        // Reset form fields after submission (optional)
        setPetName('');
        setAge('');
        setBreed('');
        setSpecies('');
        setAdditionalInfo('');
    };

    return (
        <div className='flex justify-center bg-gray-100 items-center py-6'>
        <div className="bg-white rounded-lg shadow p-6 w-1/3">
            <h3 className="text-lg font-semibold mb-2">Add Pet</h3>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Pet Name:</label>
                    <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} className="form-input mt-1 block w-full h-10 border-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Breed:</label>
                    <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Species:</label>
                    <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} className="form-input mt-1 h-10 block w-full border-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Additional Information:</label>
                    <textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className="form-textarea mt-1 h-20 block w-full border-2 rounded-md" rows="3"></textarea>
                </div>
                <button type="button" onClick={handleAddPet} className="Bg-color text-white py-2 px-4 rounded hover:bg-gray-900">Add Pet</button>
            </form>
        </div>
        </div>
    );
}

export default AddPetForm;
