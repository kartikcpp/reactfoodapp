import React,{useState} from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [showLinks,setShowLinks]=useState(false);
    function click(){
        setShowLinks(!showLinks)
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks?"open":"close"}>
        <img src={logo} alt="logo"/>

        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/menu">menu</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/menu">menu</Link>
        <button onClick={click}> <ReorderIcon/></button>
       
      </div>
    </div>
  );
}

export default Navbar;
