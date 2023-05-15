import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Button
          title="Ir para a próxima tela"
          onPress={() => navigation.navigate('NextScreen')}
        />
      </View>
    );
  };
  export default HomeScreen;