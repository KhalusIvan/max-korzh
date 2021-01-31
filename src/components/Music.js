import React, {useEffect} from 'react'
import $ from 'jquery'
import album1 from "../images/album1.jpg"
import album2 from "../images/album2.jpg"
import album3 from "../images/album3.jpg"
import "../style/music.css"
import {useHistory} from "react-router-dom"

export const Music = (props) => {
    let history = useHistory();
    useEffect(() => {
        document.getElementById("music_list").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("music_list").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("music_list").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("music_list").style.paddingTop = "0px";
        document.getElementById("music_list").style.opacity = "100%";
        let lis = document.getElementById("music_list").children
        let scrollDiv = document.getElementById("music_scroll")
        let musicDiv = document.getElementById("music_div")
        document.getElementById("music_div").addEventListener("scroll", (e)=>{
            let scrollRange = musicDiv.scrollHeight - musicDiv.clientHeight;
            let percent = e.target.scrollTop * 100 / scrollRange;
            if (musicDiv.scrollHeight < 1000) {
                scrollDiv.style.width = "0%";
            } else
                scrollDiv.style.width = percent + "%";
        })
        
        for (var i=0, child; child=lis[i]; i++) {
            let lis1 = child.children;
            for(var j=0, child1; child1=lis1[j]; j++) {
                child1.addEventListener("mouseover", ()=> {
                    $('#cursor_circle').empty();
                    $('#cursor_circle').height(window.innerHeight / 8);
                    $('#cursor_circle').width(window.innerHeight / 8);
                    $('#cursor_circle').css("background-color", "#ffca18");
                    $('#cursor_circle').css("border", "2px solid transparent");
                    setTimeout(() => {
                        $('#cursor_circle').append("<div style={{textTransform:'uppercase'}} id='cursor_text'>Play</div>");
                    }, 0)
                    
                })
                child1.addEventListener("mousemove", (e)=> {
                    let text = e.target.nextSibling
                    let center = window.innerWidth / 2;
                    let xCoord = e.clientX
                    let delta = center - xCoord;
                    text.style.left = window.innerWidth/2 + delta/8 + "px";
                    e.target.style.filter = 'blur(2px)'
                })
                child1.addEventListener("mouseleave", (e)=> {
                    $('#cursor_circle').height(window.innerHeight / 20);
                    $('#cursor_circle').width(window.innerHeight / 20);
                    $('#cursor_circle').css("background-color", "transparent");
                    $('#cursor_circle').css("border", "2px solid white");
                    $('#cursor_circle').empty();
                    e.target.style.filter = 'blur(0px)'
                    let text = e.target.nextSibling
                    text.style.left = window.innerWidth/2 + 'px';

                })
                
            }
       }
    }, [])

    window.addEventListener('resize', ()=>{
        if (document.getElementById("music_list") !== null) {
            let lis = document.getElementById("music_list").children
            for (var i=0, child; child=lis[i]; i++) {
                let lis1 = child.children;
                for(var j=0, child1; child1=lis1[j]; j++) {
                    if(child1.nextSibling !== null) {
                        let text = child1.nextSibling
                        text.style.left = window.innerWidth/2 +"px";
                    }
        
                }
           }
        }
    })
    let musics = [
        {
            photo:album1,
            title:"её виной",
            year:"2020",
            href:"ee-vinoi"
        },
        {
            photo:album2,
            title:"тепло",
            year:"2020",
            href:"teplo"
        },
        {
            photo:album3,
            title:"времена",
            year:"2020",
            href:"vremena"
        },
    ];

    function redirect(where, e){
        let image = document.getElementById("music_animate_image");
        image.style.transition = 'all 2s'
        document.getElementById("music_scroll").style.transition='all 0.5s';
        image.src = e.target.src
        image.style.width = e.target.width + 'px'
        image.style.top = $(`#${e.target.id}`).offset().top + 'px'
        image.style.left = $(`#${e.target.id}`).offset().left + 'px'
        document.getElementById("music_list").style.display="none";
        image.classList.add('d-block');
        image.classList.remove('d-none');
        //image.classList.add('one_music_content_image');
        image.style.top = "25%"
        //image.style.removeProperty('width');
        //image.style.left = '50%'
        $('#cursor_circle').height(window.innerHeight / 20);
        $('#cursor_circle').width(window.innerHeight / 20);
        $('#cursor_circle').css("background-color", "transparent");
        $('#cursor_circle').css("border", "2px solid white");
        $('#cursor_circle').empty();
        setTimeout(()=> {
            history.push(where)
        },6000)
    }

    let MusicsList = musics.map(music => {
        return <li className="music_li" key={music.title}>
                <img id={music.href} className="music_photo_img position-relative" onClick={(e)=>{redirect(`/muzyika/${music.href}/`, e)}}  alt={music.photo} src={music.photo} />
                <div className="music_text">
                    <div className="music_title">
                        {music.title}
                    </div>
                    <div className="music_year">
                        {music.year}
                    </div>
                </div>
        </li>
    }) 
    return (
        <>
            <div style={{height:"4px", backgroundColor:"#ffca18", zIndex:"100", left:'0%', top:"0%"}} id="music_scroll" className="position-fixed"></div>
            <div id="music_div" style={{top:"0%", overflowY: "scroll", zIndex:"3", overflowX:"hidden", backgroundColor:"#252525"}} className="position-fixed h-100 w-100">              
                <ul id="music_list" style={{opacity:"0%", zIndex:"4", paddingTop: "20%"}} className="list-unstyled w-100">
                    {MusicsList}
                </ul>
                <img id="music_animate_image" className="d-none position-absolute" src={album1} alt='music' />
            </div>
        </>
        
    )
}
