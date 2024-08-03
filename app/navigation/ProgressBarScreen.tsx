import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Здесь будет отслеживание прогресса и календарь.</Text>
      {/* Здесь можно добавить компонент для отображения календаря или прогресса */}
    </View>
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

export default ProgressBarScreen;
