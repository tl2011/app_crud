import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Picker = (props: any) => {
  const placeHolder = {
    label: 'Selecione uma modea...',
    value: null,
    color: "#0f0000"
  };

  return (
    <RNPickerSelect
      placeholder={placeHolder}
      items={props.moedas}
      onValueChange={valor => props.onChange(valor)}
      style={{
        inputIOS: {
          fontSize: 20,
          color: "#0f0000"
        },
        inputAndroid: {
          fontSize: 20,
          color: "#0f0000"
        },
      }}
    />
  );
};

export default Picker;