import React from "react";
import NextButton from "../components/NextButton";
import OrderBox from "../components/OrderBox";
import PreButton from "../components/PreButton";
import MicIcon from "../components/MicIcon";
import { Link } from "react-router-dom";

function Order() {
    return (
    <div className="comment">
        <h1>주문내용이 맞나요?</h1>
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
            <Link to="/menu">
                <PreButton>주문 추가</PreButton>
            </Link>
            <Link to="/takeout">
                <NextButton>네 맞아요</NextButton>
            </Link>
        </div>
    </div>
    )
}

export default Order;