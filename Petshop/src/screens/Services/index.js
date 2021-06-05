import React from 'react';
import { FlatList } from 'react-native';

import Default from '../Default';
import Item from '../../components/Item';

import { colors } from '../../style';

const services = [
    {
        id: 1,
        name: 'Banho',
        price: 49.9,
        description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos.'
    },
    {
        id: 2,
        name: 'Tosa',
        price: 79.9,
        description: 'Para deixar seu pet com o pelinho na régua.'
    },
    {
        id: 3,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4. Seu gato precisa de duas.'
    },
    {
        id: 4 ,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina antirrábica. Seu pet precisa de uma por ano.'
    }
];

const Services = () => {
    return (
        <Default statusBarColor={colors.purple}>
            <FlatList
                data={services}
                keyExtractor={({id}) => String(id)}
                renderItem={({item}) => <Item {...item} expansible/>}
            />
        </Default>
    )
}

export default Services;