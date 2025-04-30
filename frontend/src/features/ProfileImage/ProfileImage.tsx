import { useState } from "react";
import { useUserStore } from "../../store/useUserStore";
import { ImageUp } from "lucide-react";
import { useUpdateAvatar } from "./useUpdateAvatar";
import LoaderFull from "../../components/Loaders/LoaderFull/LoaderFull";

function ProfileImage() {
  const { user } = useUserStore();
  const { updateAvatarFn, isUpdatingAvatar } = useUpdateAvatar();
  const [selectedImg, setSelectedImg] = useState<string | null | ArrayBuffer>(
    null
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      updateAvatarFn({ profilePicture: base64Image });
    };
  };

  return (
    <figure className="flex flex-col h-[265px] w-[270px] items-center mx-auto -top-16 relative">
      {isUpdatingAvatar && <LoaderFull />}
      <img
        className="pointer-events-none mx-auto h-[265px] min-w-[270px] object-cover  w-auto rounded-full border-8"
        src={
          (selectedImg as string) ||
          user?.profilePicture ||
          user?.profilePicture ||
          "/avatar.png"
        }
        alt={`${user?.displayName || "unknown"} profile avatar`}
      />
      <label
        htmlFor="avatar-upload"
        className="absolute bottom-4 right-4 p-2 cursor-pointer rounded-full bg-amber-50 text-stone-800 border-4 border-stone-800 flex items-center justify-center z-40 h-[64px] w-[64px]"
      >
        <ImageUp size={36} />
        <input
          type="file"
          id="avatar-upload"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </figure>
  );
}

export default ProfileImage;
