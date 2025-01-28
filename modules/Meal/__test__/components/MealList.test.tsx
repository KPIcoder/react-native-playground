import {Meal} from "@/modules/Meal/interfaces/Meal";
import MealList from "@/modules/Meal/components/MealList";
import {render, waitFor} from "@testing-library/react-native";
import MealsDataProvider from "@/modules/Meal/contexts/MealsDataContext";
import {MealsFake} from "@/modules/Meal/repository/MealsFake";

const MEALS_STUB: Meal[] = [
    {id: 1, name: 'Meal1', price: 25},
    {id: 2, name: 'Meal2', price: 35}
]

describe('<MealList/>', () => {
    it('renders without crashing', async () => {
        const {getByText} = render(
            <MealsDataProvider mealRepository={new MealsFake(MEALS_STUB)}>
                <MealList/>
            </MealsDataProvider>
        )

        const getTexts = () => {
            getByText('Meal1')
            getByText('Meal2')
        }

       await waitFor(getTexts, {timeout: 1000});
    })
})