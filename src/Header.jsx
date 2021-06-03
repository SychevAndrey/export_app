import React from "react";
import {useRecoilValue} from "recoil";
import { userName} from "consumer_app/atoms";

export default () => {
    const name = useRecoilValue(userName)
    return (<div  style={{
        padding: "1em",
        margin: "1em",
        background: "green",
        color: "white",
        fontWeight: "bold",
    }}>Hi there, I'm Header from Webpack 5. Nice to meet you, <b>{name}</b></div>)
}
