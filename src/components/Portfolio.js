import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../styles";

import Projects from "./Projects";

import "../img/Icon/icon-font.css";

const Portfolio = () => {
  const [model, setModel] = useState("All");

  const allRef = useRef();
  const vectorRef = useRef();
  const rasterRef = useRef();
  const agencyRef = useRef();
  const portalRef = useRef();

  const optionSelect = (option) => {
    setModel(option.current.firstChild.data);
  };

  return (
    <Container>
      <header className="container__header">
        <h1>Our Latest Featured Projects</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </header>

      <ul className="container__list">
        <li ref={allRef} onClick={optionSelect.bind(this, allRef)}>
          All
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: model === "All" ? "100%" : "0" }}
          />
        </li>

        <li ref={vectorRef} onClick={optionSelect.bind(this, vectorRef)}>
          Vector
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: model === "Vector" ? "100%" : "0" }}
          />
        </li>

        <li ref={rasterRef} onClick={optionSelect.bind(this, rasterRef)}>
          Raster
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: model === "Raster" ? "100%" : "0" }}
          />
        </li>

        <li ref={agencyRef} onClick={optionSelect.bind(this, agencyRef)}>
          UI/UX
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: model === "UI/UX" ? "100%" : "0" }}
          />
        </li>

        <li ref={portalRef} onClick={optionSelect.bind(this, portalRef)}>
          Printing
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: model === "Printing" ? "100%" : "0" }}
          />
        </li>
      </ul>

      <div className="container__images">
        <Projects model={model} />
      </div>
    </Container>
  );
};

const Line = styled(motion.div)`
  height: 2.5px;
  margin-top: 0.5rem;
  background-image: linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
`;

export default Portfolio;
