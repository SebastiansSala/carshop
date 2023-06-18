"use client";

import { ReactNode, createContext, useState } from "react";

type UserType = {
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
    email: null,
    username: null,
  });

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}