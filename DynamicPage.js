import React from 'react';
import { View, Text } from 'react-native';

const DynamicPage = ({ route }) => {
  const { number } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Número clicado: {number}</Text>
    </View>
  );
};

export default DynamicPage;