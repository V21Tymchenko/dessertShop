import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import{
    LoginHeader,
    FormContainer,
    WrapperInputField,
    WrapperInput,
    InputField,
    PasswordToggler,
    PasswordTogglerIcon,

} from './SigninForm.styled';
import sprite from '@/assets/images/modal/sprite-eye.svg';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/Auth/auth-operations';
import Button from '../../../Button/Button';

const SigninForm = ({ onForgotPasswordClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
   
    const initialValues = {
        email:'',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Введіть дійсний email').required('Поле "Ел. пошта" є обов’язковим'),
        password: Yup.string().min(6, 'Пароль повинен містити принаймні 6 символів').required('Поле "Пароль" є обов’язковим'),
      });
      

    const onSubmit = () => {
        dispatch(login(values));
        console.log('Submitted values:');

      };

    return (
        <>
        <LoginHeader>Вхід</LoginHeader>
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
                {(formik) => (
                    <FormContainer onSubmit={formik.handleSubmit}>
                                <WrapperInputField>
                                <WrapperInput>
                                    <label htmlFor="emailOrPhone">Ел. пошта або номер телефону</label>
                                    <Field
                                        type="text"
                                        name="email"
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
                                <Button type='button' variant={'SignInBtn'} text={'Забули пароль'} onClick={onForgotPasswordClick}/>
                                <Button type='submit' variant={"RegButton"} text={'Увійти'}/>
                                
                                </WrapperInputField>
         </FormContainer>
                )}
            </Formik>
            </>
    )

}

export default SigninForm;