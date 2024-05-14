import React, { useState, useEffect } from 'react';

function ViewAppointments() {
    const [bookedAppointments, setBookedAppointments] = useState([]);

    // Simulated booked appointments data (replace this with your actual data fetching logic)
    useEffect(() => {
        // Simulated fetch operation
        const fetchBookedAppointments = () => {
            // Assume booked appointments data is fetched from an API or stored locally
            const mockBookedAppointments = [
                { id: 1, startDate: '2024-05-15', endDate: '2024-05-16', pet: 'Buddy' },
                { id: 2, startDate: '2024-05-17', endDate: '2024-05-18', pet: 'Whiskers' },
                // Add more booked appointments as needed
            ];
            setBookedAppointments(mockBookedAppointments);
        };

        // Call the fetchBookedAppointments function
        fetchBookedAppointments();
    }, []);

    const calculateAmount = (startDate, endDate) => {
        // Here you can implement the logic to calculate the amount based on the start and end dates
        // This is just a placeholder, replace it with your actual calculation logic
        const amount = 50 * (endDate.getDate() - startDate.getDate());
        return amount;
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 pb-48">
            <h3 className="text-lg font-semibold mb-2">View Booked Appointments</h3>
            {bookedAppointments.length === 0 ? (
                <p>No booked appointments found.</p>
            ) : (
                <div>
                    {bookedAppointments.map(appointment => (
                        <div key={appointment.id} className="border-b py-3">
                            <p><strong>Start Date:</strong> {appointment.startDate}</p>
                            <p><strong>End Date:</strong> {appointment.endDate}</p>
                            <p><strong>Pet:</strong> {appointment.pet}</p>
                            <button onClick={() => alert(`Amount for this appointment: ${calculateAmount(new Date(appointment.startDate), new Date(appointment.endDate))}`)} className="Bg-color hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">View My Bill</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewAppointments;
