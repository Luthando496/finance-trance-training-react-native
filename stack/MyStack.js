import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from '../screens/ManageExpense';
import BottomTabs from '../BottomTab/BottomTabs';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerShown:false,
      }} name="ExpensesOverview" component={BottomTabs} />
      <Stack.Screen  name="ManageExpense" component={ManageExpense } />
    </Stack.Navigator>
  );
}


export default MyStack;