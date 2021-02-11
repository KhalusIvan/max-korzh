import React, {useEffect} from 'react'
import "../style/contacts.css"
import arm from '../images/motivation.png'
import $ from 'jquery'

export const Contacts = (props) => {
    useEffect(() => {
        $('#rotated_animator').height($('#rotated_animator').width());
        document.getElementById("contacts_right").style.transition = "all 1.5s ease 0.2s";
        document.getElementById("contacts_left").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("contacts_right").style.transition = "all 1.5s ease 3.5s";
            document.getElementById("contacts_left").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("contacts_right").style.transition = "all 1.5s ease 0.2s";
                document.getElementById("contacts_left").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("contacts_right").style.paddingTop = "0px";
        document.getElementById("contacts_left").style.paddingTop = "0px";
        document.getElementById("contacts_left").style.opacity = "1";
        document.getElementById("contacts_right").style.opacity = "1";
    }, [])
    window.addEventListener('resize', ()=> {
        $('#rotated_animator').height($('#rotated_animator').width());
    })
    return (
        <>
            <div id="contacts" style={{zIndex:'5', top:"0%", backgroundColor:"#3d3d3c"}} className="bgFullScreen position-fixed d-flex">
                <div id="contacts_left_side" className="h-100 position-relative">
                    <ul id="contacts_left" style={{opacity:"0%", paddingTop: "10%", lineHeight:"19px"}} className="list-unstyled contacts_social_block">
                        <li className="contacts_social">
                            <a href="https://www.facebook.com/MaxKorzhOfficial" target="_blank" rel="noreferrer">FACEBOOK</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://twitter.com/MAX_KORZH_mus" target="_blank" rel="noreferrer">TWITTER</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://ok.ru/maxkorzh" target="_blank" rel="noreferrer">OK</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://www.instagram.com/maxkorzhmus/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://www.youtube.com/channel/UC1HJy3m76-yikrSMfljk21Q" target="_blank" rel="noreferrer">YOUTUBE</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://vk.com/maxkorzh" target="_blank" rel="noreferrer">VK</a>
                        </li>
                        <li className="contacts_social">
                            <a href="https://tlgg.ru/maxkorzh" target="_blank" rel="noreferrer">TELEGRAM</a>
                        </li>                   
                    </ul>
                </div>
                <div id="contacts_right_side" className="h-100 position-relative">
                    <ul id="contacts_right" style={{opacity:"0%", paddingTop: "10%"}} className="list-unstyled contacts_info_block d-inline-block text-left">
                        <li className="contacts_info">
                            <div className="contacts_info_title">{(localStorage.getItem('language') === 'ru') ? ('Права/контент') : ("Media/content")}</div>
                            <a href="mailto:osokin@maxkorzh.live" target="_blank" className="contacts_info_subtitle">osokin@maxkorzh.live</a>
                        </li>
                        <li className="contacts_info">
                            <div className="contacts_info_title">{(localStorage.getItem('language') === 'ru') ? ('По вопросам концертов') : ("Questions about concerts")}</div>
                            <a href="mailto:maxkorzhconcert@gmail.com" target="_blank" className="contacts_info_subtitle">maxkorzhconcert@gmail.com</a>
                        </li>
                        <li className="contacts_info">
                            <div className="contacts_info_title">{(localStorage.getItem('language') === 'ru') ? ('Для сотрудничества по творчеству') : ("Cooperations")}</div>
                            <a href="mailto:info@maxkorzh.live" target="_blank" className="contacts_info_subtitle">info@maxkorzh.live</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="rotated_animator">
                <div className="rotated_text rotated_text1">M</div>
                <div className="rotated_text rotated_text1">A</div>
                <div className="rotated_text rotated_text1">D</div>
                <div className="rotated_text rotated_text1">E</div>
                <div className="rotated_text rotated_text1">B</div>
                <div className="rotated_text rotated_text1">Y</div>
                <div className="rotated_text rotated_text2">I</div>
                <div className="rotated_text rotated_text2">V</div>
                <div className="rotated_text rotated_text2">A</div>
                <div className="rotated_text rotated_text2">N</div>
                <div className="rotated_text rotated_text2">K</div>
                <div className="rotated_text rotated_text2">H</div>
                <div className="rotated_text rotated_text2">A</div>
                <div className="rotated_text rotated_text2">L</div>
                <div className="rotated_text rotated_text2">U</div>
                <div className="rotated_text rotated_text2">S</div>
            </div>
            <img src={arm} alt="arm" id="arm" />
        </>
    )
}
