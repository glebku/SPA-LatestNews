import React from "react";
import {useLocation} from 'react-router-dom';
import { getDay, getMonth } from "../../ProjectUtilities/ProjectUtilities";
import './NewsDetail.scss'


const NewsDetail = props => {
    const location = useLocation()
    let day = getDay(props.location.state[0]);
    let month = getMonth(props.location.state[0]);
    return (
        <div className="container">
            <div className="news-detail">
                <div className="news-detail-left">
                    <h1>{props.location.state[4]}</h1>
                    <div className="date">
                    <span className="day">{day}</span>
                    <span className="month">{'/'}{month}</span>
                </div>
                    <div className="author">{props.location.state[3]}</div>
                </div>
                <div className="news-detail-right">
                    <div className="news-detail-img">
                        <img src={props.location.state[2]}></img>
                    </div>
                    <div className="news-detail-descr">{props.location.state[1]}</div>
                </div>            
            </div>
        </div>
    )
}

export default NewsDetail;