import React from 'react';
import Header from './Header';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='main-content'>
        {/* Your main content goes here */}
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}
