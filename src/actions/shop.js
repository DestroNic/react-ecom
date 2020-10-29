import { formValueSelector } from "redux-form"
import { 
    // SET_SHOP_CATEGORIES 
    SET_NAVBAR_LINKS
} from './types'

export function fetchShopCategories() {
    return({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack development',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User interface design',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'Javascript Development',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Object Oriented Programming',
                description: 'Lorem Ipsum Generators. Think classic lorem ipsum is passé? Give your next project a bit more edge with these funny and unique text generators.',
                price: '1.99',
                belongsTo: [0, 6]
            }
        ]
    })
}