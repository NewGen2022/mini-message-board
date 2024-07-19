import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import MessageBoard from './pages/MessageBoard';
import NewMessage from './pages/NewMessage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MessageBoard />} />
            <Route path="/new" element={<NewMessage />} />
        </Routes>
    );
}

export default App;
