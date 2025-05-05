import { fadeInDown } from "../../utils/animationVariants";
import StatCard from "./StatCard/StatCard";
import { motion } from "motion/react";

function Stats() {
  return (
    <section className="my-20">
      <motion.div
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto md:max-w-full"
      >
        <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-10">
          We don't count calories, Just slices!
        </h2>

        <article className="grid grid-cols-1 gap-2.5 md:gap-1.5 md:grid md:grid-cols-[312px_312px]  xl:grid-cols-[312px_312px_321px_321px] justify-center">
          <StatCard statText="50,000+" subText="🍕 Pizza Sold" />
          <StatCard statText="100,000+" subText="🧑‍🍳 Served Pizza Lovers" />
          <StatCard
            statText="30min or less"
            subText="🔥 Average Delivery Time"
          />
          <StatCard statText="20+" subText="🌎 Pizza Flavors" />
        </article>
      </motion.div>
    </section>
  );
}

export default Stats;
