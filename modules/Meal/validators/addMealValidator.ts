import {Meal} from "@/modules/Meal/interfaces/Meal";
import {AddMealSchema} from "@/modules/Meal/validators/schemas/AddProductSchema";

export const validateAddMeal = (entity?: Meal) => AddMealSchema.safeParse(entity);