import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

// Thunks

export const fetchCivilizations = createAsyncThunk(
    'civilizations/fetchCivilizations',
    async () => {
        const response = await fetch("http://localhost:5030/civilizations");
        return response.json();
    },
);

export const addCivilization = createAsyncThunk(
    "civilizations/addCivilization",
    async (civ) => {
        const response = await fetch("http://localhost:5030/civilizations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(civ),
        });

        return response.json();
    }
);

export const updateCivilization = createAsyncThunk(
    "civilizations/updateCivilization",
    async (updatedCiv) => {
        await fetch(`http://localhost:5030/civilizations/${updatedCiv._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCiv),
            });
        return updatedCiv;
    }
);

export const deleteCivilization = createAsyncThunk("civilizations/deleteCivilization", async (id) => {
    await fetch(`http://localhost:5030/civilizations/${id}`, { method: "delete" });
    return id;
});


// slice

const civilizationsSlice = createSlice({
    name: "civilizations",
    initialState,
    reducers: {
        setCivilizationsView: (state, action) => {
            state.view = action.payload;
        },
        setCivilizationSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setCivilizationDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCivilizations.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchCivilizations.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
            })
            .addCase(addCivilization.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateCivilization.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map(item => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteCivilization.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (i) => i._id !== action.payload
                );
                state.selected = null;
                state.view = "details";
            })
    }
})

export const { setCivilizationsView, setCivilizationSelected, setCivilizationDefault } = civilizationsSlice.actions;

export default civilizationsSlice.reducer;
