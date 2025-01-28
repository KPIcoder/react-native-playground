import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import MealsDataProvider from "@/modules/Meal/contexts/MealsDataContext";
import {mealsHttp} from "@/modules/Meal/repository/MealsHttp";

export default function RootLayout() {
    return (
        <MealsDataProvider mealRepository={mealsHttp}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
            <StatusBar style="auto"/>
        </MealsDataProvider>
    )

}
