import React from "react";
import NextButton from "../components/NextButton";
import { IoMicCircleSharp } from 'react-icons/io5';

function Home() {
    return (
    <div>
        <h1>안녕하세요.<br />주문하시겠어요?</h1>
        <NextButton>네 주문할게요</NextButton><br />
        <IoMicCircleSharp size="70" />
    </div>
    )
}

export default Home;