import { motion } from "framer-motion";

import { pageAnim } from "../animation";

import Testimonial from "../components/Testimonial";
import Price from "../components/Price";
import Brand from "../components/Brand";
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <Testimonial />
      <Price />
      <Brands />

      <ScrollTop />
    </motion.div>
  );
};

export default Contact;
