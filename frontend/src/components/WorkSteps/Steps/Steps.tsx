import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";

const workSteps = [
  {
    title: "Sign Up",
    description:
      "Create an account to start ordering your favorite pizza anytime, anywhere.",
  },
  {
    title: "Browse the Menu",
    description: "Explore delicious options from top pizzerias near you.",
  },
  {
    title: "Place Your Order",
    description:
      "Add your favorite pizzas to the cart and complete your order in a few taps.",
  },
  {
    title: "Add Delivery Address",
    description:
      "Tell us where to deliver — home, office, or wherever you are.",
  },
  {
    title: "Enjoy Your Meal!",
    description:
      "Sit back, relax, and get ready for hot, tasty pizza delivered to your door.",
  },
];

function Steps() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  function handleNext() {
    if (currentStep >= workSteps.length - 1) return;
    setCurrentStep((c) => c + 1);
  }

  function handlePrevious() {
    if (currentStep <= 0) return;
    setCurrentStep((c) => c - 1);
  }

  return (
    <div className="max-w-[640px] min-h-[560px] mx-auto md:grid md:grid-cols-2 md:gap-x-14 md:max-w-7xl md:items-center">
      <div className="min-h-[320px] sm:min-h-[420px] flex items-center justify-center">
        <img
          className="max-w-[320px] sm:max-w-[420px] mx-auto lg:max-w-[560px]  w-full lg:w-full  "
          src={`/steps/step-${currentStep}.png`}
        />
      </div>

      <div className="mt-8">
        <p className="font-bold text-lg inline-block relative tracking-wide mb-3 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-full before:h-1 before:bg-green-700 before:rounded-sm">
          Step {currentStep + 1}
        </p>
        <h3 className="text-3xl font-bold font-header tracking-wide">
          {workSteps[currentStep].title}
        </h3>
        <p className="mt-3 font-medium ">
          {workSteps[currentStep].description}
        </p>

        <div className="flex mt-5 gap-4">
          <button
            aria-label="previous"
            onClick={handlePrevious}
            disabled={currentStep <= 0 ? true : false}
            className="cursor-pointer text-green-700 hover:text-green-800 active:text-green-700 transition-colors duration-500 disabled:text-stone-500"
          >
            <CircleArrowLeft size={42} />
          </button>
          <button
            aria-label="next"
            onClick={handleNext}
            disabled={currentStep >= workSteps.length - 1 ? true : false}
            className="cursor-pointer text-green-700 hover:text-green-800 active:text-green-700 transition-colors duration-500 disabled:text-stone-500"
          >
            <CircleArrowRight size={42} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Steps;
