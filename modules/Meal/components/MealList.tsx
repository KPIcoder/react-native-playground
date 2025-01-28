import MealCard from "@/modules/Meal/components/MealCard";
import {ScrollView} from "react-native";
import {useMealsRepository} from "@/modules/Meal/hooks/useMealsRepository";
import MealsFallback from "@/modules/Meal/components/MealsFallback";


export default function MealList() {
    const {meals, deleteMeal, updateMeal} = useMealsRepository()

    if(meals.length === 0) return <MealsFallback />

    return (
        <ScrollView style={{padding: 20}}>
            {meals.map((meal) => (
                <MealCard
                    key={meal.id}
                    meal={meal}
                    handleUpdate={updateMeal}
                    handleDelete={deleteMeal}
                />
            ))}
        </ScrollView>
    )
}