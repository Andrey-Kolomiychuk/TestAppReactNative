import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'

export const Post = ({ post }) => {

  return (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: post.download_url }}>
        <View style={styles.textWrap}>
          <Text style={styles.title} width={150}>
            {post.author} 
        </Text>
      </View> 
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',  
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 15,
  },
  title: {
    paddingTop: 10,
    paddingRight: 10,
    width: 200,
    fontWeight: 'bold',
    color: 'white'
  },

})
