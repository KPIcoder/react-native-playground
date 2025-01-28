import MealCard from "@/modules/Meal/components/MealCard";
import {ScrollView} from "react-native";
import {useMealsRepository} from "@/modules/Meal/hooks/useMealsRepository";


export default function MealList() {
    const {meals, deleteMeal, updateMeal} = useMealsRepository()
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