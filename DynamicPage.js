import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import parse from 'html-react-parser';

const DynamicPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page, paragrafo } = route.params;
  const [bookData, setBookData] = useState(null);

  const urlApi = `https://apigamebook.onrender.com/book/${page}` || `http://localhost:3000/book/${page}`;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(urlApi);
        const responseData = response.data;

        if (responseData) {
          const foundData = responseData.find(item => parseInt(item.id) == parseInt(5));
           console.log(responseData)
          if (foundData) {
            console.log(foundData)
            setBookData(foundData);
          } else {
            console.log(`Objeto com ID 5 não encontrado.`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {bookData ? (
        <View>
          <Text style={{ fontSize: 24 }}>{bookData.id}</Text>
          <Text style={{ fontSize: 24 }}>{bookData.par_titulo}</Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>{parse(bookData.par_texto.mensagem)}</Text>
        </View>
      ) : (
        <Text style={{ fontSize: 18 }}>Carregando...</Text>
      )}
    </View>
  );
};

export default DynamicPage;