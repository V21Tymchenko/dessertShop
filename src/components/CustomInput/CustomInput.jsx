import { useField } from 'formik';
import { useState } from 'react';
import {
  AuthErrorIcon,
  AuthErrorMessage,
  AuthInput,
  WrapperInput,
  AuthSuccessIcon,
  AuthSuccessMessage,
  PasswordToggler,
  PasswordTogglerIcon,
} from './CustomInput.styled';
import sprite from '../../assets/images/modal/sprite-eye.svg';

const CustomInput = props => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const showError = meta.touched && meta.error;
  const showSuccess = meta.touched && !meta.error;

  const changeInputType = () => {
    if (props.name === 'name' || (props.name === 'password' && showPassword))
      return 'text';
    else return props.name;
  };

  const validationStatus = () => {
    if (showError) {
      return 'validation-failed';
    }
    if (showSuccess) {
      return 'validation-success';
    }
    return;
  };

  const successMessages = {
    name: 'Nice to meet you!',
    email: 'Your email looks good and is ready for action.',
    password: 'Password is okay.',
  };

  const labelMap = {
    name: 'Ім’я та Прізвище',
    email: 'Пошта',
    phone: 'Номер телефону',
    password: 'Пароль',

  }

  return (
    <WrapperInput>
    <label htmlFor={props.id || props.name}>{labelMap[props.name]}</label>

  
      <AuthInput
        type={changeInputType()}
        {...field}
        {...props}
        className={validationStatus()}
      />
   
      {props.name === 'password' && (
        <PasswordToggler
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
        >
          <PasswordTogglerIcon width="20" height="20">
            <use href={`${sprite}#${showPassword ? 'eye' : 'eye-off'}`}></use>
          </PasswordTogglerIcon>
        </PasswordToggler>
      )}

      {showError && (
        <AuthErrorMessage>
          <AuthErrorIcon>
            <use href={`${sprite}#error`}></use>
          </AuthErrorIcon>
          {meta.error}
        </AuthErrorMessage>
      )}
      {showSuccess && (
        <AuthSuccessMessage>
          <AuthSuccessIcon>
            <use href={`${sprite}#success`}></use>
          </AuthSuccessIcon>
          {successMessages[props.name]}
        </AuthSuccessMessage>
      )}

    </WrapperInput>
  );
};

export default CustomInput;