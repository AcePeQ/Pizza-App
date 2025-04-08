import Steps from "./Steps/Steps";

function WorkSteps() {
  return (
    <section className="py-18 px-3">
      <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-10">
        How does it{" "}
        <span className="inline-block relative z-2 text-amber-50">
          work?
          <img
            className="absolute -top-5 -left-0.5 -z-1 inline-block"
            src="/public/blob.svg"
          />
        </span>
      </h2>

      <Steps />
    </section>
  );
}

export default WorkSteps;
