import {string, object, InferType} from "yup"

export const createUserShema = object({
    email: string().email('Введите корректный email').required('Введите email'),
    login: string().required('Введите логин'),
    fullName: string().required('Введите ФИО'),
    phone: string().required('Введите номер телефона'),
    region: string().required('Установите регион'),
    roles: string()
})

export type createUserType = InferType<typeof createUserShema>