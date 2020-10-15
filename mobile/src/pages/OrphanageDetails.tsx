import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrphanageDetails() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Orphanage Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
      color: '#000',
    },
});