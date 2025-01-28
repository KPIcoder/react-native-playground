import {View} from "react-native";
import React from "react";
import AddMealForm from "@/modules/Meal/components/AddMealForm";
import {useMealsRepository} from "@/modules/Meal/hooks/useMealsRepository";


export default function ExploreScreen() {

    const {addMeal} = useMealsRepository()

    return (
        <View style={[styles.container]}>
            <AddMealForm handleAdd={addMeal} />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}