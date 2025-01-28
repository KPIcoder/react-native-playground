import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

interface Props {
    title: string;
    subtitle?: string;
    actions?: { label: string; onPress: () => void; style?: StyleProp<ViewStyle> }[];
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

export default function Card({ title, subtitle, actions, containerStyle, children }: Props) {
    return (
        <View style={[styles.container, containerStyle]}>
            <View>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {children}
            {actions && (
                <View style={styles.actions}>
                    {actions.map((action, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, action.style]}
                            onPress={action.onPress}
                        >
                            <Text style={styles.buttonText}>{action.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Equivalent to the shadow styles
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
    },
    actions: {
        flexDirection: "row",
    },
    button: {
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
