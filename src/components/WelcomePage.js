import React from "react";
import Styled from 'styled-components';

const WelcomeContainer = Styled.div`
max-width: 100%;
margin: 0 auto;
font-size: 1.2rem;

`;

export default function WelcomePage() {
  return (
    <WelcomeContainer>
      {/* <header> */}
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      {/* </header> */}
    </WelcomeContainer>
  );
}
