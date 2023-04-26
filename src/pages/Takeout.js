import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";

function Takeout() {
    return (
    <div>
        <h1>어디서 드시나요?</h1>
        <ShowBox>포장</ShowBox><ShowBox>매장</ShowBox>
        <br />
        <MicIcon />
        <br />
        <PreButton>이전으로</PreButton><NextButton>다음으로</NextButton>
    </div>
    )
}

export default Takeout;