import "../blocks/header.css";
import React, {useContext } from "react";
import { Link} from "react-router-dom";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import logo from "../images/logo.png" ;
import av from "../images/av.jpg";





const Header = ()=> {
  const  workerId  = useContext(CurrentUserContext);
  console.log(workerId)

  return (
    <div className="header">
      <h1 className="header__logo-container"> <Link to="/"><img className="header__logo-img"  src={logo}/></Link></h1>
      <nav className="header__nav">
        <div className="header__avatar-container">
                  <div className="header__name">{workerId}</div>
                  {
                    <div className="header__avatar">
                      <Link to="/work">
                        <img
                          className="header__avatar-image"
                          src={av}
                          alt="avatar"
                        />
                      </Link>
                    </div>
                  }
                </div>
      </nav>

    </div>
  );
}
export default Header;
