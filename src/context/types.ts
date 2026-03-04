export interface IChild {
  children: React.ReactNode;
}

export type AuthContextType = {
  email: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
};
