import React from "react";
import './NavInshorts.css';
import  SwipeableTemporaryDrawer from './hamburgericon'
const NavInshorts=({setCategory})=>{
    return(
         <div className="nav">
        <div className="icon">
        <SwipeableTemporaryDrawer setCategory={setCategory}/>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47-VkSI7z7y_huolsVwJVQwHYEJnBkgXvV_8_JeJkdRzrLbgr3-qb_AeuRY2RcLwFhww&usqp=CAU" 
        height='80%'
        style={{cursor:"pointer"}} alt="logo"/>
       </div>
       
        
    )
}

export default NavInshorts;