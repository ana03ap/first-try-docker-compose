import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [noteId, setNoteId] = useState('');
    const [note, setNote] = useState('');
    const [response, setResponse] = useState('');

    const handleSignup = async () => {
        try {
            const res = await axios.post('http://localhost/auth/signup', {
                username,
                password
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost/auth/login', {
                username,
                password
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    const handleCreateNote = async () => {
        try {
            const res = await axios.post('http://localhost/notes/note', {
                idEstudiante: parseInt(noteId),
                notaEstudiante: parseInt(note)
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Interfaz de Usuario</h1>
            <div style={{ marginBottom: '20px' }}>
                <h2>Registro</h2>
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginRight: '10px' }} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginRight: '10px' }} />
                <button onClick={handleSignup} style={{ cursor: 'pointer' }}>Registrarse</button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h2>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginRight: '10px' }} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginRight: '10px' }} />
                <button onClick={handleLogin} style={{ cursor: 'pointer' }}>Iniciar Sesión</button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h2>Crear Nota</h2>
                <input type="text" placeholder="ID Estudiante" value={noteId} onChange={(e) => setNoteId(e.target.value)} style={{ marginRight: '10px' }} />
                <input type="text" placeholder="Nota" value={note} onChange={(e) => setNote(e.target.value)} style={{ marginRight: '10px' }} />
                <button onClick={handleCreateNote} style={{ cursor: 'pointer' }}>Crear Nota</button>
            </div>
            <div>
                <h2>Respuesta del Servidor</h2>
                <p style={{ fontSize: '18px' }}>{response}</p>
            </div>
        </div>
    );
}

export default App;
