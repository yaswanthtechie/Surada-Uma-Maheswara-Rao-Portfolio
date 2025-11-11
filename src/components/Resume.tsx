import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gradient-indigo/5 via-transparent to-gradient-violet/5 blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="card-custom">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-gradient-indigo/20 to-gradient-violet/20 border border-white/10">
                <FileText className="h-10 w-10 text-gradient-indigo" />
              </div>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-gradient-indigo to-gradient-violet hover:from-gradient-indigo/90 hover:to-gradient-violet/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
