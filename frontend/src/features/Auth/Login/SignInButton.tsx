import { useModalStore } from "../../../store/useModalStore";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modals/Modal";
import ModalSignIn from "../../../components/Modals/ModalSignIn/ModalSignIn";
import { useMediaQuery } from "react-responsive";

function SignInButton({ onMenuClose }: { onMenuClose: () => void }) {
  const { isSignInModalOpen, setSignInModalStatus } = useModalStore();
  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  function handleClickButton() {
    onMenuClose();
    setSignInModalStatus(true);
  }

  function handleCloseModalSignIn() {
    setSignInModalStatus(false);
  }

  return (
    <>
      <Button
        onClick={handleClickButton}
        type="secondary"
        size={`${!isDesktop ? "normal" : "sm"}`}
      >
        Sign In
      </Button>

      {isSignInModalOpen && (
        <Modal title="Login" onCloseModal={handleCloseModalSignIn}>
          <ModalSignIn />
        </Modal>
      )}
    </>
  );
}

export default SignInButton;
