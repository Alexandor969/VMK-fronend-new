export default interface service
    {
        name: string;
        measurement: string,
        selected: boolean
    }

export  type users = [{
    createDate: string,
    email: string,
    region: string,
    roles: string[],
    role: string,
    user_info: {
        contactEmail: string,
        dateBirth: string,
        fullName: string,
        phone: string,
        userId: string,
    },
    username: string,
    _id: string,
}]

export type graveOrder = [
        {
            addedServiceGravelOrder: [
                {
                    description: string,
                    gravelServiceListId: string,
                    measurement: string,
                    name: string,
                    price: string,
                    priceMeasurement: string,
                    quantity: string,
                    _id: string,
                },
            ]
            additionalServices: string,
            amount: string,
            createdAt: string,
            customerAddress: string,
            customerEmail: string,
            customerName: string,
            customerPhone: string,
            deceasedInstallationAddress: string,
            deceasedName: string,
            deceasedPlace: string,
            deceasedRegion: string,
            deceasedRow: string,
            discount: string,
            discountType: string,
            endedDate: string,
            finalCost: string,
            orderComment: string,
            orderID: string,
            orderRegion: string,
            orderСonfirmation: string,
            paymentMethod: string,
            paymentType: string,
            prepayment: string,
            prepaymentType: string,
            signatureImgUrl: string,
            startDate: string,
            updatedAt: string,
            uploadImage: string,
            userId: string,
            __v: number,
            _id: string,
        }
    ]

export type userGraveOrder =[
        {
            addedServiceGravelOrder: [
                {
                    description: string,
                    gravelServiceListId: string,
                    measurement: string,
                    name: string,
                    price: string,
                    priceMeasurement: string,
                    quantity: string,
                    _id: string,
                },
            ]
            additionalServices: string,
            amount: string,
            createdAt: string,
            customerAddress: string,
            customerEmail: string,
            customerName: string,
            customerPhone: string,
            deceasedInstallationAddress: string,
            deceasedName: string,
            deceasedPlace: string,
            deceasedRegion: string,
            deceasedRow: string,
            discount: string,
            discountType: string,
            endedDate: string,
            finalCost: string,
            orderComment: string,
            orderID: string,
            orderRegion: string,
            orderСonfirmation: string,
            paymentMethod: string,
            paymentType: string,
            prepayment: string,
            prepaymentType: string,
            signatureImgUrl: string,
            startDate: string,
            updatedAt: string,
            uploadImage: string,
            userId: string,
            __v: number,
            _id: string,
        }
    ]

export type user = {
    userId: string,
    fullName: string,
    contactEmail: string,
    phone: string,
    dateBirth: string,
}