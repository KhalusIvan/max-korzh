import React, {useEffect} from 'react'
import "../style/footer.css"
import $ from "jquery"

export const Footer = () => {
    useEffect(() => {
        document.getElementById("developers").addEventListener("mouseenter", ()=> {
            $('#cursor_circle').height(window.innerHeight / 100);
            $('#cursor_circle').width(window.innerHeight / 100);
            $('#cursor_circle').css("background-color", "white");
        })
        document.getElementById("developers").addEventListener("mouseleave", ()=> {
            $('#cursor_circle').height(window.innerHeight / 20);
            $('#cursor_circle').width(window.innerHeight / 20);
            $('#cursor_circle').css("background-color", "transparent");
        })

        document.getElementById("languageSwitcherFooter1").addEventListener("mouseenter", ()=> {
            $('#cursor_circle').height(window.innerHeight / 150);
            $('#cursor_circle').width(window.innerHeight / 150);
            $('#cursor_circle').css("background-color", "#FFCA18");
            $('#cursor_circle').css("border-width", "0px");
        })
        document.getElementById("languageSwitcherFooter1").addEventListener("mouseleave", ()=> {
            $('#cursor_circle').height(window.innerHeight / 20);
            $('#cursor_circle').width(window.innerHeight / 20);
            $('#cursor_circle').css("background-color", "transparent");
            $('#cursor_circle').css("border-width", "1px");
        })

        document.getElementById("languageSwitcherFooter2").addEventListener("mouseenter", ()=> {
            $('#cursor_circle').height(window.innerHeight / 150);
            $('#cursor_circle').width(window.innerHeight / 150);
            $('#cursor_circle').css("background-color", "#FFCA18");
            $('#cursor_circle').css("border-width", "0px");
        })
        document.getElementById("languageSwitcherFooter2").addEventListener("mouseleave", ()=> {
            $('#cursor_circle').height(window.innerHeight / 20);
            $('#cursor_circle').width(window.innerHeight / 20);
            $('#cursor_circle').css("background-color", "transparent");
            $('#cursor_circle').css("border-width", "1px");
        })
    }, [])
    return (
        <div id="footer" style={{zIndex:'6'}} className="position-fixed">
            <span className="d-none d-xl-inline-block">
                MADE BY <a id="developers" href="#" style={{letterSpacing: "0em"}}>KHALUS IVAN</a>
                <span style={{marginLeft:"20px", marginRight:"16px"}}>|</span>
            </span>
            <button id="languageSwitcherFooter1" className="languageButtonFooter d-none d-md-inline-block activeLanguageFooter">
                RU
            </button>
            <button id="languageSwitcherFooter2" className="languageButtonFooter d-none d-md-inline-block">
                EN
            </button>
        </div>
    )
}
