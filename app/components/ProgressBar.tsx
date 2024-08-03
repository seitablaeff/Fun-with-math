// // app/components/ProgressBar.tsx

// import React from 'react';
// import { View, Text, StyleSheet, Platform, Button } from 'react-native';
// import { ProgressBar as AndroidProgressBar } from '@react-native-community/progress-bar-android';

// // Поддержка ProgressBar для iOS
// const ProgressBarIOS = (props: any) => (
//   <View style={[styles.progressBar, { width: `${props.progress}%` }]} />
// );

// interface ProgressBarProps {
//   progress: number; // Прогресс в процентах
//   total: number;    // Общее количество заданий
//   completed: number; // Количество выполненных заданий
//   resetProgress?: () => void; // Функция для сброса прогресса
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, completed, resetProgress }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{`Пройдено: ${completed}/${total}`}</Text>
//       {Platform.OS === 'android' ? (
//         <AndroidProgressBar style={styles.progressBar} progress={progress / 100} />
//       ) : (
//         <ProgressBarIOS progress={progress} />
//       )}
//       {resetProgress && (
//         <Button title="Сбросить" onPress={resetProgress} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   progressBar: {
//     height: 20,
//     width: '100%',
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginTop: 5,
//   },
// });

// export default ProgressBar;
