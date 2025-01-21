import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";


const SignupPage = () => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://upskill31-backend2.onrender.com/register', { username, password });
        alert('Registration successful');
        navigate('/login')
    } catch (error) {
        console.error('Registration failed', error);
    }
};

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-full h-screen lg:w-1/2 flex items-center justify-center bg-gray">
        <div className="w-[70%] h-[5    0%] bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-extrabold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
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
              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
           
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:text-purple-400">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div
        className="hidden lg:block w-1/2 h-screen bg-cover"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg)",
          objectFit: "fill",
        }}
      ></div>
    </div>
  );
};

export default SignupPage;