import {Meal} from "@/modules/Meal/interfaces/Meal";

export interface MealsRepository {
    meals: Meal[];

    getMeals(): Promise<Meal[]>;

    addMeal(meal: Meal): Promise<Meal>;

    updateMeal(meal: Meal): Promise<Meal>;

    deleteMeal(meal: Meal): Promise<void>;
}