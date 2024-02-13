import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000',{ transports : ['websocket'] });

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = () => {
        socket.emit('message', input);
        setInput('');
    };

    return (
        <div >
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className='bg-[#0077] text-white'
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
