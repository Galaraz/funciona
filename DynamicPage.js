import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import parse from 'html-react-parser';

const DynamicPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page, paragrafo } = route.params;
  const [bookData, setBookData] = useState(null);
  const urlApi = `https://gamebook-adm.vercel.app/api/page/${page}` || `http://localhost:3000/book/${page}`;

  const navigateToScreen = async (page, paragrafo) => {
    console.log(page, paragrafo);
    await navigation.navigate('DynamicPage', { page, paragrafo });
    window.location.reload(); // Recarrega a página após a navegação
  };

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
            <Text style={{ fontSize: 16, marginTop: 10 }}>{parse(bookData.par_texto.mensagem)}</Text>
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
  button: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
export default DynamicPage;