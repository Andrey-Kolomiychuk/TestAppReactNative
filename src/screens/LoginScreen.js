import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Text } from 'react-native'
import { AppNavigation } from '../navigation/AppNavigation';

export function LoginScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Enter email"
            onChangeText={text => setEmail(text)}
          />
  
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Enter password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
  
          <Button
            title="Login"
            // onPress={() => navigation.navigator('Feeds')}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      
      width: '80%',
    },
    input: {
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 14,
    },
    link: {
      color: 'blue',
    },
  });
