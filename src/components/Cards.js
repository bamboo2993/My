import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { Card} from 'react-native-elements';
const CardList = (props) => {

    const { 
        viewStyle,
        imgStyle,
        boxStyle,
    } = styles;

    return (
        <ScrollView contentContainerStyle ={viewStyle}>

            <View style={boxStyle}>
                <Card  containerStyle={imgStyle} 
                    title= 'Header'
                    image= { require( '../assets/recipe_img/1.jpg')}>
                    <Text>describtion </Text>
                    <Icon style={ { }}  name= 'favorite-border' color='black'/>


                </Card>



                <Image style={imgStyle} source ={ require('../assets/recipe_img/1.jpg')} />

                <Image style={imgStyle} source ={ require('../assets/recipe_img/2.jpg')} />

                <Image style={imgStyle} source ={ require('../assets/recipe_img/3.jpg')} /> 

                <Image style={imgStyle} source ={ require('../assets/recipe_img/1.jpg')} />

                <Image style={imgStyle} source ={ require('../assets/recipe_img/3.jpg')} />

                <Image style={imgStyle} source ={ require('../assets/recipe_img/2.jpg')} />           
            
            
            
            </View>


            

            
        </ScrollView>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {
        
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingHorizontal: 5,




    },

    boxStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',


    },


    imgStyle: {
        height: 180,
        width: 180,

        marginBottom: 5,

        
        
    },

});


export default CardList;