const stats = [
  { name: "Our pizzerias", value: "100+" },
  { name: "We are always available", value: "24/7" },
  { name: "Partner pizzerias", value: "5,000+" },
  { name: "Orders per day", value: "5,500+" },
];

function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-48 2xl:py-64">
      <img
        alt="pizza local at night"
        src="/backgrounds/bg-aboutme.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-stone-800/85 to-stone-800/85"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl/tight font-header font-semibold tracking-tight text-white">
            Get to know us
          </h2>
          <p className="mt-8 text-xl font-medium text-pretty text-gray-300">
            PizzWorld is a convenient online service that lets you order pizza
            anytime, anywhere. Whether you're at home, at work, or on the go, we
            connect you with the best pizzerias near you for fast and delicious
            delivery.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-lg text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
