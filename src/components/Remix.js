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
        document.getElementById("remix_list").style.opacity = "1";
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
                for (let i=0, child=lis[0]; i<lis.length; child=lis[i], i++) {
                    child.style.transform="rotate(3deg)"
               }
            } else {
                for (let i=0, child=lis[0]; i<lis.length; child=lis[i], i++) {
                    child.style.transform="rotate(-3deg)"
               }
            }
            lastScrollTop = st;
            setTimeout(()=> {
                for (let i=0, child=lis[0]; i<lis.length; child=lis[i], i++) {
                    child.style.transform="rotate(0deg)"
               }
            },200)
        })
        
        for (let i=0, child=lis[0]; i<lis.length; child=lis[i], i++) {
            let child1 = child.children;
            for(var j=0, child_1; child_1=child1[j]; j++) {
                child_1.addEventListener("mouseenter", ()=> {
                    $('#cursor_circle').empty();
                    $('#cursor_circle').height(window.innerHeight / 8);
                    $('#cursor_circle').width(window.innerHeight / 8);
                    $('#cursor_circle').css("background-color", "#1589FF");
                    $('#cursor_circle').css("border", "2px solid transparent");
                    setTimeout(() => {
                        $('#cursor_circle').append(`<div id='cursor_text'>${
                            (localStorage.getItem('language') === 'ru') ? ("??????????????") : ("Download")
                        }</div>`);
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
            name:(localStorage.getItem('language') === 'ru') ? ("???? ??????????") : ("Yeyo Vinoy (Her Fault)")
        },
        {
            href:"https://drive.google.com/drive/folders/1c5h3VCOcnxwlYh9v167bjTwQ2CE0Vdqf",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????") : ("Teplo (Warm)")
        },
        {
            href:"https://drive.google.com/drive/folders/1JmJcRKOsqzEZ8ZTg_sMmWUPJiUgbSpIO",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????????") : ("Vremena (Times)")
        },
        {
            href:"https://drive.google.com/drive/folders/1rcjoSz1Or3yIvKMuLUuiQhJG-io_zQJN",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????????????") : ("Maloletka (Young Lass)")
        },
        {
            href:"https://drive.google.com/drive/folders/1HCxiKNJFldEsfJjM7nzJNd6f-Ls-T9Ow",
            name:(localStorage.getItem('language') === 'ru') ? ("2 ???????? ??????????") : ("2 tipa ludei (2 types of people)")
        },
        {
            href:"https://drive.google.com/drive/folders/1EnWYJPhEGv_LuWcso2QoBBT2NOfIwJ3C",
            name:(localStorage.getItem('language') === 'ru') ? ("????????????") : ("Shantazh (Blackmail)")
        },
        {
            href:"https://drive.google.com/drive/folders/1cxK7KCgFPjCSmSGlS4q2aPyNOzQGw9Bu",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????????????????") : ("Kontrolnii (Controlling)")
        },
        {
            href:"https://drive.google.com/drive/folders/17ip_pPOGqRyzIquPCZouP-LBsWYk6w9B",
            name:(localStorage.getItem('language') === 'ru') ? ("????????????????????") : ("Proletarka")
        },
        {
            href:"https://drive.google.com/drive/folders/109XzhGDm91MeA0dsaqXAE0ou1eU2AhgG",
            name:(localStorage.getItem('language') === 'ru') ? ("???????? ???? ????????????") : ("Gori po koleno (Knee-High Mountains)")
        },
        {
            href:"https://drive.google.com/drive/folders/10MolqlvBU6m8GUbUgSC7Ist_xiwADruZ",
            name:(localStorage.getItem('language') === 'ru') ? ("?????????????????? ??????????") : ("Malinovii zakat (Crimson Sunset)")
        },
        {
            href:"https://drive.google.com/drive/folders/1kjshkq25_HCnH8hn0e2BZ-oz9qESyf3m",
            name:(localStorage.getItem('language') === 'ru') ? ("?????????? ????????????????????") : ("Malii Povzroslel (Boy has grown)")
        },
        {
            href:"https://drive.google.com/drive/folders/1ZbxyIT5eGRTdagQy-jd5FKt1m1GlM4zg",
            name:(localStorage.getItem('language') === 'ru') ? ("?????????????????? ?????? ??????????????") : ("Molodost vse proshaet (Youth forgives everything)")
        },
        {
            href:"https://drive.google.com/drive/folders/1LXuiBkf1NrFCjonsUp5bx4eklCE4tlpG",
            name:(localStorage.getItem('language') === 'ru') ? ("????????????") : ("Napalm")
        },
        {
            href:"https://drive.google.com/drive/folders/1NNqDE_XJspO4dijvV5pj9X9HU38eDf6G",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????????????") : ("Nastojaschij (Real)")
        },
        {
            href:"https://drive.google.com/drive/folders/1wKsYZmFzF0sA_wBppEOpdbS5cBZ5RwLe",
            name:(localStorage.getItem('language') === 'ru') ? ("????????????????") : ("Optimist")
        },
        {
            href:"https://drive.google.com/drive/folders/107hwZil2Itn2dS5qTiu44jcqMq8Fgn-B",
            name:(localStorage.getItem('language') === 'ru') ? ("???????????? ??????????") : ("P'yanyj dozhd' (Drunk Rain)")
        },
        {
            href:"https://drive.google.com/drive/folders/1p-iVqnY5OYXY8KYkh-PSdyjcYPv2Bxhp",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????????") : ("Stilevo (Stylishly)")
        },
        {
            href:"https://drive.google.com/drive/folders/1x-FLGN2wBC5BHyD12rpYJ4nbYYIdOWen",
            name:(localStorage.getItem('language') === 'ru') ? ("???????? ?? ????????") : ("Zhit v kaif (Live Dope)")
        },
        {
            href:"https://drive.google.com/drive/folders/10Eh-wANgUE0wibZoJQ6xN3Taj3vuCE9F",
            name:(localStorage.getItem('language') === 'ru') ? ("???? ??????????") : ("Za toboi (Behind You)")
        },
        {
            href:"https://drive.google.com/drive/folders/1hKLhk35l5iwMFzSNt9eEAwwQHc3kzQ-M",
            name:(localStorage.getItem('language') === 'ru') ? ("??????????") : ("Vremya (Time)")
        },
        {
            href:"https://drive.google.com/drive/folders/19sdc3lFQkN_dUQdmva2SbUdt83Rzu6Un",
            name:(localStorage.getItem('language') === 'ru') ? ("?? ??????????????") : ("V temnote (In the darkness)")
        },
        {
            href:"https://drive.google.com/drive/folders/1XYxJhz7kYyYATxTPNb6cTj3NL1FCH7iU",
            name:(localStorage.getItem('language') === 'ru') ? ("???????? ??????") : ("Taet dim (Smoke Is Fading Away)")
        },
        {
            href:"https://drive.google.com/drive/folders/1VTimKy57CgaJNuBVAWVZxFbIEp9lF7fs",
            name:(localStorage.getItem('language') === 'ru') ? ("?????????? ??????????") : ("Super agent")
        },
        {
            href:"https://drive.google.com/drive/folders/1PqlAkeEvxdGZItb6bB9Q1-J-pC_XDPxh",
            name:(localStorage.getItem('language') === 'ru') ? ("???????????? ??????????") : ("Otkroi glaza (Open your eyes)")
        },
        {
            href:"https://drive.google.com/drive/folders/1ThjdadHqmtp-GzVvH0oLzJ8cgl5P0B_6",
            name:(localStorage.getItem('language') === 'ru') ? ("???????? ?????????????? ??????") : ("Nebo pomozhet nam (Sky will help us)")
        },
        {
            href:"https://drive.google.com/drive/folders/1863IVziXmiOund57T2QCjnuv0X9pW4dW",
            name:(localStorage.getItem('language') === 'ru') ? ("????????????") : ("Natasha")
        },
        {
            href:"https://drive.google.com/drive/folders/1WOpXgcdElhkEVlDidE5WWfx-tLL3tiGN",
            name:(localStorage.getItem('language') === 'ru') ? ("?????? ??") : ("Gde ya (Where am I)")
        },
        {
            href:"https://drive.google.com/drive/folders/1jbvFIhxIJ6jM9hUGR6bNCzTxlfIfWB2t",
            name:(localStorage.getItem('language') === 'ru') ? ("?????? ???????? ????????????") : ("Gde tvoya lubov (Where is your love?)")
        },
    ];
    let RemixList = remixs.map(remix => {
        return <li className="remix_li" key={remix.href}>
            <a className="d-inline-block" href={remix.href} rel="noreferrer" target="_blank">
                <div className="remix_load">{(localStorage.getItem('language') === 'ru') ? ('?????????????? ?????????? ??????????????') : ("Click to download")}</div>
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
