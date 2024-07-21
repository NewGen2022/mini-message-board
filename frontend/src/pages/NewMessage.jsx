import '../styles/NewMessage.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewMessage = () => {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:1919/new';
    const [formData, setFormData] = useState({ username: '', text: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post(API_URL, formData);
            navigate('/');
        } catch (error) {
            alert(`Error with connection: ${error.message}`);
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="add-msg-form">
            <h1>NEW MESSAGE</h1>
            <div id="inputs">
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        autoComplete="username"
                        disabled={isLoading}
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        disabled={isLoading}
                    />
                </label>
            </div>
            <button type="submit" id="add-msg-btn" disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add message'}
            </button>
        </form>
    );
};

export default NewMessage;
