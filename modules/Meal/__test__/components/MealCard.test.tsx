import { render } from '@testing-library/react-native';
import MealCard from "@/modules/Meal/components/MealCard";
import {Meal} from "@/modules/Meal/interfaces/Meal";

const MEAL_STUB: Meal = {
    id: 1,
    name: 'Meal1',
    price: 100,
}

describe('<MealCard />', () => {
    it('Text renders correctly on MealCard', () => {
        const { getByText } = render(
            <MealCard meal={MEAL_STUB} handleDelete={() => {}} handleUpdate={() => {}} />
        );

        getByText('Meal1');
        getByText('100');
    });
});
