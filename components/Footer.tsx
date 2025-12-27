"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/loudnts09",
      ariaLabel: "Visite meu GitHub",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/lourrayni-dantas",
      ariaLabel: "Visite meu LinkedIn",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:lourraynidantass@gmail.com",
      ariaLabel: "Envie um email",
    },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-dark-400 dark:text-dark-500">
              {t.footer.rights.replace("{year}", currentYear.toString())}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-dark-400 dark:text-dark-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 text-xl"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
