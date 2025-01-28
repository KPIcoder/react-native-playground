import {z} from "zod";

export const AddMealSchema = z.object({
    name: z.string().min(2).max(100),
    price: z.number().finite().gte(0)
})
