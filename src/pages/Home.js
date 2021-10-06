import { motion } from "framer-motion";

import Container from "../components/Container";
import AboutSection from "../components/AboutSection";
import ScrollTop from "../components/ScrollTop";

import { pageAnim } from "../animation";

const Home = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <Container />
      <AboutSection />

      <ScrollTop />
    </motion.div>
  );
};

export default Home;
