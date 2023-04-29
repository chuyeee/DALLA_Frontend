import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";
import { Link } from "react-router-dom";

function Pay() {
    return (
    <div className="comment">
        <h1>결제는 어떻게 하세요?</h1>
        <div className="showcenter">
            <ShowBox>현금</ShowBox><ShowBox>카드</ShowBox>
            </div>
        <br />
        <MicIcon />
        <br />
        <div className="buttoncenter">
            <Link to="/takeout">
                <PreButton>이전으로</PreButton>
            </Link>
            <Link to="/done">
                <NextButton>다음으로</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default Pay;