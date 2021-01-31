import { Social } from './Social';
import React, {useEffect} from 'react'
import "../style/news.css"
import $ from 'jquery'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import news4 from '../images/news4.jpg'
import news5 from '../images/news5.jpg'
import {Link} from "react-router-dom";
import arrow from "../images/arrow.png"
import {useHistory} from "react-router-dom"

export const NewsPageOne = (props) => {
    let history = useHistory();
    let news=[ 
        {
            'id':'itogi-goda-yandex-music',
            'title':'Итоги года Yandex Music',
            'date':'23.12.2020',
            'short_text':'Артист года в Беларуси',
            'text':'Сервис «Яндекс.Музыка» подвели итоги 2020 года<br> Артистом года в Беларуси стал Макс Корж<br><a href="https://music.yandex.ru/artist/975699" target="_blank"> Слушать на Яндекс.Музыка </a>',
            'image':news1
        },
        {
            'id':'itogi-goda-vkontakte-2020',
            'title':'Итоги года ВКонтакте 2020',
            'date':'11.12.2020',
            'short_text':' Макс Корж в топе артистов года!',
            'text':`<p> Социальная сеть Вконтакте подвела музыкальные итоги 2020 года </p>
            <p>
            Макс Корж входит в топ артистов года, а альбом «Жить в Кайф» и «Малый повзрослел ч.2» в топ-30 альбомов года!<br> 
            <a href="https://vk.com/2020" target="_blank">Смотреть в Вконтакте </a>
            </p>
            <p>
                <a href="https://vk.com/artist/maxkorzh" target="_blank">Слушать песни Макса Коржа во Вконтакте</a>
            </p>`,
            'image':news2
        },
        {
            'id':'spotify-2020-wrapped',
            'title':'Итоги года Spotify',
            'date':'03.12.2020',
            'short_text':' Более 56 млн прослушиваний за 2020 год!',
            'text':`<p>
                Музыкальный сервис Spotify опубликовал итоги года, где главным хитом Макса Коржа в 2020 году стал трек «Тепло».
            </p>
            <p>
                В 2020 году его песни слушали 3 млн часов, а это примерно 342 года непрерывной жизни в кайф!
            </p>
            <p>
                <a href="https://open.spotify.com/artist/5meD8C7oGK5yUEY2T7ZZ7W?si=kkNznlyyQi6oHNx-P7TDIQ" target="_blank">Max Korzh in Spotify</a>
            </p>`,
            'image':news3
        },
        {
            'id':'new-youtube-video',
            'title':'Новое видео на youtube канале',
            'date':'30.11.2020',
            'short_text':' Лайв под гитару(слово пацана)',
            'text':`
            <p>
                Новое видео на YouTube канале, где Макс исполняет песню «Слово пацана» <br> Пусть этот видос согреет вас в эти необычные, мягко говоря, времена
            </p>
            `,
            'image':news4
        },
        {
            'id':'premier-ee-vinoi',
            'title':'Премьера клипа её виной',
            'date':'23.11.2020',
            'short_text':' Вот так и живём!',
            'text':`
            <p>
                Премьера клипа на трек «Её виной»
            </p>
            <p>
                <a href="https://www.instagram.com/maxkorzhmus/" target="_blank">Макс Корж</a>
                : "Спасибо за поздравления!!! Спасибо всем близким, нашей тусе, нашим движам-лучшим фанам в мире!"
            </p>`,
            'image':news5
        },
    ]
    let newsId = history.location.pathname.split('/')[history.location.pathname.split('/').length-2];
    let newsIndex = 0;
    let otherIndexs = [];
    for(let i = 0; i < news.length; i++) {
        if(news[i].id === newsId) {
            newsIndex = i;
            if (i <= news.length - 3) {
                otherIndexs.push(newsIndex + 1)
                otherIndexs.push(newsIndex + 2)
            } else if (i <= news.length - 2) {
                otherIndexs.push(newsIndex - 1)
                otherIndexs.push(newsIndex + 1)
            } else {
                otherIndexs.push(newsIndex - 2)
                otherIndexs.push(newsIndex - 1)
            }
            break;
        }    
    }
    useEffect(()=> {
        document.getElementById("news_div").scrollTo(0, 0);
        $('#back_circle').height(window.innerHeight/15)
        $('#back_circle').width(window.innerHeight/15)
        document.getElementById('navigation').style.opacity = "0%"
        document.getElementById('navigation_full_size').style.opacity = "0%"
        document.getElementById("news_div_animation").style.transition = "opacity 1.5s ease 0.2s, padding-top 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("news_div_animation").style.transition = "opacity 1.5s ease 3.5s, padding-top 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("news_div_animation").style.transition = "opacity 1.5s ease 0.2s, padding-top 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }   
        setTimeout(()=>{
            document.getElementById('button_top').style.opacity="100%"
        },200)
        document.getElementById("news_div_animation").style.paddingTop = "0%";
        document.getElementById("news_div_animation").style.opacity = "100%";
        let scrollDiv = document.getElementById("news_scroll")
        document.getElementById("news_div").addEventListener("scroll", (e)=>{
            clearTimeout();
            let clientH = document.getElementById("news_div").clientHeight;
            let scrollH = document.getElementById("news_div").scrollHeight;
            let scrollRange = scrollH - clientH - 10;
            let percent = e.target.scrollTop * 100 / scrollRange;
            scrollDiv.style.width = percent + "%";
        })
        document.getElementById('one_news_text').innerHTML=news[newsIndex].text
        let one_news_li_photo_img = document.getElementsByClassName("one_news_li_photo_img")
        let news_li_text_title = document.getElementsByClassName("news_li_text_title")
        let a_links = document.getElementsByTagName('p')
        for(let par of a_links) {
            let links = par.children;
            if (links.length > 0) {
                for(let i = 0; i < links.length; i++) {
                    links[i].addEventListener("mouseenter", ()=> {
                        $('#cursor_circle').height(window.innerHeight / 100);
                        $('#cursor_circle').width(window.innerHeight / 100);
                        $('#cursor_circle').css("background-color", "white");    
                    })
                    links[i].addEventListener("mouseleave", ()=> {
                        $('#cursor_circle').height(window.innerHeight / 20);
                        $('#cursor_circle').width(window.innerHeight / 20);
                        $('#cursor_circle').css("background-color", "transparent");
                    })
                }
            }
        }
        for(let i = 0; i < one_news_li_photo_img.length; i++) {
            one_news_li_photo_img[i].addEventListener("mouseenter", ()=> {
                $('#cursor_circle').height(window.innerHeight / 100);
                $('#cursor_circle').width(window.innerHeight / 100);
                $('#cursor_circle').css("background-color", "white");    
            })
            one_news_li_photo_img[i].addEventListener("mouseleave", ()=> {
                $('#cursor_circle').height(window.innerHeight / 20);
                $('#cursor_circle').width(window.innerHeight / 20);
                $('#cursor_circle').css("background-color", "transparent");
            })
            news_li_text_title[i].addEventListener("mouseenter", ()=> {
                $('#cursor_circle').height(window.innerHeight / 100);
                $('#cursor_circle').width(window.innerHeight / 100);
                $('#cursor_circle').css("background-color", "white");    
            })
            news_li_text_title[i].addEventListener("mouseleave", ()=> {
                $('#cursor_circle').height(window.innerHeight / 20);
                $('#cursor_circle').width(window.innerHeight / 20);
                $('#cursor_circle').css("background-color", "transparent");
            })
        }
    })

    window.addEventListener('resize', ()=> {
        $('#back_circle').height(window.innerHeight/15)
        $('#back_circle').width(window.innerHeight/15)
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
            document.getElementById('navigation_full_size').style.removeProperty('opacity')
            history.push(where)
        },400)
    }
    return (
        <>
            <Social />
            <div style={{height:"4px", backgroundColor:"#ffca18", zIndex:"100", left:'0%', top:"0%"}} id="news_scroll" className="position-fixed"></div>
            <div id="button_top" onClick={(e)=>{animationFinish(e,`/novosti/`)}} style={{right:"4%", top: "6%", zIndex:'6', opacity:'0%'}} className="position-fixed d-flex align-items-center">
                <div id="back_style" style={{right:"10%"}}>Назад</div>
                <div id="back_circle" className="position-relative back_circle">
                    <div className="back_circle_border_back"></div>
                    <div id="back_circle_border_bottom" className="back_circle_border back_circle_border_bottom"></div>
                    <div id="back_circle_border_bottom1" className="back_circle_border back_circle_border_bottom1"></div>
                    <div id="back_circle_border_top" className="back_circle_border back_circle_border_top"></div>
                    <img style={{top:"50%", left:"50%", transform: "translate(-50%, -50%) rotate(-90deg)"}} alt="dots" src={arrow} className="h-25 w-25 position-absolute" />
                </div>
            </div>
            <div id="news_div" style={{top:"0%", zIndex:"5", overflowY: "scroll", overflowX:"hidden",backgroundColor:"#3d3d3c"}} className="position-fixed w-100 h-100">
                <div id="news_div_animation" style={{opacity:"0%", paddingTop:"10%"}} className="w-100 h-100">
                    <div className="one_news">
                        <div className="one_news_date">{news[newsIndex].date}</div>
                        <div className="one_news_title">{news[newsIndex].title}</div>
                        <div id="one_news_text" className="one_news_text"></div>
                        <img className="one_news_image" src={news[newsIndex].image} alt="news" />
                    </div>
                    <h1 className="one_news_other_title">Другие новости</h1>
                    <div className="other_news">
                        <div className="one_news_li d-block">
                            <div className="one_news_li_photo">
                                <Link className="w-100 h-100 d-block" onClick={(e)=>animation(e, `/novosti/${news[otherIndexs[0]].id}/`)} to={`/novosti/${news[otherIndexs[0]].id}/`}>
                                    <img src={news[otherIndexs[0]].image} alt='one_news_photo' className="one_news_li_photo_img" />
                                </Link>
                            </div>
                            
                            <div className="one_news_li_text p-0">
                                <div className="one_news_li_text p-0 news_li_text_date">{news[otherIndexs[0]].date}</div>
                                <div className="one_news_li_text p-0 news_li_text_title">
                                    <Link className="news_li_text_title" onClick={(e)=>animation(e, `/novosti/${news[otherIndexs[0]].id}/`)} to={`/novosti/${news[otherIndexs[0]].id}/`}>
                                        {news[otherIndexs[0]].title}
                                    </Link>
                                </div>
                                <div className="one_news_li_text p-0 news_li_text_short_text">{news[otherIndexs[0]].short_text}</div>
                            </div>
                        </div>
                        <div className="one_news_li d-block">
                            <div className="one_news_li_photo">
                                <Link className="w-100 h-100 d-block" onClick={(e)=>animation(e, `/novosti/${news[otherIndexs[1]].id}/`)} to={`/novosti/${news[otherIndexs[1]].id}/`}>
                                    <img src={news[otherIndexs[1]].image} alt='one_news_photo' className="one_news_li_photo_img" />
                                </Link>
                            </div>
                            
                            <div className="one_news_li_text p-0">
                                <div className="one_news_li_text p-0 news_li_text_date">{news[otherIndexs[1]].date}</div>
                                <div className="one_news_li_text p-0 news_li_text_title">
                                    <Link className="news_li_text_title" onClick={(e)=>animation(e, `/novosti/${news[otherIndexs[1]].id}/`)} to={`/novosti/${news[otherIndexs[1]].id}/`}>
                                        {news[otherIndexs[1]].title}
                                    </Link>
                                </div>
                                <div className="one_news_li_text p-0 news_li_text_short_text">{news[otherIndexs[1]].short_text}</div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}
