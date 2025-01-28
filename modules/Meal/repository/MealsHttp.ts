import {MealsRepository} from "@/modules/Meal/interfaces/MealsRepository";
import {Meal} from "@/modules/Meal/interfaces/Meal";
import {MAIN_API_BASE_URL} from "@/constants/external-links";
import {mapMealApiToModel} from "@/modules/Meal/mappers";

export class MealsHttp implements MealsRepository {
    meals: Meal[];

    constructor() {
        this.meals = []
    }

    async getMeals(): Promise<Meal[]> {
        const response = await fetch(`${MAIN_API_BASE_URL}/meals`)

        if(!response.ok) {
            // TODO: handle network errors
        }

        const meals = await response.json();
        this.meals = meals.map(mapMealApiToModel);

        return this.meals;
    }

    async addMeal(meal: Meal): Promise<Meal> {
        const response = await fetch(`${MAIN_API_BASE_URL}/meals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meal),
        })

        if(!response.ok) {
            // TODO: handle network errors
        }

        const newMeal = await response.json();
        const mealModel = mapMealApiToModel(newMeal);
        this.meals.push(mealModel);

        return mealModel;
    }
    async updateMeal(meal: Meal): Promise<Meal> {
        const response = await fetch(`${MAIN_API_BASE_URL}/meals/${meal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meal),
        })

        if(!response.ok) {
            // TODO: handle network errors
        }

        const newMeal = await response.json();
        const mealModel = mapMealApiToModel(newMeal);
        const oldMealIndex = this.meals.findIndex((m) => m.id === meal.id);

        this.meals[oldMealIndex] = mealModel

        return mealModel;
    }
    async deleteMeal(meal: Meal): Promise<void> {
        const response = await fetch(`${MAIN_API_BASE_URL}/meals/${meal.id}`, {
            method: "DELETE",
        })

        if(!response.ok) {
            // TODO: handle network errors
        }

        this.meals = this.meals.filter((m) => m.id !== meal.id);
        return;
    }
}

export const mealsHttp = new MealsHttp();