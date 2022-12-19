import { createOrderType } from './../shemas/createOrderShema';

export default function(instance: any) {
    return {
        getOrderList() {
            return instance.get('orderList');
        },
        createOrderGraveImprovement(payload: createOrderType) {
            console.log(payload)
            return instance.post('createOrder/graveImprovement', payload);
        },
    }
}

export {}