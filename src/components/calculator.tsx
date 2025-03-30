import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CalculatorHeader from './calculator-header'
import CalculatorBody from './calculator-body'

const Calculator = () => {
  const [value, setValue] = useState('');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <CalculatorHeader value={value} />
      <CalculatorBody value={value} setValue={setValue} />
    </View>
  )
}

export default Calculator