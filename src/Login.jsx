import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Login= () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://upskill31-backend.onrender.com/login', { username, password });
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/protected')
    } catch (error) {
        alert(error.message + " " + "invalid username or password")
        console.error('Login failed', error);
    }
};

 

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div
        className="hidden lg:block w-1/2 h-screen bg-cover md:hidden sm:hidden"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid)",
          objectFit: 'fill'
        }}
      ></div>

      <div className="w-full h-screen lg:w-1/2 flex items-center justify-center bg-gray">
        <div className="w-[70%] h-[45%] bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-extrabold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="text" className="block text-lg font-medium">
                username
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md shadow-lg hover:bg-purple-700 transition-all duration-300"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-10">
            Don't have an account?{" "}
            <Link to="/" className="text-purple-500 hover:text-purple-400">
              Sign up
            </Link>
          </p>
          </form>

         
        </div>
      </div>

     
    </div>
  );
};

export default Login;