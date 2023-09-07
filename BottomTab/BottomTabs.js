import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpense from '../screens/RecentExpense';
import AllExpense from '../screens/AllExpense';
import {Ionicons} from '@expo/vector-icons';
import CustomBTN from '../UI/CustomBTN';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#DC143C'
        },
        headerTintColor: '#fff',
        tabBarStyle:{
            backgroundColor: '#DC143C'
        },
        tabBarActiveTintColor: '#BDB76B',
        tabBarInactiveTintColor: '#ffff',
        headerRight: ({tintColor}) => (
          <CustomBTN name='add' size={38} color={tintColor} onPress={()=>{}} />
        )

    }}>
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
        title: 'Recent Expenses',
        tabBarLabel:'Recent'
      }}  name="RecentExpenses" component={RecentExpense} />

      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        ),
        title: 'All Expenses',
        tabBarLabel:'All Expenses'
      }}  name="AllExpenses" component={AllExpense} />
    </Tab.Navigator>
  );
}

export default BottomTabs