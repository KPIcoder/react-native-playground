import {View, Text} from "react-native";
import React from "react";

export default function ExploreScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={{color: '#000'}}>Hello Explore</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}