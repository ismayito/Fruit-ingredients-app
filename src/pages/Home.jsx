import React from 'react';
import './Pages.css';

const Home = () => (
  <div className="homeContainer">
    <div className="headSection">
      <section className="imageContainer">
        <img src="../assets/images/fruity.jpg" alt="fruityImage" className="fruityImage" />
      </section>
      <section className="introInfo">
        <p> this is a fruit ingredients app</p>
      </section>
    </div>
    <section className="inputContainer">
      <input type="search" placeholder="search..." className="input" />
    </section>
    <div className="cardContainer">
      <button className="button">Content goes here</button>
      <button className="button">Content goes here</button>
    </div>
  </div>
);

export default Home;
