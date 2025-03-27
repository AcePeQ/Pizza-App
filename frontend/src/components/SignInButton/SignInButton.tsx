import { useModalStore } from "../../store/useModalStore";
import Button from "../Button/Button";

function SignInButton({ onMenuClose }: { onMenuClose: () => void }) {
  const { setSignInModalStatus } = useModalStore();

  function handleClickButton() {
    onMenuClose();
    setSignInModalStatus(true);
  }

  function handleCloseModalSignUp() {
    setSignInModalStatus(false);
  }

  return (
    <Button onClick={() => handleClickButton} type="secondary" size="sm">
      Sign In
    </Button>
  );
}

export default SignInButton;
