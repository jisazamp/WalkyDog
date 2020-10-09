import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

const HelpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert("Button Clicked!")}
        />
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});