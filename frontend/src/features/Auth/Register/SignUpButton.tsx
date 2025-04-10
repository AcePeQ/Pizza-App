import { useModalStore } from "../../../store/useModalStore";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modals/Modal";

import { useMediaQuery } from "react-responsive";
import ModalSignUp from "./ModalSignUp/ModalSignUp";

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
        Register
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
