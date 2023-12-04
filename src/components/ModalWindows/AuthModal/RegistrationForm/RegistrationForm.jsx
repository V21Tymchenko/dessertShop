import { Formik, Field, Form } from 'formik';
import {signUpSchema} from '../../../../helpers/schemas/authValidationSchema'
import CustomInput from '../../../CustomInput/CustomInput';
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

} from './RegistrationForm.styled';
import googleIconUrl from '@/assets/images/modal/google.svg';

import { register } from '../../../../redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
import Button from '../../../Button/Button';
import useAuth from '../../../../hooks/useAuth'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = ({ verificationId }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name:'',
        phone: '',
        email: '',
        password: '',
      };


      const { isVerify, user } = useAuth();

      const handleSubmit = (credentials) => {
        dispatch(register(credentials));
        console.log('Submitted values:', credentials);

      };

      
      const handleVerify = (link) => {
        dispatch(verifyUserByLink(link))
          .then((response) => {
            console.log('Verification successful:', response);
          })
          .catch((error) => {
            console.error('Verification error:', error);
          });
      };

      useEffect(() => {

    
        if (verificationId && isVerify) {
            const verificationLink = `https://dessert-shop-plum.vercel.app/verify/${verificationId}`;
            handleVerify(verificationLink)
                .then(() => {
                    console.log('Verification successful');
                    navigate('/dessertShop');
                })
                .catch((error) => {
                    console.error('Verification error:', error);
                });
        }
    }, [verificationId, isVerify, navigate]);
    
    
      

    return (
        <>
            <RegistrationHeader>Реєстрація</RegistrationHeader>
            <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}
            validationSchema={signUpSchema}>
                {({ isValid, dirty, values }) => (
                   <FormDiv onSubmit={handleSubmit}>
                    <FormContainer>
                        <WrapperInputField>
                     
                        <CustomInput
                                name="name"
                                id="name"
                                required
                                placeholder="Ім’я та Прізвище"
                            />
                            <CustomInput
                                name="phone"
                                id="phone"
                                required
                                placeholder="Номер телефону"
                            />
                            <CustomInput
                                name="email"
                                id="email"
                                required
                                placeholder="Пошта"
                            />
                            <CustomInput
                                name="password"
                                id="password"
                                required
                                placeholder="Пароль"
                            />
      
                        </WrapperInputField>
                        <RegistDivider>
                            <FormSpan>Або</FormSpan>
                        <GoogleButton type='button'>
                            <GoogleIcon src={googleIconUrl} alt="Google Icon" />
                            Зареєструватись через Google
                        </GoogleButton>
                        <Button type='submit' text={'Зареєструватись'} variant={"RegButton"} disabled={!dirty || !isValid}/>
                            </RegistDivider>
                    </FormContainer>
                   </FormDiv>
                )}
            </Formik>
        </>
    );



}
export default RegistrationForm;
