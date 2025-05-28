
import { ProjectCard } from "./ProjectCard";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Vibrant Gradient Identity",
      description: "A bold packaging system created for a youth-focused brand. The visual identity uses hot gradients and contemporary design to signal confidence and energy. The playful layout reflects the product's vibrant and disruptive spirit.",
      imageIndex: 0
    },
    {
      id: 2,
      title: "Sophisticated Product Line",
      description: "An elegant packaging approach that balances minimalism with striking visual elements. This project showcases how restraint and boldness can work together to create memorable brand experiences.",
      imageIndex: 1
    },
    {
      id: 3,
      title: "Contemporary Branding System",
      description: "A comprehensive brand identity that combines modern typography with vibrant color palettes. The design system maintains consistency while allowing for creative expression across multiple touchpoints.",
      imageIndex: 2
    },
    {
      id: 4,
      title: "Dynamic Visual Identity",
      description: "A project that explores the intersection of traditional craftsmanship and modern design sensibilities. The result is a brand that feels both timeless and contemporary.",
      imageIndex: 3
    },
    {
      id: 5,
      title: "Bold Packaging Design",
      description: "An innovative approach to product packaging that prioritizes shelf impact while maintaining functional excellence. The design creates an emotional connection with consumers.",
      imageIndex: 4
    },
    {
      id: 6,
      title: "Creative Brand Expression",
      description: "A unique brand identity that challenges conventional design patterns. This project demonstrates how thoughtful design can differentiate a brand in competitive markets.",
      imageIndex: 5
    },
    {
      id: 7,
      title: "Refined Design System",
      description: "A cohesive brand system that balances sophistication with accessibility. The design language is both distinctive and versatile, adapting across various brand applications.",
      imageIndex: 6
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-light mb-20 text-black text-center">
        Selected Works
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
