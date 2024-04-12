import * as React from 'react';
import { View, StyleSheet,ImageBackground,Text } from 'react-native';
import bg from '../assets/bg.jpg'

export default function HomePage() {

    return (
        <>
        <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text>EE</Text>
        </ImageBackground>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });