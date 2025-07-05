"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  setCategory,
  setPricingModel,
  clearFilters,
} from "@/lib/redux/slices/filtersSlice";
import { RootState, AppDispatch } from "@/lib/redux/store";

const statuses = ["Active", "Beta", "Archived"];
const categories = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
];
const pricingModels = ["Free Tier", "Subscription", "Per-Use"];

export default function FilterPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);

  const toggleMulti = (
    current: string[],
    value: string,
    setter: (val: string[]) => { type: string; payload: unknown }
  ) => {
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    dispatch(setter(updated));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {/* Status */}
      <div>
        <div className="font-semibold mb-1">Status</div>
        {statuses.map((status) => (
          <label key={status} className="block">
            <input
              type="checkbox"
              checked={filters.status.includes(status)}
              onChange={() => toggleMulti(filters.status, status, setStatus)}
            />{" "}
            {status}
          </label>
        ))}
      </div>

      {/* Category */}
      <div>
        <div className="font-semibold mb-1">Category</div>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() =>
                toggleMulti(filters.category, cat, setCategory)
              }
            />{" "}
            {cat}
          </label>
        ))}
      </div>

      {/* Pricing */}
      <div>
        <div className="font-semibold mb-1">Pricing</div>
        <select
          value={filters.pricingModel}
          onChange={(e) => dispatch(setPricingModel(e.target.value))}
        >
          <option value="">All</option>
          {pricingModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters */}
      <div className="self-end">
        <button
          onClick={() => dispatch(clearFilters())}
          className="text-sm text-blue-600 underline"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
