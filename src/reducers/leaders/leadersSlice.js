import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fetchingItems: false,
    selected: null,
    view: "index"
};

// Thunks

export const fetchLeaders = createAsyncThunk(
    'leaders/fetchLeaders',
    async () => {
        const response = await fetch("http://localhost:5030/leaders");
        return response.json();
    },
);

export const addLeader = createAsyncThunk(
    "leaders/addLeader",
    async (leader) => {
        const response = await fetch("http://localhost:5030/leaders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leader),
        });

        return response.json();
    }
);

export const updateLeader = createAsyncThunk(
    "leaders/updateLeader",
    async (updatedLeader) => {
        await fetch(`http://localhost:5030/leaders/${updatedLeader._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedLeader),
            });
        return updatedLeader;
    }
);

export const deleteLeader = createAsyncThunk("leaders/deleteLeader", async (id) => {
    await fetch(`http://localhost:5030/leaders/${id}`, { method: "delete" });
    return id;
});


// slice

const leadersSlice = createSlice({
    name: "leaders",
    initialState,
    reducers: {
        setLeadersView: (state, action) => {
            state.view = action.payload;
        },
        setLeaderSelected: (state, action) => {
            state.selected = state.items.find((item) => item._id === action.payload);
        },
        setLeaderDefault: (state) => {
            state.selected = state.items[0] ?? null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeaders.pending, (state) => {
                state.fetchingItems = true;
            })
            .addCase(fetchLeaders.fulfilled, (state, action) => {
                state.fetchingItems = false;
                state.items = action.payload;
                state.selected = action.payload[0] ?? null;
            })
            .addCase(addLeader.fulfilled, (state, action) => {
                if (action.payload && action.payload._id) {
                    state.items.push(action.payload);
                    state.selected = action.payload;
                }
                state.view = "details";
            })
            .addCase(updateLeader.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.items = state.items.map((item) => item._id === action.payload._id ? action.payload : item);
                state.view = "details";
            })
            .addCase(deleteLeader.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item._id !== action.payload);
                state.selected = state.items[0] ?? null;
                state.view = state.selected ? "details" : "index";
            });
    }
})

export const { setLeadersView, setLeaderSelected, setLeaderDefault } = leadersSlice.actions;

export default leadersSlice.reducer;
