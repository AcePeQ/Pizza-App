import Cart from "../../features/Cart/Cart";
import { useUserStore } from "../../store/useUserStore";
import { useState } from "react";
import ShippingAddress from "../../features/ShippingAddress/ShippingAddress";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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
      <section className="flex flex-col w-full h-full py-4 px-0 sm:px-2 lg:py-6 max-w-7xl mx-auto">
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

        {curIndex === 0 && <Cart onNextPage={handleNextPage} />}
        {curIndex === 1 && (
          <ShippingAddress
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        )}
      </section>
    </div>
  );
}

export default CartPage;
