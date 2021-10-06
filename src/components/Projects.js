import { Fragment } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import img1 from "../img/i1.jpg";
import img2 from "../img/i2.jpg";
import img3 from "../img/i3.jpg";
import img4 from "../img/i4.jpg";
import img5 from "../img/i5.jpg";
import img6 from "../img/i6.jpg";
import { projAnim } from "../animation";

const projectDetails = [
  {
    imgSrc: img1,
    h4: "2D Vinyl Design",
    p: "Vector",
    key: Math.random(),
  },
  {
    imgSrc: img2,
    h4: "2D Vinyl Design",
    p: "Raster",
    key: Math.random(),
  },
  {
    imgSrc: img3,
    h4: "Creative Poster Design",
    p: "Agency",
    key: Math.random(),
  },
  {
    imgSrc: img4,
    h4: "Embossed Logo Design",
    p: "Portal",
    key: Math.random(),
  },
  {
    imgSrc: img5,
    h4: "3D Helmet Design",
    p: "Vector",
    key: Math.random(),
  },
  {
    imgSrc: img6,
    h4: "2D Vinyl Design",
    p: "Raster",
    key: Math.random(),
  },
];

const Projects = (props) => {
  let model = props.model;

  if (model === "UI/UX") {
    model = "Agency";
  }
  if (model === "Printing") {
    model = "Portal";
  }

  const result = projectDetails
    .filter((projectDetail) => {
      if (model === "All") {
        return projectDetail.p;
      }
      return projectDetail.p === model;
    })
    .map((projectDetail, key = Math.random()) => {
      return (
        <AnimatePresence exitBeforeEnter key={key}>
          <motion.div
            variants={projAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className="card"
            key={projectDetail.key}
          >
            <div className="card__img">
              <img src={projectDetail.imgSrc} alt="Project" />
              <div className="overlay icon-basic-magnifier"></div>
            </div>

            <div className="card__text">
              <h4>{projectDetail.h4}</h4>
              <p>{projectDetail.p}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    });

  return <Fragment>{result}</Fragment>;
};

export default Projects;
