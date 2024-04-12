import * as React from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import bg from '../assets/bg.jpg'
import { Searchbar,Button } from 'react-native-paper';
import Meal from '../CustomComponent/getMeal';

export default function HomePage() {
    const [searchQuery, setSearchQuery] = React.useState('Search');

    function rechercherAPI(){
        console.log("press")
    }

    return (
        <>
        <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <Searchbar
                style={styles.Searchbar}
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
              <Button style={styles.SearchBtn} icon="" mode="outlined" buttonColor={'white'} onPress={() => rechercherAPI()}>
                    Chercher
                </Button>
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
    image : {
        width : '100%',
        height : '50%',
    },
    Searchbar :{
        top : '20%',
    },
    SearchBtn : {
        top : '20%'
    }
});
