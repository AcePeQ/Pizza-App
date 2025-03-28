function Hero() {
  return (
    <section className="flex items-start justify-center w-full hero-height">
      <div className="w-full px-3 mt-20">
        <h1 className="text-center font-accent text-5xl font-bold tracking-wider text-pretty">
          PizzWorld - Pizza, wherever you are!
        </h1>

        <p className="mt-7 font-header text-justify text-xl font-semibold tracking-wide">
          It doesn’t matter if you’re at home, at work, on the beach, or in the
          middle of the woods – we’ll deliver hot, delicious pizza straight to
          you! Order from any pizzeria, and we’ll take care of the rest.
        </p>
      </div>
    </section>
  );
}

export default Hero;
