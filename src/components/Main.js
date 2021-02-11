import React, {useEffect, useState} from 'react'
import {Route, Switch} from "react-router-dom";
import $ from "jquery"
import '../style/main.css';
import { ConcertsPage } from './ConcertsPage';
import { Navigation } from './Navigation';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { MainPage } from './MainPage';
import { NewsPage } from './NewsPage';
import { NewsPageOne } from './NewsPageOne';
import { MusicPage } from './MusicPage';
import { MusicPageOne } from './MusicPageOne';
import { PhotoPage } from './PhotoPage';
import { VideoPage } from './VideoPage';
import { RemixPage } from './RemixPage';
import { AboutMePage } from './AboutMePage';
import { ContactsPage } from './ContactsPage';
import { VideoBg } from './VideoBg';
import logo from "../images/logo.svg"
import logo_grey from "../images/logo_grey.svg"

export const Main = () => {
    let [isFirstLoad, setIsFirstLoad] = useState(true)
    useEffect(() => {
        $('#cursor_circle').width($('#cursor_circle').height());
        document.getElementById("bgFullScreen").addEventListener("mousemove", (e) => {
            $('#cursor_circle').css("left",e.clientX * 100 / window.innerWidth + "%")
            $('#cursor_circle').css("top",e.clientY * 100 / window.innerHeight + "%");
        })
        $(document).mouseleave(function () {
            $('#cursor_circle').css("opacity","0%")
        });
        $(document).mouseenter(function () {
            $('#cursor_circle').css("opacity","1")
        });
        setTimeout(()=> {
            setTimeout(()=>{
                document.getElementById("first_load").style.display = "none";
            },300)
            $('.animator').css("top", "-50%")
            $('.animator').css("transform", "rotate(20deg)")
            $('.animator').css("width", "0%")
            setTimeout(()=> {
                $('.animator').css("top", "100%");
                $('.animator').css("transform", "rotate(0deg)")
                $('.animator').css("width", "20%")
            },1000)
        },3000)
    }, [])
    
    window.addEventListener("resize", ()=> {
        $('#cursor_circle').width($('#cursor_circle').height());
    })

    return (
        <div id="bgFullScreen" className="bgFullScreen">
            <VideoBg />
            <div id="cursor_circle" style={{border:"2px solid white", borderRadius:"50%", height:"4%"}} className="position-relative d-none d-xl-block"></div>
            <div>
                <div style={{left:"0%"}} className="animator"></div>
                <div style={{left:"20%"}} className="animator"></div>
                <div style={{left:"40%"}} className="animator"></div>
                <div style={{left:"60%"}} className="animator"></div>
                <div style={{left:"80%"}} className="animator"></div>
            </div>
            <div id="first_load" style={{zIndex:"1000", top:"0%", left:"0%", backgroundColor:"rgb(94, 94, 94)"}} className="position-fixed w-100 h-100">
                <img id="loading_logo_grey" alt="logo" src={logo_grey} className="position-fixed loading_logo" />
                <img id="loading_logo" alt="logo" src={logo} className="position-fixed loading_logo" />
            </div>
            <Logo />
            <Navigation />
            <Footer />
            <Switch>
                
                <Route exact path='/' render={() => <MainPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/kontserty/' render={() => <ConcertsPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/novosti/:id/' render={() => <NewsPageOne setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/novosti/' render={() => <NewsPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/muzyika/:id' render={() => <MusicPageOne setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/muzyika/' render={() => <MusicPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/foto/' render={() => <PhotoPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/videos/' render={() => <VideoPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/remixpack/' render={() => <RemixPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/obo-mne/' render={() => <AboutMePage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
                <Route path='/kontaktyi/' render={() => <ContactsPage setIsFirstLoad={setIsFirstLoad} isFirstLoad={isFirstLoad} />}/>
            </Switch>
        </div>
    )
}
