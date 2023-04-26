import React from "react";
import styled from "styled-components";

const Show = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1.5rem;
  line-height: 2.0;
  border: 1px solid white;
  color: black;
  background: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;

function ShowBox({ children }) {
  return <Show>{children}</Show>;
}
export default ShowBox;