import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/express", label: "Express" },
  { href: "/api-mysql-v1", label: "Api Mysql V1" },
  { href: "/mysql", label: "Mysql" },
  { href: "/mongodb", label: "Mongodb" },
];

export default function NodejsMenu() {
  return <TitlePage title="Nodejs" menu={menu} />;
}
