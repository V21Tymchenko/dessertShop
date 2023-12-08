import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsVerified } from "@/redux/auth/auth-selectors";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import SigninForm from "./SignIn/SigninForm";
import PropTypes from "prop-types";
import {
  AuthBackdrop,
  AuthorizationModal,
  CloseModalBtn,
  CloseModal,
  ButtonWrapper,
  AuthButtonReg,
  AuthButtonLog,
} from "./AuthModal.styled";


const AuthModal = ({ closeModal, closeLogin }) => {
  const [activeButton, setActiveButton] = useState("register");
    const verified = useSelector(selectIsVerified); 
    
    useEffect(() => {
        if (verified) {
            setActiveButton("login");
        }
    }, [verified]);
 

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };
  const handleForgotPasswordClick = () => {
    setActiveButton("register");
  };

  return (
    <AuthBackdrop>
      <AuthorizationModal>
        <CloseModalBtn onClick={closeModal}>
          <CloseModal />
        </CloseModalBtn>
        <ButtonWrapper>
          <AuthButtonReg
            className={activeButton === "register" ? "active" : ""}
            onClick={() => handleButtonClick("register")}
            $variant={"cardOpacity"}
          >
            Реєстрація
          </AuthButtonReg>
          <AuthButtonLog
            className={activeButton === "login" ? "active" : ""}
            onClick={() => handleButtonClick("login")}
            $variant={"cardOpacity"}
          >
            Вхід
          </AuthButtonLog>
        </ButtonWrapper>
        {activeButton === "register" ? (
          <RegistrationForm shouldCloseModal={closeLogin} />
        ) : (
          <SigninForm
            onForgotPasswordClick={handleForgotPasswordClick}
            shouldCloseModal={closeLogin}
          />
        )}
      </AuthorizationModal>
    </AuthBackdrop>
  );
};

export default AuthModal;

AuthModal.propTypes = {
  closeModal: PropTypes.func,
  closeLogin: PropTypes.func,
};
