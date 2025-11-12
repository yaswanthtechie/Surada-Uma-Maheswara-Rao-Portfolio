import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/50 border-t border-white/10 backdrop-blur-xl">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/60">
              © 2025 SURADA UMA MAHESWARA RAO. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="icon"
              className="bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              onClick={() => window.open("https://github.com/Umamahesh122003/", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              onClick={() => window.location.href = "mailto:sridharsurada33@gmail.com"}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <Button
            size="icon"
            className="bg-gradient-to-r from-gradient-indigo to-gradient-rose text-white hover:from-gradient-indigo/90 hover:to-gradient-rose/90 transition-all duration-300 hover:scale-110"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
