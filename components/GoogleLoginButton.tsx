"use client";

import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/redux/slices/userSlice";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface GoogleJwtPayload extends JwtPayload {
  name: string;
  email: string;
  picture: string;
}

export default function GoogleLoginButton() {
  const dispatch = useDispatch();

  const handleCredentialResponse = useCallback(
    (response: google.accounts.id.CredentialResponse) => {
      const decoded = jwtDecode<GoogleJwtPayload>(response.credential);
      dispatch(
        setUser({
          name: decoded.name,
          email: decoded.email,
          image: decoded.picture,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    const initializeGoogle = () => {
      if (window.google && window.google.accounts.id) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-btn")!,
          { theme: "outline", size: "large" }
        );
      }
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogle;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [handleCredentialResponse]);

  return <div id="google-signin-btn" />;
}
