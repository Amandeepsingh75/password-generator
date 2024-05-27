import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyInputs from './BouncyInputs';

const Passwordgenerator = () => {
  const [password, setPassword] = useState('');
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [digits, setDigits] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState<any>('');

  const handleGeneratePassword = (length: number) => {
    let generatePassword = '';
    let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let digitsChars = '0123456789';
    let symbolsChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

    if (upperCase) {
      generatePassword += upperCaseChars;
    }
    if (lowerCase) {
      generatePassword += lowerCaseChars;
    }
    if (digits) {
      generatePassword += digitsChars;
    }
    if (symbols) {
      generatePassword += symbolsChars;
    }

    let passwordcreated = createPassword(generatePassword, length);
    setPassword(passwordcreated);
  };

  const createPassword = (pass: string, passLength: number) => {
    if (passLength < 4 || passLength > 14) {
      Alert.alert('Password length should be between 4 and 14 characters');
      return '';
    }
    let result = '';
    for (let i = 0; i < passLength; i++) {
      const charindex = Math.round(Math.random() * (pass.length - 1));
      result += pass.charAt(charindex);
    }
    return result;
  };

  return (
    <>
      <View style={[styles.container]}>
        <Text style={styles.heading}>Password Generator</Text>
        <TextInput
          placeholder="Enter Password Length"
          style={styles.input}
          onChangeText={(text) => setPasswordLength(+text)}
          value={passwordLength?.toString()}
        />
      </View>

      <BouncyInputs stateVal={upperCase} setStateVal={setUpperCase} title='Uppercase' />
      <BouncyInputs stateVal={lowerCase} setStateVal={setLowerCase} title={'Lowercase'} />
      <BouncyInputs stateVal={digits} setStateVal={setDigits} title={'Digits'} />
      <BouncyInputs stateVal={symbols} setStateVal={setSymbols} title={'Symbols'} />

      <View style={{ margin: 20 }}>
        <Button title='Generate Password' onPress={() => handleGeneratePassword(passwordLength)} />
      </View>
      {password && <Text selectable style={styles.passwordText}>{password}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    margin: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10
  },
  passwordText: {
    margin: 15,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: 'purple',
  }
});

export default Passwordgenerator;
