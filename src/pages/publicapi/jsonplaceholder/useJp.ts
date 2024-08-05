import { create } from "zustand";
import axios from "axios";

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface SingleUser extends User {
  name: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const jpUrl = `https://jsonplaceholder.typicode.com`;
export type View = "card" | "table";

let userView: View;
const storageUserView = localStorage.getItem("jpUser-view");
if (storageUserView) {
  userView = JSON.parse(storageUserView);
} else userView = "table";

export interface JpState {
  userView: View;
  setUserView: (userView: View) => void;
  users: User[] | null;
  singleUser: SingleUser | null;
  loadUserPage: boolean;
  errUserPage: boolean;
  loadUserPost: boolean;
  getUsers: () => void;
  getUserById: (id: string) => void;
  posts: Post[] | null;
  singlePost: Post | null;
  loadPostPage: boolean;
  errPostPage: boolean;
  getPosts: () => void;
  getPostById: (id: number) => void;
}

export const useJp = create<JpState>((set) => ({
  userView,
  setUserView: (userView) => {
    set({ userView });
    localStorage.setItem("jpUser-view", JSON.stringify(userView));
  },
  // server
  users: null,
  singleUser: null,
  loadUserPage: false,
  errUserPage: false,
  loadUserPost: false,
  getUsers: async () => {
    set({ loadUserPage: true });
    const response = await axios.get(`${jpUrl}/users`);
    set({ loadUserPage: false, users: response.data });
  },
  getUserById: async (id) => {
    set({ loadUserPage: true });
    const response = await axios.get(`${jpUrl}/users/${id}`);
    set({ loadUserPage: false, singleUser: response.data });
  },
  posts: null,
  singlePost: null,
  loadPostPage: false,
  errPostPage: false,
  getPosts: async () => {
    set({ loadPostPage: true });
    const response = await axios.get(`${jpUrl}/posts`);
    set({ loadPostPage: false, posts: response.data });
  },
  getPostById: async (id) => {
    set({ loadPostPage: true });
    const response = await axios.get(`${jpUrl}/posts/${id}`);
    set({ loadPostPage: false, singlePost: response.data });
  },
}));
