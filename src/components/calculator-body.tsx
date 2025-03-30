import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CircleButton = ({
  value,
  onPress,
}: {
  value: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{value}</Text>
    </TouchableOpacity>
  );
};

const CalculatorBody = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const circleButtons = [
    ['AC', 'Back', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
  ];

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        padding: 9,
        margin: 6,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 30,
        }}>
        <CircleButton
          value={circleButtons[0][0]}
          onPress={() => setValue('')}
        />
        <CircleButton
          value={circleButtons[0][1]}
          onPress={() => setValue(value.slice(0, -1))}
        />
        <CircleButton
          value={circleButtons[0][2]}
          onPress={() => setValue(`${value}%`)}
        />
        <CircleButton
          value={circleButtons[0][3]}
          onPress={() => setValue(`${value}/`)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 30,
        }}>
        <CircleButton
          value={circleButtons[1][0]}
          onPress={() => setValue(`${value}7`)}
        />
        <CircleButton
          value={circleButtons[1][1]}
          onPress={() => setValue(`${value}8`)}
        />
        <CircleButton
          value={circleButtons[1][2]}
          onPress={() => setValue(`${value}9`)}
        />
        <CircleButton
          value={circleButtons[1][3]}
          onPress={() => setValue(`${value}*`)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 30,
        }}>
        <CircleButton
          value={circleButtons[2][0]}
          onPress={() => setValue(`${value}4`)}
        />
        <CircleButton
          value={circleButtons[2][1]}
          onPress={() => setValue(`${value}5`)}
        />
        <CircleButton
          value={circleButtons[2][2]}
          onPress={() => setValue(`${value}6`)}
        />
        <CircleButton
          value={circleButtons[2][3]}
          onPress={() => setValue(`${value}-`)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 30,
        }}>
        <CircleButton
          value={circleButtons[3][0]}
          onPress={() => setValue(`${value}1`)}
        />
        <CircleButton
          value={circleButtons[3][1]}
          onPress={() => setValue(`${value}2`)}
        />
        <CircleButton
          value={circleButtons[3][2]}
          onPress={() => setValue(`${value}3`)}
        />
        <CircleButton
          value={circleButtons[3][3]}
          onPress={() => setValue(`${value}+`)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 30,
        }}>
        <CircleButton
          value={circleButtons[4][0]}
          onPress={() => setValue(`${value}0`)}
        />
        <CircleButton
          value={circleButtons[4][1]}
          onPress={() => setValue(`${value},`)}
        />
        <CircleButton
          value={circleButtons[4][2]}
          onPress={() => setValue(`${value}=`)}
        />
      </View>
    </View>
  );
};

export default CalculatorBody;
