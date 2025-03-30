import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CalculatorHeader = ({value}: {value: string}) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          margin: 10,
          borderWidth: 1,
          height: '45%',
        }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
        }}>{value}</Text>
      </View>
    </>
  );
};

export default CalculatorHeader;
