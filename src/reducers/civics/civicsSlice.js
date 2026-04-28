import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

// Thunks

export const fetchCivics = createAsyncThunk(
    'civics/fetchCivics',
    async () => {
        const response = await fetch("http://localhost:5030/civics");
        return response.json();
    },
);

export const addCivic = createAsyncThunk(
    "civics/addCivic",
    async (civic) => {
        await fetch("http://localhost:5030/civics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(civic),
        });

        return civic;
    }
);

export const updateCivic = createAsyncThunk(
    "civics/updateCivic",
    async (updatedCivic) => {
        await fetch(`http://localhost:5030/civics/${updatedCivic._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCivic),
            });
        return updatedCivic;
    }
);

export const deleteCivic = createAsyncThunk("civics/deleteCivic", async (id) => {
    await fetch(`http://localhost:5030/civics/${id}`, { method: "delete" });
    return id;
});


// slice

const civicsSlice = createSlice({
    name: "civics",
    initialState,
    reducers: {
        setCivicView: (state, action) => {
            state.view = action.payload;
        },
        setCivicSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setCivicDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCivics.pending, (state) => {
                state.fetchingCivics = true;
            })
            .addCase(fetchCivics.fulfilled, (state, action) => {
                state.fetchingCivics = false;
                state.items = action.payload;
                state.selected = action.payload[0];
            })
            .addCase(addCivic.fulfilled, (state, action) => {
                state.items = state.items.push(action.payload);
                state.selected = state.items[0];
                state.view = "index";

            })
            .addCase(updateCivic.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map(item => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteCivic.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (i) => i._id !== action.payload
                );
                state.selected = state.items[0];
                state.view = "index";
            })
    }
})

export const { setCivicView, setCivicSelected, setCivicDefault } = civicsSlice.actions;

export default civicsSlice.reducer;
