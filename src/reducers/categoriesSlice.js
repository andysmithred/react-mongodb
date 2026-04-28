import { createSlice } from "@reduxjs/toolkit"
import { getIconPath } from "../utils/ImageDetails"

export const categoriesList = [
    {
        name: "Home",
        icon: getIconPath("home")
    },
    {
        name: "Leaders",
        icon: getIconPath("leaders")
    },
    {
        name: "Civilizations",
        icon: getIconPath("civilizations")
    },
     {
        name: "Civics",
        icon: getIconPath("civics")
    },
    {
        name: "Technologies",
        icon: getIconPath("technologies")
    },
    {
        name: "Units",
        icon: getIconPath("units")
    },
    {
        name: "Buildings",
        icon: getIconPath("buildings")
    },
    {
        name: "Wonders",
        icon: getIconPath("wonders")
    }
]

const initialState = {
    items: [],
    selected: null
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.items = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selected = action.payload;
        }
    }
})

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
