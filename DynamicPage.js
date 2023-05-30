import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import parse from 'html-react-parser';

const DynamicPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { number } = route.params;
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get('http://localhost:3000/book/2');
        // const data = response.data;
        const responseData = response.data[0];

        if (responseData) {
          const { id, par_titulo, par_imagem, par_texto, par_id_pagina } = responseData;
        
          console.log(id);
          console.log(par_titulo);
          console.log(par_imagem);
          console.log(par_texto.texto);
          console.log(par_id_pagina);
   
        }
        
         setBookData(responseData);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Número clicado: {number}</Text>
      {bookData && (
        <View>
          <Text style={{ fontSize: 18, marginTop: 20 }}>{bookData.par_titulo}</Text>
         
          <Text style={{ fontSize: 16, marginTop: 10 }}>{parse(`${bookData.par_texto &&  bookData.par_texto.texto}`)} </Text> 
        
        </View>
      )}
    </View>
  );
};

export default DynamicPage;