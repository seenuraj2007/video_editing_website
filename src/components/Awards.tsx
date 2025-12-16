'use client';

import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star } from 'lucide-react';

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  icon: 'trophy' | 'award' | 'star';
}

const awards: Award[] = [
  {
    id: 1,
    title: "Best Editing",
    organization: "International Film Festival",
    year: "2024",
    category: "Professional",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Official Selection",
    organization: "Global Creators Showcase",
    year: "2024",
    category: "Festival",
    icon: "award"
  },
  {
    id: 3,
    title: "Excellence in Cinematography",
    organization: "Visual Arts Guild",
    year: "2023",
    category: "Professional",
    icon: "star"
  },
  {
    id: 4,
    title: "Best Short Film Edit",
    organization: "Independent Film Awards",
    year: "2023",
    category: "Professional",
    icon: "trophy"
  },
  {
    id: 5,
    title: "Outstanding Achievement",
    organization: "Digital Media Association",
    year: "2022",
    category: "Industry",
    icon: "award"
  },
  {
    id: 6,
    title: "Editor's Choice",
    organization: "Cinema Arts Magazine",
    year: "2022",
    category: "Publication",
    icon: "star"
  }
];

const Awards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconType: 'trophy' | 'award' | 'star') => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="h-8 w-8 text-primary" />;
      case 'award':
        return <Award className="h-8 w-8 text-primary" />;
      case 'star':
        return <Star className="h-8 w-8 text-primary" />;
      default:
        return <Trophy className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section id="awards" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards &
            <span className="text-primary"> Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating excellence in video editing and cinematic storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card
              key={award.id}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 glow-violet-hover ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {getIcon(award.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {award.organization}
                </p>
                <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                  <span>{award.year}</span>
                  <span>•</span>
                  <span>{award.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Industry Recognition
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Featured in leading industry publications and recognized by prestigious film festivals worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Film Festival", "Digital Media", "Cinema Arts", "Visual Guild", "Indie Awards"].map((publication) => (
                <span
                  key={publication}
                  className="bg-card border border-border px-4 py-2 rounded-full text-sm text-foreground"
                >
                  {publication}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;