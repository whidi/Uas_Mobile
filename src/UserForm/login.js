import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class App extends Component {
  static navigationOptions = {
    header: null,
    headerStyle:{
          backgroundColor: '#232E33',
          elevation: 0,
          showdownOpacity: 0.1
    },
  };
  constructor()
    {
        super();
        this.state = {
          nama: '',
          umur: 0,
          alamat: '',
          laporan: '',
          ActivityIndicator_Loading: false,
        }
    }

    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://gusnando.com/mobile/whidiharta/api/lapor.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  umur : this.state.umur,
                  alamat : this.state.alamat,
                  laporan : this.state.laporan
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS',responseJsonFromServer);
                this.setState(
                {
                  nama: '',
                  umur: '',
                  alamat: '',
                  laporan: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require('../Gambar/icon.png')}
          style={{ width: 200, height: 200, marginBottom: 50, }}
        />
        <Text style={styles.nama}>
          SILASAN
        </Text>
        <Text style={styles.subnama}>
          Sistem Pelaporan Mahasiswa Jurusan
        </Text>
        <Text style={styles.welcome}>
          USERNAME:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Username"
          underlineColorAndroid='#000'
        />
        <Text style={styles.welcome}>
          PASSWORD:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Password"
          underlineColorAndroid='#000'
        />
        <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('BerandaScreen') }>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

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
    marginTop : 50,
    padding: 20,
    borderRadius: 10,
    width: 250,
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
