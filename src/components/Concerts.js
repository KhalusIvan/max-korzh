import React, {useEffect, useState} from 'react'
import "../style/concerts.css"
import $ from "jquery"
import logo from "../images/logo.svg"
import logo_grey from "../images/logo_grey.svg"
import arrow from "../images/arrow.png"


export const Concerts = (props) => {
    let [concertId, setConcertId] = useState(0)
    let lastScrollTop = 0;
    useEffect(() => {
        document.getElementById("concert_list").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("concert_list").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("concert_list").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }   
        document.getElementById("concert_list").style.paddingTop = "0px";
        document.getElementById("concert_list").style.opacity = "1";
        let lis = document.getElementById("concert_list").children
        let scrollDiv = document.getElementById("concert_scroll")
        document.getElementById("concert_div").addEventListener("scroll", (e)=>{
            clearTimeout();
            let clientH = document.getElementById("concert_div").clientHeight;
            let scrollH = document.getElementById("concert_div").scrollHeight;
            let scrollRange = scrollH - clientH - 10;
            let percent = e.target.scrollTop * 100 / scrollRange;
            scrollDiv.style.width = percent + "%";
            var st = e.target.scrollTop;
            if (st > lastScrollTop){
                for (var i=0, child; child=lis[i]; i++) {
                    child.style.transform="rotate(3deg)"
               }
            } else {
                for (var i=0, child; child=lis[i]; i++) {
                    child.style.transform="rotate(-3deg)"
               }
            }
            lastScrollTop = st;
            setTimeout(()=> {
                for (var i=0, child; child=lis[i]; i++) {
                    child.style.transform="rotate(0deg)"
               }
            },200)
        })
        
        for (var i=0, child; child=lis[i]; i++) {
            let child_1 = child.children;
            for (var j=0, child1; child1=child_1[j]; j++) {
                child1.addEventListener("mouseenter", ()=> {
                    $('#cursor_circle').empty();
                    $('#cursor_circle').height(window.innerHeight / 8);
                    $('#cursor_circle').width(window.innerHeight / 8);
                    $('#cursor_circle').css("background-color", "#1589FF");
                    $('#cursor_circle').css("border", "2px solid transparent");
                    setTimeout(() => {
                        $('#cursor_circle').append(`<div style={{textTransform:'uppercase'}} id='cursor_text'>${
                            (localStorage.getItem('language') === 'ru') ? ("Купить билет") : ("Buy ticket")
                        }</div>`);
                    }, 0)
                    
                })
                child1.addEventListener("mouseleave", ()=> {
                    $('#cursor_circle').height(window.innerHeight / 20);
                    $('#cursor_circle').width(window.innerHeight / 20);
                    $('#cursor_circle').css("background-color", "transparent");
                    $('#cursor_circle').css("border", "2px solid white");
                    $('#cursor_circle').empty();
                    
                })
            }
       }
    }, [])
    window.addEventListener("resize", ()=> {

    })
    let concerts = [
        {
            id:0,
            place:"STADIUM SKONTO",
            where:(localStorage.getItem('language') === 'ru') ? ("РИГА (ЛАТВИЯ)") : ("RIGA (LATVIA)"),
            when:(localStorage.getItem('language') === 'ru') ? ("22 МАЯ 2021") : ("22 MAY 2021"), 
            operators:[
                {"fanaticka":"https://fanaticka.live/event/MaxKorzhSkonto"},
                {"bilesuserviss": "https://store.bilesuserviss.lv/public/?concert=305385&lang=lat&center=126&policy=1&design=&shop_provider=korzh#view=ticketsselect"}
            ]
        },
        {
            id:1,
            place:(localStorage.getItem('language') === 'ru') ? ("ЕКАТИРИНБУРГ АРЕНА") : ("YEKATERINBURG ARENA"),
            where:(localStorage.getItem('language') === 'ru') ? ("ЕКАТЕРИНБУРГ (РОССИЯ)") : ("YEKATERINBURG (RUSSIA)"),
            when:(localStorage.getItem('language') === 'ru') ? ("12 ИЮНЯ 2021") : ("12 JUNE 2021"),
            operators:[
                {"fanaticka":"https://fanaticka.live/event/maxkorzhekb"},
                {"kassir ru": "https://ekb.kassir.ru/koncert/maks-korj#51199"},
                {"kassi ru": "https://ekb.kassy.ru/events/koncerty-i-shou/2-23948/"}
            ]
        },
        {
            id:2,
            place:(localStorage.getItem('language') === 'ru') ? ("СТАДИОН СПАРТАК") : ("STADIUM SPARTAK"),
            where:(localStorage.getItem('language') === 'ru') ? ("НОВОСИБИРСК (РОССИЯ)") : ("NOVOSIBIRSK (RUSSIA)"),
            when:(localStorage.getItem('language') === 'ru') ? ("26 ИЮНЯ 2021") : ("26 JUNE 2021"),
            operators:[
                {"fanaticka":"https://fanaticka.by/event/KorzhNovosib"},
                {"kassir ru": "https://nsk.kassir.ru/koncert/maks-korj#10681"},
                {"kassi ru": "https://nsk.kassy.ru/events/koncerty-i-shou/2-27092/sections/"}
            ]
        },
        {
            id:3,
            place:(localStorage.getItem('language') === 'ru') ? ("СТАДИОН ЧЕРНОМОРЕЦ") : ("CHERNOMORETS STADIUM"),
            where:(localStorage.getItem('language') === 'ru') ? ("ОДЕССА (УКРАИНА)") : ("ODESSA (UKRAINE)"),
            when:(localStorage.getItem('language') === 'ru') ? ("24 ИЮЛЯ 2021") : ("24 JULY 2021"),
            operators:[
                {"concert.ua":"https://concert.ua/ru/booking/max-korzh-odessa/"},
                {"fanaticka": "https://fanaticka.live/event/MaksKorzhOdessa"}
            ]
        },
        {
            id:4,
            place:(localStorage.getItem('language') === 'ru') ? ("ГАЗПРОМ АРЕНА") : ("GAZPROM ARENA"),
            where:(localStorage.getItem('language') === 'ru') ? ("САНКТ-ПЕТЕРБУРГ (РОССИЯ)") : ("SAINT-PETERSBURG (RUSSIA)"),
            when:(localStorage.getItem('language') === 'ru') ? ("4 СЕНТЯБРЯ 2021") : ("4 SEPTEMBER 2021"),
            operators:[
                {"fanaticka":"https://fanaticka.ru/event/maxkorzh_piter"},
                {"alloshow": "https://alloshow.ru/activity/maks-korzh-v-peterburge#04-sentyabrya-2021-19-00"}
            ]
        },
    ];
    let ConsertsList = concerts.map(concert => {
        return <li className="concert_li" key={concert.id}>
            <button type="button" onClick={()=>{setConcertId(concert.id); setTimeout(()=>{$("#back_circle").width($("#back_circle").height())},200)}} className="text-left" data-toggle="modal" data-target="#exampleModal">
                <div className="concert_place">{concert.place}</div>
                <div className="concert_where">{concert.where}</div>
                <div className="concert_when">{concert.when}</div>
            </button>
        </li>
    }) 
    function Operators() {
        let array = concerts[concertId].operators.map(el =>{
            let title = Object.keys(el)[0]
            let hrefEl = el[title];
            return <li key={hrefEl} className="d-block">
                    <a href={hrefEl} target="_blank" className="ticket_block"> 
                        <div alt="logo" style={{marginLeft:"10%"}} className="ticket_block_img" />
                        <div className="ticket_block_text">{title}</div>
                </a>
            </li>
        })
        return <div style={{padding:"5% 0 0 0"}}>
            {array}
        </div>
    }
    return (
        <>
            <div style={{height:"4px", backgroundColor:"#ffca18", zIndex:"100", left:'0%', top:"0%"}} id="concert_scroll" className="position-fixed"></div>
            <div id="concert_div" style={{paddingLeft:'13%', top:"0%", overflowY: "scroll", overflowX:"hidden", zIndex:'3'}} className="position-fixed h-100 w-100">              
                <ul id="concert_list" style={{paddingTop:"10%", opacity:"0%"}} className="list-unstyled w-75">
                    {ConsertsList}
                </ul>
                
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div id="modal_window" className="modal-dialog modal-dialog-centered">
                    <div style={{backgroundColor:"#2a2b2a"}} className="modal-content">
                        <div className="modal-body">
                            <div className="d-flex justify-content-between modal_header">
                                <div style={{paddingLeft:"3%", position:"relative"}}>
                                    <img alt="logo" src={logo_grey} className="" />
                                    <img style={{transform:"translate(-100%,0%)"}} id="logo_img" alt="logo" src={logo} className="position-absolute" />
                                </div>
                                <button id="button_back" type="button" data-dismiss="modal" aria-label="Close" style={{paddingRight:"3%", width:"60%"}} className="d-flex align-items-center justify-content-end">
                                    <div id="back_style">
                                        {
                                            (localStorage.getItem('language') === 'ru') ? (
                                                "Назад к расписанию"
                                            ) : (
                                                "Back to concert"
                                            )
                                        }
                                        </div>
                                    <div id="back_circle" className="h-100 position-relative back_circle">
                                        <div className="back_circle_border_back"></div>
                                        <div id="back_circle_border_bottom" className="back_circle_border back_circle_border_bottom"></div>
                                        <div id="back_circle_border_bottom1" className="back_circle_border back_circle_border_bottom1"></div>
                                        <div id="back_circle_border_top" className="back_circle_border back_circle_border_top"></div>
                                        <img style={{top:"50%", left:"50%", transform: "translate(-50%, -50%) rotate(-90deg)"}} alt="dots" src={arrow} className="h-25 w-25 position-absolute" />
                                    </div>
                                </button>
                            </div>
                            <div className="concert_modal">
                                <div className="concert_place concert_place_modal">{concerts[concertId].place}</div>
                                <div className="concert_where concert_where_modal">{concerts[concertId].where}</div>
                                <div className="concert_when concert_when_modal">{concerts[concertId].when}</div>
                            </div>
                            <div>
                                <div className="ticket_title">
                                        {
                                            (localStorage.getItem('language') === 'ru') ? (
                                                "Выберите билетного оператора:"
                                            ) : (
                                                "Choose a ticket servicer:"
                                            )
                                        }
                                    </div>
                                <Operators />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
