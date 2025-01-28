import {MealsRepository} from "@/modules/Meal/interfaces/MealsRepository";
import { Meal } from "../interfaces/Meal";
import {wrapWithTimer} from "@/helpers/async/wrapWithTimer";



export class MealsFake implements MealsRepository {
    meals: Meal[];

    constructor(stub: Meal[]) {
        this.meals = stub;
    }

    getMeals(): Promise<Meal[]> {
        return wrapWithTimer(this.meals)
    }
    addMeal(meal: Meal): Promise<Meal> {
        this.meals.push(meal);
        return wrapWithTimer(meal)
    }
    updateMeal(meal: Meal): Promise<Meal> {
        const oldMealIndex = this.meals.findIndex(m => m.id === meal.id);
        this.meals[oldMealIndex] = meal;

        return wrapWithTimer(meal)
    }
    deleteMeal(meal: Meal): Promise<void> {
        this.meals = this.meals.filter(m => m.id !== meal.id);
        return wrapWithTimer(void 0)
    }

}