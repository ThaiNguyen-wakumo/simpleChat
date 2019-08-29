import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginTab from "./LoginTab";
import SignupTab from "./SignupTab";
import AccountTab from "./AccountTab";
import UpdateTab from "./UpdateTab";
import FriendTab from "./FriendTab";
import ChatTab from "./ChatTab";
import JoinTab from "./JoinTab";
import firebase from "react-native-firebase";

const AppNavigator = createStackNavigator({
  Login: LoginTab,
  Signup: SignupTab,
  Account: AccountTab,
  Update: UpdateTab,
  Friend: FriendTab,
  Chat: ChatTab,
  Join: JoinTab
});

const MainNavigator = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentWillMount() {
    let config = {
      clientId:
        "377234939500-bea9c5sovr8b5poqi471f2i1s22u3dhl.apps.googleusercontent.com",
      appId: "1:377234939500:ios:8212c3f2fc453646",
      apiKey: "AIzaSyDqlgP9SJSrR83fuehoL51oMd9YRPbJI-8",
      databaseURL: "https://realappwkm.firebaseio.com",
      storageBucket: "realappwkm.appspot.com",
      messagingSenderId: "377234939500",
      projectId: "realappwkm",
      persistance: true
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
