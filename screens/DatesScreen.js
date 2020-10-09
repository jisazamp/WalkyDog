import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

const DateScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Date Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert("Button Clicked!")}
        />
    </View>
  );
};

export default DateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});