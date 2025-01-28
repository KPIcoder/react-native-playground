import {Meal} from "@/modules/Meal/interfaces/Meal";
import {View, Text, TextInput, Button} from "react-native";
import {useState} from "react";

interface Props {
    handleAdd: (meal: Meal) => void
}

export default function AddMealForm({handleAdd}: Props) {

    const [meal, setMeal] = useState<Meal>({id: -1, name: '', price: 0});

    const handleChangeName = (value: string) => setMeal((prev) => ({...prev, name: value}));

    const handleChangePrice = (value: string) => setMeal((prev) => ({...prev, price: Number(value)}));

    return (
        <View style={styles.container}>
            <Text>Add a new Meal</Text>
            <TextInput placeholder='Name' value={meal.name} onChangeText={handleChangeName}/>
            <TextInput placeholder='Price' keyboardType='numeric' value={meal.price.toString()}
                       onChangeText={handleChangePrice}/>
            <Button title={'Add Meal'} onPress={() => handleAdd(meal)}/>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
    }
}