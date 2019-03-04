import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./assets/boba-fett.png')}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    // title: 'Home title',
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="info"
        color="#fff"
      />
    ),
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen. This is Screen 1.</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Details Title',
            })
          }}
        />
      </View>
    )
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: params ? params.otherParam : 'A Nested Details Screen',

      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }
  render() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')
    const otherParam = navigation.getParam('otherParam', 'a default value')

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <TouchableOpacity>
          <Button
          title="Go to Details... again"
          onPress={() => {
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back 1 screen in Stack"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
            title="Go back to top of Stack"
            onPress={() => this.props.navigation.popToTop()}
          />
          <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
          />
        </TouchableOpacity>
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
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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
