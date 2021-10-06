import { motion } from "framer-motion";
import styled from "styled-components";
import { reveal } from "../animation";

const Card = (props) => {
  return (
    <StyledDiv variants={reveal}>
      <span className={props.cartDetail.class}></span>
      <h4>{props.cartDetail.h1}</h4>
      <p>{props.cartDetail.p}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  flex: 0 0 33.33%;
  min-width: max-content;
  margin-top: 6rem;
  transition: all 0.2s;

  span {
    font-size: 3.5rem;
  }

  h4 {
    font-size: 1.8rem;
    margin: 3rem 0 2rem 0;
  }

  p {
    max-width: 31.8rem;
    margin: 0 auto 1rem;
  }

  &:hover {
    background-image: linear-gradient(90deg, #8490ff 0%, #62bdfc 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export default Card;
