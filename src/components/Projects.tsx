import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Calendar, Users } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: (BentoItem & { domain: string; github: string; demo: string })[] = [
    {
      title: "Hospital Management System",
      description:
        "Comprehensive system using Java, Spring Boot, and SQL to manage patient records, appointments, billing, and leave approval. Optimized queries improved efficiency by 30%.",
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      status: "Completed",
      tags: ["Java", "Spring Boot", "SQL", "REST APIs"],
      domain: "Enterprise Tools",
      github: "https://github.com/kunreddymanohar1/hospital-management-system1",
      demo: "https://github.com/kunreddymanohar1/hospital-management-system1",
      colSpan: 2,
      hasPersistentHover: true,
      cta: "View Project →",
    },
    {
      title: "Employee Onboarding System",
      description:
        "Web-based onboarding platform built with HTML, CSS, JavaScript, and ReactJS. Responsive UI, form validations, dynamic workflows, and document management streamlined registration for 100+ users.",
      icon: <Users className="w-4 h-4 text-emerald-500" />,
      status: "Completed",
      tags: ["ReactJS", "JavaScript", "HTML5", "CSS3"],
      domain: "Web Development",
      github: "https://github.com/kunreddymanohar1/Employee-Onboarding-",
      demo: "https://github.com/kunreddymanohar1/Employee-Onboarding-",
      cta: "View Project →",
    },
  ];

  const domains = ["All", "Web Development", "Full Stack Applications", "Enterprise Tools"];

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
