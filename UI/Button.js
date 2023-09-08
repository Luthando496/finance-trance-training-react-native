import { Pressable, View ,Text,StyleSheet} from 'react-native'



const Button = ({children,onPress,mode}) => {
  return (
    <View className=''>
        <Pressable style={({pressed})=> pressed && styles.pressed} onPress={onPress}>
            <View className='px-4 bg-amber-700 rounded-md py-2' >
                <Text style={[styles.buttonText,mode==='flat' && styles.flatText]} className='text-white text-xl text-center font-thin '>{children}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.5
    },
    pressedText:{
        color:'white'
    },
    btn:{
        borderRadius:7,
        paddingVertical:5,
        paddingHorizontal:20,
        backgroundColor:'red'
    },
    flat:{
        backgroundColor:'transparent'
    },
    // buttonText:{
    //     color:'white',
    //     textAlign:'center',
    //     fontSize:20
    // },
    flatText:{
        color:"blue"
    }
})

export default Button