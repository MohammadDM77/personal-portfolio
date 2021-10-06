import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import hero2 from "../img/hero2.webp";
import { useAboutAnim } from "./useAboutAnim";
import { reveal } from "../animation";

const AboutSection = () => {
  const [element, controls] = useAboutAnim();
  const history = useHistory();

  const viewMyWork = () => {
    history.push("./work");
  };

  return (
    <Container
      ref={element}
      variants={reveal}
      initial="hidden"
      animate={controls}
      id="AboutSection"
    >
      <div className="container__img">
        <img src={hero2} alt="hero" />
      </div>

      <div className="container__text">
        <h6>about me</h6>
        <h1>personal details</h1>
        <p>
          Here, I focus on a range of items and features that we use in life
          without giving them a second thought. such as Coca Cola. Dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco.
        </p>

        <button onClick={viewMyWork}>view full detail</button>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  max-width: 114rem;
  margin: 0 auto;
  text-align: left;
  padding-top: 12rem;

  .container__text {
    flex: 0 0 41.666667%;
    padding: 0 1.5rem;

    h1 {
      font-size: 3.6rem;
      margin-bottom: 4rem;
    }

    h6 {
      margin-bottom: 3rem;
      letter-spacing: 1px;
    }

    h1,
    h6 {
      text-transform: uppercase;
    }

    p {
      line-height: 1.6em;
      margin-bottom: 3rem;
    }
  }

  .container__img {
    flex: 0 0 50%;
    padding: 0 1.5rem;
  }
`;

export default AboutSection;
