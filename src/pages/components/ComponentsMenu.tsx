import { TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/carousel", label: "Carousel" },
  { href: "/accordion-1", label: "Accordion 1" },
  { href: "/accordion-2", label: "Accordion 2" },
];

export default function ComponentsMenu() {
  return <TitlePage title="Components" menu={menu} />;
}
