
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();

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
    "/images/Design a Custom Label.jpeg",
    "/images/lipgloss cosmetic logo mockup design.jpeg",
    "/images/_ (1).jpeg",
    "/images/_ (2).jpeg",
    "/images/_ (3).jpeg",
    "/images/Norma Gold - Pacakaging Design by hardianto81.jpeg"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-black mb-6">
          Dennis-Brown
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
          Brand Design Specialist | Lagos, Nigeria
        </p>
        <div className="mt-16 w-32 h-32 mx-auto border border-gray-200 rounded-full flex items-center justify-center mb-40">
          <img
            src="/images/avatar.png"
            alt="Dennis-Brown Avatar"
            className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-lg" 
          />
        </div>
      </div>
    
      {/* Carousel at bottom left */}
      <div className="absolute bottom-8 left-8 w-80 md:w-96">
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
                    className="w-full h-48 object-cover"
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
