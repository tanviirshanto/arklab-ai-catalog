import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  status: string[];
  category: string[];
  pricingModel: string;
}

const initialState: FiltersState = {
  search: "",
  status: [],
  category: [],
  pricingModel: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStatus: (state, action: PayloadAction<string[]>) => {
      state.status = action.payload;
    },
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setPricingModel: (state, action: PayloadAction<string>) => {
        
      state.pricingModel = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const {
  setSearch,
  setStatus,
  setCategory,
  setPricingModel,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
