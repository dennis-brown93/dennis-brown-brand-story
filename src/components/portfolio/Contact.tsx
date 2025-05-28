
import { Mail, Instagram, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-8 text-black">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Interested in collaborating? Reach out to build something unforgettable.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a 
            href="mailto:dennisbrown.design@gmail.com"
            className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            ademesoadedamola@gmail.com
          </a>
          
          <a 
            href="#"
            className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            @life_of_a_dezigner
          </a>
        
          <a href="whatsapp://send?text=Hello%20Dennis-Brown!%20I'm%20interested%20in%20your%20work." className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition-colors">
            <Phone className="w-6 h-6" />
            08101299630
          </a>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 Dennis-Brown. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Contact };
