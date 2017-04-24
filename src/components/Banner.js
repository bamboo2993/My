import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Navigator,
    View,
    Dimensions
    } from 'react-native';

import {ListItem, Divider, Tile, Icon} from 'react-native-elements';

import Recipies from '../json/recipe.json'

import Swiper from 'react-native-swiper';

class hello extends Component {


    state = {Recipies: [] };

    componentWillMount() {
        this.setState({ Recipies });
    }

    goToSeachResult = (Recipies) => {
        this.props.home.navigate (result, {...Recipies});

    };

  render() {
    return (


        <View style ={ {height: 390}}>

        
             <ListItem 
                key = {0}
                title = {'熱門排行'}
                RightIcon
                containerStyle ={ {width : Dimensions.get('window').width /7*3} }
                titleStyle = {{fontWeight: 'bold',padding: 10}}
                
            />

    

            <Divider />

            <Swiper 
              style={styles.wrapper} 
              showsButtons={true} 
              autoplay  
              height = {270} 
              dotStyle = {{marginBottom: -110}} 
              activeDotStyle = {{marginBottom: -110}}
              //nextButton = { <Text style ={{color: 'white' }} > </Text>}
              >

                  <View style={styles.slide1}>
                     <Tile
                      imageSrc ={ require( "../assets/recipe_img/2.jpg" )}
                      title = {'蔥爆杏鮑菇'}
                      titleStyle = {{ fontWeight: 'bold',fontSize:24, }}
                      featured
                      caption = {'低卡瘦身'}
                      captionStyle = {{width: 230}}

                      icon = {{name: 'favorite-border', color:'white', size: 30, marginBottom: -100,lineHeight: 100}}
                    
                     
                    />



                    </View>


                    <View style={styles.slide1}>
                     <Tile
                      imageSrc ={ require( "../assets/recipe_img/3.jpg" )}
                      title = {'香菇雞湯'}
                      titleStyle = {{ fontWeight: 'bold',fontSize:24, }}
                      featured
                      caption = {'雞湯能夠改善人體的免疫機能'}
                      captionStyle = {{width: 230}}

                      icon = {{name: 'favorite-border', color:'white', size: 30, marginBottom: -100,lineHeight: 100}}
                     
                    />

                    </View>

                    <View style={styles.slide1}>
                     <Tile
                      imageSrc ={ require( "../assets/recipe_img/4.jpg" )}
                      title = {'日式馬鈴薯沙拉'}
                      titleStyle = {{ fontWeight: 'bold',fontSize:24, }}
                      featured
                      caption = {'營養美味又健康'}
                      captionStyle = {{width: 230}}

                      icon = {{name: 'favorite-border', color:'white', size: 30, marginBottom: -100,lineHeight: 100}}
                     
                    />

                    </View>
                   
                   
                
            </Swiper>
            
        
        
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
      paddingTop:3

  },
  slide1: {
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


export default hello;
