import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Image
                    style={styles.logo}
                    source={require('../assets/icon.png')}
                />
            </View>
            <Text style={styles.texto}>Seja bem vindo ao nosso Aplicativo</Text>
            <Text style={styles.textoName}>LIBRI</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Feed')}
            >
                <Text style={styles.textoBotao}>Ver Livros</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Categorias')}
            >
                <Text style={styles.textoBotao}>Ver Categorias</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 0,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 100,
    },
    texto: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        padding: 16,
    },
    textoName: {
        fontSize: 40,
        fontWeight: '800',
        color: '#000',
        padding: 16,
    },
    botao: {
        backgroundColor: '#000',
        width: 300,
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})