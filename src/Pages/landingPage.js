import React, { Component } from 'react';
import { Container, Content, Footer, Text, Card, CardItem, Tab, Tabs, TabHeading, Button } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import HeaderBar from '../component/headerBar';
import CustomFooter from '../component/customFooter';
import Marquee from '../component/common/marquee';
import AppsPallette from '../component/apps-pallette';
import lang from '../../assets/util/lang';
import TodoCard from '../component/todo';

export default class LandingPage extends Component {
    render() {
        return (
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
                        <AppsPallette />
                    </Card>
                    <CardItem header>
                        <Text style={styles.headingStyle}>To Do</Text>
                    </CardItem>
                    <TodoCard/>
                    {/* <Card style={styles.cardStyle}>
                        <View style={styles.palleteStyle}>
                            <Tabs style={{
                                borderWidth: 0,
                                borderRadius: 0,
                                borderColor: '#FFFFFF',
                                borderBottomWidth: 0,
                                backgroundColor: '#FFFFFF'
                            }}>
                                <Tab heading={
                                    <TabHeading style={{ backgroundColor: '#FFFFFF' }}>
                                        <Text>Actions(5)</Text></TabHeading>}>
                                    <Text style={{ padding: 5 }}>Action1</Text>
                                    <Text style={{ padding: 5 }}>Action2</Text>
                                    <Text style={{ padding: 5 }}>Action3</Text>
                                    <Text style={{ padding: 5 }}>Action4</Text>
                                    <Text style={{ padding: 5 }}>Action5</Text>
                                </Tab>
                                <Tab heading={<TabHeading style={{ backgroundColor: '#FFFFFF', }}><Text>Approvals(2)</Text></TabHeading>}>
                                    <Text style={{ padding: 5 }}>Approval1</Text>
                                    <Text style={{ padding: 5 }}>Approval2</Text>
                                </Tab>
                            </Tabs>
                        </View>
                        <CardItem footer>
                            <Button transparent style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>SEE ALL ACTIONS</Text>
                            </Button>
                        </CardItem>
                    </Card> */}
                    <CustomFooter />
                </Content>
                {/* <Footer>
                    
                </Footer> */}
            </Container>
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
    buttonStyle:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        
    },
    buttonTextStyle:{
        color:'#0071CE', 
        fontSize:14, 
        fontWeight:'bold', 
        height:20,
        
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