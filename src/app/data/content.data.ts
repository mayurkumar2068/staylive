export const PAGE_META = {
  home: {
    label: 'Portfolio',
    title: 'Mayur Bobade',
    description: 'My personal portfolio — Flutter, Angular, and full-stack development',
  },
  about: {
    label: 'About me',
    title: 'Who I am & what I build',
    description:
      'My story: B.Tech from RGPV (8.28 CGPA), 4+ years in industry since 2022, and 21 GitHub repos you can review.',
  },
  skills: {
    label: 'My skills',
    title: 'Technologies I use daily',
    description:
      'The stack I rely on for mobile, web, APIs, security, and shipping production apps.',
  },
  experience: {
    label: 'My career',
    title: 'Where I have worked',
    description:
      'My path from RGPV graduation to MPSeDC, enterprise iOS work, and freelance projects.',
  },
  projects: {
    label: 'My work',
    title: 'Projects I have built',
    description:
      'Each project links to my GitHub (@mayurkumar2068) — real code, not mockups.',
  },
  services: {
    label: 'Services',
    title: 'What I can build for you',
    description:
      'If you need a Flutter app, Angular dashboard, or full-stack product — this is how I can help.',
  },
  contact: {
    label: 'Contact',
    title: "Let's connect",
    description:
      'Share your idea or role. I usually reply within 24 hours for freelance, contract, or full-time opportunities.',
  },
} as const;

export const VALUE_PROPS = [
  {
    title: 'Production-grade code',
    description: 'I write clean architecture, typed APIs, and codebases that are easy to maintain.',
    icon: '◈',
  },
  {
    title: 'Design-led delivery',
    description: 'I care about motion, accessibility, and interfaces that feel intentional.',
    icon: '◇',
  },
  {
    title: 'Ship on schedule',
    description: 'I communicate clearly, set realistic milestones, and deliver on time.',
    icon: '◎',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discover', desc: 'I understand your goals, users, and constraints.' },
  { step: '02', title: 'Design', desc: 'I plan architecture, UI flow, and tech choices with you.' },
  { step: '03', title: 'Build', desc: 'I ship in iterations with demos so you see progress early.' },
  { step: '04', title: 'Launch', desc: 'I deploy, document, and support a smooth handoff.' },
];

export const SPECIALIZATIONS = [
  'Flutter & Dart',
  'Angular & TypeScript',
  'Firebase & Cloud',
  'REST & GraphQL APIs',
  'Clean Architecture',
  'UI/UX Engineering',
];
