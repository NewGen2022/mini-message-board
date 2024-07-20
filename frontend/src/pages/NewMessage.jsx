import '../styles/NewMessage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewMessage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.post('http://localhost:1919/new', data);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="add-msg-form">
            <h1>NEW MESSAGE</h1>
            <div id="inputs">
                <label>
                    Username
                    <input type="text" name="username" required />
                </label>
                <label>
                    Message
                    <textarea type="text" name="text" required />
                </label>
            </div>
            <button type="submit" id="add-msg-btn">
                Add message
            </button>
        </form>
    );
};

export default NewMessage;
