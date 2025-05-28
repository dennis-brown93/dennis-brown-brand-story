
import { ProjectCard } from "./ProjectCard";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Cry Baby Wax",
      description: "A bold packaging system created for a youth-focused waxing brand. The visual identity uses hot gradients and cheeky language to signal confidence and energy. The playful box layout reflects the product's vibrant and disruptive spirit. The design combines modern typography with a youthful aesthetic, appealing to a trend-conscious audience.",
      imageIndex: 0
    },
    {
      id: 2,
      title: "Kiramon Serum Packaging",
      description: "Featuring retro-inspired hearts and minimal shapes, this design for 'Kiramon Super Hydra Serum' exudes playful femininity. Crafted by Dennis-Brown, it explores emotional resonance through packaging aesthetics. The design combines soft pastel colors with bold typography, creating a unique and memorable brand identity.",
      imageIndex: 1
    },
    {
      id: 3,
      title: "Havilah Herbal Shampoo",
      description: "A clean, botanical-themed packaging system for 'Havilah Herbal Shampoo'. We used soft greens and natural motifs to convey purity and wellness in product branding. The design emphasizes simplicity and elegance, appealing to eco-conscious consumers.",
      imageIndex: 2
    },
    {
      id: 4,
      title: "Free Loader Fries Tote Pack",
      description: "A playful and functional tote bag design for a fast-food brand, featuring bold graphics and a vibrant color palette that captures the essence of the brand. The design includes a large, eye-catching logo and playful illustrations of fries, making it a fun accessory for customers.",
      imageIndex: 3
    },
    {
      id: 5,
      title: "BOON Hair Care Packaging",
      description: "The product name \"BOON\" is vertically oriented on the left side of the bottle in a sans-serif, uppercase font, with \"color care shampoo\" in smaller, stacked text below it. Further down, there's a circular emblem with a number \"02\" and Chinese characters below it, followed by \"for all hair types.\" The overall design emphasizes simplicity, softness, and modern minimalism.",
      imageIndex: 4
    },
    {
      id: 6,
      title: "Bright Juices",
      description: "The primary focus is on the custom label design, presented both on the bottle and as a flat, unrolled template. The label features a vibrant illustration of sliced mangoes against a background that subtly incorporates mango imagery. The brand name \"Bright Juices\" is prominently displayed in a bold, playful script font. Key information like \"PURE TASTE, PURE JOY\" and \"Harvested Fresh, Packed with Love\" are included. The label also contains a nutrition facts panel, ingredients, and additional notes, all in a clean, legible font.",
      imageIndex: 5
    },
    {
      id: 7,
      title: "PR Lip Gloss Tubes",
      description: "Minimalist design for lip gloss tubes. The tubes are clear, elongated, and rectangular with gently rounded edges, allowing the translucent product inside to be visible. Each tube is topped with a sleek, rectangular white cap that has subtle silver or metallic accents, suggesting a premium feel. The brand initial \"PR\"  is prominently featured on the tube in a large, elegant serif font, overlapping with the word \"LIPGLOSS\" in a smaller, sans-serif font. \"CHERRY GLOSS\" and \"10ML\" are also present in a small, discreet font.",
      imageIndex: 6
    },
    {
      id: 8,
      title: "Norma Gold Packaging Design",
      description: "The label design is a striking teal color with white text and green leaf accents, conveying a natural or health-conscious theme. The \"NORMA GOLD\" brand name is prominent in a sans-serif font, with \"Mengandung Antioksidan Tinggi\" (High Antioxidant Content) below it. The full label design is also shown flat, detailing ingredients (Komposisi), benefits (Khasiat & Kegunaan), and usage instructions (Aturan Pakai). A \"Nutrition Fact\" panel with comprehensive dietary information and a QR code is clearly laid out. The packaging also includes a custom die-cut box design in matching teal, which shows how the bottle fits inside",
      imageIndex: 7
    },
    {
      id: 9,
      title: "The Pickle Pantry",
      description: "\"The Pickle Pantry\" brand, specifically for pickle jars. The design is shown in three color variations (light green, dark green, and yellow-green) for different flavors (\"Sweet Flavour,\" \"Original Flavor,\" \"Garlic Flavor\"). Each label prominently features a whimsical, cartoon illustration of a pickle wearing sunglasses, adding a unique and memorable character. The brand name \"The Pickle Pantry\" is written in a fun, slightly bouncy script font. Detailed information includes a short description of the product, ingredients, and a \"Nutrition Facts\" panel, all laid out clearly.",
      imageIndex: 8
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-light mb-20 text-black text-center">
        Branding Highlights
      </h2>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isReversed={index % 2 === 1} 
          />
        ))}
      </div>
    </section>
  );
};

export { Works };
