import { Formik, Field } from 'formik';
import { useState } from 'react';
import{
    LoginHeader,
    FormContainer,
    WrapperInputField,
    WrapperInput,
    InputField,
    PasswordToggler,
    PasswordTogglerIcon,
    SigninText,
    SigninSubmitBtn
} from './SigninForm.styled';
import sprite from '@/assets/images/modal/sprite-eye.svg';

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
   
    const initialValues = {
        emailOrPhone: '',
        password: ''
    };

    const onSubmit = (values) => {
        console.log('Submitted values:', values);
    };

    return (
        <>
        <LoginHeader>Вхід</LoginHeader>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                    
                            <FormContainer>
                                <WrapperInputField>
                                <WrapperInput>
                                    <label htmlFor="emailOrPhone">Ел. пошта або номер телефону</label>
                                    <Field
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Введіть ел. пошту або номер телефону"
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
                                <SigninText>Забули пароль</SigninText>
                                <SigninSubmitBtn type='submit' $text={"Увійти"} $variant={"hero"}>Увійти</SigninSubmitBtn>

                                </WrapperInputField>
                                
                            </FormContainer>
                            
                    </form>
                )}
            </Formik>
            </>
    )

}

export default SigninForm;