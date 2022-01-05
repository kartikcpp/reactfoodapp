import React from "react";
import '../styles/Menu.css';
import MenuItem from "../components/MenuItem";
import { MenuList } from "../data/data";
function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">
        <h1 style={{textAlign:'center'}}> Our MENU</h1> 
        <div className="menuList">
          {MenuList.map((item,index) => {
            return (
              <MenuItem key={index} image={item.image} price={item.price} name={item.name}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
