export const HERO_IMAGES = [
  "/Images/workDay.jpeg"
];

export const HERO_IMAGE_ROTATION_INTERVAL = 3000; // in milliseconds
export const HERO_IMAGE_TRANSITION_DURATION = 1000; // fade animation duration in milliseconds

export const HERO_CONTENT = {
  slides: [
    {
      id: 1,
      titleLine1: "Delivering Projects",
      titleLine2: "From Concept to Completion",
      description: "Interior Fit-Out Project Advisory | Execution | Coordination | Quality Management",
      image: "/Images/workDay.jpeg",
      primaryCta: {
        text: "Get a Consultation",
        href: "/contact",
      },
      secondaryCta: {
        text: "View Our Projects",
        href: "/projects",
      },
    },
  ],
  stats: [
    {
      value: "250+",
      label: "Projects Completed",
    },
    {
      value: "120+",
      label: "Happy Clients",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "25+",
      label: "Expert Designers",
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
      image: "/microsoft_office.png",
      isLarge: false,
    },
    {
      id: "mastercard",
      client: "MASTERCARD",
      location: "PUNE",
      size: "150,000 SQ. FT.",
      duration: "26 WEEKS",
      image: "/mastercard_office.png",
      isLarge: false,
    },
    {
      id: "gsk",
      client: "GSK",
      location: "MUMBAI",
      size: "120,000 SQ. FT.",
      duration: "24 WEEKS",
      image: "/gsk_office.png",
      isLarge: false,
    },
    {
      id: "nestle",
      client: "NESTLÉ",
      location: "GURUGRAM",
      size: "100,000 SQ. FT.",
      duration: "26 WEEKS",
      image: "/nestle_office.png",
      isLarge: false,
    },
  ],
};

export const OUR_PROCESS_CONTENT = {
  tagline: "OUR APPROACH",
  titleLine1: "Delivering Projects from",
  titleLine2: "Concept to Completion",
  description: "A comprehensive 6-stage structured delivery process ensuring seamless planning, execution, and long-term performance.",
  steps: [
    {
      number: "01",
      title: "CONCEPT STAGE",
      description: "Project Schedule, Budgeting, Stakeholder Appointment & Site Due Diligence.",
      bullets: ["Project Schedule", "Project Budget", "Stakeholder Appointment", "Site Due Diligence & Shortlisting"]
    },
    {
      number: "02",
      title: "DESIGN & PLANNING",
      description: "Test Fit, Look & Feel, MEP DBR Reviews, BOQs & Contracts.",
      bullets: ["Test Fit", "Look & Feel", "MEP DBR Reviews & Inputs", "BOQ's and Contracts"]
    },
    {
      number: "03",
      title: "TECHNICAL & PROCUREMENT",
      description: "Award of Work, D&B Partners, Long Lead Items & Contract Sign Offs.",
      bullets: ["Recommendation & Award of Work", "D&B Partners", "Order Long Lead & Supply Packages", "Contract Sign Off's"]
    },
    {
      number: "04",
      title: "CONSTRUCTION STAGE",
      description: "Vendor Management, Technical Submittals, Risk Mitigation & UAT.",
      bullets: ["Vendor Management", "Sample & Technical Submittals", "Time & Risk Management", "Logistics & UAT"]
    },
    {
      number: "05",
      title: "HANDOVER & CLOSE OUT",
      description: "Testing & Commissioning, Punch Listing, Deficiencies & As-builts.",
      bullets: ["Testing & Commissioning", "Punch Listing & Walk-through", "Close-out Training Programs", "O&M Manual & As-built Collation"]
    },
    {
      number: "06",
      title: "POST HANDOVER STAGE",
      description: "Post-Move Support, DLP, Facilities Performance & Warranty Coordination.",
      bullets: ["Post Move Support during DLP", "Performance Review of Services", "Warranty Coordination", "Maintenance Advisory"]
    },
  ],
};

export const INSIGHTS_CONTENT = {
  tagline: "BLOGS",
  titleLine1: "Ideas that",
  titleLine2: "Shape Workplaces",
  cta: {
    text: "View All Blogs",
    href: "/blogs",
  },
  cards: [
    {
      id: "future-of-work",
      category: "WORKPLACE STRATEGY",
      title: "The Future of Work is Human-Centric",
      image: "/workplace_strategy.png",
      href: "/blogs",
    },
    {
      id: "designing-workplaces",
      category: "SUSTAINABILITY",
      title: "Designing Workplaces for a Better Tomorrow",
      image: "/sustainability_office.png",
      href: "/blogs",
    },
    {
      id: "flexibility-experience",
      category: "INDUSTRY TRENDS",
      title: "Flexibility, Experience. Performance.",
      image: "/industry_trends.png",
      href: "/blogs",
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
