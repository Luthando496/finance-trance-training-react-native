import React from 'react'
import { Text,View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/Expensesoutput'

const RecentExpense = () => {
  return (
    <ExpensesOutput expensesPeriod='Last 7 days'  />
  )
}

export default RecentExpense

