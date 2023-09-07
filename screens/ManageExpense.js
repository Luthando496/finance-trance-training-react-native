import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'

const ManageExpense = ({route,navigation}) => {
  const expenseID = route.params?.exID
  const isEditing = !!expenseID

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing? 'Edit Expense' : 'Add Expense',
    })

  },[navigation,isEditing])


  return (
    <View>
        <Text>ManageExpense</Text>
    </View>
  )
}

export default ManageExpense

