import React from 'react';
import {StyleSheet, Image, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PlayHold from '../Screens/PlayHold';
import Results from '../Screens/Results';


const PlayStackNavigator = createStackNavigator ({
  

  PlayHold: {
    screen: PlayHold,
    navigationOptions: {
      title: 'Hold The Button',
       headerTitleStyle : {
        fontFamily: 'Acme-Regular',
        fontSize: 30
      }
    },
  }

});

const ResultsStackNavigator = createStackNavigator ({
  

  PlayHold: {
    screen: Results,
    navigationOptions: {
      title: 'Hold The Button',
       headerTitleStyle : {
        fontFamily: 'Acme-Regular',
        fontSize: 30
      }
    },
  }

});




const HandleTheButtonTabNavigator = createBottomTabNavigator (
  {

    Play: {
      screen: PlayStackNavigator,
      // navigationOptions: {
      //   tabBarIcon: () => {
      //     return (
      //       <Image
      //         source={require ('../Images/touch-and-hold_white.png')}
      //         style={styles.icon}
      //       />
      //     );
      //   },
      // },
    },
    Results: {
      screen: ResultsStackNavigator,
      // navigationOptions: {
      //   tabBarIcon: () => {
      //     return (
      //       <Image
      //         source={require ('../Images/results_img.png')}
      //         style={styles.icon}
      //       />
      //     );
      //   },
      // },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#696969', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#2B2B2B', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    },
  }
);

const styles = StyleSheet.create ({
  icon: {
    width: 30,
    height: 30,
  },
  fontFamily: {
    fontFamily: 'OdibeeSans-Regular'
  }

});


export default createAppContainer (HandleTheButtonTabNavigator);

