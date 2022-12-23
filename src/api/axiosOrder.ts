import { createOrderType } from './../shemas/createOrderShema';

export default function(instance: any) {
    return {
        getOrderList() {
            return instance.get('orderList');
        },
        createOrderGraveImprovement(payload: createOrderType) {
            return instance.post('createOrder/graveImprovement', payload);
        },
    }
}

export {}