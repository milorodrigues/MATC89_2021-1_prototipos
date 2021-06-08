import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Default from '../Default';
import Folder from '../../components/Folder';

import { colors } from '../../style';
import style from './style';

const folders = [
    {
        id: 1,
        name: 'Decoração',
        pins: 65,
        time: '1 m',
        img: require('../../../assets/decoracao.jpg')
    },
    {
        id: 2,
        name: 'Comida',
        pins: 100,
        time: '15 d',
        img: require('../../../assets/comida.jpg')
    },
    {
        id: 3,
        name: 'Animais',
        pins: 70,
        time: '1 h',
        img: require('../../../assets/animais.jpg')
    },
    {
        id: 4 ,
        name: 'Artes',
        pins: 15,
        time: '30 min',
        img: require('../../../assets/arte.jpg')
    }
];

const Profile = () => {
    return (
        <Default statusBarColor={colors.dark}>
            <View style={style.background}>
                <View style={style.profileInfo}>
                    <View style={style.photo}>
                        <Text style={style.name}>MC</Text>
                    </View>
                    <Text style={style.name}>Maria Clara</Text>
                    <Text style={style.username}>@mariaclara</Text>
                    <Text style={style.network}>70 seguidor | 150 seguindo</Text>
                </View>

                <View style={style.filter}>
                    <TextInput
                        placeholder="Pesquisar seus Pins"
                        style={style.searchInput}
                    />
                   <Icon name="filter" size={20} color={colors.light} style={{padding: 10}}/>
                   <Icon name="plus" size={20} color={colors.light} />
                </View>

                <View style={style.folder}>
                    <View style={style.folderRow}>
                        <Folder { ...folders[0] }/>
                        <Folder { ...folders[1] }/>
                    </View>

                    <View style={style.folderRow}>
                        <Folder { ...folders[2] }/>
                        <Folder { ...folders[3] }/>
                    </View>
                </View>
            </View>
        </Default>
    )
}

export default Profile;