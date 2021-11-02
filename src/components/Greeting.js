import React from 'react';
import emoji from 'react-easy-emoji';
import SocialMedia from './SocialMedia';
import { greeting } from '../portofolio';
import {Link} from 'react-scroll'

export default function Greeting(){
    function openInNewTab(url){
        if (!url) {
            return;
          }
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div className="container d-flex greeting-container my-3" id="greeting">
            <div className="p-5">
                <img src={ process.env.PUBLIC_URL + "img/undraw_laravel_and_vue.svg"} class="img-fluid profile" alt="profile"></img>
            </div>
            <div className="main p-3 my-auto">
                <h1 className="greeting-text">
                    {" "}
                    {greeting.title}{" "}
                    <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p className = "greeting-text-p subTitle">
                    {greeting.subTitle}
                </p>
                <SocialMedia />
                <div className="button-greeting-div">
                    <button className=" btn redirectButton mt-3 py-2 px-3 me-5"> 
                        <Link to="contact" spy={true} smooth={false}> 
                            Contact Me 
                        </Link> 
                    </button>
                    <button className=" btn redirectButton mt-3 py-2 px-3" onClick={() => openInNewTab(greeting.resumeLink)}> See My Resume </button>
                </div>
            </div>
        </div>
    )
}