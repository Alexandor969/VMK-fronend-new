import {object, array, string, number, boolean, InferType} from "yup"

export const createOrderShema = object({
    customer: object({
        customerName: string().required('Введите ФИО заказчика'),
        customerPhone: string().required('Введите номер телефона'),
        customerAddress: string(),
        customerEmail: string(),
    }),
    deceased: object({
        deceasedName: string().required('Введите ФИО покойника'),
        deceasedInstallationAddress: string().required('укажите место установки'),
        deceasedRegion: string().required('Введите участок'),
        deceasedRow: string().required('Введите Ряд'),
        deceasedPlace: string().required('Введите место'),
    }),
    addedServiceGravelOrder: array(object({
        name: string().required('Выберите услугу'),
        gravelServiceListId: number(),
        measurement: string(),
        priceMeasurement: string(),
        price: string(),
        quantity: string(),
        description: string(),
    })),
    //Дополнительные услуги
    additionalServices: string(),
    //Цена и вариант оплаты
    amount: number(),
    paymentType: string().required('Укажите тип оплаты'),
    //Скидка и вариант скидки
    discount: number(),
    discountType: string(),
    //Аванс и вариант аванса
    prepayment: number(),
    prepaymentType: string(),
    //Дедлайн
    date: object({
        beginning:string().required('Укажите дату начала работ'),
        end: string().required('Укажите дату конца работ'),
    }),
    //Комментарий заказа
    orderComment: string(),
    //Загруженное изображение
    uploadImage: string(),
    //Финальная стоимость заказа "К ОПЛАТЕ"
    finalCost: number(),
    //Способ оплаты
    paymentMethod: string().required('Укажите способ оплаты'),
    //Подтверждение заказа
    orderСonfirmation: boolean(),
    //Подпись заказчика
    signatureImgUrl: string(),
})


export type createOrderType = InferType<typeof createOrderShema>