import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

// Thunks

export const fetchUnits = createAsyncThunk(
  'units/fetchUnits',
  async () => {
    const response = await fetch("http://localhost:5030/units");
    return response.json();
  },
);

export const addUnit = createAsyncThunk(
    "units/addUnit", 
    async (unit) => {
        await fetch("http://localhost:5030/units", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(unit),
        });

        return unit;
    }
);

export const updateUnit = createAsyncThunk(
    "units/updateUnit",
    async (updatedUnit) => {
        const response = await fetch(`http://localhost:5030/units/${updatedUnit._id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUnit),
        });
        return updatedUnit;
    }
);

export const deleteUnit = createAsyncThunk("units/deleteUnit", async (id) => {
    await fetch(`http://localhost:5030/units/${id}`, { method: "delete" });
    return id;
});


// slice

const unitsSlice = createSlice({
    name: "units",
    initialState,
    reducers: {
        filterUnits: (state, action) => {
            state.filter = action.payload;
        },
        setUnitsView: (state, action) => {
            state.view = action.payload;
        },
        setUnitSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setUnitDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUnits.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchUnits.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
            })
            .addCase(addUnit.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateUnit.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map((item) => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteUnit.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item._id !== action.payload);
                state.selected = state.items[0] ?? null;
                state.view = state.selected ? "details" : "index";
            })
    }
})

export const { filterUnits, setUnitsView, setUnitSelected, setUnitDefault } = unitsSlice.actions;

export default unitsSlice.reducer;
