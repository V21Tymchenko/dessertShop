import { useState } from 'react';
import {
    AuthBackdrop,
    AuthorizationModal,
    CloseModalBtn,
    CloseModal,
    ButtonWrapper,
    AuthButtonReg,
    AuthButtonLog,
} from './AuthModal.styled';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import SigninForm from './SignIn/SigninForm'

const AuthModal = ({ closeModal, verificationId }) => {
    const [activeButton, setActiveButton] = useState('register');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    const handleForgotPasswordClick = () => {
        setActiveButton('register');
    };

    return (
        <AuthBackdrop>
            <AuthorizationModal>
                <CloseModalBtn onClick={closeModal}>
                    <CloseModal/>
                </CloseModalBtn>
                <ButtonWrapper>
                    <AuthButtonReg 
                        className={activeButton === 'register' ? 'active' : ''}
                        onClick={() => handleButtonClick('register')}
                        $variant={'cardOpacity'}
                        
                    >
                        Реєстрація
                    </AuthButtonReg>                  
                    <AuthButtonLog 
                        className={activeButton === 'login' ? 'active' : ''}
                        onClick={() => handleButtonClick('login')}
                        $variant={'cardOpacity'}
                    >
                        Вхід
                    </AuthButtonLog>               
                </ButtonWrapper>
                {activeButton === 'register' ? <RegistrationForm  verificationId={verificationId}/> : <SigninForm onForgotPasswordClick={handleForgotPasswordClick} />}
            </AuthorizationModal>
        </AuthBackdrop>
    );
};

export default AuthModal;