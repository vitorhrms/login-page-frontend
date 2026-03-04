/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import type { AuthContextType, IChild } from "./types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: IChild) {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
