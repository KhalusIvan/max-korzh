import React, {useState, useEffect} from 'react'
import $ from "jquery"
import dots from "../images/socialDots.png"
import arrow from "../images/arrow.png"
import "../style/social.css"

export const Social = () => {
    let [img, setImg] = useState(dots);
    let [isShowing, setIsShowing] = useState(false);
    let timeouts;
    useEffect(()=>{
        $('#social').height($('#social').width());
        $('#social_list').css("bottom", window.innerHeight * 4.2 / 100 + $('#social').width() + "px");
        document.getElementById("social_circle").addEventListener("mouseenter", ()=> {
            document.getElementById("cursor_circle").classList.remove("d-xl-block")
        })
        document.getElementById("social_circle").addEventListener("mouseleave", ()=> {
            document.getElementById("cursor_circle").classList.add("d-xl-block")
        })
    },[])
    useEffect(() => {
        document.getElementById("social").addEventListener("mouseenter", () => {
            clearTimeout(timeouts)
            setImg(arrow);
            setIsShowing(true);
            document.getElementById("social_list").style.zIndex="6"
        })
        document.getElementById("social").addEventListener("mouseleave", () => {
            clearTimeout(timeouts)
            setImg(dots);
            setIsShowing(false);
            timeouts = setTimeout(()=>{
                document.getElementById("social_list").style.zIndex="0"
            },1010)
        })
        document.getElementById("social_list").addEventListener("mouseenter", () => {
            clearTimeout(timeouts)
            setImg(arrow);
            setIsShowing(true);
            document.getElementById("social_list").style.zIndex="6 !important"
            $('#cursor_circle').height(window.innerHeight / 100);
            $('#cursor_circle').width(window.innerHeight / 100);
            $('#cursor_circle').css("background-color", "white");
            document.getElementById("social_circle_border_bottom").style.clipPath = "inset(50% 0% 0% 0%)"
            document.getElementById("social_circle_border_bottom1").style.clipPath = "inset(50% 0% 0% 0%)"
            document.getElementById("social_circle_border_top").style.clipPath = "inset(0% 0% 50% 0%)"
            document.getElementById("social_circle_border_top").style.transitionDelay = "0.3s"
        })
        document.getElementById("social_list").addEventListener("mouseleave", () => {
            clearTimeout(timeouts)
            setImg(dots);
            setIsShowing(false);
            $('#cursor_circle').height(window.innerHeight / 20);
            $('#cursor_circle').width(window.innerHeight / 20);
            $('#cursor_circle').css("background-color", "transparent");
            document.getElementById("social_circle_border_bottom").style.removeProperty("clip-path");
            document.getElementById("social_circle_border_bottom1").style.removeProperty("clip-path");
            document.getElementById("social_circle_border_top").style.removeProperty("clip-path");
            document.getElementById("social_circle_border_top").style.removeProperty("transition-delay");
            timeouts = setTimeout(()=>{
                document.getElementById("social_list").style.zIndex="0 !important"
            },1010)
        })
    })
    window.addEventListener("resize", () => {
        $('#social').height($('#social').width());
    })
    
    return (
        <>

            <div id="social" style={{bottom:'4.5%', left:"4%", width:"3.5%", zIndex:'6'}} className="position-fixed d-none d-lg-block">
                <div id="social_circle" className="w-100 h-100 position-relative">
                    <div className="social_circle_border_back"></div>
                    <div id="social_circle_border_bottom" className="social_circle_border social_circle_border_bottom"></div>
                    <div id="social_circle_border_bottom1" className="social_circle_border social_circle_border_bottom1"></div>
                    <div id="social_circle_border_top" className="social_circle_border social_circle_border_top"></div>
                    <img style={{top:"50%", left:"50%", transform: "translate(-50%, -50%)"}} alt="dots" src={img} className="h-25 w-25 position-absolute" />
                </div>
            </div>

            <div id="social_list" style={{bottom:'4.5%', left:"4%", height:"auto", zIndex:'0', paddingBottom:"5px"}} className="position-fixed d-none d-lg-block">
                <ul style={{lineHeight:"19px"}} className="list-unstyled">
                    <li className="social_li">
                        <a href="https://www.facebook.com/MaxKorzhOfficial" target="_blank" rel="noreferrer">FACEBOOK</a>
                    </li>
                    <li className="social_li">
                        <a href="https://twitter.com/MAX_KORZH_mus" target="_blank" rel="noreferrer">TWITTER</a>
                    </li>
                    <li className="social_li">
                        <a href="https://ok.ru/maxkorzh" target="_blank" rel="noreferrer">OK</a>
                    </li>
                    <li className="social_li">
                        <a href="https://www.instagram.com/maxkorzhmus/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                    </li>
                    <li className="social_li">
                        <a href="https://www.youtube.com/channel/UC1HJy3m76-yikrSMfljk21Q" target="_blank" rel="noreferrer">YOUTUBE</a>
                    </li>
                    <li className="social_li">
                        <a href="https://vk.com/maxkorzh" target="_blank" rel="noreferrer">VK</a>
                    </li>
                    <li className="social_li">
                        <a href="https://tlgg.ru/maxkorzh" target="_blank" rel="noreferrer">TELEGRAM</a>
                    </li>                   
                </ul>
            </div>

        </>
    )
}
      