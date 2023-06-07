import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import  HTML  from 'react-native-render-html';

const DynamicPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page, paragrafo } = route.params;
  const [bookData, setBookData] = useState(null);
  const { width } = useWindowDimensions();
  const urlApi = `https://gamebook-adm.vercel.app/api/page/${page}` || `http://localhost:3000/book/${page}`;

  const navigateToScreen = async (page, paragrafo) => {
    console.log(page, paragrafo);
    await navigation.navigate('DynamicPage', { page, paragrafo });
    window.location.reload(); // Recarrega a página após a navegação
  };

  const source = bookData ? { html:  `${bookData.par_texto.mensagem }`} : null;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(urlApi);
        const responseData = response.data;

        if (responseData && responseData.paragrafos) {
          const foundData = responseData.paragrafos.find(item => parseInt(item.id) === parseInt(paragrafo));

          if (foundData) {
            setBookData(foundData);
          } else {
            console.log(`Objeto com ID ${paragrafo} não encontrado.`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {bookData ? (
          <View>
            <Text style={{ fontSize: 24 }}>{bookData.par_titulo}</Text>
            <Text style={{ fontSize: 16, marginTop: 10 , padding: 10}}>
              <HTML source={source} contentWidth={width} />
            </Text>
            {bookData.par_texto.ops &&
              bookData.par_texto.ops.map((op, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => {
                    navigateToScreen(op.cod[0], op.cod[1]);
                    console.log(op.cod[0], op.cod[1]);
                  }}
                >
                  <Text style={{ fontSize: 16, marginTop: 10 }}>{op.titulo} {op.op}</Text>
                </TouchableOpacity>
              ))}
            {bookData.par_imagem && <Image source={{ uri: bookData.par_imagem }} style={styles.image} />}
          </View>
        ) : (
          <Text style={{ fontSize: 18 }}>Carregando...</Text>
        )}
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
  image: {
    width: 280,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DynamicPage;
