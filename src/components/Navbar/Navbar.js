import React, { useState } from "react";
import Styled from "styled-components";
//import { AppContext } from "../../context";

const Container = Styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;
const Title = Styled.section`
  width: 15rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > h1{
    font-size: 1.8rem;
  }
`;

function Navbar() {
  //const { user, company, navigate } = React.useContext(AppContext);

  return (
    <>
      <Container>
        <Title></Title>
      </Container>
    </>
  );
}

export default Navbar;
