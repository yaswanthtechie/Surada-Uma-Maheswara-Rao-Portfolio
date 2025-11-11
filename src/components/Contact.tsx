import { ContactPage } from "@/components/ui/contact-page";
import { GithubIcon, LinkedinIcon, TwitterIcon, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/kunreddymanohar1",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/manohar-reddy-970634257/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:kunreddymanoharreddy@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="section-padding section-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-gradient-rose/5 via-transparent to-gradient-amber/5 blur-3xl" />
      <div className="relative z-10">
        <ContactPage
          email="kunreddymanoharreddy@gmail.com"
          phone="+91 9100654208"
          address="Hyderabad, India"
          socialLinks={socialLinks}
        />
      </div>
    </section>
  );
};

export default Contact;
