import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                amount: 19.40,
                orderNumber: 'ADSF551D34D',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                amount: 9.42,
                orderNumber: 'ADSF551D34D',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '745 West State Street'
                }
            },
            {
                _id: 2,
                amount: 1.30,
                orderNumber: 'ADSF551D34D',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Ricardo Maldonado',
                    shippingAddress: '400 Scarborough Cir'
                }
            },
            {
                _id: 3,
                amount: 4.15,
                orderNumber: 'P876VIU7IU55',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Cesar Alonso',
                    shippingAddress: '645 Shoreview Dr'
                }
            },
            {
                _id: 4,
                amount: 5.90,
                orderNumber: 'ADUYT6870UHG',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Hertty Bolanos',
                    shippingAddress: '745 West State Circle'
                }
            },
            {
                _id: 5,
                amount: 3.45,
                orderNumber: 'KJGFHDT67943',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Kyle Simmons',
                    shippingAddress: '2140 East State Street'
                }
            },
            {
                _id: 6,
                amount: 5.45,
                orderNumber: 'KUFKTHD745785',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Gene Roberts',
                    shippingAddress: '2120 South State Street'
                }
            },
            {
                _id: 7,
                amount: 8.75,
                orderNumber: 'I5IIY7EDOP964',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Glen Benton',
                    shippingAddress: '680 North State Street'
                }
            }
        ]
    })
}