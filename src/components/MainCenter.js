import React, {useEffect} from 'react'
import "../style/mainCenter.css"

export const MainCenter = (props) => {
    useEffect(() => {
        document.getElementById("main_textBlock").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("main_textBlock").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("main_textBlock").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("main_textBlock").style.paddingTop = "0px";
        document.getElementById("main_textBlock").style.opacity = "100%";
    }, [])
    return (
        <div style={{left:'12.5%', top:"0%", zIndex:"3"}} className="position-fixed h-100 w-75">
            <div id="main_textBlock" style={{opacity:"0%", paddingTop: "10%", top:"50%", transition:"all 1.5s ease 0.2s", left:"10%", fontSize:"100px", fontWeight:"600", fontFamily:"'Montserrat', sans-serif" }} className="position-absolute">
                <h1 id="text_title">
                    МАКС КОРЖ
                </h1>
                <h1 id="textStroked">
                    OFFICIAL SITE
                </h1>
            </div>
        </div>
    )
}