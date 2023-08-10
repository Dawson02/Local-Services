import Header from "../components/Header"
import React from 'react';
import useFetchServices from '../components/useFetchServices';

function Service() {
    const { services, loading, error } = useFetchServices();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Header />
            <div class="service-h1">
                <h1>Services</h1>
            </div>
            <div class="service-listing">
                <ul>
                    {services.map(service => (
                        <li key={service.id}>
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                            <p>{service.category}</p>
                            <p>{service.price}</p>
                            <p>{service.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Service;
