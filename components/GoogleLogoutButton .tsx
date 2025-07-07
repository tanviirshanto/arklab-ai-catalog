"use client";

import { useDispatch } from "react-redux";
import { clearUser } from "@/lib/redux/slices/userSlice";
import { Button } from "@/components/ui/button";

export default function GoogleLogoutButton() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearUser());
    // Optionally, revoke token using GIS API:
    if (window.google && window.google.accounts.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  return <Button onClick={logout}>Logout</Button>;
}
