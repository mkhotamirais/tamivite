import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/sticky", label: "Sticky" },
  { href: "/flip-text", label: "Flip Text" },
  { href: "/paginasi", label: "Paginasi" },
  { href: "/canvas", label: "Canvas" },
  { href: "/svg", label: "SVG" },
  { href: "/css-background", label: "Css Background" },
  { href: "/typescript-1", label: "Typescript 1" },
  { href: "/typescript-2", label: "Typescript 2" },
  { href: "/typescript-3", label: "Typescript 3" },
  { href: "/google-font-pairing", label: "Google Font Pairing" },
];

export default function BasicMenu() {
  return <TitlePage title="Basic" menu={menu} />;
}
