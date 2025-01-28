import {createContext, ReactNode, useEffect, useState} from "react";

import {MealsRepository} from "@/modules/Meal/interfaces/MealsRepository";
import {Meal} from "@/modules/Meal/interfaces/Meal";

interface Props {
    mealRepository: MealsRepository;
    children: ReactNode;
}

export const MealsDataContext = createContext<MealsRepository | null>(null);


export default function MealsDataProvider({mealRepository, children}: Props) {

    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        getMeals()
    }, [])

    const getMeals = async () => {
        const meals = await mealRepository.getMeals();
        setMeals(meals);
        return meals;
    }

    const addMeal = async  (meal: Meal) => {
        const newMeal = await mealRepository.addMeal(meal);
        setMeals([...mealRepository.meals]);
        return newMeal;
    }

    const updateMeal = async  (meal: Meal) => {
        const newMeal = await mealRepository.updateMeal(meal);
        setMeals([...mealRepository.meals])
        return newMeal;
    }

    const deleteMeal = async  (meal: Meal) => {
        await mealRepository.deleteMeal(meal);
        setMeals([...mealRepository.meals])
    }


    return (
        <MealsDataContext.Provider value={{meals, getMeals, addMeal, updateMeal, deleteMeal}} children={children} />
    )
}

