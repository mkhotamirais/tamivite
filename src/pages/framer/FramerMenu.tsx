import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/progress-bar-1", label: "Progress Bar 1" },
  { href: "/bulb-1", label: "Bulb 1" },
  { href: "/bulb-2", label: "Bulb 2" },
  { href: "/parallax", label: "Parallax" },
  { href: "/float-nav-1", label: "Float Nav 1" },
  { href: "/float-nav-2", label: "Float Nav 2" },
  { href: "/float-nav-3", label: "Float Nav 3" },
];

export default function FramerMenu() {
  return <TitlePage title="Framer Motion" menu={menu} />;
}
