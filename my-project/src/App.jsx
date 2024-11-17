import React from 'react';
import '/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/src/components/App.css'

function MainApp() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">QuickFrontierFix</div>
        <nav className="nav">
          <button className="dummy-button">Shop Plans</button>
          <button className="dummy-button">Business</button>
          <button className="dummy-button">Current Customers</button>
          <button className="dummy-button">Quick Links</button>
        </nav>
      </header>

      <main className="main-content">
        <h1>Fast, Reliable Customer Support</h1>
        <p>
          Elevate everything you do with QuickFrontierFix. Our chatbot and quick question form are here to help.
        </p>
        <button className="dummy-button check-address">Check My Address</button>
      </main>

      <footer className="footer">
        <p>© 2024 QuickFrontierFix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainApp;