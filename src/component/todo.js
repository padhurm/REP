import React, { Component } from 'react';
import { Text, Card, CardItem, Tab, Tabs, TabHeading, Button, ScrollableTab } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import TwoColumnTable from './twoColumTable';

const actionData = require('../../assets/sampledata/actions.json')
const approvalData = require('../../assets/sampledata/approvals.json')

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'active',
            actionButtonActive: true,
            approvalButtonActive: false,
            toDoContentSize: 3
        }
    }

    _onPress(buttonValue) {
        if (buttonValue !== this.state.key) {
            let actionButton = (buttonValue === 'active') ? true : false;
            let approvalButton = (buttonValue === 'approval') ? true : false;
            this.setState({
                key: buttonValue,
                actionButtonActive: actionButton,
                approvalButtonActive: approvalButton,
                toDoContentSize: 3
            });
        }
    }

    _contentToDisplay() {
        return this.state.actionButtonActive ? this._itemChosen(actionData) : this._itemChosen(approvalData);
    }

    _itemChosen(data) {
        return data.slice(0, this.state.toDoContentSize).map((d, i) => {
            return <TwoColumnTable column1={d.TimeStamp} column2={d.Description} key={i} />
        })
    }

    render() {
        return (
            <Card style={styles.cardStyle}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Button transparent
                        style={[styles.buttonStyle,
                        this.state.actionButtonActive ?
                            { borderBottomWidth: 2, borderBottomColor: '#FFC220' } :
                            { borderBottomWidth: 0, borderBottomColor: '#FFC220' }]}
                        onPress={() => this._onPress('active')} >
                        <Text style={styles.buttonTextStyle}>ACTIONS</Text>
                    </Button>
                    <Button transparent style={[styles.buttonStyle,
                    this.state.approvalButtonActive ?
                        { borderBottomWidth: 2, borderBottomColor: '#FFC220' } :
                        { borderBottomWidth: 0, borderBottomColor: '#FFC220' }]}
                        onPress={() => this._onPress('approval')} >
                        <Text style={styles.buttonTextStyle}>APPROVALS</Text>
                    </Button>
                </View>
                {this._contentToDisplay()}
                <CardItem footer>
                    <Button transparent style={styles.buttonStyle} onPress={() => this.setState({ toDoContentSize: 100 })}>
                        <Text style={styles.buttonTextStyle}>SEE ALL</Text>
                    </Button>
                </CardItem>
            </Card>
        )
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
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 0,
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
        // padding:10,

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
    tabsStyle: {
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#FFFFFF',
        borderBottomWidth: 0,
        backgroundColor: '#FFFFFF'
    }
})