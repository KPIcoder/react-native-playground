import {MealsFake} from "@/modules/Meal/repository/MealsFake";
import {Meal} from "@/modules/Meal/interfaces/Meal";

const MEALS_STUB: Meal[] = [
    {id: 1, name: 'Meal1', price: 25, isAvailable: true },
    {id: 2, name: 'Meal2', price: 35, isAvailable: false },
]

describe('MealRepository', () => {

    it('Should be empty initially', () => {
        const mealRepository = new MealsFake([])

        expect(mealRepository.meals).toEqual([])
    })

    it('Should return an array of Meals', async  () => {
        const mealRepository = new MealsFake(MEALS_STUB)
        const meals = await mealRepository.getMeals()

        expect(meals).toStrictEqual(MEALS_STUB)
    })

    it('Should add a Meal', async  () => {
        const mealRepository = new MealsFake([])
        const meal: Meal = {id: 1, name: 'Meal1', price: 5, isAvailable: false}

        await mealRepository.addMeal(meal)

        expect(mealRepository.meals).toStrictEqual([meal])
    })

    it('Should update a Meal', async  () => {
        const mealRepository = new MealsFake(MEALS_STUB)
        const newMeal = {...mealRepository.meals[0], name: 'Meal3', price: 15}
        const meal = await mealRepository.updateMeal(newMeal)

        expect(mealRepository.meals[0]).toStrictEqual(meal)
    })

    it('Should remove a Meal', async  () => {
        const mealRepository = new MealsFake(MEALS_STUB)
        const mealToBeDeleted = mealRepository.meals[0];

        await mealRepository.deleteMeal(mealToBeDeleted);

        expect(mealRepository.meals[0]).not.toStrictEqual(mealToBeDeleted);
        expect(mealRepository.meals.length).toBe(MEALS_STUB.length - 1);
    })
})