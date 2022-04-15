import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export const ProfileScreen = () => {
  return (
    <View style={styles.post}>
      <View style={styles.block}>
        <View> 
        <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1obl.ru%2Ffree-time%2Fmoda%2Fkakie-kachestva-privlekayut-zhenshchin-v-muzhchinakh%2F&psig=AOvVaw1K3uxQGIq_hHq56IMHlC2J&ust=1650067245631000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCd_-LhlPcCFQAAAAAdAAAAABAD'}}
          style={{width: 60, height: 60, borderRadius: 60, borderColor: 'black'}} />
        </View>
        <View style={styles.text}>
          <Text>Name:</Text>
          <Text>Email:</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: 20,
    backgroundColor: 'grey',
    height: 80,
  },

  block: {
    paddingLeft: 20,
    flexDirection: 'row', 
    alignContent: 'flex-start',
    alignItems: 'baseline'
  },

  text: {
    marginBottom: 15,
   
  },

})