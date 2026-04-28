import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

export const fetchBuildings = createAsyncThunk(
    "buildings/fetchBuildings",
    async () => {
        const response = await fetch("http://localhost:5030/buildings");
        return response.json();
    }
);

export const addBuilding = createAsyncThunk(
    "buildings/addBuilding",
    async (building) => {

        console.log("Adding building:", building);

        await fetch("http://localhost:5030/buildings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(building)
        });

        return building;
    }
);

export const updateBuilding = createAsyncThunk(
    "buildings/updateBuilding",
    async (updatedBuilding) => {
        await fetch(`http://localhost:5030/buildings/${updatedBuilding._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBuilding)
        });

        return updatedBuilding;
    }
);

export const deleteBuilding = createAsyncThunk(
    "buildings/deleteBuilding",
    async (id) => {
        await fetch(`http://localhost:5030/buildings/${id}`, { method: "DELETE" });
        return id;
    }
);

const buildingsSlice = createSlice({
    name: "buildings",
    initialState,
    reducers: {
        setBuildingsView: (state, action) => {
            state.view = action.payload;
        },
        setBuildingSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setBuildingDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBuildings.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchBuildings.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
                state.selected = action.payload[0] ?? null;
            })
            .addCase(addBuilding.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateBuilding.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map((item) => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteBuilding.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item._id !== action.payload);
                state.selected = state.items[0] ?? null;
                state.view = state.selected ? "details" : "index";
            });
    }
});

export const { setBuildingsView, setBuildingSelected, setBuildingDefault } = buildingsSlice.actions;

export default buildingsSlice.reducer;
