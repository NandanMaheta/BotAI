import { useState,useEffect } from "react";
import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import styles from "./Home.module.css";

export default function Home(){
    return(
        <div className={styles.Container}>
            <LeftSideBar/>
            <div className={styles.Home}>
               
            </div>
        </div>
    )
}