import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchActivities = createAsyncThunk("activities/fetchActivities", async (leadId) => {
  const response = await API.get(`/activities/${leadId}`);
  return response.data;
});

export const createActivity = createAsyncThunk("activities/createActivity", async ({ leadId, activity }) => {
  const response = await API.post("/activities", { leadId, ...activity });
  return response.data;
});

const activitySlice = createSlice({
  name: "activities",
  initialState: { activities: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => { state.loading = true; })
      .addCase(fetchActivities.fulfilled, (state, action) => { state.loading = false; state.activities = action.payload; })
      .addCase(createActivity.fulfilled, (state, action) => { state.activities.push(action.payload); });
  },
});

export default activitySlice.reducer;
