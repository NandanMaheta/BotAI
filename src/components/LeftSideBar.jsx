import React from "react";
import { useState,useEffect } from "react";
import styles from "./leftSideBar.module.css";
import chatgpt from "../assessts/ChatGPT.png";
import createchat from "../assessts/NewChat.png";
import {useWidth} from "../useWidth";
import toggle from "../assessts/toggle.png"


export default function LeftSideBar (){

    const { width } = useWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

if(width>768){
    return(
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.chtgpt}><img src={chatgpt} alt="IMAGE" /></div>
                <div className={styles.txt}>New Chat</div>
                <button className={styles.Newchat}><img src={createchat} alt="IMAGE" /></button>
            </div>
            <div className={styles.PastConvo}>
                <button className={styles.PastButton}>Past Conversations</button>
            </div>
        </div>
    )
} else{
    return (<div className={styles.MobileMenuContainer}>
        <button onClick={toggleMenu} className={styles.ToggleButton}>
            <img src={toggle} alt="Toggle Menu" />
        </button>
        {isMenuOpen && (
            <div className={styles.MobileMenu}>
                <div className={styles.Header}>
                    <div className={styles.chtgpt}><img src={chatgpt} alt="IMAGE" /></div>
                    <div className={styles.txt}>New Chat</div>
                    <button className={styles.Newchat}><img src={createchat} alt="IMAGE" /></button>
                </div>
                <div className={styles.PastConvo}>
                    <button className={styles.PastButton}>Past Conversations</button>
                </div>
            </div>
        )}
    </div>)
}
   
}