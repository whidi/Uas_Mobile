import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Left,
    Right,
    Body
} from 'native-base';

import { StackNavigator } from 'react-navigation';

const deviceWidth = Dimensions.get("window").width;
const logo = require("../Gambar/logo.png");
const cardImage = require("../Gambar/profil.jpg");

class BerandaScreen extends Component {
    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: '#0099CC'
        }
    };
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
                        <Text style={{ fontSize: 20, color: "white" }}>Beranda</Text>
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
                        <CardItem style={{ paddingVertical: 0 }}>
                            <Left>
                                <TouchableOpacity transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>4923 Likes</Text>
                                </TouchableOpacity>
                            </Left>
                            <Body>
                                <TouchableOpacity  onPress={ () => this.props.navigation.navigate('TanggapanScreen') }>
                                    <Icon active name="chatbubbles" />
                                    <Text>89 Comments</Text>
                                </TouchableOpacity>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default BerandaScreen;

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