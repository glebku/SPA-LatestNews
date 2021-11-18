import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.scss';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="text" style={{
                    fontSize: 20,
                    lineHeight: 24,
                    marginTop: 70,
                    textAlign: "left"
                }}>
                    <NavLink
                        exact
                        to="/Keep abreast of events"
                        activeClassName={'my-active'}
                        activeStyle={{
                            color: "blue"
                        }}
                    >
                        Быть в курсе событий
                    </NavLink>
                </div>
            </div>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="logo">
                        <span className="spa-name">Новостник</span>
                        <span className="spa">Single Page Aplication</span>
                    </div>
                    <span className="project">Дипломный проект</span>
                    <div className="created">

                        <span className="made-by">made by</span>
                        <span className="name">Кушель Глеб</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;