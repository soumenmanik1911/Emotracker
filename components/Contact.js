'use client'

import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust the import path as per your project structure
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'contacts'), formData);
            setSuccessMessage('Message sent successfully!');
            setErrorMessage('');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            setErrorMessage('Error sending message. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send</button>
                </form>

                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>

            <footer className="footer">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </footer>

            <style jsx>{`
                .contact-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }

                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #333;
                    font-family: 'Arial', sans-serif;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                }

                .contact-form label {
                    margin-bottom: 5px;
                    color: #555;
                    font-family: 'Arial', sans-serif;
                }

                .contact-form input,
                .contact-form textarea {
                    margin-bottom: 15px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-family: 'Arial', sans-serif;
                    transition: border-color 0.3s ease;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    border-color: #007bff;
                }

                .contact-form button {
                    padding: 10px 15px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: 'Arial', sans-serif;
                    transition: background-color 0.3s ease;
                }

                .contact-form button:hover {
                    background-color: #0056b3;
                }

                .success {
                    color: green;
                    text-align: center;
                }

                .error {
                    color: red;
                    text-align: center;
                }

                .footer {
                    text-align: center;
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f1f1f1;
                    border-top: 1px solid #ddd;
                }

                .footer p {
                    margin: 0;
                    color: #777;
                    font-family: 'Arial', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default Contact;
