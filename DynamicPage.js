import React, { useEffect, useState } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import parse from 'html-react-parser';

const DynamicPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page, paragrafo } = route.params;
  const [bookData, setBookData] = useState(null);
  const urlApi = `https://apigamebook.onrender.com/book/${page}` || `http://localhost:3000/book/${page}`;

  const navigateToScreen = (page, paragrafo ) => {
    console.log(page, paragrafo)
    navigation.navigate('DynamicPage', { page,paragrafo });
  };
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(urlApi);
        const responseData = response.data;

        if (responseData) {
          const foundData = responseData.find(item => parseInt(item.id) == parseInt(paragrafo));
           
          if (foundData) {
            console.log(foundData)
            setBookData(foundData);
          } else {
            console.log(`Objeto com ID  não encontrado.`);
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
            {/* <Text style={{ fontSize: 24 }}>{bookData.id}</Text> */}
            <Text style={{ fontSize: 24 }}>{bookData.par_titulo}</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{parse(bookData.par_texto.mensagem)}</Text>
            {bookData.par_texto.ops && bookData.par_texto.ops.map((op, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                
                onPress={() => navigateToScreen({ page: op.cod[0], paragrafo: op.cod[1]})}
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