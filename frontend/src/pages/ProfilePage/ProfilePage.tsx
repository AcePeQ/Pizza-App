import { useUserStore } from "../../store/useUserStore";

function ProfilePage() {
  const { user } = useUserStore();

  return (
    <section className="w-full h-full pt-40">
      <div className="w-full h-full bg-stone-800">
        <div className="w-full h-full">
          <figure className="flex items-center justify-center relative mb-[150px]">
            <img
              className="pointer-events-none mx-auto absolute h-[265px] w-auto"
              src={`${
                user?.profilePicture ? user.profilePicture : "/avatar.png"
              }`}
              alt={`${user?.displayName} profile avatar`}
            />
          </figure>
          <h1 className="text-stone-800 bg-amber-50 text-5xl py-6 text-center font-semibold tracking-wide px-2">
            AcePeQ
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
