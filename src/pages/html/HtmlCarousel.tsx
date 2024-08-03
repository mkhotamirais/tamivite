export default function HtmlCarousel() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center flex-col sm:flex-row flex-wrap">
      <iframe
        title="html carousel 1"
        src="/html/carousel.html"
        width="300"
        className="overflow-scroll aspect-square border"
      />
      <iframe
        title="html carousel 2"
        src="/html/carousel2.html"
        width="300"
        className="overflow-scroll aspect-square border"
      />
    </section>
  );
}
