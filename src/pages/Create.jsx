import React, { useState } from 'react';
import Header from "../components/Header";

function Create() {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceCategory, setServiceCategory] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceLocation, setServiceLocation] = useState('');
    const [serviceImages, setServiceImages] = useState([]);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleImageUpload = (event) => {
        // Handle the image upload
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newService = {
            name: serviceName,
            description: serviceDescription,
            category: serviceCategory,
            price: servicePrice,
            location: serviceLocation
        };

        try {
            const response = await fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newService)
            });
        
            console.log('Response status:', response.status);
            console.log('Response data:', await response.json());
        
            if (response.ok) {
                setSubmitMessage('Service created successfully!');
            } else {
                setSubmitMessage('Failed to create service.');
            }
        } catch (error) {
            console.error('Error creating service:', error);
            setSubmitMessage('An error occurred.');
        }
        

        // Clear input fields
        setServiceName('');
        setServiceDescription('');
        setServiceCategory('');
        setServicePrice('');
        setServiceLocation('');
    }

    return (
        <div>
            <Header />
            <div className="create-h1">
                <h1>Create A Service!</h1>
            </div>
            <div className="create-container">
                <div className="create-form">
                    <form onSubmit={handleSubmit}>
                        <label>Service Name:</label>
                        <input
                            type="text"
                            id="serviceName"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            required
                        />

                        <label>
                            Service Description:
                            <input
                                type="text"
                                id="serviceDescription"
                                value={serviceDescription}
                                onChange={(e) => setServiceDescription(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            Service Category:
                            <input
                                type="text"
                                id="serviceCategory"
                                value={serviceCategory}
                                onChange={(e) => setServiceCategory(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            Service Price:
                            <input
                                type="text"
                                id="servicePrice"
                                value={servicePrice}
                                onChange={(e) => setServicePrice(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            Service Location:
                            <input
                                type="text"
                                id="serviceLocation"
                                value={serviceLocation}
                                onChange={(e) => setServiceLocation(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit" className="create-button">Create Service</button>
                    </form>
                    <div className="submit-message">
                        {submitMessage && <p>{submitMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
