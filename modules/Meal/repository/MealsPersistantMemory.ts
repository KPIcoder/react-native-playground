import AsyncStorage from '@react-native-async-storage/async-storage';
import {MealsRepository} from "@/modules/Meal/interfaces/MealsRepository";
import {Meal} from "../interfaces/Meal";


class MealsPersistantMemory implements MealsRepository {
    private readonly KEY = 'meals';
    meals: Meal[];

    constructor() {
        this.meals = []
    }


    async getMeals(): Promise<Meal[]> {
        const meals = await AsyncStorage.getItem(this.KEY)

        this.meals = meals ? JSON.parse(meals) : [];
        return this.meals;
    }

    async addMeal(meal: Meal): Promise<Meal> {
        const newMeal = {...meal, id: this.meals.length, isAvailable: false};
        this.meals.push(newMeal);
        await AsyncStorage.setItem(this.KEY, JSON.stringify(this.meals));
        return meal;
    }

    async updateMeal(meal: Meal): Promise<Meal> {
        const index = this.meals.findIndex(m => m.id === meal.id);
        this.meals[index] = meal;
        await AsyncStorage.setItem(this.KEY, JSON.stringify(this.meals));
        return meal;
    }

    async deleteMeal(meal: Meal): Promise<void> {
        const index = this.meals.findIndex(m => m.id === meal.id);
        this.meals.splice(index, 1);
        await AsyncStorage.setItem(this.KEY, JSON.stringify(this.meals));
    }
}

export const mealsPersistantMemory = new MealsPersistantMemory();