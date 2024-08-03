import React, { useReducer } from "react";

type Action =
  | { type: "setName"; name: string }
  | { type: "incAge" }
  | { type: "decAge" }
  | { type: "setGender"; gender: "male" | "female" };

type State = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "incAge":
      return { ...state, age: state.age + 1 };
    case "decAge":
      return { ...state, age: state.age - 1 };
    case "setGender":
      return { ...state, gender: action.gender };
    default:
      throw new Error("Unknown action: " + (action as never));
  }
};

const initialState: State = { name: "john", age: 10, gender: "male" };

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "setName", name: e.target.value });
  const handlePlusAge = () => dispatch({ type: "incAge" });
  const handleMinusAge = () => dispatch({ type: "decAge" });
  const handleGender = () => {
    const gender = state.gender === "male" ? "female" : "male";
    dispatch({ type: "setGender", gender });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-[300px] bg-white p-4">
        <h2 className="text-lg font-bold mb-2">useReducer Example</h2>
        <div>
          <div className="mb-2">
            name: {state.name}; age: {state.age}; gender: {state.gender}
          </div>
          <div className="mb-2">
            <label>
              Name:{" "}
              <input title="input" type="text" value={state.name} onChange={handleChangeName} className="border p-1" />
            </label>
          </div>
          <div>
            <button onClick={handlePlusAge} className="underline mx-2">
              plus age
            </button>
            <button onClick={handleMinusAge} className="underline mx-2">
              minus age
            </button>
            <button onClick={handleGender} className="underline mx-2">
              switch gender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
