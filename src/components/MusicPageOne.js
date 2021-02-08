import React, {useState, useEffect} from 'react'
import album1 from "../images/album1.jpg"
import album2 from "../images/album2.jpg"
import album3 from "../images/album3.jpg"
import music1 from "../audio/ee-vinoi.mp3"
import music2 from "../audio/teplo.mp3"
import music3 from "../audio/vremena.mp3"
import "../style/music.css"
import { Social } from './Social';
import arrow from "../images/arrow.png"
import {useHistory} from "react-router-dom"
import $ from 'jquery'

export const MusicPageOne = (props) => {
    let history = useHistory();
    let musics = [
        {
            photo:album1,
            title:(localStorage.getItem('language') === 'ru') ? ("её виной") : ("Yeyo Vinoy (Her Fault)"),
            year:"2020",
            href:"ee-vinoi",
            music:music1,
            time: "06:07"
        },
        {
            photo:album2,
            title:(localStorage.getItem('language') === 'ru') ? ("тепло") : ("Teplo (Warm)"),
            year:"2020",
            href:"teplo",
            music:music2,
            time:"03:32"
        },
        {
            photo:album3,
            title:(localStorage.getItem('language') === 'ru') ? ("времена") : ("Vremena (Times)"),
            year:"2020",
            href:"vremena",
            music:music3,
            time:"05:19"
        },
    ];
    let musicsHref = history.location.pathname.split('/')[history.location.pathname.split('/').length-2];
    let musicsIndex = 0;
    for(let i = 0; i < musics.length; i++) {
        if(musics[i].href === musicsHref) {
            musicsIndex = i;
            break;
        }    
    }
    let [play, setPlay] = useState(false);
    let [audio, setAudio] = useState(new Audio(musics[musicsIndex].music));
    let [isDrag, setIsDrag] = useState(false)
    let player = null;
    useEffect(() => {
        document.getElementById("one_music_player").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("one_music_player").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("one_music_player").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("one_music_player").style.paddingTop = "0px";
        document.getElementById("one_music_player").style.opacity = "100%";
        $('#button_top').height($('#button_top').width()/ 8 * 3);
        $('#back_circle').width($('#back_circle').height());
    }, [])
    useEffect(()=>{
        let dot = document.getElementById('one_music_player_bar_dot')
        let fillLine = document.getElementById('one_music_player_bar_fill')
        /*dot.addEventListener('mousedown',()=> {
            setIsDrag(true)
            console.log(111 + '--------------------' + 111)
        })*/
        
        props.setIsFirstLoad(false)
        document.getElementById('navigation').style.opacity = "0%"
        document.getElementById('navigation_full_size').style.opacity = "0%"
        setTimeout(()=>{
            document.getElementById('navigation').style.display = "none"
            document.getElementById('navigation_full_size').style.display = "none"
            document.getElementById('button_top').style.opacity="100%"
        },200)
    })
    /*window.addEventListener('mousemove',(e)=> {
        console.log(isDrag)
        if(isDrag) {
            let music_bar = document.getElementById('one_music_player')
            if (music_bar !== null) {
                let startPos = music_bar.offsetLeft - music_bar.offsetWidth / 2
                let dif = e.clientX - startPos
                let percent = dif * 100 / music_bar.offsetWidth;
                if (percent < 0) {
                    percent = 0
                } else if (percent > 100) {
                    percent = 100;
                }
                let dot = document.getElementById('one_music_player_bar_dot')
                let fillLine = document.getElementById('one_music_player_bar_fill')
                dot.style.left = percent + "%";
                fillLine.style.width = percent + "%";
            }
        }
    })
    window.addEventListener('mouseup',()=> {
        setIsDrag(false)
        console.log(222)
    })*/
    useEffect(()=>{
        let dot = document.getElementById('one_music_player_bar_dot')
        let fillLine = document.getElementById('one_music_player_bar_fill')
        if(play === true) {
            audio.play( );
            document.getElementById('one_music_player_title').style.color="#ffca18"
            document.getElementById('current_time').style.color="#ffca18"
            let timer = document.getElementById('current_time')
                let timeInSecond = Math.ceil(parseFloat(audio.currentTime, 10))
                let seconds = timeInSecond % 60;
                let minutes = (timeInSecond - seconds) / 60
                let timeString = `${minutes < 10? '0'+minutes:minutes}:${seconds < 10? '0'+seconds:seconds} `
                timer.innerHTML = timeString
                let percent = 100 * timeInSecond / Math.ceil(parseFloat(audio.duration, 10))
                if(!isDrag) {
                    console.log("plaaaaaaaaaaaaaaayyyyyyy")
                    fillLine.style.width = percent + "%";
                    dot.style.left = percent + "%";
                }
            player = setInterval(()=>{
                let timeInSecond = Math.ceil(parseFloat(audio.currentTime, 10))
                let seconds = timeInSecond % 60;
                let minutes = (timeInSecond - seconds) / 60
                let timeString = `${minutes < 10? '0'+minutes:minutes}:${seconds < 10? '0'+seconds:seconds} `
                timer.innerHTML = timeString
                let percent = 100 * timeInSecond / Math.ceil(parseFloat(audio.duration, 10))
                if(!isDrag) {
                    fillLine.style.width = percent + "%";
                    dot.style.left = percent + "%";
                }
            }, 1000)
        }
    }, [play])
    function playerControl() {
        if(play === false) {
            setPlay(true);
        } else {
            document.getElementById('one_music_player_title').style.color="#ffffff"
            document.getElementById('current_time').style.color="#ffffff"
            clearInterval(player);
            audio.pause();
            setPlay(false);         
        }
    }
    function animationFinish(e, where) {
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
            document.getElementById('navigation').style.removeProperty('opacity')
            document.getElementById('navigation').style.removeProperty('display')
            document.getElementById('navigation_full_size').style.removeProperty('opacity')
            document.getElementById('navigation_full_size').style.removeProperty('display')
            history.push(where)
        },400)
    }
    return (
        <>
            <Social />
            <div id="button_top" onClick={(e)=>{animationFinish(e,`/muzyika/`)}} style={{right:"4%", top: "6%", zIndex:'6', opacity:'0%'}} className="position-fixed d-flex align-items-center">
                <div id="back_style"><span>{(localStorage.getItem('language') === 'ru') ? ('Назад') : ("Back")}</span></div>
                <div id="back_circle" className="back_circle">
                    <div className="back_circle_border_back"></div>
                    <div id="back_circle_border_bottom" className="back_circle_border back_circle_border_bottom"></div>
                    <div id="back_circle_border_bottom1" className="back_circle_border back_circle_border_bottom1"></div>
                    <div id="back_circle_border_top" className="back_circle_border back_circle_border_top"></div>
                    <img style={{top:"50%", left:"50%", transform: "translate(-50%, -50%) rotate(-90deg)"}} alt="dots" src={arrow} className="h-25 w-25 position-absolute" />
                </div>
            </div>
            <div style={{top:"0%", zIndex:"5", overflowY: "scroll", overflowX:"hidden",backgroundColor:"#3d3d3c"}} className="position-fixed w-100 h-100">
                <img style={{filter:'blur(10px)'}} src={musics[musicsIndex].photo} alt="albumBg" className="w-100 h-100 d-block" />
                <div className="one_music_content">
                    <img className="one_music_content_image" style={{transition: "all .5s"}} src={musics[musicsIndex].photo} alt="albumBg" />
                    <div id="one_music_player" style={{opacity:"0%", paddingTop: "10%"}} className="one_music_player">
                        <div className="one_music_player_text">
                            <div id="one_music_controller+title" className="d-flex justify-content-between">
                            {
                                play?(
                                    <svg id='one_music_player_controller' onClick={()=>{playerControl()}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffca18" className="bi bi-pause-fill" viewBox="0 0 24 24">
                                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                                    </svg>) :
                                (
                                    <svg id='one_music_player_controller' onClick={()=>{playerControl()}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-play-fill" viewBox="0 0 24 24">
                                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                )
                            }
                                
                                <div id="one_music_player_title">
                                    {musics[musicsIndex].title}
                                </div>
                            </div>
                            <div id="one_music_time" className="d-flex justify-content-between">
                                <div id="current_time">00:00</div>
                                <div id="all_time">{musics[musicsIndex].time}</div>
                            </div>
                        </div>
                        <div id="one_music_player_bar">
                            <div id="one_music_player_bar_fill"></div>
                            <div id="one_music_player_bar_dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
