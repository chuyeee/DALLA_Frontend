import React from "react";
import styled from "styled-components";

const OB = styled.button`
  min-width: 120px;
  min-height: 120px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1.5rem;
  line-height: 2.0;
  border: 1px solid white;
  color: black;
  background: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

function OrderBox({ children }) {
  return <OB>{children}</OB>;
}
export default OrderBox;