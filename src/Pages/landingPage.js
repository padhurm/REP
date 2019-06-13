import React, { Component } from 'react';
import { Container, Content, Footer, Text, Card, CardItem, Tab, Tabs, TabHeading, Button, Icon, ScrollView } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import HeaderBar from '../component/headerBar';
import CustomFooter from '../component/customFooter';
import Marquee from '../component/common/marquee';
import AppsPallette from '../component/appsPallette';
import lang from '../../assets/util/lang';
import TodoCard from '../component/todo';
import { withNavigation } from 'react-navigation';

class LandingPage extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require("../../assets/images/Spark.png")}
                // resizeMode="contain"
                style={{
                    width: 24,
                    height: 24, tintColor: tintColor
                }}
            />)
    }
    render() {
        return (
            // <View>

            <Container>
                <HeaderBar />
                {lang.MARQUE_TEXT.length > 0 &&
                    <Marquee>{lang.MARQUE_TEXT}</Marquee>
                }
                <Content>
                    <Card transparent>
                        <CardItem header>
                            <Text style={styles.headingStyle}>Apps</Text>
                        </CardItem>
                        <AppsPallette/>
                    </Card>
                    <CardItem header>
                        <Text style={styles.headingStyle}>To Do</Text>
                    </CardItem>
                    <TodoCard />
                    <CustomFooter />
                </Content>
            </Container>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%'
    },
    headingStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonTextStyle: {
        color: '#0071CE',
        fontSize: 14,
        fontWeight: 'bold',
        height: 20,

    },
    palleteStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5
    },
})

export default withNavigation(LandingPage);