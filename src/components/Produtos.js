import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { colors } from "../styles/variables";

const produtos = [
    {
        codigo: 1,
        titulo: 'As Cavernas de Aço',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/cavernas_aco.jpg'),
    },
    {
        codigo: 2,
        titulo: 'O Sol Desvelado',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/sol_desvelado.jpg'),
    },
    {
        codigo: 3,
        titulo: 'Robôs da Alvorada',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/robos_alvorada.jpg'),
    },
    {
        codigo: 4,
        titulo: 'Robôs e o Império',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/robos_imperio.jpg'),
    },
    {
        codigo: 5,
        titulo: 'Poeira de Estrelas',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/poeira_estrelas.jpg'),
    },
    {
        codigo: 6,
        titulo: 'As Correntes do Espaço',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/correntes_espaco.jpg'),
    },
    {
        codigo: 7,
        titulo: 'Pedra no Céu',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/pedra_ceu.jpg'),
    },
    {
        codigo: 8,
        titulo: 'Prelúdio à Fundação',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_preludio.jpg'),
    },
    {
        codigo: 9,
        titulo: 'Origens da Fundação',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_origem.jpg'),
    },
    {
        codigo: 10,
        titulo: 'Fundação',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao.jpg'),
    },
    {
        codigo: 11,
        titulo: 'Fundação e Império',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_imperio.jpg'),
    },
    {
        codigo: 12,
        titulo: 'Segunda Fundação',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_segunda.jpg'),
    },
    {
        codigo: 13,
        titulo: 'Limites da Fundação',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_limites.jpg'),
    },
    {
        codigo: 14,
        titulo: 'Fundação e a Terra',
        autor: 'Isaac Asimov',
        preco: '90,00',
        imagem: require('../assets/imagens/livros/fundacao_terra.jpg'),
    },
];


export default function Produtos() {
    return (
        <FlatList
            data={produtos}
            ListEmptyComponent={<Text>Não há livros cadastrados.</Text>}
            keyExtractor={item => item.codigo.toString()}
            renderItem={({ item }) => (
                <View style={styles.Container}>
                    <Image
                        style={styles.Image}
                        source={item.imagem}
                    />
                    <View style={styles.Info}>
                        <View style={styles.Text}>
                            <Text style={styles.Titulo}>{item.titulo}</Text>
                            <Text style={styles.Author}>{item.autor}</Text>
                            <Text style={styles.Preco}>R$ {item.preco}</Text>
                        </View>
                        <TouchableOpacity
                            style={{ justifyContent: 'center' }}
                            onPress={() => alert(`Produto ${item.titulo} foi adicionado ao carrinho.`)}
                        >
                            <Text style={styles.carrinho}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detalhesButton}
                            onPress={() => alert(`Detalhes do produto ${item.titulo}`)}
                        >
                            <Text style={styles.detalhes}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    Container: {
        alignContent: 'left',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 10,
    },
    Info: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    Image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    Text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
    },
    Author: {
        fontSize: 16,
        color: '#000',
    },
    Preco: {
        fontSize: 16,
        color: '#000',
    },
    carrinho: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 13,
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detalhes: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detalhesButton: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
    },
});