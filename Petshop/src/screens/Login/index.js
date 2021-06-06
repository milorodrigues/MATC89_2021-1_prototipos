import React, { useState } from 'react';
import { 
    Alert,
    Image,
    TextInput,
    View
} from 'react-native';

import Default from '../Default';
import Button from '../../components/Button';

import userIcon from '../../../assets/petito-icon.png';
import style from './style';

import { colors } from '../../style';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (email, password) => {
        if(email === 'email@email.com' && password === '123qwe') {
            navigation.navigate('Home');
        } else {
            Alert.alert("Email e/ou senha incorretos", "Tente novamente");
        }
    }

    return (
        <Default statusBarColor={colors.purple}>
            <View style={style.background}>
                <Image
                    source={userIcon}
                    style={style.logo}
                />

                <TextInput
                    placeholder="Digite o seu e-mail"
                    style={style.input}
                    defaultValue={email}
                    onChangeText={email => setEmail(email)}
                />

                <TextInput
                    placeholder="Digite a sua senha"
                    secureTextEntry={true}
                    style={style.input}
                    defaultValue={password}
                    onChangeText={password => setPassword(password)}
                />

                <Button 
                    title='Entrar' 
                    action={() => login(email, password)}
                    inverted
                    large
                />
                <Button 
                    title='Cadastre-se' 
                    action={() =>  navigation.navigate('Register')}
                    inverted
                    large
                />
            </View>
        </Default>
    );
}

export default Login;