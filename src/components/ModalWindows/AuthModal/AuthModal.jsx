import { useState } from 'react';
import {
    AuthBackdrop,
    AuthorizationModal,
    CloseModalBtn,
    CloseModal,
    ButtonWrapper,
    AuthButton,
    AuthWrapper

} from './AuthModal.styled';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import SigninForm from './SignIn/SigninForm'

const AuthModal = ({ closeModal }) => {
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
                    <AuthButton 
                        className={activeButton === 'register' ? 'active' : ''}
                        onClick={() => handleButtonClick('register')}
                        $text={'Реєстрація'}
                        $variant={'cardOpacity'}
                        style={{ borderRadius: '10px 0 0 10px',paddingRight : '140px', paddingLeft: '140px' }}
                    >
                        Реєстрація
                    </AuthButton>                  
                    <AuthButton 
                        className={activeButton === 'login' ? 'active' : ''}
                        onClick={() => handleButtonClick('login')}
                        $text={'Реєстрація'}
                        $variant={'cardOpacity'}
                        style={{ borderRadius: '0 10px 10px 0',paddingRight : '169px', paddingLeft: '169px' }}
                    >
                        Вхід
                    </AuthButton>               
                </ButtonWrapper>
                <AuthWrapper>
                {activeButton === 'register' ? <RegistrationForm /> : <SigninForm onForgotPasswordClick={handleForgotPasswordClick}/>}
                </AuthWrapper>
            </AuthorizationModal>
        </AuthBackdrop>
    );
};

export default AuthModal;