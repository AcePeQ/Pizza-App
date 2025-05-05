import { fadeInUp } from "../../utils/animationVariants";
import { motion } from "motion/react";

function HeroScroll() {
  return (
    <section className="w-full h-[75dvh] relative px-4 rounded-b-[62px] bg-linear-to-b  overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/backgrounds/pizza-oven-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-stone-800/85 to-stone-800/85 "></div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="h-full w-full flex items-center justify-center relative z-1"
      >
        <h1 className="text-center text-amber-50 font-accent text-5xl font-bold tracking-wider text-pretty flex flex-col gap-4">
          <span>GLobal Taste. Local Oven.</span>
          <span>Pizza from Every Corner of the World</span>
        </h1>
      </motion.div>
    </section>
  );
}

export default HeroScroll;
