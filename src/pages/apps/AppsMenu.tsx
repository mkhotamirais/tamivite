import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/clock", label: "Clock" },
  { href: "/stopwatch", label: "Stopwatch" },
  { href: "/symbol-color", label: "Symbol Color" },
  { href: "/todo", label: "Todo" },
];

export default function AppsMenu() {
  return <TitlePage title="Apps" menu={menu} />;
}
