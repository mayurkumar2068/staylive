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
  Education,
  GitHubProfile,
} from '../models/portfolio.models';
import { asset } from '../utils/asset-url';

export const GITHUB: GitHubProfile = {
  username: 'mayurkumar2068',
  profileUrl: 'https://github.com/mayurkumar2068',
  publicRepos: 21,
};

export const EDUCATION: Education[] = [
  {
    id: 'edu-rgpv',
    degree: 'B.Tech · Computer Science & Engineering',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    location: 'Bhopal, Madhya Pradesh, India',
    duration: '2018 — 2022',
    cgpa: '8.28 / 10',
    highlights: [
      'Coursework in data structures, DBMS, operating systems, and software engineering',
      'Graduation project and lab work focused on Android and full-stack fundamentals',
    ],
  },
];

/** Mayur's real photos — stored in src/assets/images/mayur */
export const MAYUR_PHOTOS = {
  hero: asset('images/mayur/hero-main.png'),
  heroAlt: asset('images/mayur/hero-alt.png'),
  about: asset('images/mayur/about-profile.png'),
  aboutTravel: asset('images/mayur/about-travel.png'),
  og: asset('images/mayur/hero-main.png'),
} as const;

const PROJECT_IMAGES = {
  'stays-connect': asset('images/projects/project-stays-connect.png'),
  'stays-matrix': asset('images/projects/project-stays-matrix.png'),
  attendox: asset('images/projects/project-attendox.png'),
  pulsefit: asset('images/projects/project-pulsefit.png'),
  novapay: asset('images/projects/project-novapay.png'),
  foodiehub: asset('images/projects/project-foodiehub.png'),
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
    'I build Flutter & full-stack apps at MPSeDC (Rising Star ×2), ship government mobile products, and maintain open-source work on GitHub.',
  email: 'mayurkumar2068@gmail.com',
  phone: '+91 72249 02187',
  location: 'Bhopal, Madhya Pradesh · India',
  timezone: 'IST (UTC +5:30)',
  workingHours: 'Mon – Sat · 10:00 AM – 8:00 PM IST',
  availability: 'Open for freelance & contract work',
  resumeUrl: 'https://drive.google.com/file/d/1-HhgRXLWwkOZ7-X4nbV-Yt05hC-mIZRm/view?usp=sharing',
  avatar: MAYUR_PHOTOS.hero,
  avatarAlt: MAYUR_PHOTOS.about,
  /** Professional experience since B.Tech graduation (2022). */
  yearsExperience: 4,
  currentRole: 'Asst. Software Engineer @ MPSeDC',
  heroStats: [
    { value: 4, suffix: '+', label: 'Years' },
    { value: 2, suffix: '×', label: 'Awards' },
    { value: GITHUB.publicRepos, suffix: '', label: 'GitHub' },
  ],
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
  { label: 'Years in Industry', value: 4, suffix: '+', icon: 'calendar' },
  { label: 'GitHub Repositories', value: GITHUB.publicRepos, suffix: '', icon: 'github' },
  { label: 'CGPA (RGPV)', value: 8, suffix: '.28', icon: 'graduation' },
  { label: 'MPSeDC Awards', value: 2, suffix: '×', icon: 'building' },
];

export const ABOUT_BIO = `I'm Mayur Bobade — a Software Engineer from Bhopal, India. This site is my personal portfolio: my education, work, projects, and the code I actually ship.

I completed my B.Tech in Computer Science from Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal (2018–2022), with 8.28 CGPA. Since 2022 I've been building production Flutter and Angular apps for enterprise clients, the Government of Madhya Pradesh, and my own GitHub repositories (@${GITHUB.username} — ${GITHUB.publicRepos} public repos).

Today I'm an Asst. Software Engineer at MPSeDC, where I develop Flutter applications such as MPeSeva (citizen services) and Sankat Ke Saathi (emergency services). I own UI, Provider/GetX state, REST APIs, security, and Play Store / App Store releases. I received the MPSeDC Rising Star Award in 2024 and 2025.

On the side I maintain personal repos including stayslive, StayMatrixDev, stayconnect, magtapp_ai_browser, emi_locker_app, ecommerce, and this portfolio (staylive) — all linked on my Projects page.`;

export const TIMELINE: TimelineItem[] = [
  {
    year: '2022',
    title: 'B.Tech · RGPV Bhopal',
    description:
      'I completed my B.Tech in Computer Science & Engineering (2018–2022) from RGPV with 8.28 CGPA.',
  },
  {
    year: '2022',
    title: 'Started my dev career',
    description:
      'After graduation I began with Android (Java/Kotlin) and moved into Flutter for cross-platform apps.',
  },
  {
    year: '2023',
    title: '12Th Wonder Research · Pune',
    description:
      'I worked as an iOS engineer (Swift/UIKit) on Titan and Wonder Health, with HealthKit and Core Animation.',
  },
  {
    year: '2024',
    title: 'Joined MPSeDC',
    description:
      'I joined as Asst. Software Engineer and started delivering Flutter apps for MP government services.',
  },
  {
    year: '2025',
    title: 'Rising Star Award ×2',
    description: 'I received the MPSeDC Rising Star Award twice for Flutter delivery and on-time releases.',
  },
  {
    year: '2026',
    title: 'My products & open source',
    description:
      'I continue side projects on GitHub — hospitality, HRMS, AI browser, and this portfolio site.',
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
      'I develop Flutter mobile apps for the Government of Madhya Pradesh — including MPeSeva and Sankat Ke Saathi — on Android and iOS. I handle UI, Provider/GetX, REST APIs, offline storage, biometric auth, and production releases.',
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
      'I received the Rising Star Award (2024) for my Flutter work on MPeSeva',
      'I received the Rising Star Award (2025) for Sankat Ke Saathi delivery',
      'I own architecture, API integration, security, and app store releases end to end',
      'I coordinate with backend teams and government stakeholders for rollouts',
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
      'I built and maintained iOS apps with Swift and UIKit. I contributed to Titan and Wonder Health, integrating HealthKit, Core Data, and Core Animation.',
    technologies: ['Swift', 'UIKit', 'HealthKit', 'Core Data', 'Core Animation', 'CocoaPods', 'Git'],
    achievements: [
      'I shipped feature updates for Titan & Wonder Health on the App Store',
      'I improved navigation with custom UIKit transitions',
      'I worked with design and backend teams on production-ready features',
    ],
    type: 'enterprise',
  },
  {
    id: 'exp-early',
    company: 'Freelance & Independent Projects',
    role: 'Mobile & Web Developer',
    duration: '2022 — 2023',
    location: 'Remote · India',
    description:
      'I built Android and Flutter MVPs, Angular dashboards, and REST integrations for startups and small businesses.',
    technologies: ['Flutter', 'Android', 'Kotlin', 'Java', 'Angular', 'Firebase', 'MySQL'],
    achievements: [
      'I published Flutter & Android MVPs on the Play Store',
      'I built e-commerce, weather, and utility apps — many are on my GitHub',
      'I worked with clients in India and abroad on contract engagements',
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
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/stayslive`,
    featured: true,
    year: '2025',
    role: 'Founder · Full Stack',
    platform: 'iOS · Android',
    accent: 'from-indigo-500 to-fuchsia-500',
    status: 'in-development',
    metrics: [
      { label: 'GitHub', value: 'stayslive' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Repos', value: `${GITHUB.publicRepos}` },
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
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/StayMatrixDev`,
    featured: true,
    year: '2025',
    role: 'Founder · Full Stack',
    platform: 'Web · Desktop',
    accent: 'from-cyan-500 to-violet-500',
    status: 'in-development',
    metrics: [
      { label: 'GitHub', value: 'StayMatrixDev' },
      { label: 'Stack', value: 'JavaScript' },
      { label: 'Type', value: 'SaaS ops' },
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
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/stayconnect`,
    featured: true,
    year: '2025',
    role: 'Solo Builder',
    platform: 'iOS · Android · Web',
    accent: 'from-emerald-500 to-cyan-500',
    status: 'in-development',
    metrics: [
      { label: 'GitHub', value: 'stayconnect' },
      { label: 'Stack', value: 'TypeScript' },
      { label: 'Focus', value: 'HRMS' },
    ],
  },
  {
    id: 'pulsefit',
    title: 'MagTapp AI Browser',
    tagline: 'Multi-tab browser + on-device AI tools.',
    description:
      'Cross-platform Flutter app combining a multi-tab WebView browser with AI document summarisation, translation, and local file management — built with scalable architecture and efficient state management.',
    problem:
      'Users needed one mobile app for browsing, summarising documents, and translating content without switching between three separate tools.',
    features: [
      'Multi-tab WebView browser with performant navigation',
      'AI-powered document summarisation & translation',
      'Local file management & offline-friendly flows',
      'Clean architecture with testable state layers',
      'Native integrations for platform WebView features',
    ],
    category: 'flutter',
    techStack: ['Flutter', 'Dart', 'WebView', 'AI APIs', 'BLoC', 'Clean Architecture'],
    image: PROJECT_IMAGES.pulsefit,
    images: [PROJECT_IMAGES.pulsefit],
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/magtapp_ai_browser`,
    featured: true,
    year: '2024',
    role: 'Solo Builder',
    platform: 'iOS · Android',
    accent: 'from-pink-500 to-cyan-500',
    status: 'live',
    metrics: [
      { label: 'GitHub', value: 'magtapp_ai_browser' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Focus', value: 'AI + WebView' },
    ],
  },
  {
    id: 'novapay',
    title: 'EMI Locker',
    tagline: 'Flutter finance utility · GitHub: emi_locker_app',
    description:
      'Flutter app for EMI tracking and secure financial record management — open-source on GitHub (emi_locker_app).',
    problem:
      'Users needed a simple mobile tool to organise EMI schedules and payment reminders without a cluttered banking UI.',
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
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/emi_locker_app`,
    featured: false,
    year: '2024',
    role: 'Solo Builder',
    platform: 'iOS · Android',
    accent: 'from-violet-500 to-fuchsia-500',
    status: 'case-study',
    metrics: [
      { label: 'GitHub', value: 'emi_locker_app' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Focus', value: 'FinTech' },
    ],
  },
  {
    id: 'foodiehub',
    title: 'E-Commerce App',
    tagline: 'Flutter storefront · GitHub: ecommerce',
    description:
      'Flutter e-commerce sample with product listing, cart flow, and checkout patterns — published as the ecommerce repository on GitHub.',
    problem:
      'Needed a reusable Flutter commerce starter to demonstrate state management, API integration, and mobile-first shopping UX.',
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
    liveUrl: undefined,
    githubUrl: `${GITHUB.profileUrl}/ecommerce`,
    featured: false,
    year: '2023',
    role: 'Solo Builder',
    platform: 'iOS · Android',
    accent: 'from-orange-500 to-pink-500',
    status: 'case-study',
    metrics: [
      { label: 'GitHub', value: 'ecommerce' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Focus', value: 'E-commerce' },
    ],
  },
  {
    id: 'staylive-portfolio',
    title: 'Staylive Portfolio',
    tagline: 'My portfolio — this website.',
    description:
      'I built this site with Angular 21, Tailwind, and GitHub Actions CI/CD. It is deployed to GitHub Pages and documents my real work.',
    problem:
      'I wanted one place to show my education, experience, GitHub projects, and contact details — all verifiable.',
    features: [
      'Angular 21 standalone components & lazy routes',
      'GitHub Pages deploy via GitHub Actions',
      'Responsive dark / light themes',
      'Real stats: GitHub repo count, RGPV CGPA, MP govt apps',
    ],
    category: 'angular',
    techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    image: PROJECT_IMAGES['stays-matrix'],
    images: [PROJECT_IMAGES['stays-matrix']],
    liveUrl: 'https://mayurkumar2068.github.io/staylive/',
    githubUrl: `${GITHUB.profileUrl}/staylive`,
    featured: false,
    year: '2026',
    role: 'Author',
    platform: 'Web',
    accent: 'from-indigo-500 to-cyan-500',
    status: 'live',
    metrics: [
      { label: 'GitHub', value: 'staylive' },
      { label: 'Stack', value: 'Angular' },
      { label: 'Deploy', value: 'GH Pages' },
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
      'I received this award for my Flutter delivery on the MPeSeva citizen-services application.',
    icon: '★',
  },
  {
    id: 'rising-star-2',
    title: 'Rising Star Award',
    issuer: 'MPSeDC (Government of MP)',
    year: '2025',
    description:
      'I received my second Rising Star Award for Sankat Ke Saathi emergency-services delivery.',
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
  { id: 's1', title: 'Flutter App Development', description: 'I build cross-platform mobile apps with native performance and polished UI.', icon: 'smartphone' },
  { id: 's2', title: 'Angular Web Development', description: 'I create scalable SPAs and dashboards with modern Angular and TypeScript.', icon: 'globe' },
  { id: 's3', title: 'Full Stack Development', description: 'I deliver end-to-end products — from APIs and data models to deployment.', icon: 'layers' },
  { id: 's4', title: 'API Integration', description: 'I integrate REST APIs, third-party services, and secure auth flows.', icon: 'plug' },
  { id: 's5', title: 'Firebase Integration', description: 'I set up Auth, Firestore, FCM, Crashlytics, and Cloud Functions.', icon: 'flame' },
  { id: 's6', title: 'UI/UX Development', description: 'I design responsive interfaces with motion, accessibility, and clarity.', icon: 'palette' },
  { id: 's7', title: 'Performance Optimization', description: 'I profile and improve load time, bundle size, and animation smoothness.', icon: 'zap' },
  { id: 's8', title: 'App Architecture', description: 'I structure apps with clean architecture and maintainable state layers.', icon: 'box' },
];

export const TESTIMONIALS: Testimonial[] = [];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'GitHub Repositories', description: `My public repos @${GITHUB.username}`, value: `${GITHUB.publicRepos}`, icon: 'github' },
  { id: 'a2', title: 'RGPV CGPA', description: 'My B.Tech CSE grade at RGPV, Bhopal', value: '8.28', icon: 'graduation' },
  { id: 'a3', title: 'Rising Star Awards', description: 'My MPSeDC recognitions (2024 & 2025)', value: '2×', icon: 'award' },
  { id: 'a4', title: 'Years in Industry', description: 'Professional work since I graduated (2022)', value: '4+', icon: 'star' },
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
