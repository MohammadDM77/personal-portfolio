import { motion } from "framer-motion";

import { pageAnim } from "../animation";

import Services from "../components/Services";
import Facts from "../components/Facts";
import Portfolio from "../components/Portfolio";
import ScrollTop from "../components/ScrollTop";

const Work = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <Services />
      <Facts />
      <Portfolio />

      <ScrollTop />
    </motion.div>
  );
};

export default Work;
