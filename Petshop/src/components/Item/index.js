import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import style from './style';

import IntegerField from '../IntegerField';
import Button from '../Button';

const Item = ({ name, price, description, quantity: initialQuantity, expansible = false }) => {
    console.log(expansible)
    let q, t;
    if(expansible) {
        q = 1;
        t = price;
    } else {
        q = initialQuantity;
        t = price * initialQuantity;
    }

    const [quantity, setQuantity] = useState(q);
    const [total, setTotal] = useState(t);
    const [expand, setExpand] = useState(false);

    const update = (newQuantity) => {
        setQuantity(newQuantity);
        calculateTotal(newQuantity);
    }

    const calculateTotal = (newQuantity) => {
        setTotal(newQuantity * price);
    }

    const priceFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    });

    return (
        <>
            {
                expansible ?
                <TouchableOpacity style={style.information} onPress={() => setExpand(!expand)}>
                    <Text style={style.name}>{ name }</Text>
                    <Text style={style.description}>{ description }</Text>
                    <Text style={style.price}>{ priceFormat.format(price) }</Text>
                </TouchableOpacity> :
                <View style={style.information}>
                    <Text style={style.name}>{ name }</Text>
                    <Text style={style.description}>{ description }</Text>
                    <Text style={style.price}>{ priceFormat.format(price) }</Text>
                </View> 
            }
            { 
                expansible ? 
                (expand &&
                <View style={style.cart}>
                    <View>
                        <View style={style.value}>
                            <Text style={style.description}>Quantidade:</Text>
                            <IntegerField style={style.quantity} value={quantity} action={update}/>
                        </View>
                        <View style={style.value}>
                            <Text style={style.description}>Total:</Text>
                            <Text style={style.price}>{ priceFormat.format(total) }</Text>
                        </View>
                    </View>
                    <Button title='Adicionar ao Carrinho'/>
                </View>) :
                <View style={style.cart}>
                <View>
                    <View style={style.value}>
                        <Text style={style.description}>Quantidade:</Text>
                        <IntegerField style={style.quantity} value={quantity} action={update}/>
                    </View>
                    <View style={style.value}>
                        <Text style={style.description}>Total:</Text>
                        <Text style={style.price}>{ priceFormat.format(total) }</Text>
                    </View>
                </View>
                <Button title='Remover do Carrinho'/>
            </View>

            }
            <View style={style.divisor}/>
        </>
    )
}

export default Item;