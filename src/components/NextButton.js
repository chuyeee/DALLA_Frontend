import React from "react";
import styled from "styled-components";

const Next = styled.button`
  min-width: 150px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1.5rem;
  line-height: 2.0;
  border: 1px solid black;
  color: white;
  background: black;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;

function NextButton({ children }) {
  return <Next>{children}</Next>;
}
export default NextButton;