export const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 1 } },
};

export const popUp = {
  start: { opacity: 0, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

export const popUpSlower = {
  start: { opacity: 0, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.6 } },
};
