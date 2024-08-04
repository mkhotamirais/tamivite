import { Container } from "@/components/wrapper";

export const googleFontList = [
  { title: "Bebas Neue", classTw: "font-bebasNeue", type: "sans-serif" },
  { title: "Poppins", classTw: "font-poppins", type: "sans-serif" },
  { title: "Merriweather", classTw: "font-merriweather", type: "serif" },
  { title: "Open Sans", classTw: "font-openSans", type: "sans-serif" },
  { title: "Nunito Sans", classTw: "font-nunitoSans", type: "sans-serif" },
  { title: "Nunito", classTw: "font-nunito", type: "sans-serif" },
  { title: "Source Sans 3", classTw: "font-sourceSans3", type: "sans-serif" },
  { title: "Bitter", classTw: "font-bitter", type: "serif" },
  { title: "Raleway", classTw: "font-raleway", type: "sans-serif" },
  { title: "Oswald", classTw: "font-oswald", type: "sans-serif" },
  { title: "PT Sans", classTw: "font-PTSans", type: "sans-serif" },
  { title: "PT Serif", classTw: "font-PTSerif", type: "serif" },
  { title: "Roboto Slab", classTw: "font-robotoSlab", type: "serif" },
  { title: "Roboto", classTw: "font-roboto", type: "sans-serif" },
  { title: "Loto", classTw: "font-loto", type: "sans-serif" },
  { title: "Lora", classTw: "font-lora", type: "serif" },
  { title: "Montserrat", classTw: "font-montserrat", type: "sans-serif" },
  { title: "Playfair Display", classTw: "font-playfairDisplay", type: "serif" },
  { title: "Ubuntu", classTw: "font-ubuntu", type: "sans-serif" },
  { title: "Abril Fatface", classTw: "font-abrilFatface", type: "serif" },
  { title: "Fauna One", classTw: "font-faunaOne", type: "serif" },
  { title: "Cinzel", classTw: "font-cinzel", type: "serif" },
  { title: "Libre Baskerville", classTw: "font-libreBaskerville", type: "serif" },
  { title: "Fjalla One", classTw: "font-fjallaOne", type: "sans-serif" },
  { title: "Mulish", classTw: "font-mulish", type: "sans-serif" },
  { title: "Space Mono", classTw: "font-spaceMono", type: "monospace" },
  { title: "Noto Sans", classTw: "font-notoSans", type: "sans-serif" },
  { title: "Rubik", classTw: "font-rubik", type: "sans-serif" },
  { title: "Spectral", classTw: "font-spectral", type: "serif" },
  { title: "Alkatra", classTw: "font-alkatra", type: "system-ui" },
  { title: "Sedgwick Ave", classTw: "font-sedgwickAve", type: "cursive" },
];

export default function GoogleFontPairing() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="p-3">
          <h1 className="text-xl font-bold py-2 text-center">Google Font Pairing</h1>
          <ol className="list-inside list-decimal">
            {googleFontList
              .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
              .map((item) => (
                <li key={item.title} className={`${item.classTw} leading-relaxed`}>
                  {item.title} | Hello World | {item.type}
                </li>
              ))}
          </ol>
        </div>
      </Container>
    </div>
  );
}
