import React, {Component} from "react";

import {
    Text,
    View
} from "react-native";

import StyleMain from "../../assets/style/Main";
import ImageSlider from 'react-native-image-slider';

export default class Home extends Component<{}> {
    render() {
        return (
            <View style={StyleMain.container}>
                <ImageSlider images={[
                    'https://placeimg.com/640/640/nature',
                    'https://placeimg.com/640/640/people',
                    'https://placeimg.com/640/640/animals',
                    'https://placeimg.com/640/640/beer'
                ]}/>

                <View>

                </View>
            </View>
        );
    }
}