import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import ProgressBar from '../components/ProgressBar';

const MathScreen = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>('+');
  const [answer, setAnswer] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [answerWhole, setAnswerWhole] = useState<string>('');
  const [answerRemainder, setAnswerRemainder] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const totalTasks = 20; // Всего заданий

  const generateNewQuestion = () => {
    let n1 = 0, n2 = 0;
    switch (operation) {
      case '+':
        n1 = Math.floor(Math.random() * 100000);
        n2 = Math.floor(Math.random() * 100000);
        break;
      case '-':
        n1 = Math.floor(Math.random() * 1000);
        n2 = Math.floor(Math.random() * (n1 + 1)); // Ensure n2 <= n1
        break;
      case '*':
        n1 = Math.floor(Math.random() * 1000);
        n2 = Math.floor(Math.random() * 1000);
        break;
      case '/':
        n2 = Math.floor(Math.random() * 100) + 1; // Ensure n2 is at least 1
        n1 = Math.floor(Math.random() * (100 - n2) + n2); // Ensure n1 > n2
        setAnswerWhole('');
        setAnswerRemainder('');
        break;
    }
    setNum1(n1);
    setNum2(n2);
    setAnswer('');
    setResult('');
  };

  const checkAnswer = () => {
    let correctAnswer = 0;
    let correctAnswerWhole = '';
    let correctAnswerRemainder = '';
    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        setResult(answer === correctAnswer.toString() ? 'Правильно!' : 'Неправильно');
        break;
      case '-':
        correctAnswer = num1 - num2;
        setResult(answer === correctAnswer.toString() ? 'Правильно!' : 'Неправильно');
        break;
      case '*':
        correctAnswer = num1 * num2;
        setResult(answer === correctAnswer.toString() ? 'Правильно!' : 'Неправильно');
        break;
      case '/':
        const quotient = Math.floor(num1 / num2);
        const remainder = num1 % num2;
        correctAnswerWhole = quotient.toString();
        correctAnswerRemainder = remainder.toString();
        if (answer === `${correctAnswerWhole}, ${correctAnswerRemainder}`) {
          setResult('Правильно!');
          setCompletedTasks(prev => Math.min(prev + 1, totalTasks));
        } else {
          setResult(`Неправильно. Правильный ответ: целая часть = ${correctAnswerWhole}, остаток = ${correctAnswerRemainder}`);
        }
        break;
    }
  };

  const progress = (completedTasks / totalTasks) * 100;
  
  return (
    <View style={styles.container}>
      {/* <ProgressBar 
        progress={progress} 
        total={totalTasks} 
        completed={completedTasks} 
      /> */}
      <Picker
        selectedValue={operation}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) => setOperation(itemValue)}
      >
        <Picker.Item label="Сложение (+)" value="+" />
        <Picker.Item label="Вычитание (-)" value="-" />
        <Picker.Item label="Умножение (*)" value="*" />
        <Picker.Item label="Деление (/)" value="/" />
      </Picker>

      <Text style={styles.question}>{`${num1} ${operation} ${num2} =`}</Text>
      {operation === '/' ? (
        <View>
          <TextInput
            style={styles.input}
            value={answerWhole}
            onChangeText={setAnswerWhole}
            keyboardType="numeric"
            placeholder="Целая часть"
          />
          <TextInput
            style={styles.input}
            value={answerRemainder}
            onChangeText={setAnswerRemainder}
            keyboardType="numeric"
            placeholder="Остаток"
          />
        </View>
      ) : (
        <TextInput
          style={styles.input}
          value={answer}
          onChangeText={setAnswer}
          keyboardType="numeric"
        />
      )}
      <Button title="Проверить ответ" onPress={checkAnswer} />
      <Text style={styles.result}>{result}</Text>
      <Button title="Новое упражнение!" onPress={generateNewQuestion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    width: 150,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    margin: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default MathScreen;
