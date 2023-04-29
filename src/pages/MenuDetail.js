import React from "react";
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";
import { Link } from "react-router-dom";

function MenuDetail() {
    return (
    <div className="comment">
        <h1>메뉴를 선택해주세요.</h1>
        <div className="showcenter">
            <ShowBox>시원하게</ShowBox><ShowBox>뜨겁게</ShowBox>
        </div>
        <br />
        <MicIcon />
        <br />
        <div className="buttoncenter">
            <Link to="/menu">
                <PreButton>이전으로</PreButton>
            </Link>
            <Link to="/count">
                <NextButton>다음으로</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default MenuDetail;