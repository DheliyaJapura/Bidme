import React from 'react'
import { PasswordMeter } from 'react-native-password-meter';
import { TextInput, View } from 'react-native';

const PasswordMeter = () => {
    const [password, setPassword] = React.useState({ value: '', error: '' });
  const [passwordScore, setPasswordScore] = React.useState(0);
  const _updateScore = (val: any) => {
    setPasswordScore(val);
  };
  return (
<View>
    <TextInput
    style={{
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
      borderRadius: 6,
      color: 'white',
      padding: 10,
    }}
    returnKeyType="done"
    value={password.value}
    onChangeText={(text) => setPassword({ value: text, error: '' })}
    secureTextEntry={true}
  />
  <PasswordMeter
    password={password.value}
    onResult={(val) => {
    _updateScore(val);
    }}
  />
 </View>
  )
}

export default PasswordMeter