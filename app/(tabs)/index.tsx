import {View} from "react-native";
import React from "react";
import MealList from "@/modules/Meal/components/MealList";
import {useMealsRepository} from "@/modules/Meal/hooks/useMealsRepository";


export default function HomeScreen() {

    const {meals} = useMealsRepository()

    return (
        <View style={[styles.container]}>
            <MealList meals={meals} />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}