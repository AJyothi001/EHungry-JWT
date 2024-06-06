import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://ehungry.onrender.com', data).then(
            res => {
                alert(res.data);
                setData({
                    username: '',
                    email: '',
                    password: '',
                    confirmpassword: ''
                });
            }
        );
    };

    return (
        <div style={styles.container}>
            <center>
                <form onSubmit={submitHandler} autoComplete="off" style={styles.form}>
                    <h3 style={styles.heading}>Register</h3>
                    <input type="text" onChange={changeHandler} name="username" placeholder="User Name" value={data.username} style={styles.input} /><br />
                    <input type="email" onChange={changeHandler} name="email" placeholder="Email" value={data.email} style={styles.input} /><br />
                    <input type="password" onChange={changeHandler} name="password" placeholder="Password" value={data.password} style={styles.input} /><br />
                    <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" value={data.confirmpassword} style={styles.input} /><br />
                    <input type="submit" value="Register" style={styles.button} /><br />
                </form>
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
};

export default Register;
