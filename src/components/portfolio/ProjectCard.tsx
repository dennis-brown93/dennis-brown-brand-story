
interface Project {
  id: number;
  title: string;
  description: string;
  imageIndex: number;
}

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

const ProjectCard = ({ project, isReversed = false }: ProjectCardProps) => {
  // Using placeholder images as uploaded images aren't directly accessible
  const placeholderImages = [
    "/images/_ (1).jpeg",
    "/images/_ (2).jpeg",
    "/images/_ (3).jpeg",
    "/images/_.jpeg",
    "/images/BOON - packaging design for a hair care brand.jpeg",
    "/images/Design a Custom Label.jpeg",
    "/images/lipgloss cosmetic logo mockup design.jpeg",
    "/images/Norma Gold - Pacakaging Design by hardianto81.jpeg",
    "/images/The Pickle Pantry Brand Design.jpeg"
  ];

  return (
    <div className={`grid md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={isReversed ? 'md:col-start-2' : ''}>
        <div className="group overflow-hidden rounded-lg shadow-lg relative cursor-pointer">
          <img 
            src={placeholderImages[project.imageIndex]} 
            alt={project.title}
            className="w-full h-96 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Full overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <img 
              src={placeholderImages[project.imageIndex]} 
              alt={project.title}
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className={`${isReversed ? 'md:col-start-1' : ''} animate-fade-in`}>
        <h3 className="text-3xl md:text-4xl font-light mb-6 text-black animate-fade-in animation-delay-200">
          {project.title}
        </h3>
        <p className="text-md leading-relaxed text-gray-700 animate-fade-in animation-delay-400">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };
