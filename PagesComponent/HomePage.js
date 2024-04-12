import * as React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import bg from '../assets/bg.jpg'

export default function HomePage() {
    return (
        <>
        <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
                <Text variant="displayLarge" style={styles.textHeader}>A table !</Text>
        </ImageBackground>
        </View>


        
        </>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    display : 'flex',
    alignItems: 'center',
    },
    
    textHeader : {
        fontSize : 30,
        color : 'white',
        left : '40%',
        top : '20%',
    },
    image : {
        width : '100%',
        height : '50%',
    },
});
