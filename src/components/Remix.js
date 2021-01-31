import React, {useEffect} from 'react'
import $ from "jquery"
import "../style/remix.css"

export const Remix = (props) => {
    let lastScrollTop = 0;
    useEffect(() => {
        document.getElementById("remix_list").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("remix_list").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("remix_list").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("remix_list").style.paddingTop = "0px";
        document.getElementById("remix_list").style.opacity = "100%";
        let lis = document.getElementById("remix_list").children
        let scrollDiv = document.getElementById("remix_scroll")
        document.getElementById("remix_div").addEventListener("scroll", (e)=>{
            clearTimeout();
            let clientH = document.getElementById("remix_div").clientHeight;
            let scrollH = document.getElementById("remix_div").scrollHeight;
            let scrollRange = scrollH - clientH;
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
            let child1 = child.children;
            for(var j=0, child_1; child_1=child1[j]; j++) {
                child_1.addEventListener("mouseenter", ()=> {
                    $('#cursor_circle').empty();
                    $('#cursor_circle').height(window.innerHeight / 8);
                    $('#cursor_circle').width(window.innerHeight / 8);
                    $('#cursor_circle').css("background-color", "#1589FF");
                    $('#cursor_circle').css("border", "2px solid transparent");
                    setTimeout(() => {
                        $('#cursor_circle').append("<div id='cursor_text'>СКАЧАТЬ</div>");
                    }, 0)
                    
                })
                child_1.addEventListener("mouseleave", ()=> {
                    $('#cursor_circle').height(window.innerHeight / 20);
                    $('#cursor_circle').width(window.innerHeight / 20);
                    $('#cursor_circle').css("background-color", "transparent");
                    $('#cursor_circle').css("border", "2px solid white");
                    $('#cursor_circle').empty();
                    
                })
            }
       }
    }, [])
    let remixs = [
        {
            href:"https://drive.google.com/drive/folders/13NGpMQG_9NBiiUfH6rToJuLx49Jn29D0",
            name:"её виной"
        },
        {
            href:"https://drive.google.com/drive/folders/1c5h3VCOcnxwlYh9v167bjTwQ2CE0Vdqf",
            name:"тепло"
        },
        {
            href:"https://drive.google.com/drive/folders/1JmJcRKOsqzEZ8ZTg_sMmWUPJiUgbSpIO",
            name:"времена"
        },
        {
            href:"https://drive.google.com/drive/folders/1rcjoSz1Or3yIvKMuLUuiQhJG-io_zQJN",
            name:"малолетка"
        },
        {
            href:"https://drive.google.com/drive/folders/1HCxiKNJFldEsfJjM7nzJNd6f-Ls-T9Ow",
            name:"2 типа людей"
        },
        {
            href:"https://drive.google.com/drive/folders/1EnWYJPhEGv_LuWcso2QoBBT2NOfIwJ3C",
            name:"шантаж"
        },
        {
            href:"https://drive.google.com/drive/folders/1cxK7KCgFPjCSmSGlS4q2aPyNOzQGw9Bu",
            name:"контрольный"
        },
        {
            href:"https://drive.google.com/drive/folders/17ip_pPOGqRyzIquPCZouP-LBsWYk6w9B",
            name:"пролетарка"
        },
        {
            href:"https://drive.google.com/drive/folders/109XzhGDm91MeA0dsaqXAE0ou1eU2AhgG",
            name:"горы по колено"
        },
        {
            href:"https://drive.google.com/drive/folders/10MolqlvBU6m8GUbUgSC7Ist_xiwADruZ",
            name:"малиновый закат"
        },
        {
            href:"https://drive.google.com/drive/folders/1kjshkq25_HCnH8hn0e2BZ-oz9qESyf3m",
            name:"малый повзрослел"
        },
        {
            href:"https://drive.google.com/drive/folders/1ZbxyIT5eGRTdagQy-jd5FKt1m1GlM4zg",
            name:"молодость все прощает"
        },
        {
            href:"https://drive.google.com/drive/folders/1LXuiBkf1NrFCjonsUp5bx4eklCE4tlpG",
            name:"напалм"
        },
        {
            href:"https://drive.google.com/drive/folders/1NNqDE_XJspO4dijvV5pj9X9HU38eDf6G",
            name:"настоящий"
        },
        {
            href:"https://drive.google.com/drive/folders/1wKsYZmFzF0sA_wBppEOpdbS5cBZ5RwLe",
            name:"оптимист"
        },
        {
            href:"https://drive.google.com/drive/folders/107hwZil2Itn2dS5qTiu44jcqMq8Fgn-B",
            name:"пьяный дождь"
        },
        {
            href:"https://drive.google.com/drive/folders/1p-iVqnY5OYXY8KYkh-PSdyjcYPv2Bxhp",
            name:"стилево"
        },
        {
            href:"https://drive.google.com/drive/folders/1x-FLGN2wBC5BHyD12rpYJ4nbYYIdOWen",
            name:"жить в кайф"
        },
        {
            href:"https://drive.google.com/drive/folders/10Eh-wANgUE0wibZoJQ6xN3Taj3vuCE9F",
            name:"за тобой"
        },
        {
            href:"https://drive.google.com/drive/folders/1hKLhk35l5iwMFzSNt9eEAwwQHc3kzQ-M",
            name:"время"
        },
        {
            href:"https://drive.google.com/drive/folders/19sdc3lFQkN_dUQdmva2SbUdt83Rzu6Un",
            name:"в темноте"
        },
        {
            href:"https://drive.google.com/drive/folders/1XYxJhz7kYyYATxTPNb6cTj3NL1FCH7iU",
            name:"тает дым"
        },
        {
            href:"https://drive.google.com/drive/folders/1VTimKy57CgaJNuBVAWVZxFbIEp9lF7fs",
            name:"супер агент"
        },
        {
            href:"https://drive.google.com/drive/folders/1PqlAkeEvxdGZItb6bB9Q1-J-pC_XDPxh",
            name:"открой глаза"
        },
        {
            href:"https://drive.google.com/drive/folders/1ThjdadHqmtp-GzVvH0oLzJ8cgl5P0B_6",
            name:"небо поможет нам"
        },
        {
            href:"https://drive.google.com/drive/folders/1863IVziXmiOund57T2QCjnuv0X9pW4dW",
            name:"наташа"
        },
        {
            href:"https://drive.google.com/drive/folders/1WOpXgcdElhkEVlDidE5WWfx-tLL3tiGN",
            name:"где я"
        },
        {
            href:"https://drive.google.com/drive/folders/1jbvFIhxIJ6jM9hUGR6bNCzTxlfIfWB2t",
            name:"где твоя любовь"
        },
    ];
    let RemixList = remixs.map(remix => {
        return <li className="remix_li" key={remix.href}>
            <a className="d-inline-block" href={remix.href} target="_blank">
                <div className="remix_load">Нажмите чтобы скачать</div>
                <div style={{textTransform:'uppercase'}} className="remix_name">{remix.name}</div>
            </a>
        </li>
    }) 
    return (
        <>
            <div style={{height:"4px", backgroundColor:"#ffca18", zIndex:"100", left:'0%', top:"0%"}} id="remix_scroll" className="position-fixed"></div>
            <div id="remix_div" style={{top:"0%", zIndex:"5", overflowY: "scroll", overflowX:"hidden"}} className="position-fixed w-100 h-100">              
                <ul id="remix_list" style={{opacity:"0%", paddingTop: "10%", transition:"all 1.5s ease 0.2s"}} className="list-unstyled">
                    {RemixList}
                </ul>
            </div>
        </>
        
    )
}
