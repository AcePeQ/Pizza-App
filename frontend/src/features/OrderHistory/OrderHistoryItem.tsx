import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";
import { IOrderHistoryItem } from "./OrderHistory";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import OrderCard from "../Order/OrderCard";

function OrderHistoryItem({ order }: { order: IOrderHistoryItem }) {
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const createdAtData = new Date(order.createdAt);
  const day = (createdAtData.getDate() + 1).toString().padStart(2, "0");
  const month = (createdAtData.getMonth() + 1).toString().padStart(2, "0");
  const year = createdAtData.getFullYear();
  const hour = createdAtData.getHours().toString().padStart(2, "0");
  const min = createdAtData.getMinutes().toString().padStart(2, "0");

  return (
    <li className="px-4 py-3 bg-amber-50 text-stone-800 rounded-2xl">
      <div className="grid grid-cols-[minmax(280px,_1fr)_1fr_max-content] items-center text-xl font-medium gap-4">
        <p>{order._id}</p>
        <p>{`${day}/${month}/${year}, ${hour}:${min}`}</p>
        <button
          onClick={() => setIsOpenOrder((cur) => !cur)}
          className="cursor-pointer"
        >
          {!isOpenOrder ? (
            <ArrowDownCircleIcon size={32} />
          ) : (
            <ArrowUpCircleIcon size={32} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpenOrder && (
          <motion.div
            className="overflow-hidden"
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
            }}
            exit={{
              height: 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-4 mt-4">
              {order.pizzas.map((pizza) => (
                <OrderCard key={pizza._id} order={pizza} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default OrderHistoryItem;
