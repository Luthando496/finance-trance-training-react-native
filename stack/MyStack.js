import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from '../screens/ManageExpense';
import BottomTabs from '../BottomTab/BottomTabs';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'red',
        elevation: 3,
        shadowOpacity: 0.5,
        shadowRadius: 10,
      }
    }} >
      <Stack.Screen options={{
        headerShown:false,
      }} name="ExpensesOverview" component={BottomTabs} />
      <Stack.Screen options={{
        presentation:'modal',
      }}  name="ManageExpense" component={ManageExpense } />
    </Stack.Navigator>
  );
}


export default MyStack;