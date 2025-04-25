import Cart from "../../features/Cart/Cart";
import { useUserStore } from "../../store/useUserStore";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import { useState } from "react";

const breadcrumbsNavigation = [
  { index: 0, title: "Cart" },
  { index: 1, title: "Address" },
  { index: 2, title: "Summary" },
];

function CartPage() {
  const [curIndex, setCurIndex] = useState(0);
  const { userCart } = useUserStore();

  function handleSetPage(page: number) {
    setCurIndex(page);
  }

  function handleNextPage() {
    setCurIndex((cur) => cur + 1);
  }

  function handlePreviousPage() {
    setCurIndex((cur) => cur - 1);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <section className="flex flex-col w-full h-full py-4 px-2 lg:py-6">
        <h1 className="text-center font-body text-4xl mb-6 font-bold tracking-wider text-pretty">
          {curIndex === 0 && `Cart (${userCart.length} Items)`}
          {curIndex === 1 && `Address`}
          {curIndex === 2 && `Order Summary`}
        </h1>

        <Breadcrumbs
          breadcrumbs={breadcrumbsNavigation}
          curIndex={curIndex}
          onSetPage={handleSetPage}
        />

        <Cart onNextPage={handleNextPage} />
      </section>
    </div>
  );
}

export default CartPage;
