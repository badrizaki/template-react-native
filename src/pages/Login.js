import React, {Component} from "react";

import {
    StyleSheet,
    Text,
    Alert,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput
} from "react-native";

import Main from "../assets/style/Main";
import Logo from "../components/Logo";
import {Actions} from "react-native-router-flux";

export default class Login extends Component<{}> {
    signup() {
        Actions.signup();
    }

    handlePress = async () => {
        fetch("http://192.168.1.3:8082/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usernameOrEmail: "admin",
                password: "admin"
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                // console.error("error");
                Alert.alert("Author name at 0th index:  " + responseJson.accessToken);
            })
            .catch(error => {
                //Alert.alert(error);
                console.error(error);
            });
    }

    render() {
        return (
            <View style={Main.container}>
                <Logo/>

                <View style={Main.container}>
                    <TextInput
                        style={Main.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={() => this.password.focus()}
                    />

                    <TextInput
                        style={Main.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                        ref={input => (this.password = input)}
                    />

                    <TouchableOpacity
                        style={Main.button}
                        onPress={this.handlePress.bind(this)}
                    >
                        <Text style={Main.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={Main.signupTextCont}>
                    <Text style={Main.signupText}>Dont have an account yet?</Text>

                    <TouchableOpacity onPress={this.signup}>
                        <Text style={Main.signupButton}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}