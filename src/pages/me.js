import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {  Avatar, Icon} from 'react-native-elements';
import Group from '../components/Group'


class Me extends Component {

    constructor () {
        super()
        this.state = {

        }

    }


    render () {
        
        return (
            <View>
        
                <StatusBar />
                <ScrollView style ={{paddingTop: 25,}} >
                    <View style ={{paddingTop:80, height:400, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}}> 

                        <View style={{
                           // backgroundColor:'yellow',
                            flexDirection:'row' , 
                            width : 150, height : 150,
                            justifyContent: 'center', alignItems: 'center'}}>
                             <Avatar
                                xlarge
                                rounded
                                source ={require("../assets/account_thumbnail/Tom.jpg")}
                            />
                            <TouchableOpacity 
                                onPress ={() => this.onPress}
                                 style ={{alignSelf: 'flex-end',position:'absolute'}}
                                 >

                                <Icon style ={{marginLeft:80}} size ={32} name= {'photo-camera'} color='white'/>
                                   

                            </TouchableOpacity>
                        
                        </View>
                       
                        <View style ={{/*backgroundColor: 'yellow',*/ width:330,  alignItems: 'center'}}>
                            <Text style ={{fontWeight: 'bold',fontSize: 30, padding: 10, color:'white'}}> AccountID </Text>
                            <Text style ={{fontSize: 22, padding: 5, color: 'white'}}> Describtion aaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                        
                             <TouchableOpacity 
                                onPress ={() => this.onPress}
                                 style ={{alignSelf: 'flex-end'}}
                                 >

                                <Icon name= 'settings' style ={{alignSelf:'flex-end'}} color= 'white' />
                                   

                            </TouchableOpacity>
                        
                        </View>
                        
                    </View>
                        
                    <View style ={{justifyContent: 'space-around',alignItems: 'center',height: 80, backgroundColor: 'yellow', flexDirection: 'row'}}>
                        <View style ={{padding:5,}}>
                            <Text style ={{ fontSize: 20,fontWeight: 'bold',}}> 食譜 </Text>
                            <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4}}> 18 </Text>
                        </View>

                        <View style ={{padding:5,}}>
                            <Text style ={{ fontSize: 20,fontWeight: 'bold',}}> 收藏</Text>
                            <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4}}> 20 </Text>
                        </View>

                        <View style ={{padding:5,}}>
                            <Text style ={{ fontSize: 20,fontWeight: 'bold',}}> 訂閱 </Text>
                            <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4}}> 10 </Text>
                        </View>

                        <View style ={{padding:5,}}>
                            <Text style ={{ fontSize: 20,fontWeight: 'bold',}}> 粉絲 </Text>
                            <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4}}> 9 </Text>
                        </View>
                    </View>

                    <Group />

                    
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






export default Me;