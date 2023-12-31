import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });

      if (response.data.success) {
        // Redirect to the profile page upon successful login
        window.location.href = '/profile';
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
     <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://pbs.twimg.com/profile_images/1263670964841144322/C34rUL19_400x400.jpg"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1 content-center">Sign in to portal</label>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
          
          
        </div>
        <br />
        <div class="flex justify-center">
  <a class="text-600">
    ****email: admin, password: 123****
  </a>
</div>

        <div className="text-center md:text-left">
          <button
            onClick={handleLogin}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
