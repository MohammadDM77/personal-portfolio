import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useAboutAnim = () => {
  const [element, view] = useInView({ threshold: 0.4 });

  const controls = useAnimation();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
