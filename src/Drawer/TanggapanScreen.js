import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form, Button, Icon } from "native-base";


class TanggapanScreen extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text> Laporan : Pelapak Ribut di Pasar </Text>
                    <Text> Author  : Adam Asoy </Text>
                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Tulis tanggapan anda" />
                    </Form>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Tanggapi </Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}
export default TanggapanScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0099CC',
    },
    welcome: {
      fontSize: 20,
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    input: {
      width: 350,
      height: 60,
      padding: 8,
      backgroundColor: '#FFF',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    multilineInput: {
      width: 350,
      height: 100,
      padding: 8,
      backgroundColor: '#465B66',
      borderRadius: 10,
      color: 'white'
    },
    button: {
      backgroundColor: '#0066FF',
      marginTop : 20,
      padding: 10,
      borderRadius: 10,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 20,
      
    },
    nama:{
      fontWeight: '500',
      fontSize: 48,
      marginBottom: 20,
    },
    subnama:{
      fontWeight: '200',
      fontSize: 20,
      marginBottom: 50,
    }
  });
  
