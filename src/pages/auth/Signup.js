import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import StyleAuth from "../../assets/style/Auth";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { Actions } from "react-native-router-flux";

export default class Signup extends Component<{}> {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={StyleAuth.container}>
        <Logo />
        <View style={StyleAuth.signupTextCont}>
          <Text style={StyleAuth.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={StyleAuth.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}