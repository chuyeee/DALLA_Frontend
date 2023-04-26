import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";

function Count() {
    return (
    <div>
        <h1>수량을 선택해주세요.</h1>
        <ShowBox>시원한커피</ShowBox>
        <br />
        <MicIcon />
        <br />
        <PreButton>이전으로</PreButton><NextButton>다음으로</NextButton>
    </div>
    )
}

export default Count;