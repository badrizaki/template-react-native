import React, {Component} from "react";

import {
    Text,
    View,
    ScrollView
} from "react-native";

import StyleMain from "../../assets/style/Main";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Logo from "../../components/Logo";

export default class Home extends Component<{}> {
    render() {
        return (
            <View style={StyleMain.container}>
                <ScrollView pagingEnabled={true} horizontal={true}>
                    <View style={{ backgroundColor:'pink', width: wp('90%'), marginStart: wp('5%') }}>
                        <Text>Child a</Text>
                    </View>
                    <View style={{ backgroundColor:'green', width: wp('90%'), marginStart: wp('5%') }}>
                        <Text>Child b</Text>
                    </View>
                    <View style={{ backgroundColor:'pink', width: wp('90%'), marginStart: wp('5%') }}>
                        <Text>Child c</Text>
                    </View>
                </ScrollView>

                <View>

                </View>
            </View>
        );
    }
}