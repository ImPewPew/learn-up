import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.tile}
                    onPress={() => navigation.navigate('Chat')}
                >
                    <Text style={styles.tileText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tile}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <Text style={styles.tileText}>Quiz</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    row: {
        flexDirection: 'row', // Display tiles side by side
    },
    tile: {
        flex: 1, // Divide available space equally between tiles
        height: 150,
        backgroundColor: '#e1f5fe', // Light blue background color
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2, // Add shadow to tiles
    },
    tileText: {
        color: '#424242', // Dark gray text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
