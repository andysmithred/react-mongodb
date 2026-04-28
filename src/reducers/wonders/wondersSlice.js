import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

export const fetchWonders = createAsyncThunk(
    "wonders/fetchWonders",
    async () => {
        const response = await fetch("http://localhost:5030/wonders");
        return response.json();
    }
);

export const addWonder = createAsyncThunk(
    "wonders/addWonder",
    async (wonder) => {
        await fetch("http://localhost:5030/wonders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wonder)
        });

        return wonder;
    }
);

export const updateWonder = createAsyncThunk(
    "wonders/updateWonder",
    async (updatedWonder) => {
        await fetch(`http://localhost:5030/wonders/${updatedWonder._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedWonder)
        });

        return updatedWonder;
    }
);

export const deleteWonder = createAsyncThunk(
    "wonders/deleteWonder",
    async (id) => {
        await fetch(`http://localhost:5030/wonders/${id}`, { method: "DELETE" });
        return id;
    }
);

const wondersSlice = createSlice({
    name: "wonders",
    initialState,
    reducers: {
        setWondersView: (state, action) => {
            state.view = action.payload;
        },
        setWonderSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setWonderDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWonders.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchWonders.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
                state.selected = action.payload[0] ?? null;
            })
            .addCase(addWonder.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateWonder.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map((item) => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteWonder.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item._id !== action.payload);
                state.selected = state.items[0] ?? null;
                state.view = state.selected ? "details" : "index";
            });
    }
});

export const { setWondersView, setWonderSelected, setWonderDefault } = wondersSlice.actions;

export default wondersSlice.reducer;
