export const pageAnim = {
  hidden: { opacity: 0, y: 250 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 75,
    transition: { duration: 0.5 },
  },
};

export const textAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      // type: "tween",
      // ease: "easeOut",
      duration: 1,
    },
  },
};

export const revealNav = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 0.95,
    transition: {
      // type: "tween",
      // ease: "easeOut",
      duration: 1,
    },
  },
};

export const projAnim = {
  hidden: {
    y: -250,
    opacity: 0,
    transition: { duration: 0.5 },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      // type: "tween",
      // ease: "easeOut",
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
};
