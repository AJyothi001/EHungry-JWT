import React,{useState,createContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/SignUpForm';
import Home from './components/Home';
import Login from './components/login';
import Myprofile from './components/myprofile'

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <store.Provider value={[token,setToken]}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/menu" element={<Home />} />
        <Route path="/awards" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </Router>
    </store.Provider>
  );
};

export default App;
