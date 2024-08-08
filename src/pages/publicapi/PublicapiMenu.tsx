import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/jsonplaceholder", label: "Jsonplaceholder" },
  { href: "/omdbapi", label: "Omdbapi" },
  { href: "/fakestoreapi", label: "Fakestoreapi" },
  { href: "/newsapi", label: "Newsapi" },
  { href: "/sisko", label: "Sistem Toko" },
];

export default function PublicapiMenu() {
  return <TitlePage title="Publicapi" menu={menu} />;
}
