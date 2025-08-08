// Loader.jsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/emblem.png";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="textWrapper">
        <p className="text">
          Imagine<span className="highlight">See.</span>
        </p>
        <img src={logo} alt="emblem" className="emblem" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .textWrapper {
    height: fit-content;
    min-width: 3rem;
    width: fit-content;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.2ch;
    position: relative;
    z-index: 0;
    color: white;
    margin: 100px auto;
  }

  .highlight {
    color: #f2ba5a; /* warna See */
  }

  .emblem {
    position: absolute;
    height: 100%;
    aspect-ratio: 1 / 1;
    left: 0;
    top: 0;
    animation: move 2s ease-in-out infinite;
    z-index: 2;
    border-radius: 20%;
  }

  .text {
    position: relative;
    z-index: 1;
  }

  @keyframes move {
    50% {
      left: calc(100% - 3rem);
    }
  }
`;

export default Loader;
