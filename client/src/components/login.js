import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { store } from '../App';

const Login = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', data)
            .then(res => setToken(res.data.token))
            .catch(err => {
                console.error(err);
                setError('Login error: Unable to login');
            });
    };
    if (token) {
        navigate("/myprofile");
    }

    return (
        <div style={styles.container}>
            <center>
                <form onSubmit={submitHandler} autoComplete="off" style={styles.form}>
                    <h3 style={styles.heading}>Login</h3>
                    <input type="email" onChange={changeHandler} name="email" placeholder="Email" style={styles.input} /><br />
                    <input type="password" onChange={changeHandler} name="password" placeholder="Password" style={styles.input} /><br />
                    <input type="submit" value="Login" style={styles.button} /><br />
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </center>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    form: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    heading: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
};

export default Login;
