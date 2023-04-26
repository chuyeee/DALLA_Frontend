import { createGlobalStyle } from "styled-components";
export const pointColor = "#FFDC00";

export const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setScreenSize();

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100vw;
        // height: calc(var(--vh, 1vh) * 100);        
        overflow-x: hidden;
        overflow-y: hidden;
        // margin: 0;
        background-color: pointColor;      
    }
`;