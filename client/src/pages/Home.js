import React from 'react';
import './Home.css';
import backgroundImg from '../Images/pink.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background">
        <img src={backgroundImg} alt="Background" />
      </div>
      <div className="content">
        <h1>Welcome to Gabriela's portfolio</h1>
        <p>
          This portfolio is currently under construction
        </p>
        <div className="features">
          <div className="feature-item">
            <h3>Check my work</h3>
            <p>This is a project about</p>
          </div>
          <div className="feature-item">
            <h3>Check my work</h3>
            <p>This is a project about</p>
          </div>
          <div className="feature-item">
            <h3>Check my work</h3>
            <p>This is a project about</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
