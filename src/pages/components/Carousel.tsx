import { useState } from "react";

const carouselData = [
  { label: "1", description: "", image: "" },
  { label: "2", description: "", image: "" },
  { label: "3", description: "", image: "" },
  { label: "4", description: "", image: "" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative aspect-square w-[300px] border mx-auto bg-white">
        {/* carousel content */}
        <div className="flex h-full overflow-hidden">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 relative min-w-full transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={item.image} alt={`Slide ${index}`} className="w-full h-full" />
              <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-3xl">{item.label}</div>
            </div>
          ))}
        </div>
        {/* prev/next */}
        <button onClick={handlePrev} className="absolute top-1/2 left-0 -translate-y-1/2">
          Prev
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-0  -translate-y-1/2">
          Next
        </button>
        {/* dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
          {carouselData.map((item, i) => (
            <button
              onClick={() => setCurrentIndex(i)}
              key={i}
              className={`${currentIndex === i ? "border" : "border-none"} border-gray-500 aspect-square w-8`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
