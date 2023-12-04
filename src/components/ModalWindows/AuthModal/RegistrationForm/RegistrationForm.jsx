import { Formik, Field, Form } from 'formik';
import {signUpSchema} from '../../../../helpers/schemas/authValidationSchema'
import CustomInput from '../../../CustomInput/CustomInput';
import {
    RegistrationHeader,
    FormContainer,
    WrapperInputField,
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
                                placeholder="Оксана Шевченко"
                            />
                            <CustomInput
                                name="phone"
                                id="phone"
                                required
                                placeholder="+38 (099) 876 54 32"
                            />
                            <CustomInput
                                name="email"
                                id="email"
                                required
                                placeholder="oksana_shevchenko@gmail.com"
                            />
                            <CustomInput
                                name="password"
                                id="password"
                                required
                                placeholder="******"
                            />
      
                        </WrapperInputField>
                        <RegistDivider>
                            <FormSpan>Або</FormSpan>
                        <GoogleButton type='button'>
                            <GoogleIcon src={googleIconUrl} alt="Google Icon" />
                            Зареєструватись через Google
                        </GoogleButton>
                        <Button type='submit' text={'Зареєструватись'} variant={"RegButton"} />
                            </RegistDivider>
                    </FormContainer>
                   </FormDiv>
                )}
            </Formik>
        </>
    );



}
export default RegistrationForm;
