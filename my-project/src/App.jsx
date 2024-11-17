import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/src/components/App.css';  // Ensure this path is correct for your CSS file
import Navbar from './navbar'; // Import the Navbar component
import products from 'C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/src/data/products.json';



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
  return (
    <div className="page-content">
      <h1>FrontierFix</h1>
      <p>This page provides information about FrontierFix services.</p>
      <p>Here you can find detailed services and support options.</p>
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
