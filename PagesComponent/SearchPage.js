import * as React from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import bg from '../assets/bg.jpg'
import { Searchbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();

    const rechercherAPI = async () => {
        if (!searchQuery.trim()) {
            Alert.alert('Erreur', 'Veuillez entrer un terme de recherche.');
            return;
        }

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
            const data = await response.json();
            
            if (data.meals) {
                navigation.navigate('SearchResult', { searchResults: data.meals });
            } else {
                Alert.alert('Aucun résultat', 'Aucun plat trouvé pour cette recherche.');
            }
        } catch (error) {
            console.error('Erreur lors de la requête API :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la récupération des données.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Rechercher un plat"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
                <Button
                    style={styles.searchBtn}
                    mode="contained"
                    color={'#007bff'}
                    onPress={() => rechercherAPI()}
                    contentStyle={{ height: 50 }}
                    labelStyle={{ fontSize: 18 }}
                >
                    Chercher
                </Button>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    searchbar: {
        position: 'absolute',
        top: '20%',
        width: '80%',
        left: '10%',
        zIndex: 1,
    },
    searchBtn: {
        position: 'absolute',
        top: '30%',
        width: '80%',
        left: '10%',
        zIndex: 1,
    },
});
