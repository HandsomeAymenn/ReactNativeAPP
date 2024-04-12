import * as React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

export default function SearchResultPage({ route }) {
    const { searchResults } = route.params;

    const renderMealItem = ({ item }) => {
        return (
            <View style={styles.mealItem}>
                <Text style={styles.mealName}>{item.strMeal}</Text>
                {/* Ajoutez d'autres éléments de données du plat ici */}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.resultList}
                data={searchResults}
                renderItem={renderMealItem}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultList: {
        width: '100%',
        paddingHorizontal: 20,
    },
    mealItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
    },
    mealName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
