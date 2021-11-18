import React from "react";
import imageSrc from "./img/my-photo1.JPG";
import './Contacts.scss'

const Contacts = () => {
    return (
        <div className="container">
            <div className="contacts">
                <div className="contacts-left">
                    <span className="number"><a href="tel:+375 (29) 135 17 61">+375 (29) 135 17 61</a></span>
                    <span className="full-name">Глеб <br/> Кушель</span>
                    
                    <span className="mail">glebko91@gmail.com</span>
                    <span className="prof">JavaScript разработчик</span>
                    <span className="spec">ES5, ES6, <span className="accent-text">React</span></span>
                </div>
                <div className="contacts-right">
                    <img className="my-photo1" title="my-photo1" src={imageSrc} alt="my-photo1"/>
                </div>        
            </div>
        </div>
    )
}

export default Contacts;