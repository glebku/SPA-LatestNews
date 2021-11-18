import React from "react";
import NewsFilter from "../NewsFilter/NewsFilter";
import './NewsList.scss';


const NewsList = props => {
    return (
        <div className="newsList">
            <div className="container">
            <h1 className="news-title title">Быть <br/>
                в курсе <span className="accent-text">событий</span></h1>
                <div className="newsListWrapper">
                    {
                        <NewsFilter 
                        news={props.news}
                        number={20}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsList;