import React from 'react'
import { Pressable,View,Text,StyleSheet } from 'react-native'
import { getFormatedDate } from '../Util/date'
import { useNavigation } from '@react-navigation/native'



const ExpenseItem = ({title,amount,date,id}) => {
    let navigation = useNavigation()

    const expensePressHandler =()=>{
        navigation.navigate('ManageExpense',{exID:id})
    }

  return (
    <Pressable  style={({pressed})=> pressed && styles.pressed} onPress={expensePressHandler}>
        <View className='p-4 my-5 bg-indigo-500 flex-row justify-between rounded-lg shadow-2xl'>
            <View><Text className='text-white font-semibold text-base'>{title}</Text><Text className='mt-2 text-white font-bold' >{getFormatedDate(date)}</Text></View>
            
            <View>
            <Text className='text-white min-w-[80] font-semibold text-base bg-amber-400 tracking-[2px] px-2 rounded-sm text-center py-4'>${amount}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.4,
        transform: 'translateY(5px)',
    }
})

export default ExpenseItem