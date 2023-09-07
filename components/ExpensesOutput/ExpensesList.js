import React from 'react'
import { FlatList, Text } from 'react-native'
import ExpenseItem from '../ExpenseItem'




const ExpensesList = ({expenses}) => {
  return (
    <FlatList keyExtractor={(item)=> item.id} data={expenses} renderItem={(itemData)=>{
        return (
            <ExpenseItem {...itemData.item} />
        )
    }} />
  )
}

export default ExpensesList