import React, {useEffect} from 'react'
import logo from "../images/logo.svg"
import logo_grey from "../images/logo_grey.svg"
import {Link} from "react-router-dom";
import $ from "jquery"
import "../style/logo.css"
import {useHistory} from "react-router-dom"
import DelayLink from 'react-delay-link';

export const Logo = () => {
    let history = useHistory();
    useEffect(() => { 
        document.getElementById("logo_a").addEventListener("mouseenter", ()=> {
            $('#cursor_circle').height(window.innerHeight / 100);
            $('#cursor_circle').width(window.innerHeight / 100);
            $('#cursor_circle').css("background-color", "white");
        })
        document.getElementById("logo_a").addEventListener("mouseleave", ()=> {
            $('#cursor_circle').height(window.innerHeight / 20);
            $('#cursor_circle').width(window.innerHeight / 20);
            $('#cursor_circle').css("background-color", "transparent");
        })
        setTimeout(()=> {
            $('#logo_a').height($('#logo_img').height());
        },100)
    }, [])
    function animation(e, where) {
        e.preventDefault();
        $('.animator').css("transition", "top 0.4s, transform 0.6s 0.4s, width 0.6s 0.4s")
        $('.animator').css("top", "-50%")
        $('.animator').css("transform", "rotate(20deg)")
        $('.animator').css("width", "0%")
        setTimeout(()=> {
            document.getElementById('navigation').style.removeProperty('opacity')
            document.getElementById('navigation_full_size').style.removeProperty('opacity')
        },500)
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
        <Link id="logo_a" onClick={(e)=>animation(e, `/`)} className="position-fixed logo" to={`/`}>
            <img alt="logo" src={logo_grey} className="position-fixed logo" />
            <img id="logo_img" alt="logo" src={logo} className="position-fixed logo" />
        </Link>
        
    )
}
