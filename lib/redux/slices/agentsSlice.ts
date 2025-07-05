import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agent } from "@/lib/types";

interface AgentsState {
  allAgents: Agent[];
}

const initialState: AgentsState = {
  allAgents: [],
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.allAgents = action.payload;
    },
  },
});

export const { setAgents } = agentsSlice.actions;
export default agentsSlice.reducer;
