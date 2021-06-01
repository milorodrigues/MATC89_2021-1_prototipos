import React from 'react';
import { Text, View } from 'react-native';

import Button from '../Button';

import style from './style';

const StatusCart = ({ total }) => {
    const priceFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    });

    return (
        <View style={style.content}>
            <View style={style.total}>
                <Text style={style.description}>Total do Carrinho:</Text>
                <Text style={style.value}>{ priceFormat.format(total) }</Text>
            </View>
            <Button style={style.button} title='Concluir Pedido' inverted/>
        </View>
    )
}

export default StatusCart;