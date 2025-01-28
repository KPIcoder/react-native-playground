import MealCard from "@/modules/Meal/components/MealCard";
import {View} from "react-native";
import {useMealsRepository} from "@/modules/Meal/hooks/useMealsRepository";


export default function MealList() {
    const {meals, deleteMeal, updateMeal} = useMealsRepository()
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {meals.map((meal, i) => (
                <MealCard
                    key={meal.id}
                    meal={meal}
                    handleUpdate={updateMeal}
                    handleDelete={deleteMeal}
                />
            ))}
        </View>
    )
}