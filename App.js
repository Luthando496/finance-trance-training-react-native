import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stack/MyStack';




export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}



