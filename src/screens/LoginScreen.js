import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Surface, TextInput, Title, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Login } from '../store/actions';
import Colors from '../constants/Colors';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const submit = () => {
    dispatch(Login(username, password))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Surface style={styles.box}>
        <View>
          <TextInput
            label="Email"
            mode='outlined'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          mode="contained"
          color={Colors.blue}
          style={{ marginTop: 20 }}
          onPress={submit}>
          Submit
        </Button>
      </Surface>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: Colors.primaryDark,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    height: 250,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})
