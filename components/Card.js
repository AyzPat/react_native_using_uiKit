import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView,Text } from 'react-native';
// import { Card,Button } from 'react-native-elements';
import {Card , Button,Container,Content,CardItem,Body} from 'native-base'
// import Grid from 'react-native-grid-component';
// import { Text } from '@shoutem/ui'

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            // <Card  key={this.props.title} style={{ margin:0,
            //     padding:10,height:200,borderWidth:2}} >
            //     <Text> {this.props.user_title}</Text>
            //     {"\n"}
            //   </Card> 

<Content padder>
  <Card>
    <CardItem header button onPress={() => alert("This is Card Header")}>
      <Text>{this.props.title}</Text>
    </CardItem>
    <CardItem button onPress={() => alert("This is Card Body")}>
      <Body>
        <Text numberOfLines={2}>
        {this.props.user_title}
        </Text>
      </Body>
    </CardItem>
    <CardItem footer button onPress={() => alert("This is Card Footer")}>
      <Text>GeekyAnts</Text>
    </CardItem>
  </Card>
</Content>


          
        );
    }
}

export default CardComponent;