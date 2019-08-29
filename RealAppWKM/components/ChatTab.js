import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Firebase from "react-native-firebase";
import { ChatLineHolder } from "./ChatLineHolder";

export default class ChatTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: [],
      chatInputContent: "",
      username: ""
    };
  }
  static navigationOptions = {
    title: "Chat Room"
  };
  async componentDidMount() {
    let username = await AsyncStorage.getItem("name");
    this.setState({ username });
    Firebase.database()
      .ref("/chatTab")
      .on("value", snapshot => {
        if (snapshot.val() !== undefined && snapshot.val() !== null) {
          this.setState({
            chatData: Object.values(snapshot.val())
          });
        }
      });
  }

  _sendMessage = () => {
    Firebase.database()
      .ref("/chatTab")
      .push({
        userName: this.state.username,
        chatContent: this.state.chatInputContent
      });
    this.setState({
      chatInputContent: ""
    });
  };
  _onChangeChatInput = text => {
    this.setState({
      chatInputContent: text
    });
  };
  _renderChatLine = item => {
    if (item.userName === this.state.username) {
      return (
        <View style={{ alignItems: "flex-end" }}>
          <ChatLineHolder sender="YOU" chatContent={item.chatContent} />
        </View>
      );
    }
    return (
      <ChatLineHolder sender={item.userName} chatContent={item.chatContent} />
    );
  };

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
      >
        <ImageBackground
          imageStyle={{ opacity: 0.4 }}
          source={require("../Image/bg.jpeg")}
          style={{
            flex: 9 / 10,
            backgroundColor: "#A5A5A5",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <FlatList
            data={this.state.chatData}
            renderItem={({ item }, index) => this._renderChatLine(item)}
          />
        </ImageBackground>
        <View style={{ flex: 1 / 10 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              width: "100%",
              height: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: 2
            }}
          >
            <View style={{ flex: 8 / 10 }}>
              <TextInput
                placeholder="Enter content here"
                value={this.state.chatInputContent}
                onChangeText={text => this._onChangeChatInput(text)}
                style={{ height: 100, fontSize: 18 }}
              />
            </View>
            <View style={{ flex: 2 / 10 }}>
              <TouchableOpacity onPress={() => this._sendMessage()}>
                <Text
                  style={{ color: "#0099ff", fontSize: 14, marginRight: 15 }}
                >
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
