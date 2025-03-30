import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CircleButton = ({
  value,
  onPress,
  themeColors,
  buttonType = 'primary',
}: {
  value: string;
  onPress: () => void;
  themeColors: any;
  buttonType?: 'primary' | 'operator' | 'function' | 'wide';
}) => {
  const getButtonColor = () => {
    if (buttonType === 'operator') return themeColors.operatorButton;
    if (buttonType === 'function') return themeColors.functionButton;
    if (buttonType === 'wide') return themeColors.primaryButton;
    return themeColors.primaryButton;
  };

  const getTextColor = () => {
    if (buttonType === 'operator') return themeColors.operatorText;
    return themeColors.buttonText;
  };
  const isWide = buttonType === 'wide';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: isWide ? 150 : 65,
        height: 65,
        borderRadius: isWide ? 35 : 65 / 2,
        backgroundColor: getButtonColor(),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '600',
          color: getTextColor(),
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const CalculatorBody = ({
  value,
  setValue,
  result,
  setResult,
  themeColors,
}: {
  value: string;
  setValue: (value: string) => void;
  result: string;
  setResult: (value: string) => void;
  themeColors: any;
}) => {
  const circleButtons = [
    ['AC', 'Back', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
  ];

  const getButtonType = (buttonValue: string) => {
    if (['+', '-', 'x', '/', '=', '%'].includes(buttonValue)) {
      return 'operator';
    }
    if (['AC', 'Back'].includes(buttonValue)) {
      return 'function';
    }
    if (buttonValue === '0') {
      return 'wide';
    }
    return 'primary';
  };

  const calculateResult = () => {
    try {
      // Replace comma with period for calculation
      const expression = value
        .replace(/,/g, '.') // Replace comma
        .replace('x', '*'); // Replace x with *

      const result = eval(expression);
      setResult(String(result).replace('.', ','));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleButtonPress = (buttonValue: string) => {
    if (buttonValue === 'AC') {
      setValue('');
      setResult('');
    } else if (buttonValue === 'Back') {
      setValue(value.slice(0, -1));
      setResult('');
    } else if (buttonValue === '=') {
      calculateResult();
    } else if (buttonValue === ',') {
      setValue(`${value},`);
    } else if (buttonValue === 'x') {
      setValue(`${value}x`);
    } else {
      setValue(`${value}${buttonValue}`);
    }
  };

  // Render a special bottom row for the "0" button
  const renderBottomRow = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 15,
        }}>
        <CircleButton
          value="0"
          buttonType={getButtonType('0')}
          themeColors={themeColors}
          onPress={() => handleButtonPress('0')}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '45%',
            justifyContent: 'space-between',
          }}>
          <CircleButton
            value=","
            buttonType={getButtonType(',')}
            themeColors={themeColors}
            onPress={() => handleButtonPress(',')}
          />
          <CircleButton
            value="="
            buttonType={getButtonType('=')}
            themeColors={themeColors}
            onPress={() => handleButtonPress('=')}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 15,
        marginBottom: 15,
      }}>
      {circleButtons.slice(0, -1).map((row, rowIndex) => (
        <View
          key={`row-${rowIndex}`}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 15,
          }}>
          {row.map((btn, btnIndex) => (
            <CircleButton
              key={`btn-${rowIndex}-${btnIndex}`}
              value={btn}
              buttonType={getButtonType(btn)}
              themeColors={themeColors}
              onPress={() => handleButtonPress(btn)}
            />
          ))}
        </View>
      ))}
      {renderBottomRow()}
    </View>
  );
};

export default CalculatorBody;
