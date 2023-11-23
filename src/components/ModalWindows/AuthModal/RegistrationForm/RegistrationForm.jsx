import { Formik, Field } from 'formik';
import { useState } from 'react';
import {
    RegistrationHeader,
    FormContainer,
    WrapperInput,
    WrapperInputField,
    InputField,
    FormSpan,
    FormDiv,
    GoogleIcon,
    GoogleButton,
    RegistDivider,
    PasswordToggler,
    PasswordTogglerIcon,
    RegstButton
} from './RegistrationForm.styled';
import googleIconUrl from '@/assets/images/modal/google.svg';
import sprite from '@/assets/images/modal/sprite-eye.svg';



const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
   
    const initialValues = {
        name: '',
        tel: '',
        email: '',
        password: ''
    };

    const onSubmit = (values) => {
        console.log('Submitted values:', values);
    };
    return (
        <>
            <RegistrationHeader>Реєстрація</RegistrationHeader>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <FormDiv>
                            <FormContainer>
                                <WrapperInputField>
                                    <WrapperInput>
                                        <label htmlFor="name">Ім’я та Прізвище</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Ім’я та Прізвище"
                                            as={InputField}
                                        />
                                    </WrapperInput>
                                    <WrapperInput>
                                        <label htmlFor="tel">Номер телефону</label>
                                        <Field
                                            type="tel"
                                            name="tel"
                                            placeholder="+38 (099) 876 54 32"
                                            as={InputField}
                                        />
                                    </WrapperInput>
                                    <WrapperInput>
                                        <label htmlFor="email">Пошта</label>
                                        <Field
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            as={InputField}
                                        />
                                    </WrapperInput>
                                    <WrapperInput>
                                        <label htmlFor="password">Пароль</label>
                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="*******"
                                            as={InputField}
                                        />
                                        <PasswordToggler
                                            type="button"
                                            onClick={() => setShowPassword(prev => !prev)}
                                        >
                                            <PasswordTogglerIcon width="20" height="20">
                                                <use href={`${sprite}#${showPassword ? 'eye' : 'eye-off'}`}></use>
                                            </PasswordTogglerIcon>
                                        </PasswordToggler>
                                    </WrapperInput>
                                </WrapperInputField>
                                <RegistDivider>
                                <FormSpan>Або</FormSpan>
                            <GoogleButton type='button'>
                                <GoogleIcon src={googleIconUrl} alt="Google Icon" />
                                Зареєструватись через Google
                            </GoogleButton>
                            <RegstButton type='submit' $text={'Зареєструватись'} $variant={"hero"} >Зареєструватись</RegstButton> 
                                </RegistDivider>

                            </FormContainer>


                        </FormDiv>
                    </form>
                )}
            </Formik>
        </>
    );



}
export default RegistrationForm;