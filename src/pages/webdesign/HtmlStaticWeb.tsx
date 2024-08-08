import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import { ExternalLink } from "lucide-react";

const htmlWebMenu = [
  { href: "/static-web/mrwd1/index.html", label: "mrwd1" },
  { href: "/static-web/mrwd2/index.html", label: "mrwd2" },
  { href: "/static-web/nuruliman/index.html", label: "nuruliman" },
  { href: "/static-web/wpu-bs1/index.html", label: "wpu-bs1" },
  { href: "/static-web/wpu-bs2/index.html", label: "wpu-bs2" },
  { href: "/static-web/wpu-mtrz1/index.html", label: "wpu-mtrz1" },
  { href: "/static-web/omdbapi/index.html", label: "omdbapi" },
  { href: "/static-web/tugas1-html/index.html", label: "tugas1-html" },
  { href: "/static-web/tugas2-bootstrap/index.html", label: "tugas2-bs" },
  { href: "/static-web/tugas3-jsbasic/index.html", label: "tugas3-jsbasic" },
  { href: "/static-web/tugas4-miniLibrary/index.html", label: "tugas4-table" },
  { href: "/static-web/tugas6-jsonplaceholder/index.html", label: "tugas4-jp" },
  { href: "/static-web/tugas7-portalBeritaPromise/index.html", label: "tugas4-portal" },
];

export default function HtmlStaticWeb() {
  return (
    <div className="bg-gray-50">
      <Container>
        <h2 className="text-xl font-bold my-3 text-center">Static Web</h2>
        <div className="p-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
          {htmlWebMenu.map((item, i) => (
            <a key={i} href={item.href}>
              <Button className="w-full">
                {item.label}
                <sup>
                  <ExternalLink className="size-3 ml-1" />
                </sup>
              </Button>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
