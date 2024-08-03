import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MathScreen from './MathScreen'; // Убедитесь, что путь правильный
import TheoryScreen from './TheoryScreen';
import ProgressBarScreen from './ProgressBarScreen';

import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Задания" component={MathScreen} />
        <Tab.Screen name="Прогресс" component={ProgressBarScreen} />
        <Tab.Screen name="Знания" component={TheoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AppNavigator;
