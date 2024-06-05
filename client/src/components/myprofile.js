import React, { useContext, useState, useEffect } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:3000/myprofile', {
        headers: {
          'x-token': token,
        },
      })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div style={styles.container}>
      {data && (
        <center>
          <div className="card" style={styles.card}>
            <div className="card-body">
              <h5 className="card-title" style={styles.text}>Welcome : {data.username}</h5>
              <h6 style={{ ...styles.text, ...styles.subheading }}>You can go to the Home page to explore the items available...</h6>
              <button className="btn btn-primary" style={styles.button} onClick={() => setToken(null)}>Logout</button>
            </div>
          </div>
        </center>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Black background
    color: '#fff', // White font
  },
  card: {
    width: '18rem',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#333', // Darker background for the card
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    color: '#fff', // Ensure text inside the card is white
  },
  text: {
    color: '#fff',
  },
  subheading: {
    marginBottom: '15px',
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

export default Myprofile;
