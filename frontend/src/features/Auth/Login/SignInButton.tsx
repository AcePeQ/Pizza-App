import { useModalStore } from "../../../store/useModalStore";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modals/Modal";
import ModalSignIn from "../../../components/Modals/ModalSignIn/ModalSignIn";

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
        <Modal title="Login" onCloseModal={handleCloseModalSignIn}>
          <ModalSignIn />
        </Modal>
      )}
    </>
  );
}

export default SignInButton;
