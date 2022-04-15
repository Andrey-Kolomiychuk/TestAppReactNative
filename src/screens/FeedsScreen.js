import React from 'react'
import { View,  StyleSheet, FlatList, TextInput } from 'react-native'

import { Post } from '../components/Post'
import { createData } from '../data'

export default FeedsScreen = ( ) => {
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={createData()}
        keyExtractor={ post => post.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

})

