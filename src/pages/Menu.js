import React from "react";
import styled from "styled-components";
import { IoMicCircleSharp } from 'react-icons/io5';
import NextButton from "../components/NextButton";
import ShowBox from "../components/ShowBox";
import PreButton from "../components/PreButton";

function Menu() {
    return (
    <div>
        <h1>메뉴를 선택해주세요.</h1>
        <ShowBox>커피</ShowBox><ShowBox>차</ShowBox>
        <br />
        <IoMicCircleSharp size="70" />
        <br />
        <PreButton>이전으로</PreButton><NextButton>다음으로</NextButton>
    </div>
    )
}

export default Menu;