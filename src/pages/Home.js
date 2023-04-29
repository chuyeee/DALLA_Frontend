import React from "react";
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="comment">
        <h1>안녕하세요.<br />주문하시겠어요?</h1>
        <div className="buttoncenter">
            <Link to="/menu">
                <NextButton className="next">네 주문할게요</NextButton><br />
            </Link>
        </div>
    </div>
    )
}

export default Home;