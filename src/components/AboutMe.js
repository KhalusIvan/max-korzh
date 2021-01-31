import React, {useEffect} from 'react'
import "../style/aboutMe.css"

export const AboutMe = (props) => {
    useEffect(() => {
        document.getElementById("about_me_textBlock").style.transition = "all 1.5s ease 0.2s";
        if(props.isFirstLoad) {
            document.getElementById("about_me_textBlock").style.transition = "all 1.5s ease 3.5s";
            setTimeout(()=>{
                document.getElementById("about_me_textBlock").style.transition = "all 1.5s ease 0.2s";
                props.setIsFirstLoad(false)
            },3500)
        }
        document.getElementById("about_me_textBlock").style.paddingTop = "0px";
        document.getElementById("about_me_textBlock").style.opacity = "100%";
        let scrollDiv = document.getElementById("concert_scroll")
        let clientH = document.getElementById("about_me").clientHeight;
        let scrollH = document.getElementById("about_me").scrollHeight;
        let scrollRange = scrollH - clientH;
        document.getElementById("about_me").addEventListener("scroll", (e)=>{
            let percent = e.target.scrollTop * 100 / scrollRange;
            scrollDiv.style.width = percent + "%";
        })
    }, [])
    return (
        <>
            <div style={{height:"4px", backgroundColor:"#ffca18", zIndex:"100", left:'0%', top:"0%"}} id="concert_scroll" className="position-fixed"></div>
            <div id="about_me" className="position-fixed h-100 w-100">
                <div id="about_me_textBlock" className="position-absolute">
                    <h1 id="about_me_textBlock_header">
                        Макс Корж — молодой музыкант из Минска, выходец из тусовки MU SKOOL, с легкостью смешивающий в своем творчестве электронную музыку, рэп и задушевное пение.
                    </h1>
                    <div id="about_me_textBlock_paragraphs">
                        <p>
                            Начинал Макс, как и многие юноши, с социального рэпа, причем, на белорусском языке, но довольно скоро понял, что его талант в другом. В том, что он может простыми и точными фразами передать целую гамму чувств и мыслей, близких многим. И сделать это в красивой, хитовой форме.
                        </p>
                        <p>
                            История взлета Макса невероятно стремительна и творится прямо на наших глазах. В мае 2012-го он выпустил в Беларуси первый сольный альбом, а через год уже собрал многотысячные залы. Его востребованность у концертных промоутеров стала ажиотажной, он дважды выступил в программе «Вечерний Ургант» на Первом канале, а презентация его второго альбома «Жить в кайф» вновь побила рекорды — так, в столице Беларуси она прошла в пятнадцатитысячной Минск‑Арене. Также эта пластинка стала лучшим альбомом 2013-го по версии канала Муз-Тв.
                        </p>
                        <p>
                            2016-й стал очередным пиком в истории Макса. Клип «Слово пацана», стал настоящим событием, а в конце года, к громким презентациям, вышел новый альбом «Малый повзрослел», продемонстрировавший, что артист действительно повзрослел, но не утратил ничего из достоинств своей бурной молодости.
                        </p>
                        <p>
                            В начале 2017-го вышел саундтрек к российскому блокбастеру «Притяжение» — с треком Макса «Эндорфин». Затем Макс отправился в экзотическое путешествие по Ирану, а после него — в турне по США. Летом стало известно, что въезд в Украину, несправедливо запрещенный Максу в 2016-м, отменен решением суда. В октябре 2017-го вышло продолжение альбома «Малый повзрослел» — и на протяжении двух месяцев оно не покидает топ-5 релизов российского iTunes. Презентации в Москве, Санкт-Петербурге, Киеве и Минске прошли с огромным успехом: пришлось назначить три дополнительных концерта, а суммарно их посетило около 40 000 человек.
                        </p>
                        <p>
                            В 2018-м объездил большой тур по России на вместительных площадках, а альбом «Малый повзрослел, ч.2» вошел в десятку самых прослушиваемых в Apple Music и Vkontakte, но это ещё не всё! Альбом «Жить в кайф» расположился на 25 месте, а альбом «Малый повзрослел, ч.1» на 42 строчке.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
