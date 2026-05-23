export const homeMetadata = {
  title: 'AI Creative Operating System for Ecommerce Growth Teams',
  description:
    'Watchable is an AI Creative Operating System for ecommerce growth teams turning product and brand context into creative angles, hooks, scripts, storyboards, assets, variants, and performance learnings.',
} as const;

export const homeHero = {
  eyebrow: 'AI Creative Operating System',
  title: 'Turn product and brand context into creative direction your team can actually test',
  body: 'Watchable helps ecommerce growth teams turn product pages, brand nuance, and testing goals into creative angles, hooks, scripts, storyboards, assets, and variants faster.',
  primaryCta: 'Start in Watchable',
  secondaryCta: 'Book a demo',
  points: [
    'Built for ecommerce growth teams',
    'Structured for repeatable creative testing',
    'Grounded in product and brand context',
  ],
} as const;

export const marketPainCards = [
  {
    title: 'Paid acquisition stalls when creative quality and testing speed fall behind',
    body: 'Most teams do not struggle to generate more ideas. They struggle to turn product truth, audience insight, and channel context into a testing pipeline they can run every week.',
  },
  {
    title: 'Agencies and freelancers are too slow for iterative testing',
    body: 'When every new angle needs a fresh brief, handoff, and review cycle, the team learns too slowly to keep paid social and marketplace creative fresh.',
  },
  {
    title: 'Generic AI video tools and ad hoc UGC workflows lose context',
    body: 'Product pages, brand rules, asset references, creator direction, and performance learnings drift apart across chats, docs, and one-off prompts.',
  },
] as const;

export const workflowSteps = [
  {
    id: 'product',
    step: '01',
    label: 'Feed in product and brand context',
    sublabel: 'Source page, product assets, claims, audience, offer, brand voice',
    body: 'Start from the inputs the team already has: product pages, listing context, brand rules, references, creative goals, and testing priorities.',
    imageSrc: '/assets/st.webp',
    imageAlt:
      'Example product input card showing source material used to brief creative generation',
  },
  {
    id: 'storyboard',
    step: '02',
    label: 'Shape angles, hooks, scripts, and storyboards',
    sublabel: 'Reviewable creative direction before production',
    body: 'Watchable turns raw context into structured concepts the team can compare, refine, and align on before spending cycles on motion, editing, or outside production.',
    imageSrc: '/assets/s_s.webp',
    imageAlt: 'Storyboard workspace showing generated scenes and creative planning',
  },
  {
    id: 'variants',
    step: '03',
    label: 'Move stronger concepts into assets, variants, and launch-ready testing',
    sublabel: 'Creative outputs built to iterate',
    body: 'Carry the best ideas forward into assets and variants without losing the reasoning behind the hook, script, scene order, or audience angle.',
    imageSrc: '/assets/m.webp',
    imageAlt: 'Watchable creative workspace showing generated scenes and launch-ready outputs',
  },
] as const;

export const scriptRows = [
  { label: 'Hook', text: '"POV: You finally got THE cup"', tone: 'from-[#fff2e5] to-[#f8efe5]' },
  {
    label: 'Problem',
    text: '"Still drinking lukewarm water?"',
    tone: 'from-[#f6e7ff] to-[#f0ecff]',
  },
  { label: 'Demo', text: 'Ice test + color reveal moment', tone: 'from-[#e8f1ff] to-[#eef5ff]' },
  { label: 'CTA', text: '"Link in bio — trust me on this"', tone: 'from-[#eaf8ef] to-[#eefbf4]' },
] as const;

export const outputCategories = [
  'Creative angles',
  'Hooks and scripts',
  'Storyboards',
  'Assets and variants',
  'Performance learnings',
] as const;

export const marketplaceStages = [
  {
    eyebrow: 'Input',
    title: 'Product page',
    description: 'Start with an Amazon link, source page, or uploaded product assets.',
    image: '/assets/mm.webp',
    imageAlt: 'Watchable marketplace entry page for starting from a product listing link',
    proof: 'Marketplace entry',
    points: ['Listing source', 'Product-first brief'],
    imageHeight: 894,
  },
  {
    eyebrow: 'Output',
    title: 'Creative workspace',
    description:
      'Review generated scenes, inspect frames, and move strong concepts toward motion or export.',
    image: '/assets/m.webp',
    imageAlt: 'Watchable creative workspace showing generated product-first scenes',
    proof: 'Generated scenes',
    points: ['Scene review', 'Motion-ready concepts'],
    imageHeight: 924,
  },
] as const;

export const credibilityBlocks = [
  {
    title: 'What problem it solves',
    body: 'Watchable gives ecommerce teams a repeatable way to turn product and brand context into creative work that can actually be reviewed, debated, and tested.',
  },
  {
    title: 'Who it is for',
    body: 'Built for growth teams, beauty and skincare brands, Amazon sellers, performance marketers, brand teams, creative strategists, and founders who need faster concept testing.',
  },
  {
    title: 'Why it is different',
    body: 'It focuses on the creative testing pipeline, not just one-step video generation. The product helps teams structure inputs, outputs, and learnings across the workflow instead of relying on random prompt churn.',
  },
] as const;

export const faqItems = [
  {
    question: 'What is Watchable?',
    answer:
      'Watchable is an AI Creative Operating System for ecommerce growth teams. It turns product and brand context into creative angles, hooks, scripts, storyboards, assets, variants, and performance learnings.',
  },
  {
    question: 'Who is Watchable for?',
    answer:
      'It is designed for ecommerce growth teams, beauty and skincare brands, Amazon sellers, performance marketers, creative strategists, and brand teams managing repeated creative testing.',
  },
  {
    question: 'What does the team get out of it?',
    answer:
      'Teams get creative angles, hooks, scripts, storyboards, assets, variants, and a more consistent path from product context to testable ads.',
  },
  {
    question: 'Is this just an AI video generator?',
    answer:
      'No. Watchable is built around the operating layer before production, so teams can structure ideas, compare angles, and align on creative direction before launch.',
  },
  {
    question: 'What should I do next if I am interested?',
    answer:
      'Start in the app to explore the product directly, or book a demo if your team wants a closer walkthrough of the workflow.',
  },
] as const;
