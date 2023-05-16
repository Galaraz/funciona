import React from 'react';
import { View, Text, Button, StyleSheet,ScrollView, TouchableOpacity   } from 'react-native';

const NextScreen = ({ navigation }) => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium consequat mi, non efficitur felis consectetur non. Maecenas lobortis, nunc ac tincidunt condimentum, urna metus suscipit est, sit amet volutpat felis neque sed justo.",
    "Vivamus in enim quis ligula rhoncus cursus. Nullam at mauris nec dui blandit luctus. Nunc sed ultricies massa. Duis iaculis ex vitae felis dictum convallis. In fringilla pretium lectus, in congue lacus fermentum ac.",
    "Phasellus ut ante fermentum, consectetur felis eget, suscipit mauris. Curabitur at velit bibendum, varius lorem eu, auctor tellus. Nulla facilisi. Nulla tempus pharetra ante, in venenatis lectus efficitur vel.",
    "Nulla dictum, velit eget tristique tincidunt, nisi nulla vehicula elit, nec commodo erat lacus at arcu. Nulla nec nibh id elit dapibus dignissim. Donec bibendum auctor tellus. Sed dapibus risus id ligula faucibus elementum."
  ];

  const handleParagraphPress = () => {
    // Aqui você pode navegar para uma nova página ou fazer qualquer outra ação necessária
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Título da Página</Text>
      {paragraphs.map((paragraph, index) => (
        <TouchableOpacity key={index} onPress={handleParagraphPress}>
          <Text style={styles.paragraph}>{paragraph}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 16,
    color: '#333',
  },
});

export default NextScreen;