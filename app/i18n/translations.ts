export type Locale = "en" | "es";

// Item arrays below are matched by index to the corresponding arrays in
// ../data.ts (experience, ventures, writing) — keep the order in sync.
// work.items is keyed by project slug instead (see `projects` in ../data.ts).
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
      closeLabel: "Close",
      viewSite: "View live site",
      moreLabel: "More projects",
      prevImage: "Previous image",
      nextImage: "Next image",
      showAll: "Show all",
      showLess: "Show less",
      viewProject: "View project",
      items: {
        "aurora-dashboard": {
          title: "Aurora Dashboard",
          summary: "Real-time usage and billing analytics for a SaaS team",
          description:
            "An internal analytics dashboard built to help a small SaaS team track usage and billing metrics in real time. Focused on fast data loading, accessible charts, and a component library that scaled across the rest of the product.",
          highlights: [
            "Designed and built the component library from scratch",
            "Cut initial dashboard load time by optimizing data fetching",
            "Built accessible charts usable with keyboard and screen readers",
          ],
        },
        "cedar-commerce": {
          title: "Cedar Commerce",
          summary: "Headless storefront rebuild off a legacy CMS",
          description:
            "A headless storefront rebuild for a mid-size e-commerce brand, moving off a legacy CMS onto a fast, componentized frontend. Cut page load times noticeably while keeping the checkout flow accessible and easy to maintain.",
          highlights: [
            "Migrated the storefront off a legacy CMS to a headless setup",
            "Rebuilt the checkout flow with accessibility as a first-class concern",
            "Set up a componentized frontend the team could maintain long-term",
          ],
        },
        "pulse-analytics": {
          title: "Pulse Analytics",
          summary: "Product analytics with fast, accessible charts",
          description:
            "A lightweight analytics widget embedded across partner sites, designed to drop into any page with minimal setup. Built with strict performance budgets, keeping the bundle small without sacrificing the interface.",
          highlights: [
            "Built an embeddable widget that drops into any page with one script tag",
            "Kept the bundle under a strict size budget for partner sites",
            "Designed the interface to stay legible at small embedded sizes",
          ],
        },
        "wayfarer-app": {
          title: "Wayfarer",
          summary: "Trip planning app for independent travelers",
          description:
            "A trip-planning web app for sketching out itineraries and sharing them with friends. Explored a playful, card-based interface with smooth transitions and a strong focus on mobile usability.",
          highlights: [
            "Designed a card-based itinerary builder with drag-to-reorder",
            "Added shareable trip links for planning with friends",
            "Tuned the whole flow for mobile-first usability",
          ],
        },
        "meridian-crm": {
          title: "Meridian CRM",
          summary: "Lightweight CRM for a small sales team",
          description:
            "A lightweight CRM built for a small B2B sales team to track leads and deals without the overhead of an enterprise tool. Focused on quick data entry and a pipeline view the whole team actually used.",
          highlights: [
            "Built a drag-and-drop pipeline board for tracking deal stages",
            "Simplified lead entry down to a handful of required fields",
            "Added email reminders for deals that had gone quiet",
          ],
        },
        "foundry-blog": {
          title: "Foundry Blog",
          summary: "Statically generated blog with a calm writing flow",
          description:
            "A fast, minimal blogging platform for indie writers, with a focus on clean typography and near-instant page loads. Kept the writing experience distraction-free while still supporting drafts and scheduling.",
          highlights: [
            "Set up static generation for near-instant page loads",
            "Designed a distraction-free writing and scheduling flow",
          ],
        },
        "northwind-inventory": {
          title: "Northwind Inventory",
          summary: "Real-time stock tracking for a warehouse floor",
          description:
            "An inventory tracking tool for a small warehouse operation, replacing a shared spreadsheet with real-time stock counts and low-stock alerts. Built to work reliably on tablets on the warehouse floor.",
          highlights: [
            "Replaced a shared spreadsheet with real-time stock tracking",
            "Added low-stock alerts to prevent fulfillment delays",
            "Optimized the interface for tablet use on the warehouse floor",
          ],
        },
        "lumen-builder": {
          title: "Lumen",
          summary: "Drag-and-drop site builder for freelancers",
          description:
            "A drag-and-drop site builder aimed at freelancers who wanted a portfolio site without touching code. Focused on a small set of well-designed templates over endless configuration.",
          highlights: [
            "Built a drag-and-drop editor backed by a small set of curated templates",
            "Kept the publishing flow to a single click from draft to live",
          ],
        },
        "tidal-booking": {
          title: "Tidal Booking",
          summary: "Class booking widget for surf and dive schools",
          description:
            "A booking widget for small surf and dive schools to manage class reservations and capacity, replacing manual phone bookings. Kept the embed lightweight enough to drop into an existing site.",
          highlights: [
            "Built a capacity-aware booking widget to replace manual phone bookings",
            "Kept the embeddable widget lightweight enough for existing marketing sites",
          ],
        },
        "orbit-notes": {
          title: "Orbit Notes",
          summary: "Offline-first note-taking app with quick capture",
          description:
            "A note-taking app built around fast capture and offline-first sync, so ideas can be jotted down instantly and organized later. Focused on keyboard shortcuts and a minimal, distraction-free editor.",
          highlights: [
            "Built offline-first sync so notes work without a connection",
            "Designed a keyboard-driven quick capture flow",
          ],
        },
      },
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
      closeLabel: "Cerrar",
      viewSite: "Ver sitio en vivo",
      moreLabel: "Más proyectos",
      prevImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      showAll: "Ver todos",
      showLess: "Ver menos",
      viewProject: "Ver proyecto",
      items: {
        "aurora-dashboard": {
          title: "Aurora Dashboard",
          summary: "Analítica de uso y facturación en tiempo real para un equipo SaaS",
          description:
            "Un panel de analítica interno creado para ayudar a un pequeño equipo de SaaS a monitorizar el uso y la facturación en tiempo real. Centrado en una carga de datos rápida, gráficos accesibles y una librería de componentes que se extendió al resto del producto.",
          highlights: [
            "Diseñé y construí la librería de componentes desde cero",
            "Reduje el tiempo de carga inicial optimizando la obtención de datos",
            "Construí gráficos accesibles usables con teclado y lectores de pantalla",
          ],
        },
        "cedar-commerce": {
          title: "Cedar Commerce",
          summary: "Reconstrucción headless de una tienda sobre un CMS heredado",
          description:
            "Una reconstrucción de tienda headless para una marca de comercio electrónico de tamaño medio, migrando de un CMS heredado a un frontend rápido y basado en componentes. Redujo notablemente los tiempos de carga manteniendo el checkout accesible y fácil de mantener.",
          highlights: [
            "Migré la tienda de un CMS heredado a una configuración headless",
            "Reconstruí el flujo de checkout priorizando la accesibilidad",
            "Configuré un frontend basado en componentes fácil de mantener a largo plazo",
          ],
        },
        "pulse-analytics": {
          title: "Pulse Analytics",
          summary: "Analítica de producto con gráficos rápidos y accesibles",
          description:
            "Un widget de analítica ligero integrado en varios sitios de partners, diseñado para instalarse en cualquier página con una configuración mínima. Construido con presupuestos de rendimiento estrictos, manteniendo el paquete pequeño sin sacrificar la interfaz.",
          highlights: [
            "Construí un widget integrable que se instala con una sola etiqueta de script",
            "Mantuve el paquete dentro de un presupuesto de tamaño estricto",
            "Diseñé la interfaz para que fuera legible incluso en tamaños pequeños",
          ],
        },
        "wayfarer-app": {
          title: "Wayfarer",
          summary: "App de planificación de viajes para viajeros independientes",
          description:
            "Una aplicación web de planificación de viajes para esbozar itinerarios y compartirlos con amigos. Se exploró una interfaz lúdica basada en tarjetas, con transiciones suaves y un fuerte enfoque en la usabilidad móvil.",
          highlights: [
            "Diseñé un creador de itinerarios basado en tarjetas con reordenamiento",
            "Añadí enlaces de viaje compartibles para planificar con amigos",
            "Ajusté todo el flujo priorizando la usabilidad móvil",
          ],
        },
        "meridian-crm": {
          title: "Meridian CRM",
          summary: "CRM ligero para un pequeño equipo de ventas",
          description:
            "Un CRM ligero creado para un pequeño equipo de ventas B2B, para hacer seguimiento de leads y negocios sin la complejidad de una herramienta empresarial. Centrado en una entrada de datos rápida y una vista de pipeline que todo el equipo usaba de verdad.",
          highlights: [
            "Construí un tablero de pipeline con arrastrar y soltar para las etapas de cada negocio",
            "Simplifiqué la entrada de leads a unos pocos campos obligatorios",
            "Añadí recordatorios por email para negocios que llevaban tiempo sin movimiento",
          ],
        },
        "foundry-blog": {
          title: "Foundry Blog",
          summary: "Blog estático con un flujo de escritura tranquilo",
          description:
            "Una plataforma de blogging rápida y minimalista para escritores independientes, centrada en una tipografía cuidada y cargas de página casi instantáneas. Mantuve la experiencia de escritura libre de distracciones sin dejar de soportar borradores y programación de publicaciones.",
          highlights: [
            "Configuré generación estática para cargas de página casi instantáneas",
            "Diseñé un flujo de escritura y programación libre de distracciones",
          ],
        },
        "northwind-inventory": {
          title: "Northwind Inventory",
          summary: "Control de stock en tiempo real para un almacén",
          description:
            "Una herramienta de control de inventario para una pequeña operación de almacén, que sustituyó una hoja de cálculo compartida por conteos de stock en tiempo real y alertas de stock bajo. Construida para funcionar de forma fiable en tablets en el almacén.",
          highlights: [
            "Sustituí una hoja de cálculo compartida por seguimiento de stock en tiempo real",
            "Añadí alertas de stock bajo para evitar retrasos en los pedidos",
            "Optimicé la interfaz para su uso en tablets dentro del almacén",
          ],
        },
        "lumen-builder": {
          title: "Lumen",
          summary: "Constructor de webs drag-and-drop para freelancers",
          description:
            "Un creador de sitios de arrastrar y soltar pensado para freelancers que querían un portfolio sin tocar código. Centrado en un pequeño conjunto de plantillas bien diseñadas en lugar de una configuración interminable.",
          highlights: [
            "Construí un editor de arrastrar y soltar respaldado por un pequeño conjunto de plantillas cuidadas",
            "Reduje la publicación a un solo clic entre borrador y sitio en vivo",
          ],
        },
        "tidal-booking": {
          title: "Tidal Booking",
          summary: "Widget de reservas para escuelas de surf y buceo",
          description:
            "Un widget de reservas para pequeñas escuelas de surf y buceo, para gestionar reservas de clases y aforo, sustituyendo las reservas manuales por teléfono. Mantuve el widget lo bastante ligero para integrarlo en un sitio ya existente.",
          highlights: [
            "Construí un widget de reservas consciente del aforo para sustituir las reservas manuales por teléfono",
            "Mantuve el widget lo bastante ligero para sitios de marketing existentes",
          ],
        },
        "orbit-notes": {
          title: "Orbit Notes",
          summary: "App de notas offline-first con captura rápida",
          description:
            "Una app de notas construida en torno a la captura rápida y la sincronización offline-first, para apuntar ideas al instante y organizarlas después. Centrada en atajos de teclado y un editor minimalista sin distracciones.",
          highlights: [
            "Implementé sincronización offline-first para que las notas funcionen sin conexión",
            "Diseñé un flujo de captura rápida guiado por teclado",
          ],
        },
      },
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
