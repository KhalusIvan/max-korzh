import React, {useEffect} from 'react'
import {Link, useHistory, useLocation} from "react-router-dom";
import "../style/navigation.css"
import $ from "jquery"


export const NavigationFullSize = (props) => {
    let location = useLocation();
    let history = useHistory()
    let urls = [{
            path:"/kontserty/",
            id:"concertsFull"
        },{
            path:"/novosti/",
            id:"newsFull"
        },{
            path:"/muzyika/",
            id:"musicFull"
        },{
            path:"/foto/",
            id:"photoFull"
        },{
            path:"/videos/",
            id:"videoFull"
        },{
            path:"/remixpack/",
            id:"remixFull"
        },{
            path:"/obo-mne/",
            id:"aboutMeFull"
        },{
            path:"/kontaktyi/",
            id:"contactsFull"
        }
    ]
    
    useEffect(()=> {
        for(let url of urls) {
            if (url.path === location.pathname){
                document.getElementById(url.id).classList.add("active");
            }else {
                document.getElementById(url.id).classList.remove("active");
            }
        }
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
            props.setIsShowed(!props.isShowed)
            history.push(where)
        },400)
    }

    return (
        <div id="navigation_full_size" style={{zIndex:'6'}} className="bgFullScreen position-fixed d-flex">
            <div style={{width:"40%"}}  className="h-100 position-relative">
                <ul style={{lineHeight:"19px"}} className="list-unstyled social_block">
                    <li className="full_navigation_li">
                        <a href="https://www.facebook.com/MaxKorzhOfficial" target="_blank" rel="noreferrer">FACEBOOK</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://twitter.com/MAX_KORZH_mus" target="_blank" rel="noreferrer">TWITTER</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://ok.ru/maxkorzh" target="_blank" rel="noreferrer">OK</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://www.instagram.com/maxkorzhmus/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://www.youtube.com/channel/UC1HJy3m76-yikrSMfljk21Q" target="_blank" rel="noreferrer">YOUTUBE</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://vk.com/maxkorzh" target="_blank" rel="noreferrer">VK</a>
                    </li>
                    <li className="full_navigation_li">
                        <a href="https://tlgg.ru/maxkorzh" target="_blank" rel="noreferrer">TELEGRAM</a>
                    </li>                   
                </ul>
                <div id="buttonsLanguage">
                    <button id="languageSwitcher1" className="languageButton activeLanguage">
                        RU
                    </button>
                    <button id="languageSwitcher2" className="languageButton">
                        EN
                    </button>
                </div>
            </div>
            <div style={{width:"60%"}} className="h-100 position-relative">
                <ul id="fullList" className="list-unstyled navigator_block d-inline-block text-left">
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/kontserty/`)} id="concertsFull" className="" to={`/kontserty/`}>КОНЦЕРТЫ</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/novosti/`)} id="newsFull" to={`/novosti/`}>НОВОСТИ</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/muzyika/`)} id="musicFull" to={`/muzyika/`}>МУЗЫКА</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/foto/`)} id="photoFull" to={`/foto/`}>ФОТО</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/videos/`)} id="videoFull" to={`/videos/`}>ВИДЕО</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/remixpack/`)} id="remixFull" to={`/remixpack/`}>РЕМИКС ПАК</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/obo-mne/`)} id="aboutMeFull" to={`/obo-mne/`}>ОБО МНЕ</Link>
                    </li>
                    <li className="fullnavigatorLi">
                        <Link onClick={(e)=>animation(e,`/kontaktyi/`)} id="contactsFull" to={`/kontaktyi/`}>КОНТАКТЫ</Link>
                    </li>
                </ul>
                <div className="developer_block">
                    <span className="d-inline-block">
                        MADE BY <a className="developer_link" href="#" style={{letterSpacing: "0em"}}>ADVANCED TEAM</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
