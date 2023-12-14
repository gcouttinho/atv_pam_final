import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colors } from "../styles/variables";
import React from 'react';
import CategoriasFeed  from "../components/Categoria";

export default function Categorias() {
    return (
        <SafeAreaView style={styles.container}>
            <CategoriasFeed />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: colors.dark3,
        fontSize: 20,
        fontWeight: 'bold',
    },
});