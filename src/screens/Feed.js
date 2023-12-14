import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Produtos from '../components/Produtos';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Produtos />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});