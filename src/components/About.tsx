import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.TECH, Civil Engineering (Minor in Computer Science and Engineering)",
      institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
      period: "2020 – 2024",
    },
    {
      degree: "Intermediate",
      institution: "KSN Junior College",
      period: "2018 – 2020",
    },
    {
      degree: "SSC",
      institution: "Loyola EM School",
      period: "2017 – 2018",
    },
  ];

  const technologies = [
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "YOLOv8",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "Hugging Face",
    "AWS",
    "Docker",
    "Kubernetes",
    "Generative AI",
    "MLOps",
  ];

  return (
    <section id="about" className="section-padding section-gradient relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-indigo/5 via-transparent to-gradient-rose/5 blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-indigo via-white to-gradient-rose">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gradient-indigo to-gradient-rose mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/60">
            Motivated new graduate aiming to excel as a Full Stack Developer - AI by combining strong programming capabilities with deep learning expertise. Passionate about delivering scalable web applications, integrating intelligent models, and enhancing user experiences within dynamic engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card-custom animate-slide-up w-full max-w-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-gradient-indigo/20 to-gradient-rose/20 border border-white/10">
                  <GraduationCap className="h-6 w-6 text-gradient-indigo" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-foreground/60 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-foreground/50 mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-badge"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
