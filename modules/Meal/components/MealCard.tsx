import {Meal} from "@/modules/Meal/interfaces/Meal";
import {Text, View} from "react-native";

interface Props {
    meal: Meal;
    handleUpdate: (meal: Meal) => void;
    handleDelete: (meal: Meal) => void;
}

export default function MealCard({meal, handleDelete, handleUpdate}: Props) {

    const {name, price} = meal

    return (
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    )
}