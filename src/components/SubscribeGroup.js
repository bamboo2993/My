import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {ListItem, List, Divider, Tile, Icon} from 'react-native-elements';


import Recipies from '../json/recipe.json'


class Group extends Component {

    state = {Recipies: [] };
    
    componentWillMount() {
        this.setState({ Recipies });
    }

     _addFavorite() {
         if(this.state.bTouch == 0)   this.setState( { _icon: 'favorite' , bTouch: 1})
           
        else   this.setState( {  _icon: 'favorite-border' , bTouch: 0 })
        
        
    }

    goToSeachResult = (Recipies) => {
        this.props.home.navigate (result, {...Recipies});

    };



    constructor( props ) {
        super( props );
        this.state = {  
                        bTouch: 0,
                        _icon: 'favorite-border'
                    };

    }

    render() {

        return (
            <View style ={ {height: 300}}>

            
                <ListItem 
                    key = {0}
                    title = {'健康養身'}
                    RightIcon
                    containerStyle ={ {width : Dimensions.get('window').width /7*3} }
                    titleStyle = {{fontWeight: 'bold', padding: 10}}
                    
                />

        

                <Divider />

                <ScrollView horizontal contentContainerStyle ={{ width:790}}>
                    <List style={ {height: 150, width: 130, margin: 10, flexDirection:'row'}}>

                        {this.state.Recipies.map((Recipies) => (
                            <View style={ {margin: 3}} >

                                <View style={ {flexDirection: 'row'}}>
                                    <Image style={ {height: 120, width: 150 }} source ={ require( '../assets/recipe_img/5.jpg' )} />
                                     
                                    <TouchableOpacity 
                                        onPress ={() => this._addFavorite()}
                                        style ={{ justifyContent: 'flex-end'}} >

                                        <Icon style={ { margin: 5, marginLeft: -27, justifyContent: 'flex-end',}}  name= {'favorite'} color='white'/>
                                   

                                    </TouchableOpacity>
                                
                                
                                </View>

                                <View style={ {height: 50, padding: 10, marginTop:5  }} >
                                    <Text style={ { fontWeight: 'bold' ,fontSize:15, padding:2}} >{Recipies.title}</Text>
                                    <Text>{Recipies.description}</Text>
                                </View>

                            </View>
                        
                    ))}

                    </List>



                
                </ScrollView>

            </View>

        );
    }
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    picture: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

});


export default Group;