import StatCard from "./StatCard/StatCard";

function Stats() {
  return (
    <section className="my-20">
      <div>
        <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-10">
          We don't count calories, Just slices!
        </h2>

        <article className="flex flex-col gap-1">
          <StatCard statText="50,000+" subText="🍕 Pizza Sold" />
          <StatCard statText="100,000+" subText="🧑‍🍳 Served Pizza Lovers" />
          <StatCard
            statText="30min or less"
            subText="🔥 Average Delivery Time"
          />
          <StatCard statText="20+" subText="🌎 Pizza Flavors" />
        </article>
      </div>
    </section>
  );
}

export default Stats;
