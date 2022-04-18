import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Icons, {icons} from "../components/Icons";
import { SharedElement } from "react-native-shared-element";

 const DetailPage = ({route}) => {
     const {item} = route.params;
    return(
        <View style={styles.container}>
             <View style={styles.item}>
        <View style={styles.content}>
        <SharedElement id={`item.${item.avatar}.image`}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} resizeMode="cover" />
          </SharedElement>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
          <View style={{ position: 'absolute', top: 16, right: 0 }}>
            <Icons icon={icons.Entypo} name="dots-three-vertical" size={18} />
          </View>
        </View>
            <SharedElement id={`item.${item.image}.image`}>
                <Image style={styles.image} source={{ uri: item.image }} resizeMode="cover" />
            </SharedElement>
        <View style={styles.bottomView}>
          <View style={styles.icon}>
            <Icons icon={icons.AntDesign} name="heart" color={Colors.primary} />
          </View>
          <View style={styles.icon}>
            <Icons icon={icons.Ionicons} name="chatbubble-outline" />
          </View>
          <View style={styles.icon}>
            <Icons icon={icons.Feather} name="send" />
          </View>
        </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        </View>
        </View>
    )
}

DetailPage.SharedElements = (route) => {
    const {item} = route.params;
    return[ 
        {
            id: `item.${item.image}.image`,
            animation: 'move',
            resize: 'clip',
        },
        {
            id: `item.${item.avatar}.image`,
            animation: 'move',
            resize: 'clip',
        }
    ]
}

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: '700',
      },
      caption: {
        color: Colors.darkGray,
      },
      image: {
        height: 450,
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
        marginHorizontal: 5,
      },
      text: {
        fontSize: 16,
      },
  
})