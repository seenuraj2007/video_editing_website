'use client';

import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Maximize2 } from 'lucide-react';

const Showreel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="showreel" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cinematic
            <span className="text-primary"> Showreel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the art of visual storytelling through my curated collection of award-winning work
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="overflow-hidden bg-card border-border glow-violet">
            <div className="relative aspect-video">
              <img
                src="/images/showreel.jpg"
                alt="Showreel Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-violet-hover mb-4 px-8 py-6 cursor-pointer"
                  >
                    <Play className="mr-3 h-8 w-8" />
                    Play Showreel
                  </Button>
                  <p className="text-foreground text-lg font-medium">
                    3 Minutes of Pure Cinematic Excellence
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary bg-black/20 backdrop-blur-sm cursor-pointer"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-2">50+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-2">15</h4>
                  <p className="text-muted-foreground">Awards Won</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-2">8+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Showreel;