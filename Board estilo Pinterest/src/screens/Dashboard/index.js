import React from 'react';
import { Image, TextInput, View } from 'react-native';

import Default from '../Default';

import style from './style';
import { colors } from '../../style';

const images = [
    {
        source: require('../../../assets/image-1.jpg')
    },
    {
        source: require('../../../assets/image-2.jpg')
    },
    {
        source: require('../../../assets/image-3.jpg')
    },
    {
        source: require('../../../assets/image-4.jpg')
    }
]

const Dashboard = () => {
    return (
        <Default statusBarColor={colors.dark}>
            <View style={style.background}>
                <View style={style.filter}>
                    <TextInput
                        placeholder="Pesquisar por..."
                        style={style.searchInput}
                    />
                </View>
                <View style={style.imagesRow}>
                    <Image 
                        source={images[0].source}
                        style={style.image}
                    />
                    <Image 
                        source={images[1].source}
                        style={style.image}
                    />
                </View>
                <View style={style.imagesRow}>
                    <Image 
                        source={images[2].source}
                        style={style.image}
                    />
                    <Image 
                        source={images[3].source}
                        style={style.image}
                    />
                </View>
            </View>
        </Default>
    )
}

export default Dashboard;