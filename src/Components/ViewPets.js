import React, { useState, useEffect } from 'react';

function ViewPets() {
    const [pets, setPets] = useState([]);

    // Simulated pets data (replace this with your actual data fetching logic)
    useEffect(() => {
        // Simulated fetch operation
        const fetchPets = () => {
            // Assume pets data is fetched from an API or stored locally
            const mockPets = [
                { id: 1, name: 'Buddy', age: 3, breed: 'Golden Retriever', species: 'Dog', additionalInfo: 'Friendly and playful' },
                { id: 2, name: 'Whiskers', age: 2, breed: 'Siamese', species: 'Cat', additionalInfo: 'Independent and curious' },
                // Add more pets as needed
            ];
            setPets(mockPets);
        };

        // Call the fetchPets function
        fetchPets();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6 pb-48">
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
                            <p className='poppins-regular'><strong>Additional Information:</strong> {pet.additionalInfo}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewPets;
