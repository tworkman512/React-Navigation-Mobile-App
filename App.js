import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen. Hey, it still works!!!</Text>
      </View>
    )
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen Test</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home"
  },
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World. This is working!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
