import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchLeads = createAsyncThunk("leads/fetchLeads", async () => {
  const response = await API.get("/leads");
  return response.data;
});

export const createLead = createAsyncThunk("leads/createLead", async (leadData) => {
  const response = await API.post("/leads", leadData);
  return response.data;
});

const leadSlice = createSlice({
  name: "leads",
  initialState: {
    leads: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => { state.loading = true; })
      .addCase(fetchLeads.fulfilled, (state, action) => { state.loading = false; state.leads = action.payload; })
      .addCase(createLead.fulfilled, (state, action) => { state.leads.push(action.payload); });
  },
});

export default leadSlice.reducer;
