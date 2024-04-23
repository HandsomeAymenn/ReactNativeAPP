import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

export default function More(){
    const [backgroundImage, setBackgroundImage] = React.useState(null);

    React.useEffect(() => {
        const randomId = Math.floor(Math.random() * 7) + 1;
        fetch(`http://api-fantasygame.eu-4.evennode.com/get-character/${randomId}`)
            .then(response => response.json())
            .then(data => {
                setBackgroundImage(data.img);
            })
            .catch(error => {
                console.error('Error fetching background image:', error);
            });
    }, []);

    return (
        <ImageBackground source={{ uri: backgroundImage }} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>More</Text>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>About Us</Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium vestibulum lacus at luctus. 
                        Vestibulum sagittis, mi sit amet efficitur auctor, nunc elit sagittis ligula, id vehicula diam libero id lectus. 
                        Maecenas ac lobortis velit. Mauris pellentesque felis vel luctus molestie. 
                        Vivamus ultricies, nisl non posuere dictum, ligula orci malesuada mauris, a pharetra nulla ipsum at libero.
                    </Text>
                    <Text style={styles.sectionTitle}>Contact Us</Text>
                    <Text style={styles.paragraph}>
                        Email: contact@example.com{"\n"}
                        Phone: +1234567890{"\n"}
                        Address: 123 Main Street, City, Country
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3B5998',
    },
    content: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3B5998',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
    },
});
