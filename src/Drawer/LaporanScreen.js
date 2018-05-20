import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Icon, Container, Header, Content, Left, Body, Right, Textarea, Form, Button, Item, Input } from 'native-base';

class LaporanScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() =>
                                this.props.navigation.navigate('DrawerOpen')} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: "white" }}>Input Laporan</Text>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <CheckBox
                        center
                        title='Public'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                       
                    />
                    <CheckBox
                        center
                        title='Private'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                       
                    />
            
                    <Item regular>
                        <Input placeholder='Judul' />
                    </Item>
                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Tulis Laporan Anda anda" />
                    </Form>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}> Unggah Foto </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}> Unggah File </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}> Kirim </Text></TouchableOpacity>
                </Content>
            </Container>
        );
    }
}
export default LaporanScreen;

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