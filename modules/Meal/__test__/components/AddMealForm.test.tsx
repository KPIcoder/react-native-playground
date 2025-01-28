import {render} from "@testing-library/react-native";
import AddMealForm from "@/modules/Meal/components/AddMealForm";

describe('<AddMealForm/>', () => {
    it('renders without crashing', () => {
        const {getByText, getByPlaceholderText} = render(<AddMealForm handleAdd={() => {}} />)

        getByText('Add a new Meal')
        getByPlaceholderText('Name')
        getByPlaceholderText('Price')

    })
})