'use client';
import React, { useState } from 'react';
import Button from '@/components/Button';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [authenticating, setAuthenticating] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const { signup, login } = useAuth();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    async function handleSubmit() {
        setErrorMessage(''); // Clear previous errors
        if (!email || !validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!password || password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        setAuthenticating(true);
        try {
            if (isRegister) {
                console.log('Signing up a new user');
                await signup(email, password);
            } else {
                console.log('Logging in existing user');
                await login(email, password);
            }
        } catch (err) {
            // Show a user-friendly error message
            if (err.code === 'auth/user-not-found') {
                setErrorMessage('Email is not registered. Please sign up.');
            } else if (err.code === 'auth/wrong-password') {
                setErrorMessage('Incorrect password. Please try again.');
            } else {
                setErrorMessage(err.message || 'An unexpected error occurred.');
            }
        } finally {
            setAuthenticating(false);
        }
    }

    return (
        <div className="flex-1 flex justify-center items-center flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                {isRegister ? 'Register' : 'Log In'}
            </h3>
            <p className="text-base sm:text-sm md:text-base lg:text-base text-center text-gray-600">
                Welcome back! Please log in to your account or register to get started.
            </p>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-[400px] mx-auto p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 max-w-[400px] mx-auto border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            <Button
                clickHandler={handleSubmit}
                text={authenticating ? 'Submitting' : 'Submit'}
                full
            />
            <p className="text-center">
                {isRegister ? 'Already have an account? ' : "Don't have an account? "}
                <button
                    onClick={() => {
                        setIsRegister(!isRegister);
                        setErrorMessage(''); // Clear error message on toggle
                    }}
                    className="text-indigo-600"
                >
                    {isRegister ? 'Sign in' : 'Sign up'}
                </button>
            </p>
        </div>
    );
};

export default Login;
