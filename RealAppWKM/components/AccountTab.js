import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "react-native-firebase";

export default class AccountTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUserName: "",
      newUserAge: "",
      newUserGender: "",
      newUserEmail: "",
      newUserPassword: "",
      loading: false,
      user: null,
      typedEmail: "",
      typedPassword: ""
    };
  }

  // componentDidMount() {
  //   console.log("+++", firebase.auth().currentUser.userAge);
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerUp}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Account")}
          >
            <Text style={styles.titleUp}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMid}>
          <TouchableOpacity
            style={styles.border}
            onPress={() => this.props.navigation.navigate("Friend")}
          >
            <Text style={styles.titleMid}>Friend List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text style={styles.titleMid}>Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerDown}>
          <Text style={styles.inputsText}>Your Name</Text>
          <TextInput
            style={styles.inputs}
            keyboardType="default"
            autoCapitalize="none"
          ></TextInput>
          <Text style={styles.inputsText}>Your Gender</Text>
          <TextInput
            style={styles.inputs}
            keyboardType="default"
            autoCapitalize="none"
          ></TextInput>
          <Text style={styles.inputsText}>Your Age</Text>
          <TextInput
            style={styles.inputs}
            keyboardType="default"
            autoCapitalize="none"
          ></TextInput>
          <Text style={styles.inputsText}>Your Email</Text>
          <TextInput
            style={styles.inputs}
            keyboardType="default"
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.containerBot}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnUpdate}
              onPress={() => this.props.navigation.navigate("Update")}
            >
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnSignout}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.btnText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  containerUp: {
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  titleUp: {
    backgroundColor: "#3897f1",
    width: 320,
    height: 35,
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  titleMid: {
    backgroundColor: "#3897f1",
    width: 160,
    textAlign: "center",
    height: 35,
    color: "white",
    fontSize: 18
  },
  containerMid: {
    flexDirection: "row",
    justifyContent: "center"
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: "gray"
  },
  containerDown: {
    marginTop: 20,
    alignItems: "center"
  },
  inputsText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  inputs: {
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    height: 35,
    marginTop: 10,
    marginBottom: 10
  },
  containerBot: {
    flexDirection: "row",
    marginTop: 10
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
