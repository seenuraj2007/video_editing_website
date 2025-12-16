'use client';

import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Creative Director",
    company: "Luxury Brands Inc.",
    content: "Their editing elevated our campaign to new heights. The attention to detail and cinematic quality transformed our brand storytelling completely.",
    avatar: "/images/testimonial1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Film Producer",
    company: "Independent Studios",
    content: "A visionary storyteller with unmatched precision. Every cut serves the narrative, and the color grading is absolutely stunning.",
    avatar: "/images/testimonial1.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Tech Innovations",
    content: "Professional, creative, and deadline-driven. They delivered beyond our expectations and helped us win industry awards.",
    avatar: "/images/testimonial1.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Music Artist",
    company: "Recording Label",
    content: "The music video they edited brought our vision to life perfectly. The rhythm and pacing are absolutely incredible.",
    avatar: "/images/testimonial1.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client
            <span className="text-primary"> Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what industry leaders say about our video editing expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-foreground mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Quote className="h-6 w-6 text-primary/20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Leading Brands
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {["Fortune 500", "Film Studios", "Record Labels", "Tech Giants", "Fashion Houses"].map((brand) => (
                <div key={brand} className="text-muted-foreground font-medium">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className, fill }: { className?: string; fill?: boolean }) => (
  <svg
    className={className}
    fill={fill ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default Testimonials;