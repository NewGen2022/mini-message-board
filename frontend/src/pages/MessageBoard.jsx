import '../styles/MessageBoard.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://mini-message-board-backend.onrender.com/') // http://localhost:1919/
            .then((res) => {
                setMessages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                alert(`Error with connection: ${err.message}`);
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div id="loading">Loading...</div>;
    }

    const handleAddMsg = () => {
        navigate('/new');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return (
            date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }) +
            ' ' +
            date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            })
        );
    };

    return (
        <div id="main">
            <div className="info-container">
                <div className="info-text">
                    <h1>Mini message board</h1>
                    <span>Welcome!</span>
                    <div id="info">
                        This is a simple message board where anyone can post and
                        view messages. Feel free to add new message by clicking
                        the button below!
                    </div>
                </div>
                <button onClick={handleAddMsg}>Add new message</button>
            </div>

            <div id="messages">
                <div id="top-part">
                    <div className="circle-container">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                </div>
                <div id="msgs-container">
                    {messages.length > 0 ? (
                        messages.map((msg) => (
                            <div className="message" key={msg._id}>
                                <div className="username">
                                    <b>Name:</b> {msg.username}
                                </div>
                                <div className="text">
                                    <b>Message:</b> {msg.text}
                                </div>
                                <div className="date">
                                    <b>Published:</b>{' '}
                                    {formatDate(msg.published)}
                                </div>
                                <div className="horizontal-line"></div>
                            </div>
                        ))
                    ) : (
                        <div id="no-msgs">No messages yet</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageBoard;
