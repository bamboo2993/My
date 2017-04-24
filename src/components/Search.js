import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Dimensions,

  
} from 'react-native';


import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import { Icon, CheckBox } from 'react-native-elements';


var radio_props = [
        {lable: 'para1', value: 0 },
        {lable: 'para2', value: 1}
    ];

class Search extends Component{
    componentWillMount() {
        LayoutAnimation.spring();
       
    }


    getInitialState() {
        return { h: 150,
                 value: 0,} 
    }


    _onPress() {
        LayoutAnimation.spring();
        if(this.state.bTouch == 0)   this.setState( { h: 150 , w: this.state.w , bTouch: 1, opacity: 1})
           
        else   this.setState( { h: 0, w: this.state.w, bTouch: 0, opacity:0 })
        
        
    }

    

    constructor( props ) {
        super( props );
        this.state = { searchText: '' ,
                        h: 0,
                        w: Dimensions.get('window').width,
                        bTouch: 0,
                        opacity: 0,
                    };

    }


    render() {
        return (

            <View >
                <View style ={styles.viewStyle}>

                    <View style ={styles.searchAreaStyle}>
                        <Icon  name= 'search' />

                        <TextInput
                            style ={ styles.textStyle} 
                            onChangeText ={ (searchText) => this.setState(searchText)} 
                            placeholder= {'Search'} 
                            placeholderTextColor = {'rgb(185, 163, 227)'}
                        />

                        
                    </View>
                    
                    <TouchableOpacity 
                        onPress ={() => this._onPress()}
                        style ={{ flex: 1}}
                    >
                    <Icon  name= 'tune' />

                    </TouchableOpacity>
                </View>

                <View style ={ {height: this.state.h, backgroundColor: 'yellow' }}>
                    <View style ={styles.choiceStyle}>
                        <Text style ={ styles.text2Style }> 範圍： </Text>

                        <CheckBox
                            title = '包括'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '只有'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />
                        

                    </View>

                    <View style ={styles.choiceStyle}>
                        <Text style ={ styles.text2Style }> 種類： </Text>

                        <CheckBox
                            title = '食材'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '菜名'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />
                        

                    </View>


                    <View style ={styles.choiceStyle}>
                        <Text style ={ styles.text2Style }> 標籤： </Text>

                        <CheckBox
                            title = '主食'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '飲料'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '甜點'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />
                        <CheckBox
                            title = '嘴饞'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />
                        

                    </View>

                    <View style ={styles.choiceStyle}>
                        <Text style ={ styles.text2Style }> 人數： </Text>

                        <CheckBox
                            title = '１～２'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '３～４'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />

                        <CheckBox
                            title = '５～６'
                            checkedIcon = 'dot-circle-o'
                            uncheckedIcon = 'circle-o'
                            checked ={ this.state.checked}
                            containerStyle = { {opacity: 1, width: this.state.w/5}}
                            textStyle = {{fontSize: 13}}
                        />
                        

                    </View>


                    
                </View>

                
            </View>

        );
    }

    
    
    
};


const styles = StyleSheet.create({
    viewStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(100, 65, 165)',
        height: 64,
        paddingTop: 25,
        paddingLeft: 8.5,
        paddingRight: 8.5,

    },


    searchAreaStyle: {
        height: 30,
        width:320,
        backgroundColor: 'rgb(49, 31, 83)',

        borderRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    

    },
    searchIconStyle: {
        height: 18,
        width: 18,

    },


    textStyle : {
        width: 280,
        
        fontSize: 15,
        color: 'rgb(185, 163, 227)',
    },

    imgStyle: {
       
        height: 33,
        width: 33,




    },


    menuStyle: {
        
    },

    choiceStyle: {
        flexDirection: 'row',
    },

    text2Style: {
        padding: 5,
        paddingRight: 0,
        paddingTop:10,
    }

});


export default Search;
