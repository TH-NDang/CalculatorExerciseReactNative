import {View, Text, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import CalculatorHeader from './calculator-header';
import CalculatorBody from './calculator-body';

// Define theme colors
export const getThemeColors = (isDarkMode: boolean) => ({
  background: isDarkMode ? '#121212' : '#f5f5f5',
  headerBackground: isDarkMode ? '#1e1e1e' : '#ffffff',
  headerBorder: isDarkMode ? '#333333' : '#e0e0e0',
  headerText: isDarkMode ? '#ffffff' : '#000000',
  primaryButton: isDarkMode ? '#2d2d2d' : '#e0e0e0',
  operatorButton: isDarkMode ? '#ff9500' : '#ff9500',
  functionButton: isDarkMode ? '#505050' : '#c0c0c0',
  buttonText: isDarkMode ? '#ffffff' : '#000000',
  operatorText: '#ffffff',
});

const Calculator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const themeColors = getThemeColors(isDarkMode);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: themeColors.background,
      }}>
      <CalculatorHeader
        value={value}
        result={result}
        themeColors={themeColors}
      />
      <CalculatorBody
        value={value}
        setValue={setValue}
        themeColors={themeColors}
        result={result}
        setResult={setResult}
      />
    </View>
  );
};

export default Calculator;
