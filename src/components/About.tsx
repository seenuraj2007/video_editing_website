'use client';

import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ArrowRight } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    "Cinematic Color Grading",
    "Narrative Storytelling",
    "Motion Graphics",
    "Sound Design",
    "4K/8K Post-Production",
    "Visual Effects Integration"
  ];

  return (
    <section id="about" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto`}>
          {/* Content */}
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
              <span className="text-primary"> Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I specialize in premium video editing, color grading, and storytelling for brands, artists, and filmmakers. With over 8 years of experience in the industry, I've had the privilege of working on projects that have garnered international recognition and awards.
              </p>
              <p>
                My approach combines technical expertise with artistic vision, transforming raw footage into compelling narratives that captivate audiences and drive results. Whether it's a commercial campaign, music video, or feature film, I bring dedication and creativity to every frame.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div
                    key={specialty}
                    className={`flex items-center gap-2 text-muted-foreground ${
                      inView ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {specialty}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-violet-hover cursor-pointer"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                Start a Project
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <Card className="overflow-hidden bg-card border-border glow-violet">
              <div className="relative">
                <img
                  src="/images/editor-at-work.jpg"
                  alt="Video editor at work"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 border border-primary/30">
                    <p className="text-foreground font-medium mb-2">State-of-the-Art Editing Suite</p>
                    <p className="text-muted-foreground text-sm">Professional tools for exceptional results</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">15</h4>
                <p className="text-muted-foreground">Awards Won</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">8+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;