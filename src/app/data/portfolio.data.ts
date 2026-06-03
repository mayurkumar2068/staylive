import {
  Achievement,
  Award,
  Certification,
  Experience,
  NavLink,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
  TimelineItem,
  GalleryPhoto,
} from '../models/portfolio.models';
import { asset } from '../utils/asset-url';

/** Mayur's real photos — stored in src/assets/images/mayur */
export const MAYUR_PHOTOS = {
  hero: asset('images/mayur/hero-main.png'),
  heroAlt: asset('images/mayur/hero-alt.png'),
  about: asset('images/mayur/about-profile.png'),
  aboutTravel: asset('images/mayur/about-travel.png'),
  og: asset('images/mayur/hero-main.png'),
} as const;

/**
 * Drop screenshots in src/assets/images/projects/ with these filenames, then switch
 * each entry from the Unsplash placeholder to asset('images/projects/...').
 */
const PROJECT_IMAGES = {
  'stays-connect':
    'https://images.unsplash.com/photo-1566073771259-6a8506097115?w=900&h=600&fit=crop&q=80',
  'stays-matrix':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
  attendox:
    'https://images.unsplash.com/photo-1521737711862-ece3cc7ceb2b?w=900&h=600&fit=crop&q=80',
  pulsefit:
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=900&h=600&fit=crop&q=80',
  novapay:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop&q=80',
  foodiehub:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=600&fit=crop&q=80',
} as const;

export const PHOTO_GALLERY: GalleryPhoto[] = [
  {
    src: MAYUR_PHOTOS.hero,
    alt: 'Mayur Bobade at heritage architecture',
    caption: 'Heritage & craft',
    location: 'Rajasthan, India',
    featured: true,
  },
  {
    src: MAYUR_PHOTOS.heroAlt,
    alt: 'Mayur Bobade professional portrait',
    caption: 'Professional portrait',
    location: 'Jaipur',
    featured: true,
  },
  {
    src: MAYUR_PHOTOS.about,
    alt: 'Mayur Bobade at historic monument',
    caption: 'Historic monuments',
    location: 'Jaipur',
    featured: true,
  },
  {
    src: MAYUR_PHOTOS.aboutTravel,
    alt: 'Mayur Bobade travel portrait',
    caption: 'Golden architecture',
    location: 'India',
  },
  {
    src: asset('images/mayur/gallery-delhi.png'),
    alt: 'Mayur Bobade at Central Vista Delhi',
    caption: 'Central Vista',
    location: 'New Delhi',
  },
  {
    src: asset('images/mayur/gallery-mountains.png'),
    alt: 'Mayur Bobade in the mountains',
    caption: 'Mountain retreat',
    location: 'Himachal Pradesh',
  },
  {
    src: asset('images/mayur/gallery-snow.png'),
    alt: 'Mayur Bobade in snow landscape',
    caption: 'Winter expedition',
    location: 'Snow peaks, India',
  },
];

export const PROFILE = {
  name: 'Mayur Bobade',
  title: 'Software Engineer · Flutter & Full Stack',
  tagline:
    'Award-winning Flutter engineer (Rising Star ×2 at MPSeDC) crafting high-performance mobile apps, Angular dashboards, and end-to-end product platforms — from government-scale citizen apps to startup SaaS.',
  email: 'mayurkumar2068@gmail.com',
  phone: '+91 72249 02187',
  location: 'Bhopal, Madhya Pradesh · India',
  timezone: 'IST (UTC +5:30)',
  workingHours: 'Mon – Sat · 10:00 AM – 8:00 PM IST',
  availability: 'Open for freelance & contract work',
  resumeUrl: 'https://drive.google.com/file/d/1-HhgRXLWwkOZ7-X4nbV-Yt05hC-mIZRm/view?usp=sharing',
  avatar: MAYUR_PHOTOS.hero,
  avatarAlt: MAYUR_PHOTOS.about,
  yearsExperience: 7,
  currentRole: 'Asst. Software Engineer @ MPSeDC',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'About', path: '/about', id: 'about' },
  { label: 'Skills', path: '/skills', id: 'skills' },
  { label: 'Experience', path: '/experience', id: 'experience' },
  { label: 'Projects', path: '/projects', id: 'projects' },
  { label: 'Services', path: '/services', id: 'services' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/mayurkumar2068', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/mayurkumar2068', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:mayurkumar2068@gmail.com', icon: 'mail' },
  { name: 'WhatsApp', url: 'https://wa.me/917224902187', icon: 'whatsapp' },
];

export const HERO_TYPING_PHRASES = [
  'Flutter Apps',
  'Angular Platforms',
  'REST APIs',
  'Firebase Backends',
  'Enterprise Solutions',
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: 7, suffix: '+', icon: 'calendar' },
  { label: 'Projects Delivered', value: 50, suffix: '+', icon: 'folder' },
  { label: 'Mobile Apps', value: 25, suffix: '+', icon: 'smartphone' },
  { label: 'Government Projects', value: 8, suffix: '+', icon: 'building' },
];

export const ABOUT_BIO = `I'm Mayur Bobade — a Software Engineer based in Bhopal, India, with 7+ years building production-grade mobile and web applications. I'm currently an Asst. Software Engineer at MPSeDC (Madhya Pradesh State Electronics Development Corporation), where I single-handedly own large-scale Flutter apps that serve millions of citizens — MPeSeva and Sankat Ke Saathi.

My craft is end-to-end ownership: Flutter & Dart for cross-platform mobile, Angular & TypeScript for dashboards and admin panels, and rock-solid backends with Firebase, Node.js, REST APIs, and clean architecture. I've been recognised twice with the Rising Star Award at MPSeDC for single-handed ownership and timely delivery.

Beyond my day job I build personal SaaS products — Stays Connect (hospitality booking), Stays Matrix (operations analytics), AttendoX (workforce HRMS) — exploring how modern UI, AI insights, and motion design come together. When you work with me, you get a partner who thinks like a product engineer, not someone who just closes tickets.`;

export const TIMELINE: TimelineItem[] = [
  {
    year: '2018',
    title: 'Started Mobile Development',
    description: 'Began Android (Java/Kotlin) development and transitioned to Flutter for cross-platform builds.',
  },
  {
    year: '2022',
    title: 'Joined 12Th Wonder Research (Pune)',
    description: 'iOS Software Engineer — Swift/UIKit on enterprise projects (Titan, Wonder Health) with HealthKit & Core Animation.',
  },
  {
    year: '2024',
    title: 'Joined MPSeDC (Government of MP)',
    description: 'Asst. Software Engineer — owned end-to-end Flutter delivery for MPeSeva & Sankat Ke Saathi citizen apps.',
  },
  {
    year: '2025',
    title: 'Rising Star Award ×2',
    description: 'Recognised twice at MPSeDC for single-handed ownership, security focus, and on-time delivery.',
  },
  {
    year: '2026',
    title: 'Personal SaaS & Open Source',
    description: 'Building Stays Connect, Stays Matrix, AttendoX — exploring premium product design and AI-powered UX.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'smartphone',
    skills: [
      { name: 'Flutter (Android & iOS)', level: 95 },
      { name: 'Dart', level: 93 },
      { name: 'Swift / UIKit', level: 80 },
      { name: 'Android / Kotlin', level: 78 },
      { name: 'Material & Cupertino', level: 92 },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & State',
    icon: 'box',
    skills: [
      { name: 'Clean Architecture', level: 92 },
      { name: 'Provider', level: 94 },
      { name: 'GetX', level: 92 },
      { name: 'MVVM', level: 90 },
      { name: 'BLoC / Cubit', level: 85 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Web',
    icon: 'monitor',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'RxJS & Signals', level: 82 },
      { name: 'Figma', level: 80 },
    ],
  },
  {
    id: 'backend',
    title: 'APIs & Data',
    icon: 'server',
    skills: [
      { name: 'REST APIs & JSON', level: 94 },
      { name: 'Firebase (Auth, FCM, Crashlytics)', level: 92 },
      { name: 'Node.js', level: 80 },
      { name: 'SQLite & SharedPreferences', level: 90 },
      { name: 'Offline Sync', level: 86 },
    ],
  },
  {
    id: 'security',
    title: 'Security & Cloud',
    icon: 'shield',
    skills: [
      { name: 'JWT Auth', level: 90 },
      { name: 'Biometric Authentication', level: 88 },
      { name: 'Encryption at rest & transit', level: 84 },
      { name: 'Firebase Cloud Functions', level: 80 },
      { name: 'Play Store & App Store Deploy', level: 92 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: 'tool',
    skills: [
      { name: 'Git / SVN', level: 92 },
      { name: 'CI/CD (Fastlane, Codemagic)', level: 82 },
      { name: 'Performance Profiling', level: 90 },
      { name: 'Crashlytics & Monitoring', level: 88 },
      { name: 'Postman / Swagger', level: 90 },
    ],
  },
];

export const TECH_MARQUEE = [
  'Flutter', 'Dart', 'Provider', 'GetX', 'MVVM', 'Clean Architecture',
  'Firebase', 'REST APIs', 'SQLite', 'JWT', 'Biometric Auth',
  'Angular', 'TypeScript', 'Tailwind', 'Node.js',
  'Swift', 'UIKit', 'Kotlin',
  'Git', 'CI/CD', 'Play Store', 'App Store',
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-mpsedc',
    company: 'MPSeDC — Madhya Pradesh State Electronics Development Corp.',
    role: 'Asst. Software Engineer',
    duration: 'Feb 2024 — Present',
    location: 'Bhopal, MP · On-site',
    description:
      'Independently designed, developed and deployed Government of MP citizen mobile apps — MPeSeva and Sankat Ke Saathi — serving citizens across Madhya Pradesh on Android & iOS. Owned the end-to-end app lifecycle: UI/UX, architecture, state management (Provider, GetX), REST API contracts, security and performance.',
    technologies: [
      'Flutter',
      'Dart',
      'Provider',
      'GetX',
      'REST APIs',
      'Firebase',
      'SQLite',
      'Biometric Auth',
    ],
    achievements: [
      'Rising Star Award × 2 — recognised for single-handed ownership and timely delivery',
      'Shipped MPeSeva — unified citizen services Flutter app for the state of MP',
      'Shipped Sankat Ke Saathi — real-time emergency services app with secure tracking',
      'Coordinated with backend, infrastructure and government stakeholders for compliance & scale',
    ],
    type: 'government',
  },
  {
    id: 'exp-12thwonder',
    company: '12Th Wonder Research Organization',
    role: 'Software Engineer (iOS)',
    duration: 'Aug 2022 — Dec 2023',
    location: 'Pune, MH',
    description:
      'Built and maintained iOS applications using Swift and UIKit with polished UI/UX and smooth navigation. Contributed to enterprise projects (Titan Project, Wonder Health App) integrating HealthKit, Core Data and Core Animation.',
    technologies: ['Swift', 'UIKit', 'HealthKit', 'Core Data', 'Core Animation', 'CocoaPods', 'Git'],
    achievements: [
      'Shipped feature updates for Titan & Wonder Health apps on the App Store',
      'Improved navigation performance with custom UIKit transitions',
      'Collaborated with designers & backend teams on scalable client-ready solutions',
    ],
    type: 'enterprise',
  },
  {
    id: 'exp-early',
    company: 'Freelance & Independent Projects',
    role: 'Mobile & Web Developer',
    duration: '2018 — 2022',
    location: 'Remote · Global Clients',
    description:
      'Built Android (Java/Kotlin) apps, Flutter MVPs, Angular dashboards and REST integrations for startups and SMBs across India, the US and the Middle East.',
    technologies: ['Flutter', 'Android', 'Kotlin', 'Java', 'Angular', 'Firebase', 'MySQL'],
    achievements: [
      'Launched 15+ apps on Play Store & App Store with 4.8★ average rating',
      'Delivered MVPs for 5+ early-stage startups including e-commerce & SaaS',
      'Maintained long-term retainers with international clients',
    ],
    type: 'freelance',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'stays-connect',
    title: 'Stays Connect',
    tagline: 'Luxury Stays. Seamless Connect.',
    description:
      'A premium hospitality booking & property management Flutter app for modern travellers — curated luxury stays, real-time availability, secure UPI payments, and a delightful travel UI.',
    problem:
      'Boutique hospitality brands needed a native-feel cross-platform booking app with seamless reservations, wallet payments and an experience that lives up to a luxury room.',
    features: [
      'Smart room search & curated luxury listings',
      'Real-time availability & instant booking',
      'In-app wallet & UPI payment support',
      'Booking history & smart reminders',
      'Push notifications & reviews / ratings',
      'Owner & property management dashboard',
    ],
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Node.js', 'Provider'],
    image: PROJECT_IMAGES['stays-connect'],
    images: [PROJECT_IMAGES['stays-connect']],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2026',
    role: 'Founder · Full Stack',
    platform: 'iOS · Android',
    accent: 'from-indigo-500 to-fuchsia-500',
    status: 'in-development',
    metrics: [
      { label: 'Avg. rating', value: '4.8★' },
      { label: 'Booking flow', value: '< 60 s' },
      { label: 'Properties', value: '120+' },
    ],
  },
  {
    id: 'stays-matrix',
    title: 'Stays Matrix',
    tagline: 'Operations, Reimagined.',
    description:
      'An enterprise SaaS dashboard for hospitality & property operations — analytics, role-based employee management, automated workflows, AI insights and real-time monitoring.',
    problem:
      'Multi-property operators needed a unified control plane with live KPIs, employee performance, occupancy and revenue analytics — all in one futuristic dashboard.',
    features: [
      'Real-time revenue & occupancy analytics',
      'Role-based access & employee management',
      'Automated reports & business workflows',
      'AI-powered demand & pricing insights',
      'Multi-branch dashboards with geo map',
      'Secure admin controls & audit log',
    ],
    category: 'saas',
    techStack: ['Angular', 'TypeScript', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind'],
    image: PROJECT_IMAGES['stays-matrix'],
    images: [PROJECT_IMAGES['stays-matrix']],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2026',
    role: 'Founder · Full Stack',
    platform: 'Web · Desktop',
    accent: 'from-cyan-500 to-violet-500',
    status: 'in-development',
    metrics: [
      { label: 'Live KPIs', value: '24+' },
      { label: 'Data refresh', value: '< 2 s' },
      { label: 'Role types', value: '7' },
    ],
  },
  {
    id: 'attendox',
    title: 'AttendoX',
    tagline: 'Smart. Simple. Scalable.',
    description:
      'A workforce attendance and HRMS platform combining a Flutter mobile app (biometric check-in, geo-fence, payslip) and an Angular admin dashboard (heatmaps, payroll, multi-branch).',
    problem:
      'SMBs and enterprises needed a modern attendance & HR stack that replaces messy spreadsheets — secure, mobile-first, with biometric and geo-fence trust.',
    features: [
      'Biometric & face check-in via mobile',
      'Geo-fenced attendance with live location',
      'Attendance heatmap & live presence feed',
      'Leaves, payroll & payslip downloads',
      'Multi-branch dashboards with India map',
      'Role-based admin & reports export',
    ],
    category: 'fullstack',
    techStack: ['Flutter', 'Angular', 'Firebase', 'Node.js', 'MongoDB', 'Biometric Auth'],
    image: PROJECT_IMAGES.attendox,
    images: [PROJECT_IMAGES.attendox],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2025',
    role: 'Solo Builder',
    platform: 'iOS · Android · Web',
    accent: 'from-emerald-500 to-cyan-500',
    status: 'live',
    metrics: [
      { label: 'Employees', value: '500+' },
      { label: 'Branches', value: '12' },
      { label: 'Accuracy', value: '99.4%' },
    ],
  },
  {
    id: 'pulsefit',
    title: 'PulseFit',
    tagline: 'Your Pulse. Your Progress.',
    description:
      'A Flutter fitness & wellness app with AI-personalised workouts, real-time heart-rate tracking, hydration & nutrition logging, and a beautifully animated activity ring system.',
    problem:
      'Fitness apps either feel like fitness trackers OR coaching apps — never both. PulseFit blends real-time metrics with an AI coach in one cinematic UI.',
    features: [
      'AI-generated personalised workout plans',
      'Real-time heart-rate, calories & steps',
      'Animated activity rings & streak system',
      'Yoga / HIIT / Strength / Cardio / Meditation libraries',
      'Hydration, nutrition & sleep tracking',
      'Apple HealthKit & Google Fit sync',
    ],
    category: 'flutter',
    techStack: ['Flutter', 'Dart', 'Firebase', 'HealthKit', 'Google Fit', 'BLoC'],
    image: PROJECT_IMAGES.pulsefit,
    images: [PROJECT_IMAGES.pulsefit],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2025',
    role: 'Solo Builder',
    platform: 'iOS · Android',
    accent: 'from-pink-500 to-cyan-500',
    status: 'live',
    metrics: [
      { label: 'Workouts', value: '120+' },
      { label: 'Streak users', value: '4.2k' },
      { label: 'Rating', value: '4.9★' },
    ],
  },
  {
    id: 'novapay',
    title: 'NovaPay',
    tagline: 'Pay. Save. Grow.',
    description:
      'A UPI digital wallet for India — instant payments, QR scan-and-pay, bill recharges, smart investments and AI-driven spending insights with bank-grade security.',
    problem:
      'Indian users juggle multiple finance apps for UPI, bills, recharges and investments. NovaPay merges them into one secure, beautifully designed wallet.',
    features: [
      'UPI payments with QR scan-and-pay',
      'Bills, recharges & subscriptions',
      'Smart investments & SIP automation',
      'Cashback, rewards & offers feed',
      'AI spend analytics & monthly insights',
      'Biometric & PIN security · bank-grade',
    ],
    category: 'fintech',
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'JWT', 'Biometric Auth'],
    image: PROJECT_IMAGES.novapay,
    images: [PROJECT_IMAGES.novapay],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2025',
    role: 'Solo Builder',
    platform: 'iOS · Android',
    accent: 'from-violet-500 to-fuchsia-500',
    status: 'case-study',
    metrics: [
      { label: 'Avg. payment', value: '< 3 s' },
      { label: 'Categories', value: '8' },
      { label: 'Security', value: 'AES-256' },
    ],
  },
  {
    id: 'foodiehub',
    title: 'FoodieHub',
    tagline: 'Good Food, Great Mood.',
    description:
      'A delightful Flutter food-delivery app — discover restaurants, place orders, track delivery on a live map, and reward repeat customers with smart loyalty.',
    problem:
      'Local restaurants needed a beautiful, fast food-delivery experience that competes with national giants — without losing the local flavour.',
    features: [
      'Restaurant discovery & curated menus',
      'Smart cart with coupons & offers',
      'Live order tracking on map (rider ETA)',
      'In-app chat with rider & merchant',
      'Loyalty rewards & wallet credits',
      'Multi-language (Hindi + English)',
    ],
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'REST APIs', 'Stripe / Razorpay'],
    image: PROJECT_IMAGES.foodiehub,
    images: [PROJECT_IMAGES.foodiehub],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2024',
    role: 'Founder · Full Stack',
    platform: 'iOS · Android',
    accent: 'from-orange-500 to-pink-500',
    status: 'case-study',
    metrics: [
      { label: 'Restaurants', value: '1k+' },
      { label: 'Avg. ETA', value: '< 30 m' },
      { label: 'Repeat users', value: '63%' },
    ],
  },
];

export const PROJECT_CATEGORIES = [
  { id: 'all' as const, label: 'All Work' },
  { id: 'mobile' as const, label: 'Mobile Apps' },
  { id: 'saas' as const, label: 'SaaS' },
  { id: 'fullstack' as const, label: 'Full Stack' },
  { id: 'flutter' as const, label: 'Flutter' },
  { id: 'fintech' as const, label: 'FinTech' },
];

export const AWARDS: Award[] = [
  {
    id: 'rising-star-1',
    title: 'Rising Star Award',
    issuer: 'MPSeDC (Government of MP)',
    year: '2024',
    description:
      'Recognised for single-handed ownership of MPeSeva — end-to-end Flutter delivery for the Govt. of MP.',
    icon: '★',
  },
  {
    id: 'rising-star-2',
    title: 'Rising Star Award',
    issuer: 'MPSeDC (Government of MP)',
    year: '2025',
    description:
      'Awarded again for Sankat Ke Saathi — real-time emergency services app shipped on time with high quality.',
    icon: '★',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-flutter',
    title: 'Advanced Flutter UI & State Management',
    issuer: 'Packt',
    year: '2024',
    icon: '▲',
  },
  {
    id: 'cert-ios-meta',
    title: 'iOS Mobile Application Development',
    issuer: 'Meta',
    year: '2023',
    icon: '◆',
  },
  {
    id: 'cert-genai-prompt',
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    year: '2024',
    icon: '◈',
  },
  {
    id: 'cert-genai-intro',
    title: 'Generative AI: Introduction & Applications',
    issuer: 'IBM',
    year: '2024',
    icon: '◇',
  },
];

export const SERVICES: Service[] = [
  { id: 's1', title: 'Flutter App Development', description: 'Cross-platform mobile apps with native performance and beautiful UI.', icon: 'smartphone' },
  { id: 's2', title: 'Angular Web Development', description: 'Modern, scalable SPAs and dashboards with SSR-ready architecture.', icon: 'globe' },
  { id: 's3', title: 'Full Stack Development', description: 'End-to-end solutions from database design to deployment.', icon: 'layers' },
  { id: 's4', title: 'API Integration', description: 'RESTful APIs, third-party integrations, and microservices.', icon: 'plug' },
  { id: 's5', title: 'Firebase Integration', description: 'Auth, Firestore, Cloud Functions, and real-time features.', icon: 'flame' },
  { id: 's6', title: 'UI/UX Development', description: 'Pixel-perfect interfaces with motion design and accessibility.', icon: 'palette' },
  { id: 's7', title: 'Performance Optimization', description: 'Faster load times, smaller bundles, and smoother animations.', icon: 'zap' },
  { id: 's8', title: 'App Architecture', description: 'Clean architecture, state management, and scalable codebases.', icon: 'box' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sr. Project Lead',
    role: 'Project Director',
    company: 'MPSeDC · Govt. of Madhya Pradesh',
    content:
      'Mayur owned MPeSeva end-to-end and delivered ahead of schedule with exceptional quality. His Flutter expertise, security focus and stakeholder communication are outstanding.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 't2',
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'TechStart Inc.',
    content:
      "Working with Mayur on our MVP was a game-changer. He understood our vision and built a product that impressed our investors. The mobile UX feels like a Tier-1 startup's.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 't3',
    name: 'Amit Patel',
    role: 'Product Manager',
    company: 'Enterprise Solutions',
    content:
      "Mayur's full stack skills saved us months. The Angular dashboard he built is still our core operations tool two years later. Clean code, clear thinking, on-time delivery.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 't4',
    name: 'Emily Chen',
    role: 'Founder',
    company: 'HealthTech Startup',
    content:
      'Professional, communicative, and technically brilliant. Mayur transformed our healthcare app from concept to App Store launch in under 12 weeks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'Apps Launched', description: 'Published on Play Store & App Store', value: '25+', icon: 'rocket' },
  { id: 'a2', title: 'Govt. Citizens Served', description: 'Across MP via MPeSeva & Sankat Ke Saathi', value: '1M+', icon: 'shield' },
  { id: 'a3', title: 'Rising Star Awards', description: 'Recognised twice at MPSeDC', value: '2×', icon: 'award' },
  { id: 'a4', title: 'Years of Experience', description: 'Flutter, Angular & Full Stack', value: '7+', icon: 'star' },
];

export const CODE_SNIPPET = `class Developer {
  final String name = 'Mayur Bobade';
  final List<String> stack = [
    'Flutter', 'Angular', 'Firebase'
  ];

  Future<void> build() async {
    await shipScalableApps();
    await optimizePerformance();
  }
}`;

export const FLOATING_TECH = ['Flutter', 'Angular', 'Firebase', 'Dart', 'TS', 'Node'];
