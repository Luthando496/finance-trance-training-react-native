import React from 'react'
import {View,StyleSheet,Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const CustomBTN = ({name,size,color,onPress}) => {
  return (
    <Pressable style={({pressed})=> pressed && styles.pressed } onPress={onPress}>
        <View className='bg-sky-400'>
            <Ionicons name={name} size={size} color={color} />
        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    pressed:{
        opacity:0.5,
    }
})
export default CustomBTN