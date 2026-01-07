export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  },
};
