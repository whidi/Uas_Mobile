import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Body, Right, Card, CardItem, Thumbnail } from 'native-base';

const deviceWidth = Dimensions.get("window").width;
const logo = require("../Gambar/logo.png");
const cardImage = require("../Gambar/profil.jpg");

class InfoScreen extends Component {
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
                        <Text style={{ fontSize: 20, color: "white" }}>Info</Text>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card style={style.mb}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Image
                                    style={{
                                        alignSelf: "center",
                                        height: 150,
                                        resizeMode: "cover",
                                        width: deviceWidth / 1.18,
                                        marginVertical: 5
                                    }}
                                    source={cardImage}
                                />
                                <Text>
                                    NativeBase is a free and source framework that enable
                                    developers to build high-quality mobile apps using React
                                    Native iOS and Android apps with a fusion of ES6. NativeBase
                                    builds a layer on top of React Native that provides you with
                                    basic set of components for mobile application development.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default InfoScreen;

style = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15
    }
})