import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import CustomBTN from '../UI/CustomBTN'



const ManageExpense = ({route,navigation}) => {
  const expenseID = route.params?.exID
  const isEditing = !!expenseID

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing? 'Edit Expense' : 'Add Expense',
    })

  },[navigation,isEditing])


  return (
    <View className='flex-1 p-4 bg-purple-700'>
        {isEditing && (<View className='mt-6 pt-3 border-t-2 border-t-teal-300 items-center'>
        <CustomBTN name='trash' size={30} color='red' onPress={() => {}} />
        </View>)}
    </View>
  )
}

export default ManageExpense

