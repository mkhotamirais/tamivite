import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/wrapper";
import React, { useState } from "react";

type Person = { age: number; name: string };

export default function UseState() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(3);
  const [person, setPerson] = useState<Person | null>(null);
  const [name, setName] = useState("abdul");
  const [age, setAge] = useState(10);

  return (
    <div className="bg-gray-200">
      <Container>
        <div className="px-3">
          <h2 className="text-xl font-bold my-3 text-center">useState</h2>
          <div className="border rounded p-2 flex flex-wrap justify-center items-center gap-1">
            <Button size="sm" onClick={() => setCount((prev) => prev - 1)}>
              minus
            </Button>
            <div className="p-2 border-2 rounded">{count}</div>
            <Button size="sm" onClick={() => setCount((prev) => prev + 1)}>
              Plus
            </Button>
            <Input
              value={amount}
              className="w-20"
              placeholder="amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Button size={"sm"} onClick={() => setCount((prev) => prev + amount)}>
              Plus {amount}
            </Button>
          </div>
          <div className="border my-2 p-2 rounded">
            <div>
              <MyButton name={name} setName={setName} age={age} setAge={setAge} setPerson={setPerson}>
                Change
              </MyButton>
              <div className="text-center p-2 border rounded my-2">
                {person?.age || "1"} - {person?.name || "ahmad"}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

type MyButtonProps = {
  children: React.ReactNode;
  setPerson: React.Dispatch<React.SetStateAction<Person | null>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
};
const MyButton = ({ children, age, setAge, name, setName, setPerson }: MyButtonProps) => {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  return (
    <div className="flex gap-1">
      <Input value={name} onChange={onChangeName} placeholder="name" />
      <Input value={age} onChange={onChangeAge} placeholder="age" type="number" />
      <Button size="sm" onClick={() => setPerson({ age, name })}>
        {children}
      </Button>
    </div>
  );
};
