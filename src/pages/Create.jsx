import React, {useState} from 'react';
import Header from "../components/Header";


function Create() {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceCategory, setServiceCategory] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceLocation, setServiceLocation] = useState('');
    const [serviceImages, setServiceImages] = useState([]);

    const handleImageUpload = (event) => {
        // Handle the image upload
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div>

            <Header />

            <div class="create-container">
                <div class="create-h1">
                <h1>Create A Service!</h1>
                </div>

                <div class="create-form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Service Name:
                            <input 
                                type="text"
                                value=""
                                onChange={(e) => setServiceName(e.target.value)} required
                            />
                        </label>

                        <label>
                            Service Description:
                            <input 
                                type="text"
                                value=""
                                onChange={(e) => setServiceDescription(e.target.value)} required
                            />
                        </label>

                        <label>
                            Service Category:
                            <input 
                                type="text"
                                value=""
                                onChange={(e) => setServiceCategory(e.target.value)} required
                            />
                        </label>

                        <label>
                            Service Price:
                            <input 
                                type="text"
                                value=""
                                onChange={(e) => setServicePrice(e.target.value)} required
                            />
                        </label>

                        <label>
                            Service Location:
                            <input 
                                type="text"
                                value=""
                                onChange={(e) => setServiceLocation(e.target.value)} required
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;