import React, {Component} from "react";

import {Router, Stack, Scene} from "react-native-router-flux";

/* AUTH */
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Home from "./pages/customer/Home";

export default class Routes extends Component<{}> {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} title="Home" initial={true}/>

                    {/* AUTH */}
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup} title="Register"/>
                </Stack>
            </Router>
        );
    }
}
