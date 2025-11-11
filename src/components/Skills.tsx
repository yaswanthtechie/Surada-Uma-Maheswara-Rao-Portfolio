import { Code2, Database, Wrench, Shield, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Databases",
      icon: Code2,
      skills: ["Java", "JavaScript", "SQL", "PHP"],
    },
    {
      title: "Web Technologies & Frameworks",
      icon: Code2,
      skills: ["ReactJS", "HTML5", "CSS3", "Spring Boot", "RESTful APIs", "Responsive Web Design"],
    },
    {
      title: "Development Tools & Methodologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Eclipse IDE", "Visual Studio Code", "Postman", "Agile (Scrum)"],
    },
    {
      title: "Cloud & Operations",
      icon: Cloud,
      skills: ["AWS Fundamentals", "Deployment", "Scalability"],
    },
    {
      title: "Core Java & Persistence",
      icon: Database,
      skills: ["Advanced Java (JDBC)", "Hibernate", "Java 8", "OOPs"],
    },
    {
      title: "Functional Skills",
      icon: Shield,
      skills: ["Problem-Solving", "Analytical Thinking", "Communication", "Collaboration", "Testing"],
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
