import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:1919/')
            .then((res) => {
                setMessages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {messages.map((msg) => (
                <div key={msg._id}>
                    {msg.username}: {msg.text}
                </div>
            ))}
            <Link to="/new">
                <button>Add message</button>
            </Link>
        </div>
    );
};

export default MessageBoard;
