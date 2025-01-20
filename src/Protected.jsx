import React, { useState } from 'react';
import axios from 'axios';

const Protected = () => {
    const [message, setMessage] = useState('');

    const fetchProtectedData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://upskill31-backend.onrender.com/protected', {
                headers: { Authorization: token }
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Access denied', error);
        }
    };

    return (
        <div className="max-w-sm mx-auto p-4">
            <h2 className="text-2xl mb-4">Protected Route</h2>
            <button onClick={fetchProtectedData} className="bg-green-500 text-white px-4 py-2 mb-4">
                Access Protected Route
            </button>
            <p>{message}</p>
        </div>
    );
};

export default Protected;
