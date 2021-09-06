import React from "react";
import './Footer.css';

const Footer=()=>{
    return (
        <div>
    <div className="footer">
        <span className="name">
        Inshorts made by -{""}
        <a href="">
        Shrishti
        </a>
        </span>
      <hr style={{width:"90%"}} /> 
      <div className="iconContainer">
          <a href="w">
              <i className="fab fa-instagram-square fa-3x"></i>
          </a>

          <a href="w">
              <i className="fab fa-linkedin fa-3x"></i>
          </a>

          <a href="w">
          <i className="fab fa-twitter fa-3x"></i>
          </a>
      </div>
    </div>
        </div>
    )
}

export default Footer