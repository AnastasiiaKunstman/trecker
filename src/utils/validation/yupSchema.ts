/* eslint-disable @typescript-eslint/no-unused-vars */
import * as yup from 'yup';
import { phoneRegExp } from '../constans/constans';

export const loginShema = yup.object().shape({
  email: yup
    .string()
    .email('Неверный формат email')
    .required('Email обязателен'),
  password: yup.string().required('Пароль обязателен'),
});

export const registrationShema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'Имя должно содержать минимум 2 знака')
    .max(50, 'Имя не может быть длинее 50 знаков')
    .matches(/^[A-ZА-ЯЁ].*$/, 'Первая буква имени должна быть заглавной')
    .matches(
      /^[A-ZА-ЯЁ][a-zа-яё]+$/,
      'Символы, следующие за первым, должны быть строчными',
    )
    .matches(/^[А-ЯЁа-яё]*$/, 'Используйте только кириллические буквы')
    .required('Имя обязательно'),
  last_name: yup
    .string()
    .min(2, 'Фамилия должна содержать минимум 2 знака')
    .max(50, 'Фамилия не может быть длинее 50 знаков')
    .matches(/^[A-ZА-ЯЁ].*$/, 'Первая буква фамилии должна быть заглавной')
    .matches(
      /^[A-ZА-ЯЁ][a-zа-яё]+$/,
      'Символы, следующие за первым, должны быть написаны строчными буквами',
    )
    .matches(/^[А-ЯЁа-яё]*$/, 'Используйте только кириллические буквы')
    .required('Фамилия обязательна'),
  email: yup
    .string()
    .email('Неверный формат email')
    .required('Email обязателен'),
  password: yup
    .string()
    .min(5, 'Пароль должен содержать минимум 5 символов')
    .max(50, 'Пароль не может содержать более 50 символов')
    .matches(
      /^[a-zA-Z0-9!_@#$%^&+=]*$/,
      'Пароль может содержать только символы латинского алфавита и специальные символы',
    )
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру (0-9)')
    .matches(
      /[a-z]/,
      'Пароль должен содержать хотя бы одну прописную букву (a-z)',
    )
    .matches(
      /[A-Z]/,
      'Пароль должен содержать хотя бы одну заглавную букву (A-Z)',
    )
    .required('Пароль обязателен для заполнения'),
  phone_number: yup
    .string()
    // .required('Телефон обязателен')
    .matches(
      phoneRegExp,
      'Неверный формат номера телефона (Пример: +7 999 444 88 11)',
    ),
});

export const vacancyShema = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  location: yup.string().required('Заполните поле'),
  salary: yup.string().required('Заполните поле'),
  schedule: yup.string().required('Заполните поле'),
  specialization: yup.string().required('Заполните поле'),
  required_education_level: yup.string().required('Заполните поле'),
  required_skills: yup.string(),
  text: yup.string().required('Заполните поле'),
  pub_date: yup.string(),
});

export const filterShema = yup.object().shape({
  required_skills: yup.string(),
  required_education_level: yup.string().required('Заполните поле'),
  schedule: yup.string(),
});
