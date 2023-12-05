import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute from '@react-navigation/native'

const Setting = () => {
    const route = useRoute();
    const { setApiUrl } = route.params; // Access setApiUrl from route.params

    const [newApiUrl, setNewApiUrl] = useState(''); // Declare newApiUrl using useState

    const handleSave = () => {
        setApiUrl(newApiUrl); // Now you can call setApiUrl
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>API URL:</Text>
            <TextInput
                style={styles.input}
                value={newApiUrl}
                onChangeText={(text) => setNewApiUrl(text)}
                placeholder="Enter API URL"
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
});

export default Setting;
