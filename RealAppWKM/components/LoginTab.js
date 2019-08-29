import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "react-native-firebase";

export default class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.unsubcriber = null;
    this.state = {
      typedEmail: "",
      typedPassword: "",
      user: null,
      users: [],
      newUserName: "",
      newUserAge: "",
      newUserGender: "",
      newUserEmail: "",
      newUserPassword: "",
      loading: false
    };
  }

  onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword
      )
      .then(loggedInUser => {
        console.log(`Login successfully`);
        alert("Login successfully");
      })
      .then(() => {
        this.props.navigation.navigate("Join");
      })
      .catch(error => {
        alert("Register fail");
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerUp}>
          <Text style={styles.title}>Login with Firebase</Text>
        </View>
        <View style={styles.containerMid}>
          <TextInput
            style={styles.inputs}
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                typedEmail: text
              });
            }}
            value={this.state.typedEmail}
          ></TextInput>
          <TextInput
            style={styles.inputs}
            keyboardType="default"
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                typedPassword: text
              });
            }}
            value={this.state.typedPassword}
          ></TextInput>
        </View>
        <View style={styles.containerDown}>
          <View style={styles.btn}>
            <Button
              style={styles.btnLogin}
              onPress={this.onLogin}
              title="Login"
            ></Button>
          </View>
          <View style={styles.btn}>
            <Button
              style={styles.btnSignup}
              onPress={() => this.props.navigation.navigate("Signup")}
              title="Sign up"
            ></Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerUp: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 20,
    textAlign: "center"
  },
  containerMid: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: -100
  },
  inputs: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 10
  },
  containerDown: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -100
  },
  btnText: {
    fontSize: 15,
    backgroundColor: "#3897f1",
    height: 20,
    width: 70,
    marginRight: 40,
    marginLeft: 40,
    textAlign: "center",
    color: "white"
  }
});
