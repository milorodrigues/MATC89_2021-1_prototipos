import React, { useState } from 'react';
import { 
    Alert,
    Text,
    TextInput,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Default from '../Default';
import Button from '../../components/Button';

import style from './style';

import { colors } from '../../style';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = (password, confirmPassword) => {
        if(password === confirmPassword) {
            navigation.navigate('Login');
        } else {
            Alert.alert("As senhas informadas não coicidem. Tente novamente.");
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

                <TextInput
                    placeholder="Confirme a sua senha"
                    secureTextEntry={true}
                    style={style.input}
                    defaultValue={confirmPassword}
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                />

                <Button 
                    title='Cadastrar' 
                    action={() => register(password, confirmPassword)}
                    inverted
                    large
                />
            </View>
        </Default>
    );
}

export default Register;