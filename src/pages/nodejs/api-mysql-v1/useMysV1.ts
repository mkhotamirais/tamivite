import { create } from "zustand";
import axios from "axios";

export interface MysV1UsersValues {
  id: number;
  name: string;
  email: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface MysV1UsersState {
  users: MysV1UsersValues[];
  errorPage: string;
  loadPage: boolean;
  setUsers: () => void;
}

export const useMysV1Users = create<MysV1UsersState>((set) => ({
  users: [],
  errorPage: "",
  loadPage: false,
  setUsers: async () => {
    try {
      set({ loadPage: true });
      const response = await axios.get("http://localhost:5000/api-mysql-v1/users");
      set({ users: response.data });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        set({ errorPage: error.message });
      }
      set({ errorPage: "Aplikasi ini hanya berjalan di local" });
    } finally {
      set({ loadPage: false });
    }
  },
}));
