import React, {useEffect, useState} from 'react'
import {Link, useLocation, useHistory} from "react-router-dom";
import "../style/navigation.css"
import $ from "jquery"
import { NavigationFullSize } from './NavigationFullSize';

export const Navigation = (props) => {
    let [isShowed, setIsShowed] = useState(false);
    let location = useLocation();
    let history = useHistory();
    let urls = [{
            path:"/kontserty/",
            id:"concerts"
        },{
            path:"/novosti/",
            id:"news"
        },{
            path:"/muzyika/",
            id:"music"
        },{
            path:"/foto/",
            id:"photo"
        },{
            path:"/videos/",
            id:"video"
        },{
            path:"/remixpack/",
            id:"remix"
        },{
            path:"/obo-mne/",
            id:"aboutMe"
        },{
            path:"/kontaktyi/",
            id:"contacts"
        }
    ]
    useEffect(() => {
        for(let url of urls) {
            if (url.path === location.pathname){
                document.getElementById(url.id).classList.add("active");
            }else {
                document.getElementById(url.id).classList.remove("active");
            }
        }
        $('#menu').height($('#menu').width()/ 8 * 3);
        $('#menu_circle').width($('#menu_circle').height());
        if(props.id !== undefined)
            document.getElementById(props.id).classList.add("active");
        let lis = document.getElementById("list").children
        for (var i=0, child; child=lis[i]; i++) {
            child.children[0].addEventListener("mouseenter", ()=> {
                $('#cursor_circle').height(window.innerHeight / 100);
                $('#cursor_circle').width(window.innerHeight / 100);
                $('#cursor_circle').css("background-color", "white");
            })
            child.children[0].addEventListener("mouseleave", ()=> {
                $('#cursor_circle').height(window.innerHeight / 20);
                $('#cursor_circle').width(window.innerHeight / 20);
                $('#cursor_circle').css("background-color", "transparent");
            })
        }
        if(isShowed) {
            document.getElementById("navigation_full_size").classList.remove("d-none");
            document.getElementById("navigation_full_size").classList.add("d-flex");
            document.getElementById("menu_circle").classList.add("animate");
            document.getElementById("myVideo").style.zIndex="6"
            setTimeout(()=>{
                document.getElementById("navigation_full_size").style.top = "0%";
                document.getElementById("navigation_full_size").style.opacity = "100%";
            },100)
            
        } else {
            document.getElementById("navigation_full_size").classList.add("d-none");
            document.getElementById("navigation_full_size").classList.remove("d-flex");
            document.getElementById("menu_circle").classList.remove("animate");
            document.getElementById("myVideo").style.zIndex="1"
            setTimeout(()=>{
                document.getElementById("navigation_full_size").style.top = "10%";
                document.getElementById("navigation_full_size").style.opacity = "0%"; 
            },200)
            
        }
    })
    window.addEventListener("resize", ()=> {
        $('#menu').height($('#menu').width()/ 8 * 3);
        $('#menu_circle').width($('#menu_circle').height());
        if(window.innerWidth >= 1200)
            setIsShowed(false)
    })

    function animation(e, where) {
        e.preventDefault();
        $('.animator').css("transition", "top 0.4s, transform 0.6s 0.4s, width 0.6s 0.4s")
        $('.animator').css("top", "-50%")
        $('.animator').css("transform", "rotate(20deg)")
        $('.animator').css("width", "0%")
        setTimeout(()=> {
            $('.animator').css("transition", "top 0s, transform 0s, width 0s")
            $('.animator').css("top", "100%");
            $('.animator').css("transform", "rotate(0deg)")
            $('.animator').css("width", "20%")
        },1000)
        setTimeout(()=> {
            history.push(where)
        },400)
    }

    return (
        <>
            <NavigationFullSize setIsShowed={setIsShowed} isShowed={isShowed} />

            <div id='navigation' style={{right:"4%", top: "6%", zIndex:'6'}} className="position-fixed text-right">
                <div id="menu" className="d-block d-xl-none position-fixed">
                    <button id="menu_circle" onClick={()=>{setIsShowed(!isShowed)}} className="h-100 d-inline-block position-relative">
                        <div id="dots_wrapper" style={{width:"65%", height:"65%",left: "50%", top:"50%", transform:"translate(-50%, -50%)"}} className="position-absolute">
                            <div id="dot1" style={{left: "15%", top:"50%", transform:"translate(0%, -50%)"}} className="dots d-inline-block position-absolute"></div>
                            <div id="dot2" style={{left: "50%", top:"50%", transform:"translate(-50%, -50%)"}} className="dots d-inline-block position-absolute"></div>
                            <div id="dot3" style={{right: "15%", top:"50%", transform:"translate(0%, -50%)"}} className="dots d-inline-block position-absolute"></div>
                        </div>
                    </button>
                    <div className="menu_label">
                        <span>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "Меню"
                            ) : (
                                "Menu"
                            )
                        }
                        </span>
                    </div>
                    <div className="menu_label menu_label_close">
                        <span>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "Закрыть"
                            ) : (
                                "Close"
                            )
                        }
                        </span>
                    </div>
                </div>
                
                <ul id="list" style={{zIndex:"6"}} className="list-unstyled  d-none d-xl-inline-block">
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/kontserty/`)} id="concerts" className="" to={`/kontserty/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "КОНЦЕРТЫ"
                            ) : (
                                "CONCERTS"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/novosti/`)} id="news" to={`/novosti/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "НОВОСТИ"
                            ) : (
                                "NEWS"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/muzyika/`)} id="music" to={`/muzyika/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "МУЗЫКА"
                            ) : (
                                "MUSIC"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/foto/`)} id="photo" to={`/foto/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "ФОТО"
                            ) : (
                                "PHOTO"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/videos/`)} id="video" to={`/videos/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "ВИДЕО"
                            ) : (
                                "VIDEO"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/remixpack/`)} id="remix" to={`/remixpack/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "РЕМИКС ПАК"
                            ) : (
                                "REMIX PACK"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/obo-mne/`)} id="aboutMe" to={`/obo-mne/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "ОБО МНЕ"
                            ) : (
                                "ABOUT ME"
                            )
                        }</Link>
                    </li>
                    <li className="navigatorLi">
                        <Link onClick={(e)=>animation(e,`/kontaktyi/`)} id="contacts" to={`/kontaktyi/`}>
                        {
                            (localStorage.getItem('language') === 'ru') ? (
                                "КОНТАКТЫ"
                            ) : (
                                "CONTACTS"
                            )
                        }</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
