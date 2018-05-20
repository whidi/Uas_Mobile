import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base';

class PengaturanScreen extends Component {
    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={()=>
                            this.props.navigation.navigate('DrawerOpen')}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: "white" }}>Pengaturan</Text>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text> Pengaturan Screen</Text>
                </Content>
            </Container>
        );
    }
}
export default PengaturanScreen;