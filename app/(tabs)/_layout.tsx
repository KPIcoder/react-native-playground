import {Tabs} from "expo-router";
import {Platform} from "react-native";
import React from "react";
import {IconSymbol} from "@/components/ui-kit/IconSymbol";
import MealsDataProvider from "@/modules/Meal/contexts/MealsDataContext";
import {mealsHttp} from "@/modules/Meal/repository/MealsHttp";

export default function TabLayout() {

    return (
        <MealsDataProvider mealRepository={mealsHttp}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: Platform.select({
                        ios: {
                            position: 'absolute',
                        },
                        default: {},
                    }),
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        title: 'Explore',
                        tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,
                    }}
                />
            </Tabs>
        </MealsDataProvider>
    );
}
