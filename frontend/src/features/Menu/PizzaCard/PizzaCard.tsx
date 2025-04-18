import Button from "../../../components/Button/Button";
import { useModalStore } from "../../../store/useModalStore";
import { useUserStore } from "../../../store/useUserStore";
import PizzaIngredient from "./PizzaIngredient";

function PizzaCard() {
  const { user } = useUserStore();
  const { setSignInModalStatus } = useModalStore();

  function handleAddPizzaToCart() {
    if (!user) {
      setSignInModalStatus(true);
      return;
    }
  }

  return (
    <li className="relative [perspective:1000px]">
      <div
        tabIndex={0}
        className="pizza-card bg-stone-800 p-6 rounded-3xl duration-500 transition-all shadow-xl shadow-stone-800/85 hover:[transform:rotateX(35deg)] hover:shadow-2xl [transform-style:preserve-3d] backface-hidden will-change-transform flex flex-col items-center min-w-3xs max-w-3xs focus-within:[transform:rotateX(35deg)] focus-within:shadow-2xl"
      >
        <figure className="max-w-42 mb-3">
          <img
            className="w-full h-full"
            src="/pizzas/margarita.png"
            alt="pizza"
          />
          <figcaption className="text-amber-50 text-center mt-4">
            <p className="text-2xl tracking-wider">Margharita</p>
            <p className="text-lg mt-0.5">7,50€</p>
          </figcaption>
        </figure>
        <Button
          onClick={handleAddPizzaToCart}
          buttonType="button"
          size="big"
          type="primary"
        >
          Add to cart
        </Button>
      </div>

      {/* Ingridenty */}
      <div className="pizza-ingridents bg-stone-700 rounded-md w-1 h-9/12 absolute -top-9/12 left-1/2 translate-y-8/12 -translate-x-1/2">
        <PizzaIngredient index={0} />
        <PizzaIngredient index={1} />
        <PizzaIngredient index={2} />
        <PizzaIngredient index={3} />
        <PizzaIngredient index={4} />
      </div>
    </li>
  );
}

export default PizzaCard;
