import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  ScrollView
} from "react-native";

import CustomProps from "../Interfaces/CustomProps";
import States from "../Interfaces/States";
import { getAllScores } from "./../Stores/actions";

import { connect, RootStateOrAny } from "react-redux";

class Results extends React.Component<CustomProps, States> {


  render() {

    return (
      <View style={styles.main_container}>
          <Text>Hello world page 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  styleItem: {
    color: "white"
  },
  footer_score: {
    height: 100
  },
  list_style: {
    flex: 1
  }
});

const mapStateToProps = (state: RootStateOrAny) => {

  return {
    results: state.results.results.results,
    bestPlayerScore: state.bestPlayerScore.bestPlayerScore.bestPlayerScore
  };
};
const mapDispatchToProps = (dispatch: (arg0: (dispatch: any) => Promise<any>) => any) => ({
  allScores: () => dispatch(getAllScores()),
  dispatch
});

export default connect<CustomProps>(mapStateToProps, mapDispatchToProps)(Results);
