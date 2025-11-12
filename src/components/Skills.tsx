import { Code2, Database, Wrench, Shield, Cloud, Cpu, Users, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Databases",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Angular", "Node.js", "Express.js"],
    },
    {
      title: "AI/ML Frameworks & Deep Learning",
      icon: Cpu,
      skills: ["YOLOv8", "OpenCV", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "Deep Learning"],
    },
    {
      title: "Development Tools & Methodologies",
      icon: Cloud,
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Cloud Deployments"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "NoSQL"],
    },
    {
      title: "Tools & Concepts",
      icon: Wrench,
      skills: ["Git", "GitHub", "Computer Vision", "Image Processing", "Video Processing", "API Development", "Model Training", "MLOps"],
    },
    {
      title: "Domain Knowledge",
      icon: Globe,
      skills: ["AI Product Lifecycle", "Generative AI", "Large Language Models (LLMs)", "Microservices"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Team Collaboration", "Performance Optimization"],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gradient-violet/5 via-transparent to-gradient-cyan/5 blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-violet via-white to-gradient-cyan">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gradient-violet to-gradient-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-custom animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gradient-violet/20 to-gradient-cyan/20 border border-white/10">
                    <Icon className="h-6 w-6 text-gradient-violet" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-foreground/70 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
