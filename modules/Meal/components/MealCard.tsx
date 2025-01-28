import React from "react";
import { Meal } from "@/modules/Meal/interfaces/Meal";
import Card from "@/ui-kit/Card";
import Label from "@/ui-kit/Label";

interface Props {
    meal: Meal;
    handleUpdate: (meal: Meal) => void;
    handleDelete: (meal: Meal) => void;
}

export default function MealCard({ meal, handleUpdate, handleDelete }: Props) {
    const { name, price, isAvailable } = meal;
    
    return (
        <Card
            title={name}
            subtitle={`$${price.toFixed(2)}`}
            actions={[
                {
                    label: "Update",
                    onPress: () => handleUpdate({...meal, isAvailable: !meal.isAvailable}),
                    style: { backgroundColor: "#4CAF50" },
                },
                {
                    label: "Delete",
                    onPress: () => handleDelete(meal),
                    style: { backgroundColor: "#F44336" },
                },
            ]}
        >
            <Label text={isAvailable ? 'Available' : 'Not Available'} status={isAvailable ? 'success': 'error'} />
        </Card>
    );
}
