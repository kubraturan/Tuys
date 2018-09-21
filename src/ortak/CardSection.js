import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.subContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 15,
    color: '#fff',
    backgroundColor: '#085d29',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
};

export { CardSection };
