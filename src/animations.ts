export const defaultAnimation = {
  hidden: {
      scale: 0.5,
      opacity: 0,
  },
  visible: {
      scale: 1,
      opacity: 1,
      transition: {
          duration: 0.05,
          type: "spring",
          damping: 50,
          stiffness: 500,
      },
  },
  exit: {
      scale: 0.5,
      opacity: 0,
  },
};
