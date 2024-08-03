import { useState } from "react";

const fn1 = () => <path id="lineAC" d="M 30 180 q 150 -250 300 0" stroke="blue" strokeWidth="2" fill="none" />;
const fn2 = () => <path id="lineAC" d="M 30 180 q 150 -150 300 0" stroke="blue" strokeWidth="2" fill="none" />;

const svgMenus = [
  { label: "fn1", detail: "", content: fn1 },
  { label: "fn2", detail: "", content: fn2 },
];

export default function Svg() {
  const [active, setActive] = useState(0);
  const [svgku, setSvg] = useState({ label: "fn1", detail: "", content: fn1 });

  return (
    <section className="min-h-screen bg-gray-50 w-full flex flex-col gap-3 items-center justify-center">
      <h1 className="text-2xl">Svg</h1>
      <div className="h-[90vh] sm:h-[80vh] flex flex-col sm:flex-row items-center justify-center gap-2">
        <div className="bg-gray-400 h-full flex items-center justify-center p-2 sm:order-2">
          <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" className="bg-white">
            {/* <path id="lineAC" d="M 30 180 q 150 -250 300 0" stroke="blue" strokeWidth="2" fill="none" /> */}
            <svgku.content />
          </svg>
        </div>
        <div className="w-full sm:w-[300px] h-full gap-1 sm:order-1 overflow-y-scroll bg-white p-3 flex flex-col items-start">
          {svgMenus.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                setSvg(item);
              }}
              className={`${active === i ? "bg-gray-200" : "bg-gray-50"} hover:bg-gray-100 w-full text-left p-1`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="text-left flex w-full px-4">
        <div>
          svg(width, height, xmlns) <br />
          rect(x, y, width, height, rx, ry, fill, stroke, stroke-width, stroke-opacity, fill, opacity) <br />
          circle(r, cx, cy, fill, stroke, stroke-width, opacity) <br />
          ellipse(rx, ry, cx, cy, fill, stroke, stroke-width) <br />
          line(x1, y1, x2, y2, stroke, stroke-width) <br />
          polygon(points, fill, fill-rule, stroke, stroke-width) <br />
          polyline(points, fill, fill-rule, stroke, stroke-width) <br />
          path(id, d:MLHVCSQTAZ, fill, stroke, stroke-width) <br />
          text/tspan(x, y, dx, dy, rotate, textLength, lengthAdjust, font-size, stroke, stroke-width, transform, rotate){" "}
          <br />
          textPath(href, lengthAdjust, method, spacing, startOffset, textLength) <br />
          a(href, download, hreflang, referrerpolicy, rel, target, type) <br />
          image(width, height, href, x, y)
        </div>
      </div>
    </section>
  );
}
