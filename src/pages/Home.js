import React from "react";
import banner from "../images/food.jpeg";
import {Link} from 'react-router-dom'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food corner</h1>
        <p>Indian food at a click</p>
        
       <Link to='/'><button>Order Now</button></Link>
      </div>
    </div>
  );
}

export default Home;
