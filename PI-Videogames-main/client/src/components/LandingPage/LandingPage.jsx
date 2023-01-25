import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'
import load from '../img/33.mp4'

export default function LandingPage(){
    return(
      
        <div class={styles.headercontent}>
        <div class={styles.headervideo}>
           <ReactPlayer url={load} playing loop width='100%' height='100%'/> 
        </div>
        <div class={styles.headeroverlay}></div>
        <div class={styles.headercontent1}>
          <div id="over">
          <div className={styles.glow}>
           <h1 className={styles.wrapper}>WELCOME TO MY VIDEOGAMES APP</h1>
            </div>
          <Link to='/home'>
                <button className={styles.landingButton}>INGRESAR</button>
            </Link>
          </div>
        </div>
      </div>


        
        
    );
}