import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  YellowBox,
  ActivityIndicator,
  ToastAndroid,
  Button,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import FirestoreConfig from '../Constants/FirestoreConfig';

import {dbFirestore, firebaseStorage} from '../Firebase';

import {getAllScores} from './../Stores/actions';
import {connect, RootStateOrAny} from 'react-redux';
import CustomProps from '../Interfaces/CustomProps';
import States from '../Interfaces/States';
import RNFetchBlob from 'rn-fetch-blob';
import NetInfo from '@react-native-community/netinfo';
import strings from './../Translation/translation';
import SplashScreen from 'react-native-splash-screen';

require('firebase/auth');

class PlayHold extends React.Component<CustomProps, States> {

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.main_container}>
       <Text>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
  },
  center_container: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chronoText: {
    color: 'white',
    fontFamily: 'Acme-Regular',
    fontSize: 28,
    // textAlign: "center"
  },
  view_chrono: {
    width: 200,
    marginLeft: 40,
  },
  chronoImage: {
    width: 500,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  button_modal: {
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state: RootStateOrAny) => {

  return {
    results: state.results.results.results,
    bestPlayerScore: state.bestPlayerScore.bestPlayerScore.bestPlayerScore,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: (dispatch: any) => Promise<any>) => any,
) => ({
  allScores: () => dispatch(getAllScores()),
  dispatch,
});

export default connect<CustomProps>(
  mapStateToProps,
  mapDispatchToProps,
)(PlayHold);
