import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/src/components/App.css'


function Navbar() {
  return (

    <header className="header">


      <div className="logo">
        {/* Make the "Frontier" text clickable to navigate to the home page */}
        <Link to="/" className="img">
        </Link>
        <Link to="/" className="text-xl font-bold text-white">
          Frontier
        </Link>
      </div>
      <nav className="nav">
        <Link to="/shop-plans" className="dummy-button">| Shop Plans |</Link>
        <Link to="/business" className="dummy-button">Business |</Link>
        <Link to="/current-customers" className="dummy-button">Current Customers |</Link>
      </nav>
        <Link to="/frontier-fix" className="ourImg"></Link>
        <Link to="/frontier-fix" className="ourDummy-button">| Frontier Fix |</Link>


    </header>


  );
}

export default Navbar;