import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";

function Pay() {
    return (
    <div>
        <h1>결제는 어떻게 하세요?</h1>
        <ShowBox>현금</ShowBox><ShowBox>카드</ShowBox>
        <br />
        <MicIcon />
        <br />
        <PreButton>이전으로</PreButton><NextButton>다음으로</NextButton>
    </div>
    )
}

export default Pay;