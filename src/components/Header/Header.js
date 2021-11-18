import React from "react";
import { NavLink } from "react-router-dom";
import '../../stylesheet.css';
import '../../App.css';


const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">Новостник</div>
            <nav>
              <NavLink
                exact
                to="/"
                activeClassName={'my-active'}
                activeStyle={{
                  color: "blue"
                }}
              >
                Главная
              </NavLink>
              <NavLink
                exact
                to="/News"
                activeClassName={'my-active'}
                activeStyle={{
                  color: "blue"
                }}
              >
                Новости
              </NavLink>
              <NavLink
                exact
                to="/Contacts"
                activeClassName={'my-active'}
                activeStyle={{
                  color: "blue"
                }}
              >
                Контакты
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    )
}

export default Header;