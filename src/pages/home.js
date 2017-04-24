import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import SearchBar from '../components/Search.js';
import Banner from '../components/Banner';
import Group from '../components/Group'


const Home = () => {

    const { 
        container,
    } = styles;

    return (
        <ScrollView style ={container}>
            <StatusBar barStyle ='light-content' />

            <SearchBar />
            <Banner />
            <Group />
            <Group />
            
        </ScrollView>

    );
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});


export default Home;