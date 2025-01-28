import {MealApiModel} from "@/modules/Meal/interfaces/MealApiModel";
import {Meal} from "@/modules/Meal/interfaces/Meal";

export const mapMealApiToModel = (meal: MealApiModel): Meal => ({
    id: meal.id,
    name: meal.name,
    price: meal.price,
    isAvailable: meal.isAvailable
})