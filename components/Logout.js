'use client'
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page or show a message
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

return (
    <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded-full hover:from-blue-600 hover:to-green-600 transition duration-300 ease-in-out sm:py-1 sm:px-2 sm:text-sm md:py-2 md:px-4 md:text-base lg:py-3 lg:px-6 lg:text-lg"
    >
        Logout
    </button>
);
};

export default Logout;