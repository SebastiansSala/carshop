"use client";

import { ReactNode, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type UserType = {
  _id: string | null;
  email: string | null;
  username: string | null;
};

type AuthContextType = {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType) => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => [],
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserType | null>({
    _id: null,
    email: null,
    username: null,
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const { email, username, _id } = JSON.parse(token);
        setCurrentUser({ email, username, _id });
      } catch (error) {
        console.error("Failed to parse token", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
