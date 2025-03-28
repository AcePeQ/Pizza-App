import { useModalStore } from "../../store/useModalStore";
import Button from "../Button/Button";
import Modal from "../Modals/Modal";
import ModalSignUp from "../Modals/ModalSignUp/ModalSignUp";

function SignUpButton({ onMenuClose }: { onMenuClose: () => void }) {
  const { isSignUpModalOpen, setSignUpModalStatus } = useModalStore();

  function handleClickButton() {
    onMenuClose();
    setSignUpModalStatus(true);
  }

  function handleCloseModalSignUp() {
    setSignUpModalStatus(false);
  }

  return (
    <>
      <Button type="primary" size="sm" onClick={handleClickButton}>
        Sign up
      </Button>

      {isSignUpModalOpen && (
        <Modal title="Login" onCloseModal={handleCloseModalSignUp}>
          <ModalSignUp />
        </Modal>
      )}
    </>
  );
}

export default SignUpButton;
