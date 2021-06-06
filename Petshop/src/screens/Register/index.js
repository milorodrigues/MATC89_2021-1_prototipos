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

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = (email, password, confirmPassword) => {
        if(password === confirmPassword) {
            navigation.navigate('Login');
        } else {
            Alert.alert("As senhas informadas são diferentes.");
        }
    }

    return (
        <Default statusBarColor={colors.orange}>
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
                    placeholder="Digite uma senha"
                    secureTextEntry={true}
                    style={style.input}
                    defaultValue={password}
                    onChangeText={password => setPassword(password)}
                />
                
                <TextInput
                    placeholder="Confirme a senha"
                    secureTextEntry={true}
                    style={style.input}
                    defaultValue={confirmPassword}
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                />

                <Button 
                    title='Cadastrar' 
                    action={() => register(email, password, confirmPassword)}
                    large
                />
            </View>
        </Default>
    );
}

export default Register;