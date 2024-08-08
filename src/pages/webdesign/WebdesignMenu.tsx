import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/landing-1", label: "Landing 1" },
  { href: "/landing-2", label: "Landing 2" },
];

export default function WebdesignMenu() {
  return <TitlePage title="Webdesign" menu={menu} />;
}
