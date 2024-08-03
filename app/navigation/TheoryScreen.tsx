import { View, Text, StyleSheet } from 'react-native';

const TheoryScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Математическая теория</Text>
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

export default TheoryScreen;