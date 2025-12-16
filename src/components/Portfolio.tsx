'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  client?: string;
  year?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Brand Campaign",
    description: "Elegant commercial for high-end fashion brand with sophisticated color grading",
    category: "Commercial",
    thumbnail: "/images/project1.jpg",
    client: "Fashion House",
    year: "2024"
  },
  {
    id: 2,
    title: "Music Video Symphony",
    description: "Artistic music video with dramatic visual effects and emotional storytelling",
    category: "Music Video",
    thumbnail: "/images/project2.jpg",
    client: "Recording Artist",
    year: "2024"
  },
  {
    id: 3,
    title: "Short Film Journey",
    description: "Award-winning short film with cinematic composition and narrative depth",
    category: "Short Film",
    thumbnail: "/images/project3.jpg",
    client: "Independent Studio",
    year: "2023"
  },
  {
    id: 4,
    title: "Action Movie Trailer",
    description: "High-impact trailer with explosive editing and sound design synchronization",
    category: "Trailer",
    thumbnail: "/images/project4.jpg",
    client: "Film Studio",
    year: "2024"
  },
  {
    id: 5,
    title: "Documentary Series",
    description: "Compelling documentary series with archival footage integration",
    category: "Documentary",
    thumbnail: "/images/project1.jpg",
    client: "Streaming Platform",
    year: "2023"
  },
  {
    id: 6,
    title: "Corporate Story",
    description: "Brand storytelling through compelling corporate video production",
    category: "Corporate",
    thumbnail: "/images/project2.jpg",
    client: "Tech Company",
    year: "2024"
  }
];

const ProjectCard = ({ project, onPlay }: { project: Project; onPlay: (project: Project) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-violet-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(project)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button size="sm" className="bg-primary text-primary-foreground glow-violet">
              <Play className="mr-2 h-4 w-4" />
              Play
            </Button>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured
            <span className="text-primary"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a curated selection of award-winning video editing projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={inView ? 'animate-fade-in-up' : 'opacity-0'}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} onPlay={setSelectedProject} />
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.category} • {selectedProject.client}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </Button>
                </div>
              </div>
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4 cursor-pointer" />
                  <p className="text-foreground mb-4">Video Preview</p>
                  <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                  <Button className="bg-primary text-primary-foreground cursor-pointer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;