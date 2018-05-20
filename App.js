import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Login from './src/UserForm/login';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import BerandaScreen from './src/Drawer/BerandaScreen';
import LaporanScreen from './src/Drawer/LaporanScreen';
import NotifikasiScreen from './src/Drawer/NotifikasiScreen';
import InfoScreen from './src/Drawer/InfoScreen';
import ProfilScreen from './src/Drawer/ProfilScreen';
import PengaturanScreen from './src/Drawer/PengaturanScreen';
import TanggapanScreen from './src/Drawer/TanggapanScreen';

import { Font } from "expo";
import { Container, Content, Header, Body, Icon, Title } from 'native-base';
import { WHEN_UNLOCKED_THIS_DEVICE_ONLY } from 'expo/src/SecureStore';

class App extends Component {
  render() {
    return (
      <StackHome />
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200, width: 200, backgroundColor: 'white' }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={style.DrawerImage}
          source={require('./src/Gambar/icon.png')}
        />
        <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 20, fontWeight: '500',}}>SILASAN</Text>
        </Body>
      </Body>
    </Header>
    <Content>
        <DrawerItems {...props} />
      </Content>
  </Container>
)


const Myapp = DrawerNavigator({
  Beranda: {
    screen: BerandaScreen
  },
  Laporan: {
    screen: LaporanScreen
  },
  Notifikasi: {
    screen: NotifikasiScreen
  },
  Info: {
    screen: InfoScreen
  },
  Profil: {
    screen: ProfilScreen
  },
  Pengaturan: {
    screen: PengaturanScreen
  },
  Keluar: {
    screen: Login
  }
},{
    initialRouteName: 'Beranda',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  })
  Myapp.navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: '#283593'
    }
  }

const StackHome = StackNavigator ({
    Login: {
      screen: Login
    },
    BerandaScreen: {
      screen: Myapp
    },
    LaporanScreen: {
      screen: Myapp
    },
    NotifikasiScreen: {
      screen: Myapp
    },
    InfoScreen: {
      screen: Myapp
    },
    ProfilScreen: {
      screen: Myapp
    },
    PengaturanScreen: {
      screen: Myapp
    },
    KeluarScreen: {
      screen: Myapp,
    },
    TanggapanScreen: {
      screen: TanggapanScreen,
      navigationOptions: () =>({
        title: 'Tanggapan',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#283593'
        }
      })
    }

  },{
    initialRouteName: 'Login'
  });


export default App;

style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DrawerImage: {
    height: 150,
    width:150,
    borderRadius: 75,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
 