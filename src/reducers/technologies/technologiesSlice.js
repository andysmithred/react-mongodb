import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

export const fetchTechnologies = createAsyncThunk(
    "technologies/fetchTechnologies",
    async () => {
        const response = await fetch("http://localhost:5030/technologies");
        return response.json();
    }
);

export const addTechnology = createAsyncThunk(
    "technologies/addTechnology",
    async (technology) => {

        console.log("Adding technology:", technology);

        await fetch("http://localhost:5030/technologies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(technology)
        });

        return technology;
    }
);

export const updateTechnology = createAsyncThunk(
    "technologies/updateTechnology",
    async (updatedTechnology) => {
        await fetch(`http://localhost:5030/technologies/${updatedTechnology._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTechnology)
        });

        return updatedTechnology;
    }
);

export const deleteTechnology = createAsyncThunk(
    "technologies/deleteTechnology",
    async (id) => {
        await fetch(`http://localhost:5030/technologies/${id}`, { method: "DELETE" });
        return id;
    }
);

const technologiesSlice = createSlice({
    name: "technologies",
    initialState,
    reducers: {
        setTechnologiesView: (state, action) => {
            state.view = action.payload;
        },
        setTechnologySelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setTechnologyDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTechnologies.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchTechnologies.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
                state.selected = action.payload[0] ?? null;
            })
            .addCase(addTechnology.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateTechnology.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map((item) => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteTechnology.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item._id !== action.payload);
                state.selected = state.items[0] ?? null;
                state.view = state.selected ? "details" : "index";
            });
    }
});

export const { setTechnologiesView, setTechnologySelected, setTechnologyDefault } = technologiesSlice.actions;

export default technologiesSlice.reducer;