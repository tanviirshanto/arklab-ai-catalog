"use client";

import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { setSearch } from "@/lib/redux/slices/filtersSlice";
import { AppDispatch } from "@/lib/redux/store";

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Input
      placeholder="Search by name or description..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
      className="w-full max-w-md mb-4"
    />
  );
}
