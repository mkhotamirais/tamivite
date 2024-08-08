import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/projects", label: "projects" },
  { href: "/portofolio-legacy", label: "portofolio legacy" },
];

export default function HomeMenu() {
  return <TitlePage title="Home" menu={menu} />;
}
