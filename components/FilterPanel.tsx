"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  setCategory,
  setPricingModel,
  clearFilters,
} from "@/lib/redux/slices/filtersSlice";
import { RootState, AppDispatch } from "@/lib/redux/store";

import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="relative flex flex-wrap md:flex-nowrap gap-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mb-6">
      {/* Status */}
      <div className="min-w-[180px] w-full md:w-auto">
        <Label className="mb-3 text-lg font-semibold block text-gray-900 dark:text-gray-100">
          Status
        </Label>
        <div className="flex flex-col gap-2 max-h-52 overflow-y-auto pr-2">
          <AnimatePresence>
            {statuses.map((status) => (
              <motion.label
                key={status}
                htmlFor={`status-${status}`}
                className="flex items-center cursor-pointer select-none text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Checkbox
                  id={`status-${status}`}
                  checked={filters.status.includes(status)}
                  onCheckedChange={() =>
                    toggleMulti(filters.status, status, setStatus)
                  }
                  className="mr-3"
                />
                {status}
              </motion.label>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Category */}
      <div className="min-w-[200px] max-h-52 overflow-y-auto pr-2 w-full md:w-auto">
        <Label className="mb-3 text-lg font-semibold block text-gray-900 dark:text-gray-100">
          Category
        </Label>
        <div className="flex flex-col gap-2">
          <AnimatePresence>
            {categories.map((cat) => (
              <motion.label
                key={cat}
                htmlFor={`cat-${cat}`}
                className="flex items-center cursor-pointer select-none text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Checkbox
                  id={`cat-${cat}`}
                  checked={filters.category.includes(cat)}
                  onCheckedChange={() =>
                    toggleMulti(filters.category, cat, setCategory)
                  }
                  className="mr-3"
                />
                {cat}
              </motion.label>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Pricing */}
      <div className="min-w-[180px] w-full md:w-auto">
        <Label
          htmlFor="pricing-model"
          className="mb-3 text-lg font-semibold block text-gray-900 dark:text-gray-100"
        >
          Pricing
        </Label>
        <Select
          value={filters.pricingModel}
          onValueChange={(val) => dispatch(setPricingModel(val))}
          aria-label="Pricing Model Filter"
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {pricingModels.map((model) => (
              <SelectItem key={model} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <div className="w-full mt-4 md:mt-0 md:absolute md:bottom-4 md:right-6 flex justify-start md:justify-end">
        <Button
          variant="link"
          onClick={() => dispatch(clearFilters())}
          className="text-blue-600 dark:text-blue-400 underline p-0"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}
