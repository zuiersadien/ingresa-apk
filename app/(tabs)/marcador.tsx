import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import Clock from 'react-live-clock';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function MarcadorScreen() {

  const [dni, setDni] = useState('');

  const handleButtonPress = (number: any) => {
    if (dni.length < 10) { // Limitar a 10 dígitos
      setDni(prevDni => prevDni + number);
    }
  };

  const handleDeletePress = () => {
    setDni(prevDni => prevDni.slice(0, -1));
  };
  const handleDonePress = () => {
    router.replace('/facial');
  };
  return (


    <ThemedView style={{ padding: 10, margin: 10, }}>

      <ThemedView style={{
        height: "40%",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',


      }}>
        <Text>
          <Clock element={Text} style={{
            fontSize: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            fontWeight: 'bold',
            height: '100%'
          }}
            format={'HH:mm:ss'} interval={1000} ticking={true} timezone={'US/Pacific'}
          />

        </Text>

      </ThemedView>


      <ThemedView style={{
        height: "60%",
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>


        <ThemedView style={{ width: '100%' }}>
          <TextInput
            style={styles.input}
            value={dni}
            placeholder="Ingrese Su numero de Dni"
          />
        </ThemedView>
        <ThemedView style={styles.buttonContainer}>

          {[...Array(10).keys()].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handleButtonPress(String(number))}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeletePress}
          >
            <Text style={[styles.buttonText, styles.deleteButtonText]}>DEL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.doneButton]}
            onPress={handleDonePress}
          >
            <Text style={[styles.buttonText, styles.doneButtonText]}>DON</Text>
          </TouchableOpacity>




        </ThemedView>


      </ThemedView>
    </ThemedView>
  );

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
    fontSize: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  phoneNumber: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%', // Ancho para que se agrupen en 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'lightcoral',
  },
  doneButton: {
    backgroundColor: 'lightgreen',
  },
  deleteButtonText: {
    color: 'white',
  },
  doneButtonText: {
    color: 'white',
  },
});
