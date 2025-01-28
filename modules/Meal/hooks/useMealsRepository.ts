import {useContext} from "react";
import {MealsDataContext} from "@/modules/Meal/contexts/MealsDataContext";

export const useMealsRepository = () => useContext(MealsDataContext)!