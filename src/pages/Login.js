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
            <View style={styles.container}>
                <Logo/>

                <View style={styles.container}>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={() => this.password.focus()}
                    />

                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                        ref={input => (this.password = input)}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handlePress.bind(this)}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Dont have an account yet?</Text>

                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        backgroundColor: "rgba(255, 255,255,0.2)",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10
    },

    button: {
        width: 300,
        backgroundColor: "#1c313a",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center"
    },

    container: {
        backgroundColor: "#455a64",
        flex: 1,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingVertical: 16,
        flexDirection: "row"
    },
    signupText: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 16
    },
    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "500"
    }
});
