import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-android-publishing.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Publish Your
              <span className="block text-secondary-foreground">Android App</span>
              to Google Play
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-2xl">
              Complete step-by-step guide to successfully publish your Android application 
              to the Google Play Store. From preparation to launch, we've got you covered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-smooth">
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorial
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation-3">
              <img 
                src={heroImage} 
                alt="Android app publishing guide illustration"
                className="w-full h-auto transition-smooth hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-elevation-2">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;