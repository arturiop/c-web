export const useCases = [
  {
    routeId: 'useCaseEcommerceGrowthTeams',
    slug: 'ecommerce-growth-teams',
    title: 'Ecommerce growth teams',
    summary:
      'Growth teams need a repeatable way to turn product context and campaign goals into creative direction the full team can review and act on.',
    metaTitle: 'Use Case: Ecommerce Growth Teams',
    metaDescription:
      'How Watchable helps ecommerce growth teams turn product context into creative angles, scripts, assets, and faster testing cycles.',
    sections: [
      {
        title: 'What problem this solves',
        body: 'Creative testing slows down when product context, brand nuance, and campaign goals live across too many tools and handoffs.',
      },
      {
        title: 'Who this is for',
        body: 'Growth leads, creative strategists, paid social operators, and ecommerce teams that need stronger operating rhythm across concepting and review.',
      },
      {
        title: 'How Watchable helps',
        body: 'Watchable turns product and brand inputs into hooks, scripts, storyboards, and creative variants that are easier to compare and refine.',
      },
      {
        title: 'What teams get',
        body: 'Teams get clearer angles, reviewable outputs, and a more consistent path from product context to launch-ready creative direction.',
      },
      {
        title: 'Why this matters for creative testing',
        body: 'Better structure means faster iteration, less context loss, and more disciplined testing across offers, hooks, and audience-specific variants.',
      },
    ],
  },
  {
    routeId: 'useCaseBeautySkincare',
    slug: 'beauty-skincare',
    title: 'Beauty and skincare',
    summary:
      'Beauty and skincare teams need creative systems that can handle category nuance, visual consistency, and claim-sensitive messaging.',
    metaTitle: 'Use Case: Beauty and Skincare',
    metaDescription:
      'How Watchable helps beauty and skincare brands manage nuanced product storytelling and high-volume creative iteration.',
    sections: [
      {
        title: 'What problem this solves',
        body: 'Beauty creative often breaks down when teams need to balance nuance, visual storytelling, routine education, and claim discipline at speed.',
      },
      {
        title: 'Who this is for',
        body: 'Beauty founders, skincare growth teams, brand marketers, and creative strategists managing high-volume testing across launches and evergreen campaigns.',
      },
      {
        title: 'How Watchable helps',
        body: 'Watchable keeps product truth, usage context, tone, and visual direction closer together while generating hooks, scripts, and storyboard-ready concepts.',
      },
      {
        title: 'What teams get',
        body: 'Teams get more disciplined claim-aware creative direction, clearer audience framing, and assets that support both brand consistency and testing velocity.',
      },
      {
        title: 'Why this matters for creative testing',
        body: 'When nuance survives the workflow, teams can test more ideas without flattening the brand into generic beauty creative.',
      },
    ],
  },
  {
    routeId: 'useCaseAmazonSellers',
    slug: 'amazon-sellers',
    title: 'Amazon sellers',
    summary:
      'Amazon sellers often have rich listing context but no clean system for turning it into stronger creative direction for off-marketplace acquisition.',
    metaTitle: 'Use Case: Amazon Sellers',
    metaDescription:
      'How Watchable helps Amazon sellers turn listing context into stronger creative hooks, assets, and ad-ready direction.',
    sections: [
      {
        title: 'What problem this solves',
        body: 'Marketplace operators often rebuild the same product context manually when moving from listing pages into ad concepts and creative briefs.',
      },
      {
        title: 'Who this is for',
        body: 'Amazon-native teams, aggregators, and operators who need to move from listing assets and product facts into sharper paid creative faster.',
      },
      {
        title: 'How Watchable helps',
        body: 'Watchable starts from listing and brand inputs, then develops hooks, scripts, storyboards, and creative outputs in a single marketing workflow.',
      },
      {
        title: 'What teams get',
        body: 'Teams get less fragmented creative planning, clearer production priorities, and ad-ready direction grounded in the actual product page.',
      },
      {
        title: 'Why this matters for creative testing',
        body: 'Keeping listing context close to creative generation helps teams test more relevant angles without wasting cycles rebuilding the brief.',
      },
    ],
  },
] as const;

export type UseCaseSlug = (typeof useCases)[number]['slug'];

export const getUseCaseBySlug = (slug: string) => useCases.find((item) => item.slug === slug);
