import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, TitlePage } from "@/components/wrapper";

const menu = [
  { href: "/landing-1", label: "Landing 1" },
  { href: "/landing-2", label: "Landing 2" },
  { href: "/html-accordion", label: "Accordion" },
  { href: "/html-carousel", label: "Carousel" },
  { href: "/html-static-web", label: "Static Web" },
  { href: "/sec-header", label: "Section Header" },
];

export default function WebdesignMenu() {
  return (
    <>
      <TitlePage title="Webdesign" menu={menu} />
      <div className="bg-gray-50">
        <Container>
          <div className="p-3">
            <Card>
              <CardHeader>
                <CardTitle>Target Buat Website</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc">
                  <li>Portfolio</li>
                  <li>E-commerce</li>
                  <li>Blog</li>
                  <li>News</li>
                  <li>Layouting: header, footer, sections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
