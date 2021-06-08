import React from 'react';
import { Image, Text, View } from 'react-native';

import style from './style';

const Folder = ({ id, name, pins, time, img}) => {
    return (
        <View style={style.folder} key={id}>
            <Image
                source={img}
                style={style.image}
            />
            <Text style={style.title}>{name}</Text>
            <Text style={style.description}>{pins} Pins  <Text style={style.time}>{time}</Text></Text>
        </View>
    )
}

export default Folder;