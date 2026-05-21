export const homeMetadata = {
  title: 'Watchable',
  description:
    'Watchable is an AI Creative Operating System for ecommerce growth teams turning product and brand context into creative angles, hooks, scripts, storyboards, assets, variants, and performance learnings.',
} as const;

export const homeHero = {
  eyebrow: 'AI Creative Operating System',
  body: 'Watchable helps ecommerce growth teams generate scripts, assets, variants, and reviewable creative direction faster without relying on a fragmented UGC workflow.',
  primaryCta: 'Start in the app',
  secondaryCta: 'Request demo',
  points: [
    'Built for ecommerce growth teams',
    'Structured for repeatable creative testing',
    'Grounded in product and brand context',
  ],
} as const;

export const marketPainCards = [
  {
    title: 'Generic AI video tools skip the operating layer',
    body: 'Teams still need to translate product truth, brand nuance, channel context, and testing goals into a creative system humans can review.',
  },
  {
    title: 'Agencies and freelancers are too slow for iterative testing',
    body: 'When every new angle needs a fresh brief and handoff, testing velocity collapses before the market learns anything useful.',
  },
  {
    title: 'Inconsistent UGC workflows lose context',
    body: 'Product pages, creative ideas, brand rules, assets, and learnings drift apart across tools, docs, and chats.',
  },
] as const;

export const productJourneyStages = [
  {
    id: 'product',
    label: 'Your Product',
    sublabel: 'Drop a photo or link',
    prompt: 'Build creative angles for this product page with a stronger paid social hook',
    imageSrc: '/assets/st.webp',
    imageAlt: 'Example product input card showing a tumbler used as source material',
  },
  {
    id: 'storyboard',
    label: 'AI Storyboard',
    sublabel: 'Refine the script and scenes',
    imageSrc: '/assets/s_s.webp',
    imageAlt: 'Storyboard workspace showing generated scenes and creative planning',
  },
  {
    id: 'video',
    label: 'Ready to Test',
    sublabel: 'Move into launch-ready creative',
    videoSrc: '/assets/demo_s.mp4',
    videoLabel: 'Watchable short-form creative preview',
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
    body: 'Watchable gives ecommerce teams a repeatable way to turn product and brand context into creative work that can actually be reviewed and tested.',
  },
  {
    title: 'Who it is for',
    body: 'Built for growth teams, beauty and skincare brands, Amazon sellers, performance marketers, brand teams, and creative strategists.',
  },
  {
    title: 'Why it is different',
    body: 'It focuses on the creative testing pipeline, not just one-step video generation. The product helps teams structure inputs, outputs, and learnings across the workflow.',
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
      'Teams get reviewable creative direction, clearer hooks and scripts, structured storyboard outputs, and a more consistent path from product context to testable ads.',
  },
  {
    question: 'Is this just an AI video generator?',
    answer:
      'No. Watchable is built around the operating layer before production, so teams can structure ideas, compare angles, and align on creative direction before launch.',
  },
  {
    question: 'What should I do next if I am interested?',
    answer:
      'Start in the app to explore the product directly, or request a demo if your team wants a closer walkthrough of the workflow.',
  },
] as const;
