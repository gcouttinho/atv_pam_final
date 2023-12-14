import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const categorias = [
    {
        codigo: 1,
        nome: 'Ficção Científica',
    },
    {
        codigo: 2,
        nome: 'Romance',
    },
    {
        codigo: 3,
        nome: 'Terror',
    },
    {
        codigo: 4,
        nome: 'Aventura',
    },
    {
        codigo: 5,
        nome: 'Suspense',
    },
    {
        codigo: 6,
        nome: 'Drama',
    },
    {
        codigo: 7,
        nome: 'Ação',
    },
    {
        codigo: 8,
        nome: 'Fantasia',
    },
]

export default function CategoriasFeed() {
    return (
        <FlatList
            data={categorias}
            ListEmptyComponent={<Text>Não há produtos cadastrados.</Text>}
            keyExtractor={item => item.codigo.toString()}
            renderItem={({ item }) => (
                <SafeAreaView style={styles.Container}>
                    <Text style={styles.Text}>{item.nome}</Text>
                    <View
                        style={styles.ContainerCirc}
                    >
                        <TouchableOpacity
                            onPress={() => alert(`Categoria ${item.nome} foi selecionada.`)}
                        >
                            <Text style={styles.carrinho}>Selecionar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

            )}
        />
    );
}


const styles = StyleSheet.create({
    Container: {
        width: 350,
        height: 65,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5,
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignContent: 'center',
        justifyContent: 'center',

    },
    carrinho: {
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    ContainerCirc: {
        alignContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#000',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
})