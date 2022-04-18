import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, Surface } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import Colors from '../constants/Colors';
import { getToken } from '../store/actions';

export default function Profile({ route, navigation }) {

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }

  return (
      
    <View style={{flex: 1}}>
        <Surface style={styles.item}>
        <View style={styles.content}>
                <Image style={styles.avatar} source={{ uri: 'https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-9.png' }} resizeMode="cover" />
          <View style={styles.textContainer}>
          <Text style={styles.title}>Name: Andrey</Text>
            <Text style={styles.title}>Email: </Text>
            
          </View>
        </View>
        </Surface>

      <View style={styles.container}>
        <Button mode='outlined'
          onPress={submit}
          style={{ marginTop: 20 }}>
          Logout</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginHorizontal: 4,
  },
  container: {
      flex: 1,
    },
    header: {
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
      marginHorizontal: 4,
    },
    bottomBar: {
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      marginHorizontal: 4,
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    item: {
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 12,
      elevation: 6,
      borderRadius: 16,
    },
    title: {
      fontSize: 15,
      fontWeight: '300',
    },
    caption: {
      color: Colors.darkGray,
    },
    image: {
      height: 300,
      width: null,
      marginBottom: 1,
      marginHorizontal: 16,
      borderRadius: 16,
    },
    bottomView: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 16,
      paddingVertical: 8,
    },
    textContainer: {
      marginHorizontal: 16,
    },
    avatar: {
      height: 35,
      width: 35,
      borderRadius: 20,
      backgroundColor: Colors.primary,
    },
    rowView: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    icon: {
      marginHorizontal: 10,
    },
})