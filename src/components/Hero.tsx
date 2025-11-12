import { Button } from "@/components/ui/button";
import { Github, Download, ChevronDown } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <HeroGeometric
        badge="Full Stack Developer - AI"
        title1="Hi, I'm"
        title2="SURADA UMA MAHESWARA RAO"
        description="Motivated new graduate blending full stack engineering with AI/ML expertise to build scalable, intelligent applications"
      >
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://github.com/Umamahesh122003", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        <div className="mt-12">
          <ChevronDown
            className="h-8 w-8 text-white/40 animate-bounce cursor-pointer mx-auto"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </HeroGeometric>
    </section>
  );
};

export default Hero;
