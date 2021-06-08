import React, { useState } from 'react';
import { 
    Alert,
    Image,
    Text,
    TextInput,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Default from '../Default';
import Button from '../../components/Button';

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
        <Default statusBarColor={colors.dark}>
            <View style={style.background}>
                <Icon name="pinterest" size={100} color={colors.red} />

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
               <Text style={style.link} onPress={() => navigation.navigate('Register')}>Cadastre-se</Text>
            </View>
        </Default>
    );
}

export default Login;