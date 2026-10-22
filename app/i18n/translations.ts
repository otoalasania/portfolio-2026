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
      role: "Frontend Developer",
      bioBefore: "I'm Otar, a frontend developer at",
      bioLocationPrefix: ", based in",
      bioLocation: "Alicante",
      bioAfter:
        "and originally from Tbilisi. I've spent the last 5 years building production web apps with React, Next.js and TypeScript.",
      bioShort:
        "Frontend developer at Noxtton, based in Alicante. I build fast, accessible interfaces with clean UI engineering.",
      verified: "Verified",
    },
    work: {
      title: "Work",
      subtitle: "Some things I've built recently.",
      closeLabel: "Close",
      moreLabel: "More projects",
      yearLabel: "Year",
      stackLabel: "Stack",
      aboutLabel: "About",
      builtLabel: "What I built",
      screensLabel: "Screens",
      screenLabel: "Screen",
      visitSite: "Visit site",
      walkthrough: "Walkthrough on request",
      prevProject: "Prev",
      nextProject: "Next",
      showAll: "Show all",
      showLess: "Show less",
      viewProject: "View project",
      roleLabel: "Role",
      statusLabel: "Status",
      roles: { solo: "Frontend Developer (solo)", team: "Frontend Developer" },
      statuses: { live: "Live", ongoing: "Ongoing" },
      items: {
        "white-square": {
          title: "White Square",
          summary: "Real estate platform with interactive apartment navigation.",
          about:
            "A real estate platform for browsing and searching apartments. I built the whole frontend solo, from scratch to launch, including an interactive SVG view that takes you from the building down to each individual unit.",
          built: [
            "Built the entire frontend from scratch to launch",
            "Apartment search",
            "Interactive SVG navigation from the building down to each unit",
          ],
        },
        "digital-academy": {
          title: "Digital Academy / XPUP",
          summary: "Education platform running in 4 countries.",
          about:
            "An education platform live in four countries. I joined before the full launch and shipped a new design and content for the CZ and KZ markets, using a separate CMS and test environment so the live GE and GB sites were never affected. I also integrated installment payments with TBC and BOG.",
          built: [
            "Rolled out a new design and content for the Czech and Kazakh markets",
            "Separate CMS and test environment, so the live Georgian and UK sites kept running without issues",
            "CMS migrations and content work for each country",
            "Rescued a broken dev branch by reviewing 99+ conflicting files between two diverged branches",
            "Integrated installment payments with Georgian banks (TBC and BOG)",
          ],
        },
        "maqro-city": {
          title: "Maqro City Tbilisi",
          summary: "Multi-language real estate site with interactive building navigation.",
          about:
            "A property site in four languages (EN, KA, TR, RU) for a residential complex in Tbilisi. My first solo real estate build: the full frontend, including interactive building navigation, which became the foundation for later real estate projects.",
          built: [
            "Built the entire frontend solo",
            "Multi-language property site (EN, KA, TR, RU)",
            "Interactive building navigation, the foundation for later real estate projects",
          ],
        },
        "wayfarer-app": {
          title: "Wayfarer",
          summary: "Trip planning app for independent travelers",
          about:
            "A trip-planning web app for sketching out itineraries and sharing them with friends. Explored a playful, card-based interface with smooth transitions and a strong focus on mobile usability.",
          built: [
            "Designed a card-based itinerary builder with drag-to-reorder",
            "Added shareable trip links for planning with friends",
            "Tuned the whole flow for mobile-first usability",
          ],
        },
        "meridian-crm": {
          title: "Meridian CRM",
          summary: "Lightweight CRM for a small sales team",
          about:
            "A lightweight CRM built for a small B2B sales team to track leads and deals without the overhead of an enterprise tool. Focused on quick data entry and a pipeline view the whole team actually used.",
          built: [
            "Built a drag-and-drop pipeline board for tracking deal stages",
            "Simplified lead entry down to a handful of required fields",
            "Added email reminders for deals that had gone quiet",
          ],
        },
        "foundry-blog": {
          title: "Foundry Blog",
          summary: "Statically generated blog with a calm writing flow",
          about:
            "A fast, minimal blogging platform for indie writers, with a focus on clean typography and near-instant page loads. Kept the writing experience distraction-free while still supporting drafts and scheduling.",
          built: [
            "Set up static generation for near-instant page loads",
            "Designed a distraction-free writing and scheduling flow",
          ],
        },
        "northwind-inventory": {
          title: "Northwind Inventory",
          summary: "Real-time stock tracking for a warehouse floor",
          about:
            "An inventory tracking tool for a small warehouse operation, replacing a shared spreadsheet with real-time stock counts and low-stock alerts. Built to work reliably on tablets on the warehouse floor.",
          built: [
            "Replaced a shared spreadsheet with real-time stock tracking",
            "Added low-stock alerts to prevent fulfillment delays",
            "Optimized the interface for tablet use on the warehouse floor",
          ],
        },
        "lumen-builder": {
          title: "Lumen",
          summary: "Drag-and-drop site builder for freelancers",
          about:
            "A drag-and-drop site builder aimed at freelancers who wanted a portfolio site without touching code. Focused on a small set of well-designed templates over endless configuration.",
          built: [
            "Built a drag-and-drop editor backed by a small set of curated templates",
            "Kept the publishing flow to a single click from draft to live",
          ],
        },
        "tidal-booking": {
          title: "Tidal Booking",
          summary: "Class booking widget for surf and dive schools",
          about:
            "A booking widget for small surf and dive schools to manage class reservations and capacity, replacing manual phone bookings. Kept the embed lightweight enough to drop into an existing site.",
          built: [
            "Built a capacity-aware booking widget to replace manual phone bookings",
            "Kept the embeddable widget lightweight enough for existing marketing sites",
          ],
        },
        "orbit-notes": {
          title: "Orbit Notes",
          summary: "Offline-first note-taking app with quick capture",
          about:
            "A note-taking app built around fast capture and offline-first sync, so ideas can be jotted down instantly and organized later. Focused on keyboard shortcuts and a minimal, distraction-free editor.",
          built: [
            "Built offline-first sync so notes work without a connection",
            "Designed a keyboard-driven quick capture flow",
          ],
        },
      },
    },
    footer: {
      location: "Alicante, Spain",
    },
    experience: {
      title: "Experience",
      subtitle:
        "Where I've been working so far.",
      at: "at",
      items: [
        {
          role: "Frontend Developer",
          desc: "Turning designs into working websites, and keeping them running after launch.",
        },
        {
          role: "Intern",
          desc: "Got to know the codebase and worked on small UI tasks.",
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
      blurbBefore: "Outside of work I train and compete in",
      blurbTag: "Brazilian jiu-jitsu",
      blurbAfter:
        ". It's problem solving with your whole body: stay calm when you're stuck, find the small opening, and use it. The same mindset helps me a lot with bugs.",
      beltAlt: "White jiu-jitsu belt with four stripes",
      play: "Play preview",
      pause: "Pause preview",
      listenOn: "Listen on Spotify",
      backToWork: "ok, back to work",
      photoAlts: [
        "Standing alone on the mats of an empty jiu-jitsu gym",
        "White belt with four stripes resting on the mat",
        "Close-up of a jiu-jitsu gi sleeve",
        "Black gi tied with a four-stripe white belt",
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Got a role or a project in mind? Write me.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      send: "Send message",
      sending: "Sending…",
      orPrefix: "or",
      orEnterToSend: "to send",
      success: "Thanks, I'll get back to you soon.",
      error: "Something went wrong. You can email me directly at otar.alasania@gmail.com.",
      errors: {
        name: { required: "Please enter your name.", tooLong: "Keep your name under 100 characters." },
        email: {
          required: "Please enter your email.",
          invalid: "That email doesn't look right.",
          tooLong: "Keep your email under 200 characters.",
        },
        message: {
          required: "Please write a message.",
          tooShort: "Please write at least 10 characters.",
          tooLong: "Keep your message under 5000 characters.",
        },
      },
      socialLabels: { Email: "Email", GitHub: "GitHub", LinkedIn: "LinkedIn" } as Record<string, string>,
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
      role: "Desarrollador Frontend",
      bioBefore: "Soy Otar, desarrollador frontend en",
      bioLocationPrefix: ", con base en",
      bioLocation: "Alicante",
      bioAfter:
        "y originario de Tiflis. Llevo 5 años creando aplicaciones web en producción con React, Next.js y TypeScript.",
      bioShort:
        "Desarrollador frontend en Noxtton, con base en Alicante. Construyo interfaces rápidas y accesibles con una ingeniería de UI limpia.",
      verified: "Verificado",
    },
    work: {
      title: "Trabajo",
      subtitle: "Algunas cosas que he construido recientemente.",
      closeLabel: "Cerrar",
      moreLabel: "Más proyectos",
      yearLabel: "Año",
      stackLabel: "Stack",
      aboutLabel: "Sobre el proyecto",
      builtLabel: "Qué construí",
      screensLabel: "Pantallas",
      screenLabel: "Pantalla",
      visitSite: "Visitar sitio",
      walkthrough: "Recorrido bajo pedido",
      prevProject: "Anterior",
      nextProject: "Siguiente",
      showAll: "Ver todos",
      showLess: "Ver menos",
      viewProject: "Ver proyecto",
      roleLabel: "Rol",
      statusLabel: "Estado",
      roles: { solo: "Desarrollador Frontend (en solitario)", team: "Desarrollador Frontend" },
      statuses: { live: "En vivo", ongoing: "En curso" },
      items: {
        "white-square": {
          title: "White Square",
          summary: "Plataforma inmobiliaria con navegación interactiva de apartamentos.",
          about:
            "Una plataforma inmobiliaria para explorar y buscar apartamentos. Construí todo el frontend yo solo, desde cero hasta el lanzamiento, incluyendo una vista SVG interactiva que lleva desde el edificio hasta cada unidad individual.",
          built: [
            "Construí todo el frontend desde cero hasta el lanzamiento",
            "Búsqueda de apartamentos",
            "Navegación SVG interactiva desde el edificio hasta cada unidad",
          ],
        },
        "digital-academy": {
          title: "Digital Academy / XPUP",
          summary: "Plataforma educativa que funciona en 4 países.",
          about:
            "Una plataforma educativa activa en cuatro países. Me uní antes del lanzamiento completo y entregué un nuevo diseño y contenido para los mercados de CZ y KZ, con un CMS y un entorno de pruebas separados para no afectar nunca a los sitios activos de GE y GB. También integré pagos a plazos con TBC y BOG.",
          built: [
            "Lancé un nuevo diseño y contenido para los mercados checo y kazajo",
            "CMS y entorno de pruebas separados, para que los sitios activos de Georgia y Reino Unido siguieran funcionando sin problemas",
            "Migraciones de CMS y trabajo de contenido para cada país",
            "Rescaté una rama de desarrollo rota revisando más de 99 archivos en conflicto entre dos ramas divergentes",
            "Integré pagos a plazos con bancos georgianos (TBC y BOG)",
          ],
        },
        "maqro-city": {
          title: "Maqro City Tbilisi",
          summary: "Sitio inmobiliario multilingüe con navegación interactiva del edificio.",
          about:
            "Un sitio de propiedades en cuatro idiomas (EN, KA, TR, RU) para un complejo residencial en Tiflis. Mi primer proyecto inmobiliario en solitario: todo el frontend, incluida la navegación interactiva del edificio, que se convirtió en la base de proyectos inmobiliarios posteriores.",
          built: [
            "Construí todo el frontend yo solo",
            "Sitio de propiedades multilingüe (EN, KA, TR, RU)",
            "Navegación interactiva del edificio, la base de proyectos inmobiliarios posteriores",
          ],
        },
        "wayfarer-app": {
          title: "Wayfarer",
          summary: "App de planificación de viajes para viajeros independientes",
          about:
            "Una aplicación web de planificación de viajes para esbozar itinerarios y compartirlos con amigos. Se exploró una interfaz lúdica basada en tarjetas, con transiciones suaves y un fuerte enfoque en la usabilidad móvil.",
          built: [
            "Diseñé un creador de itinerarios basado en tarjetas con reordenamiento",
            "Añadí enlaces de viaje compartibles para planificar con amigos",
            "Ajusté todo el flujo priorizando la usabilidad móvil",
          ],
        },
        "meridian-crm": {
          title: "Meridian CRM",
          summary: "CRM ligero para un pequeño equipo de ventas",
          about:
            "Un CRM ligero creado para un pequeño equipo de ventas B2B, para hacer seguimiento de leads y negocios sin la complejidad de una herramienta empresarial. Centrado en una entrada de datos rápida y una vista de pipeline que todo el equipo usaba de verdad.",
          built: [
            "Construí un tablero de pipeline con arrastrar y soltar para las etapas de cada negocio",
            "Simplifiqué la entrada de leads a unos pocos campos obligatorios",
            "Añadí recordatorios por email para negocios que llevaban tiempo sin movimiento",
          ],
        },
        "foundry-blog": {
          title: "Foundry Blog",
          summary: "Blog estático con un flujo de escritura tranquilo",
          about:
            "Una plataforma de blogging rápida y minimalista para escritores independientes, centrada en una tipografía cuidada y cargas de página casi instantáneas. Mantuve la experiencia de escritura libre de distracciones sin dejar de soportar borradores y programación de publicaciones.",
          built: [
            "Configuré generación estática para cargas de página casi instantáneas",
            "Diseñé un flujo de escritura y programación libre de distracciones",
          ],
        },
        "northwind-inventory": {
          title: "Northwind Inventory",
          summary: "Control de stock en tiempo real para un almacén",
          about:
            "Una herramienta de control de inventario para una pequeña operación de almacén, que sustituyó una hoja de cálculo compartida por conteos de stock en tiempo real y alertas de stock bajo. Construida para funcionar de forma fiable en tablets en el almacén.",
          built: [
            "Sustituí una hoja de cálculo compartida por seguimiento de stock en tiempo real",
            "Añadí alertas de stock bajo para evitar retrasos en los pedidos",
            "Optimicé la interfaz para su uso en tablets dentro del almacén",
          ],
        },
        "lumen-builder": {
          title: "Lumen",
          summary: "Constructor de webs drag-and-drop para freelancers",
          about:
            "Un creador de sitios de arrastrar y soltar pensado para freelancers que querían un portfolio sin tocar código. Centrado en un pequeño conjunto de plantillas bien diseñadas en lugar de una configuración interminable.",
          built: [
            "Construí un editor de arrastrar y soltar respaldado por un pequeño conjunto de plantillas cuidadas",
            "Reduje la publicación a un solo clic entre borrador y sitio en vivo",
          ],
        },
        "tidal-booking": {
          title: "Tidal Booking",
          summary: "Widget de reservas para escuelas de surf y buceo",
          about:
            "Un widget de reservas para pequeñas escuelas de surf y buceo, para gestionar reservas de clases y aforo, sustituyendo las reservas manuales por teléfono. Mantuve el widget lo bastante ligero para integrarlo en un sitio ya existente.",
          built: [
            "Construí un widget de reservas consciente del aforo para sustituir las reservas manuales por teléfono",
            "Mantuve el widget lo bastante ligero para sitios de marketing existentes",
          ],
        },
        "orbit-notes": {
          title: "Orbit Notes",
          summary: "App de notas offline-first con captura rápida",
          about:
            "Una app de notas construida en torno a la captura rápida y la sincronización offline-first, para apuntar ideas al instante y organizarlas después. Centrada en atajos de teclado y un editor minimalista sin distracciones.",
          built: [
            "Implementé sincronización offline-first para que las notas funcionen sin conexión",
            "Diseñé un flujo de captura rápida guiado por teclado",
          ],
        },
      },
    },
    footer: {
      location: "Alicante, España",
    },
    experience: {
      title: "Experiencia",
      subtitle:
        "Dónde he trabajado hasta ahora.",
      at: "en",
      items: [
        {
          role: "Desarrollador Frontend",
          desc: "Convierto diseños en sitios web funcionales y los mantengo después del lanzamiento.",
        },
        {
          role: "Becario",
          desc: "Conocí el código del proyecto y trabajé en pequeñas tareas de interfaz.",
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
      blurbBefore: "Fuera del trabajo entreno y compito en",
      blurbTag: "jiu-jitsu brasileño",
      blurbAfter:
        ". Es resolver problemas con todo el cuerpo: mantener la calma cuando estás atascado, encontrar la pequeña apertura y aprovecharla. Esa misma forma de pensar me ayuda mucho con los bugs.",
      beltAlt: "Cinturón blanco de jiu-jitsu con cuatro grados",
      play: "Reproducir avance",
      pause: "Pausar avance",
      listenOn: "Escuchar en Spotify",
      backToWork: "vale, de vuelta al trabajo",
      photoAlts: [
        "De pie, solo, sobre el tatami de un gimnasio de jiu-jitsu vacío",
        "Cinturón blanco con cuatro grados sobre el tatami",
        "Primer plano de la manga de un kimono de jiu-jitsu",
        "Kimono negro atado con un cinturón blanco de cuatro grados",
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un puesto o un proyecto en mente? Escríbeme.",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando…",
      orPrefix: "o",
      orEnterToSend: "para enviar",
      success: "Gracias, te responderé pronto.",
      error: "Algo salió mal. Puedes escribirme directamente a otar.alasania@gmail.com.",
      errors: {
        name: { required: "Escribe tu nombre.", tooLong: "El nombre debe tener menos de 100 caracteres." },
        email: {
          required: "Escribe tu correo electrónico.",
          invalid: "Ese correo no parece válido.",
          tooLong: "El correo debe tener menos de 200 caracteres.",
        },
        message: {
          required: "Escribe un mensaje.",
          tooShort: "Escribe al menos 10 caracteres.",
          tooLong: "El mensaje debe tener menos de 5000 caracteres.",
        },
      },
      socialLabels: { Email: "Correo", GitHub: "GitHub", LinkedIn: "LinkedIn" } as Record<string, string>,
    },
  },
};
