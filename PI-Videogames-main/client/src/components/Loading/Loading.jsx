import React from "react";
import style from "../Loading/Loading.module.css";
import load from "../img/11.gif"

const Loading = () => {
    return(
        <div className={style.divContainer}>
            <div className={style.load}>
                <img className={style.img} src={load} alt="loading" width="600px" height="600px"/>
            </div>
        </div>
    )
}

export default Loading;