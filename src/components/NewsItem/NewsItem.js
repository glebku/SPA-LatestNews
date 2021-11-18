import React from "react";
import { withRouter } from "react-router-dom";
import { getDay, getMonth } from "../../ProjectUtilities/ProjectUtilities";
import './NewsItem.scss';



const NewsItem = props => {
    let day = getDay(props.date);
    let month = getMonth(props.date);
    return (
        <div className="news-item">
            <div className="title" onClick={() => {
                props.history.push('/News/' + props.title, [props.date, props.description, props.image, props.author, props.title])
            }}
            >
                {props.title}
            </div>
            <div className="news-item-info">
                <div className="url">
                    {props.author}
                </div>
                <div className="date">
                    <span className="day">{day}</span>
                    <span className="month">{'/'}{month}</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewsItem);