import React from 'react'
import { Text,View } from 'react-native'


const ExpensesSummary = ({periodName,expenses}) => {
    const sum = expenses.reduce((a, b) => a + b.amount, 0)
  return (
    <View className='flex-row bg-slate-800/70 my-3 px-2 rounded-md justify-between items-center  '>
        <Text className='text-xl font-semibold text-white'>{periodName}</Text>
        <Text className='text-xl font-semibold text-white'>${sum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary