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
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type="text" name="username" required />
            </label>
            <label>
                Message
                <input type="text" name="text" required />
            </label>
            <button type="submit">Add message</button>
        </form>
    );
};

export default NewMessage;
