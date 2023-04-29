import React from "react";
import { IoMicCircleSharp } from 'react-icons/io5';
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";
import { Link } from "react-router-dom";

function Menu() {
    return (
    <div className="comment">
        <h1>메뉴를 선택해주세요.</h1>
        <div className="showcenter">
        <ShowBox>커피</ShowBox><ShowBox>차</ShowBox>
        </div>
        <br />
        <IoMicCircleSharp size="70" />
        <br />
        <div className="buttoncenter">
            <Link to="/">
                <PreButton>이전으로</PreButton>
            </Link>
            <Link to="/menudetail">
                <NextButton>다음으로</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default Menu;