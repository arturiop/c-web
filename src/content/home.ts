export const homeMetadata = {
  title: 'AI Creative Operating System for Ecommerce Growth Teams',
  description:
    'Watchable is an AI Creative Operating System for ecommerce growth teams turning product and brand context into creative angles, hooks, scripts, storyboards, assets, variants, and performance learnings.',
} as const;

export const homeHero = {
  eyebrow: 'Creative Intelligence Workspace',
  title: 'The creative operating layer for ecommerce growth.',
  body: 'Turn product, brand, and customer context into the next angles, hooks, scripts, storyboards, and ad variants your team should test.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Start in Watchable',
  audienceLine: 'For beauty, skincare, wellness, supplements, and CPG growth teams.',
  visualTitle: 'Creative test for Night Repair Serum',
  visualSubtitle: 'Paid social concept pack for the next skincare launch cycle',
  sourceItems: ['Product page', 'Customer reviews', 'Brand notes', 'Past ads'],
  recommendationItems: [
    'Angle: Routine proof',
    'Hook: "I stopped guessing with my skincare"',
    'Customer language: "visible results", "not sticky"',
  ],
  packItems: ['5 angles', '12 hooks', '3 scripts', '1 storyboard', '6 ad variants'],
  contextCard: {
    title: 'Input',
    subtitle: 'Product page · Reviews · Brand notes · Past ads',
  },
  angleCard: {
    title: 'Intelligence',
    subtitle: 'Best angle: Routine proof',
  },
  hookCard: {
    title: 'Pack',
    subtitle: '5 angles · 12 hooks · 3 scripts',
  },
  packCard: {
    title: 'Output',
    subtitle: 'Premium preview ready',
  },
  claimChip: 'Claim check: needs proof',
  flowLine: 'Context → Intelligence → Testing pack → Output',
} as const;

export const marketPainSection = {
  eyebrow: 'WHY TEAMS LOOK FOR WATCHABLE',
  title: 'Creative teams do not need more random AI assets.',
  body: 'They need a repeatable way to move from product insight, customer language, brand rules, and past ads into creative directions worth testing.',
  supporting:
    'Watchable connects the missing layer between scattered context and testable creative output — so growth teams can decide what to test before they spend time or budget producing it.',
  flowLabel: 'Context → Watchable → Testing pack',
  columns: [
    {
      title: 'Context is scattered',
      items: [
        'Product pages',
        'Customer reviews',
        'Brand guidelines',
        'Past ads',
        'Campaign briefs',
        'Performance notes',
      ],
      chips: ['Barrier Serum', '"Feels calming, not sticky."', 'Routine demo brief'],
    },
    {
      title: 'Watchable structures it',
      items: [
        'Product truth',
        'Customer language',
        'Brand constraints',
        'Creative opportunities',
        'Claim risks',
        'Channel fit',
      ],
      chips: ['Calm clinical tone', 'No cure claims', 'Routine proof angle'],
    },
    {
      title: 'Teams get direction',
      items: ['Angles', 'Hooks', 'Scripts', 'Storyboards', 'Ad variants', 'Testing rationale'],
      chips: ['Hook bank', 'Storyboard', 'Testing rationale'],
    },
  ],
} as const;

export const homeOperatingModel = {
  eyebrow: 'OPERATING MODEL',
  title: 'From scattered context to a creative decision system.',
  body: 'Watchable reads the product, brand, customer language, and past creative signals — then turns them into angles, hooks, scripts, storyboards, and variants your team can actually test.',
  flowLabel: 'Context → Intelligence → Direction → Output',
  steps: [
    {
      step: '01',
      label: 'Context',
      title: 'Bring the context your team already has.',
      items: [
        'Product pages',
        'Customer reviews',
        'Brand guidelines',
        'Past ads',
        'Campaign briefs',
        'Performance notes',
      ],
      description:
        'Watchable starts from the material your team already uses to brief agencies, creators, and internal designers.',
      chips: ['Barrier Serum', '"Feels calming, not sticky."', 'Texture close-up routine demo'],
    },
    {
      step: '02',
      label: 'Intelligence',
      title: 'Turn it into creative intelligence.',
      items: [
        'Product truths',
        'Audience pains',
        'Customer language',
        'Claim boundaries',
        'Visual patterns',
        'Channel fit',
      ],
      description:
        'The system extracts what matters for creative decisions: proof points, objections, safe claims, tone, and formats worth testing.',
      chips: [
        'Lightweight daily barrier support',
        'Calming, lightweight, under makeup',
        'Avoid cure language',
      ],
    },
    {
      step: '03',
      label: 'Direction',
      title: 'Decide what should be tested.',
      items: [
        'Best angles',
        'Hook directions',
        'Story formats',
        'Proof hierarchy',
        'Risk notes',
        'Creative rationale',
      ],
      description:
        'Before generating assets, Watchable explains which directions are strongest and why they are worth testing.',
      chips: [
        'Angle: Routine proof',
        'Hook: "I stopped skipping barrier care..."',
        'Risk: avoid unsupported clinical claims',
      ],
    },
    {
      step: '04',
      label: 'Output',
      title: 'Build the testing pack.',
      items: [
        'Scripts',
        'Storyboards',
        'Static concepts',
        'Video prompts',
        'Ad variants',
        'Testing plan',
      ],
      description:
        'The result is not one random asset. It is a reviewable creative pack your team can refine, approve, produce, and learn from.',
      chips: ['5 creative angles', '12 hooks', '1 storyboard'],
    },
  ],
} as const;

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
