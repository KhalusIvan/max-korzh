import React, {useState} from 'react'
import bg1 from "../images/bg1.jpg"
import bg1small from "../images/bg1small.jpg"
import bg2 from "../images/bg2.jpg"
import bg2small from "../images/bg2small.jpg"
import bg3 from "../images/bg3.jpg"
import bg3small from "../images/bg3small.jpg"
import bg4 from "../images/bg4.jpg"
import bg4small from "../images/bg4small.jpg"
import { Social } from './Social';
import { AboutMe } from './AboutMe';
import "../style/aboutMe.css"

export const AboutMePage = (props) => {
    let [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 768 && width <= 768) {
            setWidth(window.innerWidth)
        } else if (window.innerWidth <= 768 && width > 768) {
            setWidth(window.innerWidth)
        }
    })
    return (
        <>
            <div id="sliderBg" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item h-100 active" datainterval="3000">
                        <img src={window.innerWidth > 768 ? bg1 : bg1small} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item h-100" datainterval="3000">
                        <img src={window.innerWidth > 768 ? bg2 : bg2small} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item h-100" datainterval="3000">
                        <img src={window.innerWidth > 768 ? bg3 : bg3small} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item h-100" datainterval="3000">
                        <img src={window.innerWidth > 768 ? bg4 : bg4small} className="d-block w-100 h-100" alt="..." />
                    </div>
                </div>
            </div>

            <div>
                <Social />
                <AboutMe setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />
            </div>  
        </>
    )
}
