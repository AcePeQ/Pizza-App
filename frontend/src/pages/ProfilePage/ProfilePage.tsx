import OrderHistory from "../../features/OrderHistory/OrderHistory";
import ProfileImage from "../../features/ProfileImage/ProfileImage";
import { useUserStore } from "../../store/useUserStore";

function ProfilePage() {
  const { user } = useUserStore();

  return (
    <section className="w-full h-full pt-40">
      <div className="w-full h-full bg-stone-800 md:grid md:grid-cols-[max-content_1fr] md:rounded-t-xl max-w-[1420px] mx-auto">
        <div className="md:grid md:grid-cols-1 md:grid-rows-[240px_1fr] items-start md:p-4 pt-0 border-r-4 border-amber-50  ">
          <ProfileImage />
          <h1 className=" text-stone-800 bg-amber-50 text-5xl py-6 text-center font-semibold tracking-wide px-2 md:bg-stone-800 md:text-amber-50 relative -mt-12">
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
