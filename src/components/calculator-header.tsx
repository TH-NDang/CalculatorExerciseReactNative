import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CalculatorHeader = ({
  value,
  result,
  themeColors,
}: {
  value: string;
  result: string;
  themeColors: any;
}) => {
  return (
    <View
      style={{
        padding: 20,
        margin: 15,
        borderRadius: 15,
        height: '30%',
        backgroundColor: themeColors.headerBackground,
        borderWidth: 1,
        borderColor: themeColors.headerBorder,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: '600',
          color: themeColors.headerText,
          textAlign: 'left',
        }}>
        {value || '0'}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: themeColors.headerText,
          textAlign: 'right',
        }}>
        {result || '0'}
      </Text>
    </View>
  );
};

export default CalculatorHeader;
