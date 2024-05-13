import React, { useState, useEffect } from 'react';

function ViewAppointments() {
    const [bookedAppointments, setBookedAppointments] = useState([]);

    
    useEffect(() => {
        
        const fetchBookedAppointments = () => {
            
            const mockBookedAppointments = [
                { id: 1, startDate: '2024-05-15', endDate: '2024-05-16', pet: 'Buddy' },
                { id: 2, startDate: '2024-05-17', endDate: '2024-05-18', pet: 'Whiskers' },
                
            ];
            setBookedAppointments(mockBookedAppointments);
        };

        
        fetchBookedAppointments();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl poppins-semibold mb-2">Booked Appointments</h2>
            {bookedAppointments.length === 0 ? (
                <p>No booked appointments found.</p>
            ) : (
                <div>
                    {bookedAppointments.map(appointment => (
                        <div key={appointment.id} className="border-b py-3 poppins-regular">
                            <p><strong>Start Date:</strong> {appointment.startDate}</p>
                            <p><strong>End Date:</strong> {appointment.endDate}</p>
                            <p><strong>Pet:</strong> {appointment.pet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewAppointments;
