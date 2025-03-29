import Button from "../Button/Button";

function Hero() {
  return (
    <section className="flex items-start justify-center w-full hero-height bg-[url(/public/backgrounds/mobile-bg.jpg)] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-stone-800/85 to-stone-800/85"></div>
      <div className="w-full px-3 mt-20 relative z-10">
        <h1 className="text-center text-amber-50 font-accent text-5xl font-bold tracking-wider text-pretty">
          PizzWorld - Pizza, wherever you are!
        </h1>

        <p className="mt-7 text-amber-50 font-header text-justify text-xl font-semibold tracking-wide">
          It doesn’t matter if you’re at home, at work, on the beach, or in the
          middle of the woods – we’ll deliver hot, delicious pizza straight to
          you! Order from any pizzeria, and we’ll take care of the rest.
        </p>

        <div className="flex items-center justify-center mt-12">
          <Button buttonType="button" type="primary" size="big">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
