import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import firebase from "react-native-firebase";

export default class JoinTab extends Component {
  static navigationOptions = {
    title: "Welcome to Chat Group"
  };
  state = {
    name: ""
  };

  _onChangeName = text => {
    this.setState({
      name: text
    });
  };
  _toChatRoom = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(user => {
        AsyncStorage.setItem("name", this.state.name);
        this.props.navigation.navigate("Chat");
      })
      .catch(err => alert(err));
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 10,
          paddingBottom: 15
        }}
      >
        <Text>ENTER YOUR ID :</Text>
        <TextInput
          placeholder=""
          style={{
            borderColor: "#A5A5A5",
            borderWidth: 0.5,
            padding: 8,
            width: "100%",
            marginBottom: 15,
            marginTop: 15
          }}
          onChangeText={text => this._onChangeName(text)}
        />
        <TouchableOpacity onPress={() => this._toChatRoom()}>
          <Text style={{ fontWeight: "bold" }}>Join Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
