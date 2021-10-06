import styled from "styled-components";
import { motion } from "framer-motion";

import { textAnim, fade } from "../animation";

import hero from "../img/hero.png";

const Container = () => {
  const scrollDown = () => {
    document
      .querySelector("#AboutSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledContainer>
      <div className="container__text">
        <Hide>
          <motion.h6 variants={textAnim}>this is me</motion.h6>
        </Hide>

        <Hide>
          <motion.h1 variants={textAnim}>philip gilbert</motion.h1>
        </Hide>

        <Hide>
          <motion.p variants={textAnim}>
            You will begin to realise why this exercise is called the Dickens
            Pattern with reference to the ghost showing Scrooge some different
            futures.
          </motion.p>
        </Hide>

        <motion.button onClick={scrollDown} variants={fade}>
          discover now
        </motion.button>
      </div>

      <div className="container__img">
        <img src={hero} alt="hero" />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 114rem;
  margin: 0 auto;
  text-align: left;
  min-height: 85vh;

  .container__text {
    flex: 1;
    padding: 0 1.6rem;

    h1,
    h6 {
      text-transform: uppercase;
    }

    p {
      margin-bottom: 2rem;
    }
  }

  .container__img {
    padding: 0 1.6rem;

    align-self: flex-end;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Container;
