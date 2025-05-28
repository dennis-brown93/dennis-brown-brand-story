
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
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586953209963-b8480e2e3279?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop"
  ];

  return (
    <div className={`grid md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={isReversed ? 'md:col-start-2' : ''}>
        <img 
          src={placeholderImages[project.imageIndex]} 
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className={isReversed ? 'md:col-start-1' : ''}>
        <h3 className="text-3xl md:text-4xl font-light mb-6 text-black">
          {project.title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-700">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };
