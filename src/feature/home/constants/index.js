export const HERO_IMAGES = [
  "/office_building_dusk.png",
  "/industry_trends.png",
  "/sustainability_office.png",
  "/workplace_strategy.png"
];

export const HERO_IMAGE_ROTATION_INTERVAL = 3000; // in milliseconds
export const HERO_IMAGE_TRANSITION_DURATION = 1000; // fade animation duration in milliseconds

export const HERO_CONTENT = {
  slides: [
    {
      id: 1,
      titleLine1: "Better Workplaces.",
      titleLine2: "Stronger Impact.",
      description: "End-to-end workplace solutions that combine innovation, sustainability and precision to create lasting value.",
      image: "/office_building_dusk.png",
      primaryCta: {
        text: "Explore Our Work",
        href: "/projects",
      },
      secondaryCta: {
        text: "Watch Showreel",
        href: "#",
      },
    },
    {
      id: 2,
      titleLine1: "Innovative Design.",
      titleLine2: "Modern Spaces.",
      description: "Creating functional and inspiring environments tailored to the needs of modern businesses.",
      image: "/office_building_dusk.png",
      primaryCta: {
        text: "Explore Our Work",
        href: "/projects",
      },
      secondaryCta: {
        text: "Watch Showreel",
        href: "#",
      },
    },
    {
      id: 3,
      titleLine1: "Sustainable Build.",
      titleLine2: "Green Future.",
      description: "Committed to eco-friendly construction and energy-efficient workplace solutions.",
      image: "/office_building_dusk.png",
      primaryCta: {
        text: "Explore Our Work",
        href: "/projects",
      },
      secondaryCta: {
        text: "Watch Showreel",
        href: "#",
      },
    },
    {
      id: 4,
      titleLine1: "Precision Execution.",
      titleLine2: "Lasting Value.",
      description: "Ensuring the highest standards of craftsmanship and project management from start to finish.",
      image: "/office_building_dusk.png",
      primaryCta: {
        text: "Explore Our Work",
        href: "/projects",
      },
      secondaryCta: {
        text: "Watch Showreel",
        href: "#",
      },
    },
  ],
  stats: [
    {
      value: "20+",
      label: "Years of Experience",
    },
    {
      value: "10M+",
      label: "Sq. Ft. Delivered",
    },
    {
      value: "100%",
      label: "Project Predictability",
    },
    {
      value: "2024",
      label: "ICC Founded",
    },
  ],
};

export const WHAT_WE_DO_CONTENT = {
  tagline: "WHAT WE DO",
  titleLine1: "End-to-End Solutions.",
  titleLine2: "Built Around You.",
  description: "From strategy to steady-state, we deliver workplaces that are future-ready, efficient and built around your people.",
  cta: {
    text: "Explore Our Services",
    href: "/services",
  },
  services: [
    {
      id: "strategy",
      title: "Strategy & Workplace Consulting",
      iconName: "Users2",
      href: "/services#strategy",
    },
    {
      id: "design",
      title: "Design & Architecture",
      iconName: "DraftingCompass",
      href: "/services#design",
    },
    {
      id: "fitout",
      title: "Fit-Out Project Management",
      iconName: "HardHat",
      href: "/services#fitout",
    },
    {
      id: "sustainability",
      title: "Sustainable Workplaces",
      iconName: "Leaf",
      href: "/services#sustainability",
    },
    {
      id: "execution",
      title: "End-to-End Execution",
      iconName: "CheckCircle2",
      href: "/services#execution",
    },
    {
      id: "maintenance",
      title: "Post-Handover Maintenance",
      iconName: "Wrench",
      href: "/services#maintenance",
    },
  ],
};

export const FEATURED_PROJECTS_CONTENT = {
  tagline: "FEATURED PROJECTS",
  titleLine1: "Spaces that",
  titleLine2: "Inspire Excellence",
  cta: {
    text: "View All Projects",
    href: "/projects",
  },
  projects: [
    {
      id: "jpmorgan",
      client: "J.P. MORGAN CHASE & CO.",
      location: "BENGALURU",
      size: "500,000 SQ. FT.",
      duration: "48 WEEKS",
      image: "/office_building_dusk.png",
      isLarge: true,
    },
    {
      id: "microsoft",
      client: "MICROSOFT",
      location: "HYDERABAD",
      size: "300,000 SQ. FT.",
      duration: "36 WEEKS",
      image: "/office_building_dusk.png",
      isLarge: false,
    },
    {
      id: "mastercard",
      client: "MASTERCARD",
      location: "PUNE",
      size: "150,000 SQ. FT.",
      duration: "26 WEEKS",
      image: "/office_building_dusk.png",
      isLarge: false,
    },
    {
      id: "gsk",
      client: "GSK",
      location: "MUMBAI",
      size: "120,000 SQ. FT.",
      duration: "24 WEEKS",
      image: "/office_building_dusk.png",
      isLarge: false,
    },
    {
      id: "nestle",
      client: "NESTLÉ",
      location: "GURUGRAM",
      size: "100,000 SQ. FT.",
      duration: "26 WEEKS",
      image: "/office_building_dusk.png",
      isLarge: false,
    },
  ],
};

export const OUR_PROCESS_CONTENT = {
  tagline: "OUR PROCESS",
  titleLine1: "A Proven Path",
  titleLine2: "to Excellence",
  description: "A collaborative, transparent and agile approach that ensures every project is delivered with precision.",
  steps: [
    {
      number: "01",
      title: "DISCOVER",
      description: "Understanding your vision, goals and challenges.",
    },
    {
      number: "02",
      title: "STRATEGIZE",
      description: "Crafting smart, data-driven workplace strategies.",
    },
    {
      number: "03",
      title: "DESIGN",
      description: "Creating inspiring, functional and future-ready designs.",
    },
    {
      number: "04",
      title: "DELIVER",
      description: "Executing with precision, quality and transparency.",
    },
    {
      number: "05",
      title: "SUPPORT",
      description: "Ensuring long-term performance through maintenance & support.",
    },
  ],
};

export const INSIGHTS_CONTENT = {
  tagline: "INSIGHTS",
  titleLine1: "Ideas that",
  titleLine2: "Shape Workplaces",
  cta: {
    text: "View All Insights",
    href: "/insights",
  },
  cards: [
    {
      id: "future-of-work",
      category: "WORKPLACE STRATEGY",
      title: "The Future of Work is Human-Centric",
      image: "/workplace_strategy.png",
      href: "/insights/future-of-work",
    },
    {
      id: "designing-workplaces",
      category: "SUSTAINABILITY",
      title: "Designing Workplaces for a Better Tomorrow",
      image: "/sustainability_office.png",
      href: "/insights/designing-workplaces",
    },
    {
      id: "flexibility-experience",
      category: "INDUSTRY TRENDS",
      title: "Flexibility, Experience. Performance.",
      image: "/industry_trends.png",
      href: "/insights/flexibility-experience",
    },
  ],
};

export const WHY_ICC_CONTENT = {
  tagline: "WHY ICC",
  titleLine1: "Built on Trust.",
  titleLine2: "Driven by Results.",
  image: "/office_building_dusk.png",
  points: [
    "Deep industry expertise across sectors",
    "Integrated team of consultants & contractors",
    "Commitment to quality, safety & sustainability",
    "Long-term partnerships, not just projects",
  ],
  cta: {
    text: "About ICC",
    href: "/about",
  },
};

export const CLIENT_LOGOS = [
  { name: "Bajaj Finance", text: "Bajaj Finance" },
  { name: "Telstra", text: "Telstra" },
  { name: "Magna Electronics", text: "Magna" },
  { name: "Flextronics", text: "Flextronics" },
  { name: "Western Union", text: "Western Union" },
  { name: "NiCE Systems", text: "NiCE Systems" },
  { name: "Red Hat", text: "Red Hat" },
  { name: "Eaton", text: "Eaton" },
];
