import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("веддіть Ваше ім'я та прізвище"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Не відповідає формату email"
    )
    .required('Поле "Ел. пошта" є обов’язковим'),
  password: Yup.string()
    .min(6, "Пароль має бути більше 6 знаків та цифр")
    .required("Введіть свій пароль"),
  phone: Yup.string()
    .matches(/^\+\d{12}$/, "Телефон має бути у форматі +380XXXXXXXXX")
    .required("Будь ласка, введіть свій коректний телефон"),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Введіть дійсний email"
    )
    .required('Поле "Ел. пошта" є обов’язковим'),
  password: Yup.string()
    .min(6, "Пароль повинен містити принаймні 6 символів")
    .required('Поле "Пароль" є обов’язковим'),
});
