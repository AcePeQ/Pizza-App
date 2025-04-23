import Button from "../../../components/Button/Button";
import { useModalStore } from "../../../store/useModalStore";
import { useUserStore } from "../../../store/useUserStore";
import { IPizzaMenuItem } from "../Menu";
import PizzaIngredient from "./PizzaIngredient";

function PizzaCard({ pizza }: { pizza: IPizzaMenuItem }) {
  const { user, userCart, addPizzaToCart, removePizzaFromCart } =
    useUserStore();
  const { setSignInModalStatus } = useModalStore();

  const isInUserCart = userCart.find(
    (pizzaItem) => pizzaItem._id === pizza._id
  );

  function handleAddPizzaToCart() {
    if (!user) {
      setSignInModalStatus(true);
      return;
    }

    const newPizza = { ...pizza, quantity: 1 };

    addPizzaToCart(newPizza);
  }

  function handleRemovePizzaFromCart() {
    if (!user) {
      setSignInModalStatus(true);
      return;
    }

    removePizzaFromCart(pizza._id);
  }

  return (
    <li className="relative [perspective:1000px]">
      <div
        tabIndex={0}
        className="pizza-card bg-stone-800 p-6 rounded-3xl duration-500 transition-all shadow-xl shadow-stone-800/85 hover:[transform:rotateX(35deg)] hover:shadow-2xl [transform-style:preserve-3d] backface-hidden will-change-transform flex flex-col items-center min-w-[256] max-w-[256] focus-within:[transform:rotateX(35deg)] focus-within:shadow-2xl"
      >
        <figure className="w-full mb-3">
          <img
            className="max-w-42 h-full mx-auto rounded-full"
            src={`${pizza.image}`}
            alt={`${pizza.name} with ${pizza.ingredients.join(", ")}`}
          />
          <figcaption className="text-amber-50 text-center mt-4">
            <p className="text-2xl tracking-wider whitespace-nowrap">
              {pizza.name}
            </p>
            <p className="text-lg mt-0.5">{pizza.price}€</p>
          </figcaption>
        </figure>

        {isInUserCart ? (
          <Button
            onClick={handleRemovePizzaFromCart}
            buttonType="button"
            size="big"
            type="tertiary"
          >
            Remove
          </Button>
        ) : (
          <Button
            onClick={handleAddPizzaToCart}
            buttonType="button"
            size="big"
            type="primary"
          >
            Add to cart
          </Button>
        )}
      </div>

      <div className="pizza-ingridents bg-stone-700 rounded-md w-1 h-9/12 absolute -top-9/12 left-1/2 translate-y-8/12 -translate-x-1/2">
        {pizza.ingredients.map((ingredient, index) => (
          <PizzaIngredient key={index} index={index} ingredient={ingredient} />
        ))}
      </div>
    </li>
  );
}

export default PizzaCard;
