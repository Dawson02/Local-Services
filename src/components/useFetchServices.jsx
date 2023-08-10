import { useState, useEffect } from 'react';

function useFetchServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await fetch('http://localhost:5000/services');
                if (response.ok) {
                    const data = await response.json();
                    setServices(data);
                } else {
                    setError('Failed to fetch services.');
                }
            } catch (error) {
                setError('An error occurred while fetching services.');
            } finally {
                setLoading(false);
            }
        }
        fetchServices();
    }, []);

    return { services, loading, error };
}

export default useFetchServices;
