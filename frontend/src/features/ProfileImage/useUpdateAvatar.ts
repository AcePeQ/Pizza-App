import { useMutation } from "@tanstack/react-query";
import { updateProfileAvatarApi } from "../../services/apiAccount";
import { useUserStore } from "../../store/useUserStore";
import toast from "react-hot-toast";

export interface IAvatar {
  profilePicture: string | ArrayBuffer | null;
}

export function useUpdateAvatar() {
  const { updateAvatar } = useUserStore();

  const { mutate: updateAvatarFn, isPending: isUpdatingAvatar } = useMutation({
    mutationFn: (data: IAvatar) => updateProfileAvatarApi(data),
    onSuccess: (data) => {
      updateAvatar(data);
      toast.success("Avatar successfully updated");
    },
  });

  return { updateAvatarFn, isUpdatingAvatar };
}
