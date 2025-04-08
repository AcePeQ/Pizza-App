const pizzas = [
  { src: "/gallery/pizza1.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza2.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza3.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza4.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza5.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza6.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza7.jpg", alt: "pizza 1" },
  { src: "/gallery/pizza8.jpg", alt: "pizza 1" },
];

function Gallery() {
  return (
    <section className="bg-stone-800 px-3 py-12">
      <h2 className="text-center font-header text-amber-50 text-4xl/tight font-bold text-pretty mb-10">
        Warning: May Cause Cravings
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {pizzas.map((pizza, index) => (
          <figure
            key={index}
            className="overflow-hidden border-2 border-amber-50 rounded-sm m-0 p-0"
          >
            <img
              className="inline-block w-full h-full  hover:scale-120 transition-transform duration-500 "
              src={pizza.src}
              alt={pizza.alt}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
