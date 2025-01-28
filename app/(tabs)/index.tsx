import {View} from "react-native";
import MealList from "@/modules/Meal/components/MealList";

export default function HomeScreen() {

    return (
        <View style={[styles.container]}>
            <MealList />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}