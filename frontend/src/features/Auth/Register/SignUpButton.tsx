import { useModalStore } from "../../../store/useModalStore";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modals/Modal";
import ModalSignUp from "../../../components/Modals/ModalSignUp/ModalSignUp";
import { useMediaQuery } from "react-responsive";

function SignUpButton({ onMenuClose }: { onMenuClose: () => void }) {
  const { isSignUpModalOpen, setSignUpModalStatus } = useModalStore();
  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  function handleClickButton() {
    onMenuClose();
    setSignUpModalStatus(true);
  }

  function handleCloseModalSignUp() {
    setSignUpModalStatus(false);
  }

  return (
    <>
      <Button
        type="primary"
        size={`${!isDesktop ? "normal" : "sm"}`}
        onClick={handleClickButton}
      >
        Sign up
      </Button>

      {isSignUpModalOpen && (
        <Modal title="Register" onCloseModal={handleCloseModalSignUp}>
          <ModalSignUp />
        </Modal>
      )}
    </>
  );
}

export default SignUpButton;
