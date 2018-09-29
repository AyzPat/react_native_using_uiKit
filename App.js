import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
// import { Button } from 'react-native-elements';
import CardComponent from './components/Card';
import Grid from 'react-native-grid-component';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.getData = this.getData.bind(this);

  }
  getData() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          users: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // if (this.state.users.length) {
  //   return (
  // this.state.users.map((u, i) => {
  returnData(data,i) {
    console.log(data);
    return (
      <CardComponent title="CARD WITH DIVIDER" key={i} style={styles.user} user_title={data.title}>
        {/* <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                /> */}
      </CardComponent>

    );
    console.log(this.state.users);

  }
  render() {
    return (
      <ScrollView>
        {this.getData()}
        <Grid
          style={styles.list}
          renderItem={this.returnData}
          //  renderPlaceholder={this._renderPlaceholder}
          data={this.state.users}
          itemsPerRow={2}
        />

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    width: '100px',
    margin: 0,
    padding: 0
  }
});
