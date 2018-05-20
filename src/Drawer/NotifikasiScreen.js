import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Body, Right, List, ListItem, Thumbnail } from 'native-base';

const pratik = require("../Gambar/contacts/pratik.png");
const sanket = require("../Gambar/contacts/sanket.png");
const megha = require("../Gambar/contacts/megha.png");
const atul = require("../Gambar/contacts/atul.png");
const saurabh = require("../Gambar/contacts/saurabh.png");
const varun = require("../Gambar/contacts/varun.png");
const datas = [
    {
        img: pratik,
        text: "Kumar Pratik",
        note: "Its time to build a difference . .",
        time: "3:43 pm"
    },
    {
        img: sanket,
        text: "Kumar Sanket",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "1:12 pm"
    },
    {
        img: megha,
        text: "Megha",
        note: "Live a life style that matchs your vision",
        time: "10:03 am"
    },
    {
        img: atul,
        text: "Atul Ranjan",
        note: "Failure is temporary, giving up makes it permanent",
        time: "5:47 am"
    },
    {
        img: saurabh,
        text: "Saurabh Sahu",
        note: "The biggest risk is a missed opportunity !!",
        time: "11:11 pm"
    },
    {
        img: varun,
        text: "Varun Sahu",
        note: "Wish I had a Time machine . .",
        time: "8:54 pm"
    }
];

class NotifikasiScreen extends Component {
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
                        <Text style={{ fontSize: 20, color: "white" }}>Notifikasi</Text>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail small source={data.img} />
                                </Left>
                                <Body>
                                    <Text>
                                        {data.text}
                                    </Text>
                                    <Text numberOfLines={1} note>
                                        {data.note}
                                    </Text>
                                </Body>
                                <Right>
                                    <Text note>
                                        {data.time}
                                    </Text>
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}
export default NotifikasiScreen;

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