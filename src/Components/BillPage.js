import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

function BillPage() {
    const location = useLocation();
    const { petName, startDate, endDate } = location.state || {};
    const navigate = useNavigate();
    const [billDetails, setBillDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!petName || !startDate || !endDate) {
            setError('Invalid data provided');
            return;
        }

        handleGenerateBill();
    }, [petName, startDate, endDate]);

    const handleGenerateBill = async () => {
        setLoading(true);
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            try {
                const billData = {
                    petName,
                    startDate,
                    endDate
                };

                const response = await axios.post(
                    'http://65.2.189.241:8090/generate-bill',
                    billData,
                    {
                        headers: {
                            'email': email,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                setBillDetails(response.data);
            } catch (error) {
                setError('Error generating bill');
            } finally {
                setLoading(false);
            }
        } else {
            setError('No token found');
            setLoading(false);
        }
    };

    const handleOk = () => {
        navigate('/viewbookings'); // Navigate back to the appointments page
    };

    return (
        <div className=" flex items-center justify-center p-4">
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500 mt-4">{error}</div>}
            {billDetails && (
                <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Bill Details</h2>
                    <div className="mb-2">
                        <strong>Service Charge:</strong> ₹{billDetails.servicecharge}
                    </div>
                    <div className="mb-2">
                        <strong>GST (18%):</strong> ₹{billDetails.gst}
                    </div>
                    <div className="mb-2">
                        <strong>Total Charge:</strong> ₹{billDetails.totalamount}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={handleOk}
                            className="Bg-color hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-2"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BillPage;
