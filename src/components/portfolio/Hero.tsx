
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Sample images for the carousel
  const carouselImages = [
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1586953209963-b8480e2e3279?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=200&fit=crop"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-light tracking-tight text-black mb-6">
          Dennis-Brown
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
          Brand Design Specialist | Lagos, Nigeria
        </p>
        <div className="mt-16 w-32 h-32 mx-auto border border-gray-200 rounded-full flex items-center justify-center">
          <span className="text-4xl font-light text-gray-400">DB</span>
        </div>
      </div>
      
      {/* Carousel at bottom left */}
      <div className="absolute bottom-8 left-8 w-80">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2">
                <div className="rounded-bl-2xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Portfolio preview ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Hero };
