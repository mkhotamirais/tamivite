import React, { createContext, Dispatch, useReducer, useState } from "react";

export interface InitialTodo {
  id: string;
  text: string;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
}

type Action =
  | { type: "ADD_TODO"; payload: InitialTodo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string; updatedAt: string } }
  | { type: "CHECK_ALL"; payload: boolean }
  | { type: "DELETE_CHECKED" };

interface TodoContextProps {
  todo: InitialTodo[];
  dispatch: Dispatch<Action>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isEdit: string | null;
  setIsEdit: React.Dispatch<React.SetStateAction<string | null>>;
  checkedAll: boolean;
  setCheckedAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Todo2Context = createContext<TodoContextProps | undefined>(undefined);

const setLocal = (result: InitialTodo[]) => {
  localStorage.setItem("todo2", JSON.stringify(result));
};
const todoReducer = (state: InitialTodo[], action: Action): InitialTodo[] => {
  switch (action.type) {
    case "ADD_TODO": {
      const result = [...state, action.payload];
      setLocal(result);
      return result;
    }
    case "DELETE_TODO": {
      const result = state.filter((todo) => todo.id !== action.payload);
      setLocal(result);
      return result;
    }
    case "TOGGLE_TODO": {
      const result = state.map((todo) => (todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo));
      setLocal(result);
      return result;
    }
    case "UPDATE_TODO": {
      const updatedAt = new Date().toISOString();
      const result = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text, updatedAt } : todo
      );
      setLocal(result);
      return result;
    }
    case "CHECK_ALL": {
      const result = state.map((todo) => (action.payload ? { ...todo, checked: false } : { ...todo, checked: true }));
      setLocal(result);
      return result;
    }
    case "DELETE_CHECKED": {
      const result = state.filter((todo) => !todo.checked);
      setLocal(result);
      return result;
    }
    default:
      return state;
  }
};

let initialTodo: InitialTodo[];
const storage = localStorage.getItem("todo2");
storage ? (initialTodo = JSON.parse(storage) || []) : (initialTodo = []);

// const initialTodo: InitialTodo[] = [
//   {
//     id: "1",
//     text: "todo1",
//     checked: false,
//     createdAt: new Date("2023-12-12").toISOString(),
//     updatedAt: new Date().toISOString(),
//   },
//   {
//     id: "2",
//     text: "todo2",
//     checked: true,
//     createdAt: new Date("2024-02-12").toISOString(),
//     updatedAt: new Date().toISOString(),
//   },
//   {
//     id: "3",
//     text: "todo3",
//     checked: false,
//     createdAt: new Date("2024-01-12").toISOString(),
//     updatedAt: new Date().toISOString(),
//   },
// ];

export default function Todo2Provider({ children }: { children: React.ReactNode }) {
  const [todo, dispatch] = useReducer(todoReducer, initialTodo);
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState<string | null>(null);
  const [checkedAll, setCheckedAll] = useState(false);

  return (
    <Todo2Context.Provider value={{ todo, dispatch, text, setText, isEdit, setIsEdit, checkedAll, setCheckedAll }}>
      {children}
    </Todo2Context.Provider>
  );
}
