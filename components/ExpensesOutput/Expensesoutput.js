import React from 'react'
import { Text,View,FlatList } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const ExpensesOutput = ({expenses}) => {
  return (
    <View>
        <ExpensesSummary />

        <ExpensesList />
    </View>
  )
}

export default ExpensesOutput