function OrderLoading() {
  return (
    <div className="fixed top-0 left-0 bg-stone-800 h-dvh w-full z-50 flex items-center justify-center flex-col ">
      <div className="relative mb-6">
        <div className="relative w-32 h-32">
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-amber-50 border-b-green-600 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-orange-400 animate-spin"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 via-transparent to-green-600/5 animate-pulse rounded-full blur-sm" />
      </div>
      <p className="text-4xl text-amber-50 mb-1 tracking-wide">
        Order Processing
      </p>
      <p className="text-3xl text-amber-50 tracking-wide">Please wait</p>
    </div>
  );
}

export default OrderLoading;
