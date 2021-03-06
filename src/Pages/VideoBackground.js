import React, { Component } from 'react';
import "../Pages/VideoBackground.css";
import titleVideo from "../Pages/video.mp4"
import LinkButton from "../components/LinkButton";


export default class Home extends Component {
    
    render() {
        
        return (
    <div className="intro">
                    <video className="title-video" autoPlay loop muted >
                        <source src = {titleVideo} type = 'video/mp4'/>
                        <source src = {titleVideo} type = 'video/ogg' codecs= 'theora, vorbis'/>
                    </video>
            <div className="text-section">
                <h1 className="background-title"><nobr >ПРОФЕСІЙНЕ</nobr> СТВОРЕННЯ <br/>САЙТІВ</h1>
                <div className="desc">Ми не просто створюємо сайти,<br/> ми створюємо емоції.</div>
               <LinkButton link={"container"} text={"Замовити"}/>
            </div>
            
    </div>
        

        )
    }
}