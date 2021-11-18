import React from "react";
import NewsFilter from "../NewsFilter/NewsFilter";
import './MainPage.scss'


const MainPage = props => {
    return (
        <div className="newsList">
            <div className="container">
                <h1 className="news-title title">Всегда <br />
                    свежие <span className="accent-text">новости</span></h1>
                <div className="news-wrapper">
                    {
                        <NewsFilter
                            news={props.news}
                            number={6}
                        />
                    }
                </div>
            </div>
        </div>
    )
}


export default MainPage;