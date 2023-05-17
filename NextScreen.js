import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NextScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (number) => {
    navigation.navigate('DynamicPage', { number });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Next Screen</Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consequat tortor nec justo tristique eleifend. Vivamus consectetur ex
          non arcu pellentesque, in vestibulum velit pulvinar. In feugiat risus
          eu diam mattis, sed bibendum neque euismod.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Screen1')}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text}>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Phasellus tincidunt sapien ut finibus consectetur. Nulla facilisi. Nam
          convallis consequat tellus, in ultrices elit commodo et. Sed feugiat
          semper enim eget interdum.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Screen2')}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Screen3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Quisque vitae consectetur ligula, at
          mollis metus. Sed aliquet tellus sit amet magna gravida, id ultrices
          sem facilisis. Nunc non massa in nibh rhoncus dignissim ac nec eros.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Screen4')}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NextScreen;