import { ContactPage } from "@/components/ui/contact-page";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/Umamahesh122003/",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/uma-maheswara-rao-surada-832447342/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sridharsurada33@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="section-padding section-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-gradient-rose/5 via-transparent to-gradient-amber/5 blur-3xl" />
      <div className="relative z-10">
        <ContactPage
          email="sridharsurada33@gmail.com"
          phone="+91 9573786749"
          address="Andhra Pradesh, India"
          socialLinks={socialLinks}
        />
      </div>
    </section>
  );
};

export default Contact;
