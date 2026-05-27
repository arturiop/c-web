export const homeMetadata = {
  title: 'On-Brand Paid-Social Creative for Marketers & Growth Teams',
  description:
    'Watchable lets marketers and growth teams make on-brand paid-social creative themselves — 100× cheaper and 1000× faster, always within your brandbook. No designers, no brand drift.',
} as const;

export const homeHero = {
  eyebrow: 'On-brand creative, no designers',
  title: 'On-brand paid-social creative — 100× cheaper, 1000× faster.',
  body: 'Watchable lets your marketing and growth team produce and test paid-social creative themselves — every concept, hook, image, and video locked to your brandbook. No designer in the loop, no brand drift.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Start in Watchable',
  audienceLine:
    'Built for CPG and ecommerce growth teams — and startups where one person does it all.',
  visualTitle: 'On-brand creative for your next launch',
  visualSubtitle: 'Generated inside your brandbook — colors, claims, and tone locked',
  sourceItems: ['Brandbook', 'Product assets', 'Approved claims', 'Past winning ads'],
  recommendationItems: [
    'Within brand: colors, type, and logo',
    'Claim check: only approved claims',
    'Tone: on-brand, no drift',
  ],
  packItems: ['6 concepts', '12 hooks', '8 image variants', '4 video cuts', '1 handoff brief'],
  contextCard: {
    title: 'Input',
    subtitle: 'Brandbook · Product assets · Claims · Past ads',
  },
  angleCard: {
    title: 'On-brand',
    subtitle: 'Locked to your guides',
  },
  hookCard: {
    title: 'Pack',
    subtitle: 'Concepts · hooks · images · video',
  },
  packCard: {
    title: 'Output',
    subtitle: 'On-brand variants, ready to test',
  },
  claimChip: 'Claim check: only approved claims',
  flowLine: 'Brandbook → On-brand variants → Test',
} as const;

export const marketPainSection = {
  eyebrow: 'WHY TEAMS USE WATCHABLE',
  title: 'Creative should not wait on a designer.',
  body: 'Every paid-social test needs more concepts, hooks, and variants than a design team can turn around — and faster than the launch calendar allows.',
  supporting:
    'Watchable lets marketers make on-brand creative themselves — 100× cheaper and 1000× faster — without ever leaving the brandbook.',
  flowLabel: 'Product context → Watchable → Test-ready creative pack',
  columns: [
    {
      title: 'The old way is slow and costly',
      items: [
        'Brief a designer',
        'Wait days per asset',
        'Pay per creative',
        'Limited test volume',
        'Endless revision loops',
        'Bottlenecked launches',
      ],
      chips: ['Days per asset', '$$$ per creative', 'Few tests'],
    },
    {
      title: 'Watchable locks the brand',
      items: [
        'Brandbook and tone rules',
        'Approved serum claims',
        'Packaging and texture shots',
        'Amazon review language',
        'Past winning Meta ads',
        'Marketplace format specs',
      ],
      chips: ['Real source inputs', 'Claim-safe guardrails', 'Brand-consistent by default'],
    },
    {
      title: 'Marketers ship it themselves',
      items: [
        'Barrier-repair angles',
        'Dry-skin UGC hooks',
        '15-second scripts',
        'Texture-first statics',
        'Amazon creative assets',
        'Briefs for production handoff',
      ],
      chips: ['Hooks to storyboard', 'Meta + Amazon outputs', 'Launch-ready pack'],
    },
  ],
} as const;

export const homeOperatingModel = {
  eyebrow: 'HOW IT WORKS',
  title: 'A deterministic system, not random AI.',
  body: 'Here is what the workflow looks like for a ceramide barrier serum launch: Watchable reads the product, brand, and channel context, then turns it into structured creative your team can actually test.',
  flowLabel: 'Brandbook → Rules → On-brand creative → Test',
  steps: [
    {
      step: '01',
      label: 'Brand',
      title: 'Load the serum launch context.',
      items: [
        'Brandbook and tone rules',
        'Ceramide serum PDP copy',
        'INCI and packaging shots',
        'Approved claims list',
        'Amazon review themes',
        'Past Meta winners',
      ],
      description:
        'Watchable starts with the exact context a growth team already has before launch, so the product truth and channel constraints are built in from the first step.',
      chips: ['Barrier support', 'Claim-approved', 'Brand-safe inputs'],
    },
    {
      step: '02',
      label: 'Intelligence',
      title: 'Extract the usable creative brief.',
      items: [
        'Dry-skin customer pains',
        'Proof and ingredient stack',
        'Hook territories',
        'Texture demo moments',
        'Meta and Amazon formats',
        'Claim boundaries',
      ],
      description:
        'Instead of prompting from scratch, Watchable converts the source material into clear angles, proof points, and guardrails that the creative team can reuse.',
      chips: ['Barrier-repair angle', 'Texture-first proof', 'No claim drift'],
    },
    {
      step: '03',
      label: 'Direction',
      title: 'Generate test-ready variants.',
      items: [
        'Creative angles',
        'UGC hooks',
        '15-second scripts',
        'Storyboard beats',
        'Static ad variants',
        'Test matrix',
      ],
      description:
        'The growth team gets structured variants for the same serum launch across paid social and marketplace surfaces without losing the approved positioning.',
      chips: ['3 angles', '12 hooks', '6 storyboard variants'],
    },
    {
      step: '04',
      label: 'Handoff',
      title: 'Ship the creative pack to production.',
      items: [
        'Creator brief',
        'Shot list',
        'Caption variants',
        'Thumbnail direction',
        'Amazon asset specs',
        'Design handoff notes',
      ],
      description:
        'When the winning direction needs custom production, Watchable hands off a clean pack with the hooks, scenes, specs, and messaging already aligned.',
      chips: ['Meta + Amazon pack', 'Review-ready', 'Design-ready'],
    },
  ],
} as const;

export const workflowSteps = [
  {
    id: 'product',
    step: '01',
    label: 'Load your brandbook and product context',
    sublabel: 'Guides, logo, colors, claims, product assets, past ads',
    body: 'Start from the brand rules and assets your team already has. They become the constraints for everything Watchable makes.',
    imageSrc: '/assets/st.webp',
    imageAlt:
      'Brand input card showing brandbook, claims, and product assets used to constrain creative generation',
  },
  {
    id: 'storyboard',
    step: '02',
    label: 'Generate on-brand concepts, hooks, and variants',
    sublabel: 'Everything stays inside your guides',
    body: 'Marketers produce and edit concepts, hooks, images, and video themselves — always on-brand, ready to review and test.',
    imageSrc: '/assets/s_s.webp',
    imageAlt: 'Workspace showing on-brand concepts and variants generated within the brand guides',
  },
  {
    id: 'variants',
    step: '03',
    label: 'Test, learn, and hand complex work to design',
    sublabel: 'Briefs and mockups for your design team',
    body: 'Test fast, keep the winners, and when something needs custom design, export a clean brief and mockup for the design team.',
    imageSrc: '/assets/m.webp',
    imageAlt:
      'Watchable workspace showing on-brand outputs and an exportable brief for design handoff',
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
  'On-brand concepts',
  'Hooks and scripts',
  'Image variants',
  'Video variants',
  'Mockups and briefs for design',
] as const;

export const marketplaceStages = [
  {
    eyebrow: 'Input',
    title: 'Your brand assets',
    description: 'Start from your brandbook, product pages, or uploaded brand assets.',
    image: '/assets/mm.webp',
    imageAlt: 'Watchable entry screen for starting from a brandbook and product assets',
    proof: 'Brand inputs',
    points: ['Brandbook and guides', 'Product assets'],
    imageHeight: 894,
  },
  {
    eyebrow: 'Output',
    title: 'On-brand creative workspace',
    description:
      'Review on-brand concepts and variants, then move winners toward testing or export.',
    image: '/assets/m.webp',
    imageAlt: 'Watchable creative workspace showing on-brand, brand-locked variants',
    proof: 'On-brand variants',
    points: ['Brand-locked output', 'Test-ready'],
    imageHeight: 924,
  },
] as const;

export const credibilityBlocks = [
  {
    title: 'What problem it solves',
    body: 'Watchable lets marketers and growth teams make on-brand paid-social creative themselves — 100× cheaper and 1000× faster than briefing a designer for every test.',
  },
  {
    title: 'Who it is for',
    body: 'CPG and ecommerce growth teams, performance marketers, brand teams, and startups where one person runs everything — anyone who needs on-brand creative without a design bottleneck.',
  },
  {
    title: 'Why it is different',
    body: 'Watchable is deterministic: every output is constrained by your brandbook, so creative stays on-brand by default. For complex new work, it produces mockups and briefs to hand to design.',
  },
] as const;

export const faqItems = [
  {
    question: 'What is Watchable?',
    answer:
      'Watchable lets marketers and growth teams produce on-brand paid-social creative themselves — concepts, hooks, images, and video — 100× cheaper and 1000× faster, always within your brandbook.',
  },
  {
    question: 'Who is Watchable for?',
    answer:
      'CPG and ecommerce growth teams, performance marketers, brand teams, and startups where one person does everything and needs on-brand creative without a design bottleneck.',
  },
  {
    question: 'How does Watchable keep creative on-brand?',
    answer:
      'It is deterministic: every output is constrained by your brand guidelines, brandbook, approved claims, and product assets, so creative is on-brand by default — not a random prompt result.',
  },
  {
    question: 'Do I need a designer to use it?',
    answer:
      'No. Marketers and growth teams edit and test creative elements themselves. For complex or brand-new creative, Watchable produces clean mockups and briefs to hand to a design team.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Start in the app to explore the product directly, or book a demo to map Watchable to your brand and workflow.',
  },
] as const;
