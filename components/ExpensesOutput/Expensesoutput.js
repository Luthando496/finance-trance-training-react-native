import React from 'react'
import { Text,View,FlatList } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'


const DUUMMY_EXPENSES = [{id: 'a1',title: 'Rent',amount: 1578,date:new Date('2023-08-07')
},{id: 'a2',title: 'A pair of tooth',amount: 268,date:new Date('2022-06-02')
},{id: 'a3',title: 'A book of Harry Potter',amount: 3678,date:new Date('2023-03-03')
},{id: 'a4',title: 'A lap dance ',amount: 256,date:new Date('2023-08-07')
},{id: 'e6',title: 'Watch A movie ',amount: 256,date:new Date('2023-08-07')
},{id: '3',title: 'Attend painting classes',amount: 256,date:new Date('2023-08-07')
}]

const ExpensesOutput = ({expenses,expensesPeriod}) => {
  return (
    <View className='px-6 bg-[#FF4500] flex-1'>
        <ExpensesSummary expenses={DUUMMY_EXPENSES} periodName={expensesPeriod} />

        <ExpensesList expenses={DUUMMY_EXPENSES}  />
    </View>
  )
}

export default ExpensesOutput