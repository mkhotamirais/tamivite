import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/use-state", label: "useState" },
  { href: "/use-effect", label: "useEffect" },
  { href: "/use-ref", label: "useRef" },
  { href: "/use-context", label: "useContext" },
  { href: "/use-callback", label: "useCallback" },
  { href: "/use-memo", label: "useMemo" },
  { href: "/use-reducer", label: "useReducer" },
  { href: "/memo", label: "memo" },
];

export default function ReactMenu() {
  return <TitlePage title="React" menu={menu} />;
}
