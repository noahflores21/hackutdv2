import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/src/components/App.css';  // Ensure this path is correct for your CSS file
import Navbar from './navbar'; // Import the Navbar component



// Create placeholder components for each page
function ShopPlans() {
  return (
    <div className="page-content">
      <h1>Shop Plans</h1>
      <p>Here you can shop for our plans.</p>
    </div>
  );
}

function Business() {
  return (
    <div className="page-content">
      <h1>Business Page</h1>
      <p>Learn more about our business offerings here.</p>
    </div>
  );
}

function CurrentCustomers() {
  return (
    <div className="page-content">
      <h1>Current Customers</h1>
      <p>Manage your account and settings here.</p>
    </div>
  );
}

function FrontierFix() {
  const [userInput, setUserInput] = useState(''); // Store the user's question
  const [chatHistory, setChatHistory] = useState([]); // Store chat messages

  // Function to handle the API call
  const sendMessage = async () => {
    if (!userInput.trim()) return; // Prevent sending empty input

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput }), // Send user input to the Flask API
      });

      const data = await response.json();

      // Add user input and AI response to chat history
      setChatHistory([
        ...chatHistory,
        { sender: 'User', message: userInput },
        { sender: 'AI', message: data.answer },
      ]);

      setUserInput(''); // Clear the input field
    } catch (error) {
      console.error('Error communicating with API:', error);
    }
  };

  return (
    <div className="page-content">
      <h1>FrontierFix</h1>
      <p>Welcome to the FrontierFix AI assistant. Ask questions about our services!</p>

      {/* Chat Interface */}
      <div className="chat-container">
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className={chat.sender === 'User' ? 'user-message' : 'ai-message'}>
              <strong>{chat.sender}:</strong> {chat.message}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask a question about FrontierFix services..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="main-content">





    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar stays the same across all routes */}

        {/* Define the routes to render the page-specific components */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page with original content */}
          <Route path="/shop-plans" element={<ShopPlans />} />
          <Route path="/business" element={<Business />} />
          <Route path="/current-customers" element={<CurrentCustomers />} />
          <Route path="/frontier-fix" element={<FrontierFix />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 Frontier. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default MainApp;
