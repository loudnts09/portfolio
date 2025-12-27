export type Language = "pt-BR" | "en-US";

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };

  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    scrollDown: string;
  };

  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    codeTitle: string;
    codeDescription: string;
    innovationTitle: string;
    innovationDescription: string;
    passionTitle: string;
    passionDescription: string;
    photoPlaceholder: string;
  };

  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    tools: string;
    learning: string;
  };

  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    viewMore: string;
    viewGitHub: string;
    project1Title: string;
    project1Description: string;
    // project2Title: string;
    // project2Description: string;
    // project3Title: string;
    // project3Description: string;
    // project4Title: string;
    // project4Description: string;
    // project5Title: string;
    // project5Description: string;
    // project6Title: string;
    // project6Description: string;
  };

  contact: {
    title: string;
    subtitle: string;
    letsTalk: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    findMe: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };

  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Lourrayni Dantas",
      title: "Desenvolvedor de Software Full Stack",
      description:
        "Desenvolvo software com foco em soluções bem estruturadas, escaláveis e fáceis de manter. Gosto de trabalhar do back-end à interface, sempre buscando clareza no código e impacto real no produto.",
      viewProjects: "Ver Projetos",
      contactMe: "Entre em Contato",
      scrollDown: "Role para explorar",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Conheça um pouco mais sobre minha trajetória e valores",
      paragraph1:
        "Olá! Sou Lourrayni Dantas, um desenvolvedor full stack apaixonado por criar experiências digitais que realmente importam.",
      paragraph2:
        "Com anos de experiência no desenvolvimento web, especializei-me em construir aplicações modernas, escaláveis e focadas no usuário. Minha jornada começou com curiosidade e hoje se transformou em uma paixão por transformar ideias complexas em soluções elegantes.",
      paragraph3:
        "Trabalho com as tecnologias mais modernas do mercado, sempre buscando aprender e me atualizar. Acredito que o melhor código é aquele que não apenas funciona, mas que também é legível, manutenível e pensado para o futuro.",
      paragraph4:
        "Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source ou criando projetos pessoais que me desafiam a crescer continuamente.",
      codeTitle: "Código Limpo",
      codeDescription:
        "Escrevo código limpo, bem documentado e seguindo as melhores práticas da indústria para garantir manutenibilidade e escalabilidade.",
      innovationTitle: "Inovação",
      innovationDescription:
        "Sempre em busca das tecnologias mais modernas e eficientes para criar soluções que realmente fazem a diferença.",
      passionTitle: "Paixão",
      passionDescription:
        "Amo o que faço e isso se reflete em cada projeto. Cada linha de código é escrita com dedicação e atenção aos detalhes.",
      photoPlaceholder: "[Sua foto aqui]",
    },
    skills: {
      title: "Skills & Tecnologias",
      subtitle: "Tecnologias e ferramentas que domino e uso no dia a dia",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas",
      learning: "E sempre aprendendo mais! Estou constantemente explorando novas tecnologias e frameworks para me manter atualizado com as tendências do mercado.",
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos projetos que desenvolvi e dos quais me orgulho",
      demo: "Demo",
      code: "Código",
      viewMore: "Quer ver mais projetos? Confira meu GitHub!",
      viewGitHub: "Ver no GitHub",
      project1Title: "E-Commerce Moderno",
      project1Description:
        "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo. Construído com Next.js e integração com Stripe.",
      // project2Title: "Dashboard Analytics",
      // project2Description:
      //   "Dashboard interativo para análise de dados com gráficos em tempo real, filtros avançados e exportação de relatórios. Interface moderna e responsiva.",
      // project3Title: "App de Gerenciamento de Tarefas",
      // project3Description:
      //   "Aplicação full-stack para gerenciamento de tarefas com autenticação, colaboração em tempo real e notificações. Design intuitivo e funcionalidades avançadas.",
      // project4Title: "Landing Page para Startup",
      // project4Description:
      //   "Landing page moderna e otimizada para conversão com animações suaves, formulário de contato integrado e design responsivo. Performance otimizada.",
      // project5Title: "API REST Completa",
      // project5Description:
      //   "API RESTful robusta com autenticação JWT, documentação Swagger, testes automatizados e deploy em cloud. Arquitetura escalável e bem documentada.",
      // project6Title: "Portfólio Pessoal",
      // project6Description:
      //   "Site de portfólio pessoal com design moderno, animações suaves e seções interativas. Totalmente responsivo e otimizado para SEO.",
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre seu próximo projeto ou apenas dizer olá!",
      letsTalk: "Vamos conversar?",
      description:
        "Estou sempre aberto a discutir novos projetos, oportunidades criativas ou simplesmente para trocar uma ideia. Sinta-se à vontade para entrar em contato!",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      findMe: "Ou me encontre em:",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Assunto da mensagem",
      messageLabel: "Mensagem",
      messagePlaceholder: "Sua mensagem aqui...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      error: "Ocorreu um erro ao enviar. Tente novamente.",
    },
    footer: {
      rights: "© {year} Lourrayni Dantas. Todos os direitos reservados.",
    },
  },
  "en-US": {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Lourrayni Dantas",
      title: "Full Stack Developer",
      description:
        "I develop software with a focus on well-structured, scalable, and easy-to-maintain solutions. I enjoy working across the stack, from back-end to interface, always aiming for clear code and real impact on the product.",
      viewProjects: "View Projects",
      contactMe: "Get in Touch",
      scrollDown: "Scroll to explore",
    },
    about: {
      title: "About Me",
      subtitle: "Learn a bit more about my journey and values",
      paragraph1:
        "Hello! I'm Lourrayni Dantas, a full stack developer passionate about creating digital experiences that truly matter.",
      paragraph2:
        "With years of experience in web development, I've specialized in building modern, scalable, and user-focused applications. My journey started with curiosity and has now become a passion for transforming complex ideas into elegant solutions.",
      paragraph3:
        "I work with the most modern technologies in the market, always seeking to learn and stay updated. I believe that the best code is not just functional, but also readable, maintainable, and future-proof.",
      paragraph4:
        "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or creating personal projects that challenge me to grow continuously.",
      codeTitle: "Clean Code",
      codeDescription:
        "I write clean, well-documented code following industry best practices to ensure maintainability and scalability.",
      innovationTitle: "Innovation",
      innovationDescription:
        "Always seeking the most modern and efficient technologies to create solutions that truly make a difference.",
      passionTitle: "Passion",
      passionDescription:
        "I love what I do and it shows in every project. Every line of code is written with dedication and attention to detail.",
      photoPlaceholder: "[Your photo here]",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technologies and tools I master and use daily",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      learning: "And always learning more! I'm constantly exploring new technologies and frameworks to stay updated with market trends.",
    },
    projects: {
      title: "Projects",
      subtitle: "Some of the projects I've developed and am proud of",
      demo: "Demo",
      code: "Code",
      viewMore: "Want to see more projects? Check out my GitHub!",
      viewGitHub: "View on GitHub",
      project1Title: "Modern E-Commerce",
      project1Description:
        "Complete e-commerce platform with shopping cart, payment system, and admin panel. Built with Next.js and Stripe integration.",
      // project2Title: "Analytics Dashboard",
      // project2Description:
      //   "Interactive dashboard for data analysis with real-time charts, advanced filters, and report export. Modern and responsive interface.",
      // project3Title: "Task Management App",
      // project3Description:
      //   "Full-stack application for task management with authentication, real-time collaboration, and notifications. Intuitive design and advanced features.",
      // project4Title: "Startup Landing Page",
      // project4Description:
      //   "Modern and conversion-optimized landing page with smooth animations, integrated contact form, and responsive design. Optimized performance.",
      // project5Title: "Complete REST API",
      // project5Description:
      //   "Robust RESTful API with JWT authentication, Swagger documentation, automated tests, and cloud deployment. Scalable and well-documented architecture.",
      // project6Title: "Personal Portfolio",
      // project6Description:
      //   "Personal portfolio website with modern design, smooth animations, and interactive sections. Fully responsive and SEO optimized.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's talk about your next project or just say hello!",
      letsTalk: "Let's talk?",
      description:
        "I'm always open to discussing new projects, creative opportunities, or simply exchanging ideas. Feel free to reach out!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      findMe: "Or find me on:",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Message subject",
      messageLabel: "Message",
      messagePlaceholder: "Your message here...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "An error occurred while sending. Please try again.",
    },
    footer: {
      rights: "© {year} Lourrayni Dantas. All rights reserved.",
    },
  },
};




