import React from 'react';
import { ScrollView, Linking, Image } from 'react-native';
import { Button,
         Card,
         Text, 
         ListItem,
         Icon } from 'react-native-elements';

// Make a component
const SearchResult = (props) => {
  const { title, 
          accountID,
          accountImg,
          image,
          tag,
          likeNum
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>

        <Card>

            <ListItem
                roundAvatar
                key = { sectionID }
                title = { title }
                subtitle = { accountID }
                avatar = {{ require (accountImg)}}
            />

            <Image style={imgStyle} source ={ require (image)} />

            <View>
                <View>
                    <Icon name = 'local-offer' />
                    <Text> {tag} </Text>
                </View>
                </View>
                    <Text> {likeNum} </Text>
                    <Icon reverse name = 'favourite-border' />
                <View>

            </View>

            


        </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold'
  }
};


export default SearchResult ;