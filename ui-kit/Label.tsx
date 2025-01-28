import React from "react";
import { Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface LabelProps {
    text: string;
    status: "success" | "error" | "default";
    style?: StyleProp<ViewStyle>;
}

export default function Label({ text, status, style }: LabelProps) {

    return (
        <View style={[styles.container, styles[status], style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
    },
    success: {
        backgroundColor: "#4CAF50", // Green
    },
    error: {
        backgroundColor: "#F44336", // Red
    },
    default: {
        backgroundColor: "#9E9E9E", // Gray
    },
});
