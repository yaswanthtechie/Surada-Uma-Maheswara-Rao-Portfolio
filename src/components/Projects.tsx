import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Camera, MessageCircle } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: (BentoItem & { domain: string; github: string; demo: string })[] = [
    {
      title: "Road Damage Detection Application",
      description:
        "Automated road damage detection solution powered by YOLOv8, trained on CDRD 2022 for identifying longitudinal, transverse, alligator cracks, and potholes with 90% accuracy.",
      icon: <Camera className="w-4 h-4 text-blue-500" />,
      status: "Completed",
      tags: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Deep Learning"],
      domain: "AI & Computer Vision",
      github: "https://github.com/Umamahesh122003/",
      demo: "https://github.com/Umamahesh122003/",
      colSpan: 2,
      hasPersistentHover: true,
      cta: "View Project →",
    },
    {
      title: "AI-Powered Chatbot & Recommendation System",
      description:
        "Full-stack chatbot leveraging React, TypeScript, Node.js, and LangChain to integrate LLMs for conversational experiences, deployed via Dockerized CI/CD pipelines on AWS/GCP.",
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      status: "Completed",
      tags: ["React", "TypeScript", "Node.js", "LangChain", "LLMs", "AWS", "Docker"],
      domain: "AI & Web Applications",
      github: "https://github.com/Umamahesh122003/",
      demo: "https://github.com/Umamahesh122003/",
      cta: "View Project →",
    },
  ];

  const domains = ["All", "AI & Computer Vision", "AI & Web Applications"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <section id="projects" className="section-padding section-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-gradient-rose/5 via-transparent to-gradient-amber/5 blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-rose via-white to-gradient-amber">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gradient-rose to-gradient-amber mx-auto mb-8"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          {domains.map((domain) => (
            <Button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`transition-all duration-300 rounded-full ${
                activeFilter === domain
                  ? "bg-gradient-to-r from-gradient-rose/20 to-gradient-amber/20 text-white border border-white/20 shadow-lg scale-105"
                  : "bg-white/5 text-foreground/60 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {domain}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <BentoGrid 
          items={filteredProjects} 
          onItemClick={(project) => window.open(project.demo, "_blank")}
        />
      </div>
    </section>
  );
};

export default Projects;
