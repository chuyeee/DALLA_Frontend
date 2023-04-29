import React from "react";
import NextButton from "../components/NextButton";
import OrderBox from "../components/OrderBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";
import { Link } from "react-router-dom";

function Count() {
    return (
    <div className="comment">
        <h1>수량을 선택해주세요.</h1>
        <OrderBox>
            <div className="delete">삭제</div>
            시원한커피
            <div className="IC">+</div>
            <div className="">n개</div>
            <div className="IC">-</div>
        </OrderBox>
        <br />
        <MicIcon />
        <br />
        <div className="buttoncenter">
            <Link to="/menudetail">
                <PreButton>이전으로</PreButton>
            </Link>
            <Link to="/order">
                <NextButton>다음으로</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default Count;