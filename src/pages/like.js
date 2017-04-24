import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import { ButtonGroup} from 'react-native-elements';

import SearchResult from '../components/SearchResult'
import Card from '../components/Cards'

class Like extends Component {

    constructor () {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }


    render () {
        const buttons = ['All', '主食', '甜點', '飲料', '嘴饞' ]
        const { selectedIndex } = this.state
        return (
            <View  style ={styles.container}>
                <StatusBar  />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}} />

                <ScrollView>
                    <Card />
                    
                </ScrollView>
            </View>

        );
    }

    
        
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 25,

    },

});






export default Like;