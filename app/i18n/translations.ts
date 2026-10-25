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
      throwbackBefore: "And here's where it all started:",
      throwbackLink: "my first portfolio, 2021",
      closingNote:
        "Besides these, I've also built landing pages and company websites, and worked on smaller features, improvements and fixes across other projects. The projects above are the ones I'm most proud of.",
      yearLabel: "Year",
      stackLabel: "Stack",
      aboutLabel: "About",
      highlightsLabel: "Highlights",
      languagesLabel: "Languages",
      screensLabel: "Screens",
      screenLabel: "Screen",
      visitSite: "Visit site",
      prevProject: "Prev",
      nextProject: "Next",
      showAll: "Show all",
      showLess: "Show less",
      viewProject: "View project",
      roleLabel: "Role",
      statusLabel: "Status",
      roles: { built: "Built by me", "main-contributor": "Main contributor", contributor: "Contributor" },
      statuses: { live: "Live", maintained: "Live · maintained", ongoing: "Ongoing" },
      items: {
        "white-square": {
          tagline: "Real estate platform with interactive apartment navigation.",
          description:
            "A multilingual real estate platform where buyers explore projects and choose an apartment by clicking through interactive SVG plans, from the building down to the block, floor and unit. I built the whole frontend solo, from zero to launch, and I still maintain it. All content comes from a headless CMS, and the site is built for SEO from the start.",
          highlights: [
            "Interactive SVG plan selector (building → block → floor → unit), generated from CMS map data",
            "Server-side PDF export of reports with Puppeteer, with caching and merged duplicate renders",
            "Filterable apartment and commercial listings with URL-synced filters, saved favourites and a MapLibre map",
            "Lead forms with React Hook Form + Zod, sent through a server route that keeps the API key off the client",
            "SEO: locale-split sitemaps, JSON-LD and a shared metadata builder; 3 languages with locale-prefixed URLs",
          ],
        },
        "digital-academy": {
          tagline: "Education platform running in 4 countries.",
          description:
            "An education platform live in four countries, each with its own domain and content. I joined before the full launch and became one of the main developers on the project. I shipped a new design and content for the Czech and Kazakh markets on a separate CMS and test environment, so the live Georgian and UK sites kept running without issues. I also integrated installment payments with Georgian banks.",
          highlights: [
            "New design and content rollout for the Czech and Kazakh markets",
            "Separate CMS and test environment, so the live Georgian and UK sites were never affected",
            "CMS migrations and content work for each country",
            "Brought a broken development branch back to life: reviewed 99+ conflicting files between two diverged branches so the team could test and release again",
            "Installment payments with Georgian banks (TBC and BOG)",
          ],
        },
        "maqro-city": {
          tagline: "Multilingual real estate site with an interactive apartment finder.",
          description:
            "A property site in four languages for a residential complex in Tbilisi, with separate \"live\" and \"investment\" content modes for different buyers. It was my first real estate build: I built the full frontend, including the interactive apartment finder that became the foundation for my later real estate projects. I still maintain the site.",
          highlights: [
            "Interactive SVG apartment finder with drill-down (building → block → floor → apartment) and filters",
            "4 languages (EN, KA, TR, RU) and two content modes: \"live\" and \"investment\"",
            "SEO: JSON-LD, 5 XML sitemaps, middleware that normalizes URLs with 301 redirects, ISR",
            "Content refreshes automatically when a visitor returns to a stale tab",
            "Zod-validated lead forms with UTM tracking, and an in-site PDF magazine viewer",
          ],
        },
        "namr-gov": {
          tagline: "Government website for Georgia's mining and licensing agency.",
          description:
            "The official website of Georgia's national agency for mineral resources: licenses, auctions, geology, public information and media, in Georgian and English. I built it from scratch to launch, with about 13 pages fed from a headless CMS and a responsive layout that scales precisely from the desktop and mobile designs.",
          highlights: [
            "Built from scratch to launch: about 13 pages (licenses, auctions, geology, mining sector, public information, media)",
            "CMS content refreshed every 15 minutes, with TypeScript types generated from the CMS schema",
            "Viewport-scaled responsive layout based on the 1440px desktop and 390px mobile designs",
            "Bilingual UI and CMS content with fallback to the default language",
            "Header that hides on scroll, timeline and gallery sliders, scroll animations",
          ],
        },
        "efes-georgia": {
          tagline: "Corporate website for a beverage company.",
          description:
            "A bilingual corporate site for one of Georgia's biggest beverage companies. I was the main frontend contributor, building the careers and job application flow, contact forms, the age-verification gate and a reusable SEO component, and running much of the pre-launch design QA.",
          highlights: [
            "Careers and vacancy pages (dynamic routes), job application form with CV upload, contact form",
            "Site-wide age-verification gate and a reusable SEO component (Open Graph and Twitter tags) on every page",
            "English and Georgian routing, including English slugs for Georgian content",
            "Coverage page with alphabet navigation (EN and KA) and CMS content modelling",
            "Pixel-level design QA plus iOS and Safari fixes before launch",
          ],
        },
        "maqro": {
          tagline: "Multilingual corporate site for a development group.",
          description:
            "The corporate website of Maqro Group, in four languages, covering its development, construction, tourism and business sectors. I started the project and owned the frontend, and I rebuilt pages so they match the design exactly.",
          highlights: [
            "Started the project and owned the frontend; rebuilt pages to match the design pixel for pixel",
            "Script that generates TypeScript types from the CMS schema",
            "SEO and analytics: Open Graph, hreflang, JSON-LD, gtag",
            "4 languages, with static pages refreshed from the CMS every 15 minutes",
            "Sector pages with a custom project carousel and video gallery",
          ],
        },
        "maqro-promo": {
          tagline: "Promo landing page with a payment-plan calculator.",
          description:
            "A bilingual promotional landing page for the Maqro City development. Its centerpiece is a payment-plan calculator that switches between USD and GEL using the National Bank of Georgia exchange rate, next to a validated contact form and a media slider.",
          highlights: [
            "Payment-plan calculator with live USD/GEL conversion from the National Bank of Georgia rate, plus discount and installment math",
            "Contact form with Zod validation, a phone input with country codes and an email API route",
            "Swiper slider with separate mobile behavior and an embedded map",
            "10 CMS sections loaded in parallel, refreshed every 15 minutes",
          ],
        },
        "healthy-water": {
          tagline: "Corporate site for a drinks producer.",
          description:
            "A bilingual corporate site for a Georgian drinks producer. I contributed front-end polish and bug fixes across the main pages, added CMS-driven product fields, and made content updates show up faster.",
          highlights: [
            "Front-end polish and bug fixes across the header, product, export, about and factory pages",
            "Brand-specific product fields and optional page videos driven by the CMS",
            "Made Georgian the default language and reworked the language switcher",
            "CSS hover animations for the site's arrow buttons",
            "Tuned ISR so CMS changes appear in 2 minutes instead of 15",
          ],
        },
        "nabeghlavi": {
          tagline: "History page for a mineral water brand.",
          description:
            "One of my first projects: the History page of a well-known Georgian mineral water brand. I built a scroll-animated banner and a year-by-year timeline, fed from content models I defined in the CMS, plus the history slider on the home page.",
          highlights: [
            "Built the History page: scroll-animated banner and year-by-year chronology timeline",
            "Custom scroll hook driving the page's scroll-based animations",
            "Responsive history slider on the home page",
            "CMS content models for all of it, Georgian localization fixes and a reusable language switcher",
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
      throwbackBefore: "Y aquí es donde empezó todo:",
      throwbackLink: "mi primer portfolio, 2021",
      closingNote:
        "Además de estos, también he creado landing pages y webs de empresa, y he trabajado en funcionalidades, mejoras y arreglos más pequeños en otros proyectos. Los proyectos de arriba son de los que estoy más orgulloso.",
      yearLabel: "Año",
      stackLabel: "Tecnologías",
      aboutLabel: "Sobre el proyecto",
      highlightsLabel: "Puntos clave",
      languagesLabel: "Idiomas",
      screensLabel: "Pantallas",
      screenLabel: "Pantalla",
      visitSite: "Ver sitio",
      prevProject: "Anterior",
      nextProject: "Siguiente",
      showAll: "Ver todos",
      showLess: "Ver menos",
      viewProject: "Ver proyecto",
      roleLabel: "Rol",
      statusLabel: "Estado",
      roles: { built: "Creado por mí", "main-contributor": "Colaborador principal", contributor: "Colaborador" },
      statuses: { live: "En producción", maintained: "En producción · mantenimiento", ongoing: "En curso" },
      items: {
        "white-square": {
          tagline: "Plataforma inmobiliaria con navegación interactiva de apartamentos.",
          description:
            "Una plataforma inmobiliaria multilingüe donde el comprador explora proyectos y elige un apartamento navegando por planos SVG interactivos: del edificio al bloque, la planta y la unidad. Construí todo el frontend yo solo, desde cero hasta el lanzamiento, y sigo manteniéndolo. Todo el contenido viene de un CMS headless y el sitio está pensado para SEO desde el principio.",
          highlights: [
            "Selector de planos SVG interactivo (edificio → bloque → planta → unidad), generado con datos del CMS",
            "Exportación de informes a PDF en el servidor con Puppeteer, con caché y renderizados duplicados unificados",
            "Listados de apartamentos y locales con filtros sincronizados con la URL, favoritos guardados y mapa MapLibre",
            "Formularios de contacto con React Hook Form + Zod, enviados por una ruta de servidor que protege la clave de la API",
            "SEO: sitemaps por idioma, JSON-LD y un generador de metadatos compartido; 3 idiomas con prefijo en la URL",
          ],
        },
        "digital-academy": {
          tagline: "Plataforma educativa que funciona en 4 países.",
          description:
            "Una plataforma educativa activa en cuatro países, cada uno con su propio dominio y contenido. Me uní antes del lanzamiento completo y me convertí en uno de los desarrolladores principales del proyecto. Entregué un nuevo diseño y contenido para los mercados checo y kazajo en un CMS y un entorno de pruebas separados, para que los sitios activos de Georgia y Reino Unido siguieran funcionando sin problemas. También integré pagos a plazos con bancos georgianos.",
          highlights: [
            "Nuevo diseño y contenido para los mercados checo y kazajo",
            "CMS y entorno de pruebas separados, sin afectar nunca a los sitios activos de Georgia y Reino Unido",
            "Migraciones del CMS y trabajo de contenido para cada país",
            "Recuperé una rama de desarrollo rota: revisé más de 99 archivos en conflicto entre dos ramas divergentes para que el equipo pudiera volver a probar y publicar",
            "Pagos a plazos con bancos georgianos (TBC y BOG)",
          ],
        },
        "maqro-city": {
          tagline: "Sitio inmobiliario multilingüe con buscador interactivo de apartamentos.",
          description:
            "Un sitio inmobiliario en cuatro idiomas para un complejo residencial en Tiflis, con dos modos de contenido, \"vivir\" e \"invertir\", para distintos compradores. Fue mi primer proyecto inmobiliario: construí todo el frontend, incluido el buscador interactivo de apartamentos, que se convirtió en la base de mis siguientes proyectos inmobiliarios. Sigo manteniendo el sitio.",
          highlights: [
            "Buscador de apartamentos SVG interactivo (edificio → bloque → planta → apartamento) con filtros",
            "4 idiomas (EN, KA, TR, RU) y dos modos de contenido: \"vivir\" e \"invertir\"",
            "SEO: JSON-LD, 5 sitemaps XML, middleware que normaliza URLs con redirecciones 301, ISR",
            "El contenido se actualiza solo cuando el visitante vuelve a una pestaña antigua",
            "Formularios validados con Zod con seguimiento UTM y un visor de revista PDF integrado",
          ],
        },
        "namr-gov": {
          tagline: "Web gubernamental de la agencia de minería y licencias de Georgia.",
          description:
            "La web oficial de la agencia nacional de recursos minerales de Georgia: licencias, subastas, geología, información pública y medios, en georgiano e inglés. La construí desde cero hasta el lanzamiento, con unas 13 páginas alimentadas por un CMS headless y un diseño responsive que escala con precisión a partir de los diseños de escritorio y móvil.",
          highlights: [
            "Construida desde cero hasta el lanzamiento: unas 13 páginas (licencias, subastas, geología, sector minero, información pública, medios)",
            "Contenido del CMS actualizado cada 15 minutos, con tipos TypeScript generados desde el esquema del CMS",
            "Diseño responsive escalado al viewport según los diseños de 1440px (escritorio) y 390px (móvil)",
            "Interfaz y contenido del CMS bilingües, con idioma por defecto como respaldo",
            "Cabecera que se oculta al hacer scroll, sliders de línea de tiempo y galería, animaciones al hacer scroll",
          ],
        },
        "efes-georgia": {
          tagline: "Sitio web corporativo de una empresa de bebidas.",
          description:
            "Un sitio corporativo bilingüe para una de las mayores empresas de bebidas de Georgia. Fui el colaborador principal del frontend: construí el flujo de empleo y solicitudes, los formularios de contacto, la verificación de edad y un componente SEO reutilizable, y me encargué de gran parte del control de calidad del diseño antes del lanzamiento.",
          highlights: [
            "Páginas de empleo y vacantes (rutas dinámicas), formulario de solicitud con subida de CV, formulario de contacto",
            "Verificación de edad en todo el sitio y un componente SEO reutilizable (Open Graph y Twitter) en todas las páginas",
            "Rutas en inglés y georgiano, con slugs en inglés para el contenido georgiano",
            "Página de cobertura con navegación alfabética (EN y KA) y modelado de contenido en el CMS",
            "Control de calidad del diseño al píxel y correcciones para iOS y Safari antes del lanzamiento",
          ],
        },
        "maqro": {
          tagline: "Sitio corporativo multilingüe de un grupo de desarrollo.",
          description:
            "La web corporativa de Maqro Group, en cuatro idiomas, con sus sectores de desarrollo, construcción, turismo y negocios. Inicié el proyecto y fui responsable del frontend, y reconstruí páginas para que coincidieran exactamente con el diseño.",
          highlights: [
            "Inicié el proyecto y fui responsable del frontend; reconstruí páginas para que coincidieran al píxel con el diseño",
            "Script que genera tipos TypeScript desde el esquema del CMS",
            "SEO y analítica: Open Graph, hreflang, JSON-LD, gtag",
            "4 idiomas, con páginas estáticas actualizadas desde el CMS cada 15 minutos",
            "Páginas de sector con carrusel de proyectos y galería de vídeos propios",
          ],
        },
        "maqro-promo": {
          tagline: "Landing promocional con calculadora de planes de pago.",
          description:
            "Una landing promocional bilingüe para el desarrollo Maqro City. Su pieza central es una calculadora de planes de pago que cambia entre USD y GEL con el tipo de cambio del Banco Nacional de Georgia, junto a un formulario de contacto validado y un slider multimedia.",
          highlights: [
            "Calculadora de planes de pago con conversión USD/GEL en tiempo real según el Banco Nacional de Georgia, con descuentos y cuotas",
            "Formulario de contacto con validación Zod, campo de teléfono con prefijos de país y una ruta API que envía el email",
            "Slider con Swiper con comportamiento propio en móvil y un mapa integrado",
            "10 secciones del CMS cargadas en paralelo, actualizadas cada 15 minutos",
          ],
        },
        "healthy-water": {
          tagline: "Sitio corporativo de un productor de bebidas.",
          description:
            "Un sitio corporativo bilingüe para un productor de bebidas georgiano. Contribuí con mejoras de interfaz y corrección de errores en las páginas principales, añadí campos de producto gestionados desde el CMS e hice que las actualizaciones de contenido aparecieran más rápido.",
          highlights: [
            "Mejoras de interfaz y corrección de errores en la cabecera y las páginas de producto, exportación, empresa y fábrica",
            "Campos de producto por marca y vídeos opcionales gestionados desde el CMS",
            "El georgiano pasó a ser el idioma por defecto y rehíce el selector de idioma",
            "Animaciones CSS al pasar el ratón en los botones de flecha",
            "Ajuste de ISR para que los cambios del CMS aparezcan en 2 minutos en vez de 15",
          ],
        },
        "nabeghlavi": {
          tagline: "Página de historia de una marca de agua mineral.",
          description:
            "Uno de mis primeros proyectos: la página de Historia de una conocida marca georgiana de agua mineral. Construí un banner animado con el scroll y una línea de tiempo año a año, alimentados por modelos de contenido que definí en el CMS, además del slider de historia en la página principal.",
          highlights: [
            "Construí la página de Historia: banner animado con el scroll y línea de tiempo año a año",
            "Hook de scroll propio que controla las animaciones de la página",
            "Slider de historia responsive en la página principal",
            "Modelos de contenido en el CMS, correcciones de localización al georgiano y un selector de idioma reutilizable",
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
