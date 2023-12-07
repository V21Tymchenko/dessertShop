import { Formik, Field, Form } from 'formik';
import {signInSchema} from '../../../../helpers/schemas/authValidationSchema'
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

import { useDispatch } from 'react-redux';
import { login } from '@/redux/Auth/auth-operations';
import Button from '../../../Button/Button';
import CustomInput from '../../../CustomInput/CustomInput';

const SigninForm = ({ onForgotPasswordClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
   
    const initialValues = {
        email:'',
        password: ''
    };

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
        validationSchema={signInSchema}>
                {(formik) => (
                    <FormContainer onSubmit={formik.handleSubmit}>
                                <WrapperInputField>
                               <WrapperInput>
                               <CustomInput
                                name="email"
                                id="email"
                                required
                                placeholder="oksana_shevchenko@gmail.com"
                                as={InputField}
                            />
                            <CustomInput
                                name="password"
                                id="password"
                                required
                                placeholder="******"
                                as={InputField}
                            />
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