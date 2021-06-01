import React from 'react';
import { FlatList } from 'react-native';

import StatusCart from '../../components/StatusCart';
import Item from '../../components/Item';

const services = [
    {
        id: 1,
        name: 'Banho',
        price: 49.9,
        description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos.',
        quantity: 1
    },
    {
        id: 2,
        name: 'Tosa',
        price: 79.9,
        description: 'Para deixar seu pet com o pelinho na régua.',
        quantity: 1
    },
    {
        id: 3,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4. Seu gato precisa de duas.',
        quantity: 1
    },
    {
        id: 4 ,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina antirrábica. Seu pet precisa de uma por ano.',
        quantity: 1
    }
];

const Cart = () => {
    const total = services.reduce((sum, { price, quantity }) => sum + (price * quantity), 0);

    return (
        <>
            <StatusCart total={total}/>
            <FlatList
                data={services}
                keyExtractor={({id}) => String(id)}
                renderItem={({item}) => <Item {...item}/>}
            />
        </>
    )
}

export default Cart;