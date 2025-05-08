import OrderHistory from "../../features/OrderHistory/OrderHistory";
import ProfileImage from "../../features/ProfileImage/ProfileImage";
import { useUserStore } from "../../store/useUserStore";

function ProfilePage() {
  const { user } = useUserStore();

  return (
    <section className="w-full h-full pt-40 ">
      <div className="w-full h-full bg-stone-800 md:grid min-[1145px]:grid-cols-[max-content_1fr] min-[1145px]:rounded-t-xl max-w-[1420px] mx-auto mb-5">
        <div className="min-[1145px]:grid min-[1145px]:grid-cols-1 min-[1145px]:grid-rows-[240px_1fr] items-start min-[1145px]:p-4 pt-0 min-[1145px]:border-r-4 border-amber-50 ">
          <ProfileImage />
          <h1 className=" text-stone-800 bg-amber-50 text-5xl py-6 text-center font-semibold tracking-wide px-2 min-[1145px]:bg-stone-800 min-[1145px]:text-amber-50 relative -mt-12">
            {user?.displayName}
          </h1>
        </div>
        <div className="md:rounded-t-xl text-amber-50 ">
          <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-10 border-b-4 border-amber-50 py-4">
            My orders
          </h2>
          <OrderHistory />
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
