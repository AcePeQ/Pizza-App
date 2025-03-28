import { useModalStore } from "../../store/useModalStore";
import Button from "../Button/Button";
import Modal from "../Modals/Modal";
import ModalSignIn from "../Modals/ModalSignIn/ModalSignIn";

function SignInButton({ onMenuClose }: { onMenuClose: () => void }) {
  const { isSignInModalOpen, setSignInModalStatus } = useModalStore();

  function handleClickButton() {
    onMenuClose();
    setSignInModalStatus(true);
  }

  function handleCloseModalSignIn() {
    setSignInModalStatus(false);
  }

  return (
    <>
      <Button onClick={handleClickButton} type="secondary" size="sm">
        Sign In
      </Button>

      {isSignInModalOpen && (
        <Modal title="Register" onCloseModal={handleCloseModalSignIn}>
          <ModalSignIn />
        </Modal>
      )}
    </>
  );
}

export default SignInButton;
