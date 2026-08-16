export type Locale = "en" | "es";

// Item arrays below are matched by index to the corresponding arrays in
// ../data.ts (experience, ventures, writing) — keep the order in sync.
export const translations = {
  en: {
    nav: {
      top: "Profile",
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      stack: "Stack",
      ventures: "Ventures",
      writing: "Writing",
      personal: "Personal",
      contact: "Contact",
      more: "More",
      less: "Less",
    },
    profile: {
      role: "Mid Frontend Developer",
      bioBefore: "Hey, I'm Otar a frontend developer at",
      bioLocationPrefix: "based in",
      bioLocation: "Alicante, Spain",
      bioAfter:
        "(originally from Tbilisi, Georgia), where I specialize in building fast, accessible interfaces with a strong focus on performance and clean UI engineering.",
      bioShort:
        "Frontend developer at Noxtton, based in Alicante. I build fast, accessible interfaces with clean UI engineering.",
      verified: "Verified",
    },
    work: {
      title: "Work",
      subtitle: "Below are some select projects, full walkthroughs on request",
    },
    experience: {
      title: "Experience",
      subtitle:
        "Throughout my career, I've worked on various projects, from building scalable systems to designing user-friendly interfaces. Here's a brief overview.",
      at: "at",
      items: [
        {
          role: "Frontend Developer",
          desc: "Building and maintaining frontend features and interfaces at Noxtton.",
        },
        {
          role: "Intern",
          desc: "Supported the frontend team, learning the codebase and contributing to UI work.",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle:
        "A mix of the soft skills that shape how I work, and the technical tools I use to bring ideas to life.",
      groups: [
        {
          category: "General",
          items: [
            "Critical Thinking",
            "Communication",
            "Problem Solving",
            "Collaboration",
            "Attention to Detail",
            "Adaptability",
          ],
        },
        {
          category: "Technical",
          items: [
            "React",
            "TypeScript",
            "Next.js",
            "CSS & Animation",
            "Figma",
            "Accessibility",
            "Design Systems",
            "Git & CI/CD",
          ],
        },
      ],
    },
    stack: { title: "Stack" },
    ventures: {
      title: "Ventures",
      items: [
        { desc: "Framer Template Store" },
        { desc: "Website Directory" },
        { desc: "Font Directory" },
      ],
    },
    writing: {
      title: "Writing",
      minutesSuffix: "m",
      items: [
        { title: "How to think like both a designer & engineer" },
        { title: "UI Performance" },
        { title: "How AI is changing my workflow" },
        { title: "Design tokens 101" },
        { title: "Hello world" },
      ],
    },
    personal: {
      title: "Personal",
      blurb: "In my spare time, I enjoy listening to music and taking photos with my Leica M6",
      mostReplayed: "Most replayed this month",
      listenOnSpotify: "Listen on Spotify",
      shotWith: "Shot with Leica M6",
      seeMoreIG: "See more on IG",
    },
    contact: {
      title: "Contact",
      subtitle: "You can contact me using the form or via the links below.",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      send: "Send message",
      orPrefix: "or",
      orEnterToSend: "to send",
      socialLabels: { Email: "Email", "X.com": "X.com", GitHub: "GitHub", LinkedIn: "LinkedIn" } as Record<
        string,
        string
      >,
      mailto: {
        subjectPrefix: "Portfolio contact from",
        someone: "someone",
        unknown: "unknown",
        noEmailGiven: "no email given",
      },
    },
  },
  es: {
    nav: {
      top: "Perfil",
      work: "Trabajo",
      experience: "Experiencia",
      skills: "Habilidades",
      stack: "Stack",
      ventures: "Proyectos",
      writing: "Escritura",
      personal: "Personal",
      contact: "Contacto",
      more: "Más",
      less: "Menos",
    },
    profile: {
      role: "Desarrollador Frontend Mid",
      bioBefore: "Hola, soy Otar, desarrollador frontend en",
      bioLocationPrefix: "con base en",
      bioLocation: "Alicante, España",
      bioAfter:
        "(originario de Tiflis, Georgia), donde me especializo en construir interfaces rápidas y accesibles con un fuerte enfoque en el rendimiento y una ingeniería de UI limpia.",
      bioShort:
        "Desarrollador frontend en Noxtton, con base en Alicante. Construyo interfaces rápidas y accesibles con una ingeniería de UI limpia.",
      verified: "Verificado",
    },
    work: {
      title: "Trabajo",
      subtitle: "A continuación, algunos proyectos seleccionados; recorridos completos bajo pedido",
    },
    experience: {
      title: "Experiencia",
      subtitle:
        "A lo largo de mi carrera, he trabajado en diversos proyectos, desde la construcción de sistemas escalables hasta el diseño de interfaces fáciles de usar. Aquí tienes un breve resumen.",
      at: "en",
      items: [
        {
          role: "Desarrollador Frontend",
          desc: "Construyendo y manteniendo funcionalidades e interfaces frontend en Noxtton.",
        },
        {
          role: "Becario",
          desc: "Apoyé al equipo de frontend, aprendiendo la base de código y contribuyendo al trabajo de UI.",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle:
        "Una mezcla de las habilidades blandas que definen cómo trabajo, y las herramientas técnicas que uso para dar vida a las ideas.",
      groups: [
        {
          category: "General",
          items: [
            "Pensamiento crítico",
            "Comunicación",
            "Resolución de problemas",
            "Colaboración",
            "Atención al detalle",
            "Adaptabilidad",
          ],
        },
        {
          category: "Técnicas",
          items: [
            "React",
            "TypeScript",
            "Next.js",
            "CSS y Animación",
            "Figma",
            "Accesibilidad",
            "Sistemas de diseño",
            "Git y CI/CD",
          ],
        },
      ],
    },
    stack: { title: "Stack" },
    ventures: {
      title: "Proyectos",
      items: [
        { desc: "Tienda de plantillas Framer" },
        { desc: "Directorio de sitios web" },
        { desc: "Directorio de fuentes" },
      ],
    },
    writing: {
      title: "Escritura",
      minutesSuffix: "m",
      items: [
        { title: "Cómo pensar como diseñador e ingeniero a la vez" },
        { title: "Rendimiento de UI" },
        { title: "Cómo la IA está cambiando mi flujo de trabajo" },
        { title: "Fundamentos de los tokens de diseño" },
        { title: "Hola mundo" },
      ],
    },
    personal: {
      title: "Personal",
      blurb: "En mi tiempo libre, disfruto escuchar música y tomar fotos con mi Leica M6",
      mostReplayed: "Lo más reproducido este mes",
      listenOnSpotify: "Escuchar en Spotify",
      shotWith: "Tomada con Leica M6",
      seeMoreIG: "Ver más en IG",
    },
    contact: {
      title: "Contacto",
      subtitle: "Puedes contactarme usando el formulario o a través de los enlaces de abajo.",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Mensaje",
      send: "Enviar mensaje",
      orPrefix: "o",
      orEnterToSend: "para enviar",
      socialLabels: { Email: "Correo", "X.com": "X.com", GitHub: "GitHub", LinkedIn: "LinkedIn" } as Record<
        string,
        string
      >,
      mailto: {
        subjectPrefix: "Contacto desde el portafolio de",
        someone: "alguien",
        unknown: "desconocido",
        noEmailGiven: "sin correo",
      },
    },
  },
};
