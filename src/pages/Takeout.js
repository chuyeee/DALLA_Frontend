import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";
import { Link } from "react-router-dom";

function Takeout() {
    return (
    <div className="comment">
        <h1>어디서 드시나요?</h1>
        <div className="showcenter">
            <ShowBox>포장</ShowBox><ShowBox>매장</ShowBox>
        </div>
        <br />
        <MicIcon />
        <br />
        <div className="buttoncenter">
            <Link to="/order">
                <PreButton>이전으로</PreButton>
            </Link>
            <Link to="/pay">
                <NextButton>다음으로</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default Takeout;