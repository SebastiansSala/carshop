"use client";

import { ReactNode, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

type UserType = {
  _id: string | null;
  email: string | null;
  username: string | null;
};

type AuthContextType = {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType) => void;
  logout: () => void;
  fetchCurrentUser: (token: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => [],
  logout: () => [],
  fetchCurrentUser: () => [],
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserType | null>({
    _id: null,
    email: null,
    username: null,
  });

  const fetchCurrentUser = async (token: string) => {
    try {
      const response = await axios.get('http://localhost:5000/users/user', {
        headers: { Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
        
      });
      const user = await response.data;
      setCurrentUser(user);
    } catch (error) {
      console.error("Failed to fetch current user", error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetchCurrentUser(token);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ fetchCurrentUser, logout, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
