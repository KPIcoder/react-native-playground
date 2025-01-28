import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {Meal} from "@/modules/Meal/interfaces/Meal";
import {validateAddMeal} from "@/modules/Meal/validators/addMealValidator";

interface Props {
    handleAdd: (meal: Meal) => void;
}

const INITIAL_STATE: Meal = {id: -1, name: "", price: 0, isAvailable: false};

export default function AddMealForm({handleAdd}: Props) {
    const [meal, setMeal] = useState<Meal>(INITIAL_STATE);

    const handleChangeName = (value: string) =>
        setMeal((prev) => ({...prev, name: value}));

    const handleChangePrice = (value: string) =>
        setMeal((prev) => ({...prev, price: Number(value)}));

    const handleSubmit = () => {
        const {error} = validateAddMeal(meal);

        if (error) {
            // TODO: provide a nice toast
            alert("Please enter a valid name and price.");
            return;
        }
        handleAdd(meal);
        setMeal(INITIAL_STATE);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add a new Meal</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={meal.name}
                onChangeText={handleChangeName}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                value={meal.price ? meal.price.toString() : ""}
                onChangeText={handleChangePrice}
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add Meal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "stretch",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: "#4CAF50",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});
