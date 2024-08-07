import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sorting, Type, useSisko } from "./useSisko";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SiskoSearch() {
  const { setQuery } = useSisko();
  const onChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery({ search_name: e.target.value });
  }, 300);
  return <Input placeholder="Search name.." onChange={onChange} />;
}

export function SiskoSort() {
  const { query, setQuery } = useSisko();

  const onChange = (e: Sorting) => {
    setQuery({ sorting: e });
  };

  return (
    <Select defaultValue={query?.sorting} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Sorting" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Sorting</SelectLabel>
          <SelectItem value="Lates">Latest</SelectItem>
          <SelectItem value="cheapest">Cheapest</SelectItem>
          <SelectItem value="expensive">Expensive</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SiskoType() {
  const { query, setQuery } = useSisko();

  const onChange = (e: Type) => {
    setQuery({ type: e });
  };

  return (
    <Select defaultValue={query?.type} onValueChange={onChange}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Permalink</SelectLabel>
          <SelectItem value="hijja">Hijja</SelectItem>
          <SelectItem value="demo">Demo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
