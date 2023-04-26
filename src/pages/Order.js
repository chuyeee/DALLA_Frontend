import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";

function Order() {
    return (
    <div>
        <h1>주문내용이 맞나요?</h1>
        <ShowBox>시원하게</ShowBox>
        <br />
        <MicIcon />
        <br />
        <PreButton>주문 추가</PreButton><NextButton>네 맞아요</NextButton>
    </div>
    )
}

export default Order;