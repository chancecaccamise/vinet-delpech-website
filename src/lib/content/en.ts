// ---------------------------------------------------------------------------
// English content. This file is the source of truth for the site's copy and
// the shape every other language must match: `Content` is inferred from it, so
// `fr.ts` and `es.ts` fail to compile the moment a key is missing or renamed.
//
// Only translatable strings live here. Anything structural — slugs, image
// paths, external URLs, numbers, dimensions — stays in `src/lib/site.ts` and is
// merged in by the builders in `src/lib/content/index.ts`, so a path or a
// product link can never drift between languages.
// ---------------------------------------------------------------------------

export const en = {
  hero: {
    eyebrow: "Distillerie Vinet-Puranik · Cognac, France",
    support: "Experts in Tailor-Made Spirits",
    primaryCtaLabel: "Start a project",
    posterLabel: "Hero — barrel cellar, cinematic slow dolly",
    scroll: "Scroll",
  },

  maisonStatement: {
    kicker: "The house",
    line: "A spirit begins long before the still — it begins with a conversation.",
    body: "Vinet-Puranik listens first: to your market, your ambition, your constraints. Then the house composes — grape and grain, cask and time — until the liquid answers.",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Six métiers, one house",
    intro:
      "Everything a bespoke spirit requires, held under one roof in Brie-sous-Archiac — so a single conversation carries a project from first idea to finished case.",
    services: {
      creation: {
        title: "Bespoke creation",
        body: "Recipes, styles and liquid profiles composed to your brief and your market — from first sketch to signature.",
      },
      sourcing: {
        title: "Dry-goods sourcing",
        body: "Bottles, closures, capsules and dress sourced with precision, reliability and an eye for the shelf.",
      },
      advisory: {
        title: "Technical & marketing advisory",
        body: "Category insight and technical guidance on product development, positioning and presentation at every step.",
      },
      regulatory: {
        title: "Regulatory support",
        body: "Labelling, customs and compliance handled for each destination market, so borders never slow a launch.",
      },
      bottling: {
        title: "Customised bottling",
        body: "Flexible lines for short runs and large series alike, finished precisely to specification.",
      },
      quality: {
        title: "Quality assurance",
        body: "A permanent search for improvement — from spirit and blend to the sealed, finished case.",
      },
    },
  },

  knowHow: {
    title: "Know-how & innovation",
    body: "Stills, cellars and bottling halls share one courtyard at Brie-sous-Archiac, among 100 hectares of Fins Bois and Petite Champagne vines.",
    figureLabels: {
      stills: "pot stills",
      lines: "bottling lines",
      vats: "vat storage",
      warehouse: "warehouse",
      vineyard: "vineyard",
    },
    details: {
      certified: { label: "Certified", body: "AEO status and ECOCERT certification." },
      languages: {
        label: "Languages",
        body: "French, English, Spanish, Chinese (Mandarin, Cantonese).",
      },
      rd: { label: "R&D", body: "Finishing, macerations, distillation, hybrid products." },
    },
  },

  collection: {
    kicker: "The collection",
    title: "Brands shaped by the house",
    intro:
      "Spirits created for and with partners — proof of range across categories, casks and markets.",
    distributionNote: "Distributed in France by Mähler-Besse.",
    allProducts: "All our products",
  },

  // Keyed by brand slug. Names stay as they are in every language — they are
  // the partners' trade marks, not our copy.
  brands: {
    "hold-up": {
      category: "Gin · 43%",
      descriptor:
        "Artisanal gin distilled in copper stills — juniper met by tonka bean, anise and a light citrus edge.",
      frameLabel: "Packshot — Hold Up gin bottle",
    },
    "palisson-batch-01": {
      category: "French single malt · 43%",
      descriptor:
        "Charentais double-distilled single malt, aged at least three years in Limousin oak that previously held cognac.",
      frameLabel: "Packshot — Palisson Batch 01 single malt",
    },
    "brigitte-et-louise-blanc": {
      category: "Apéritif · 17.5%",
      descriptor:
        "Grape must blended with cognac eau-de-vie from a family estate — fruit and white flowers, ample and round.",
      frameLabel: "Packshot — Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Apéritif · 17.5%",
      descriptor:
        "Merlot and Cabernet Sauvignon must with cognac eau-de-vie — lively and round, on woodland and stone fruit.",
      frameLabel: "Packshot — Brigitte et Louise Rouge",
    },
    "maca-rum": {
      category: "Spiced rum",
      descriptor:
        "Distilled in Mauritius, aged and finished in France — enveloping cinnamon and the round mystery of tonka bean.",
      frameLabel: "Packshot — MACA rum bottle",
    },
    tijuca: {
      category: "Blended rum · Brazil",
      descriptor:
        "Coppery with golden highlights; wood and spice give way to vanilla, pepper and honey, closing on coconut.",
      frameLabel: "Packshot — TIJUCA Brazilian rum",
    },
    "gigi-en-provence": {
      category: "Organic gin · 44%",
      descriptor:
        "Provençal organic gin — violet and juniper over lemon, with rosemary, coriander and a discreet note of olive.",
      frameLabel: "Packshot — Gigi en Provence gin",
    },
    "patte-blanche": {
      category: "Organic cognac",
      descriptor:
        "ECOCERT-certified cognac, hand-distilled at Arthenac with no artificial input from vine to glass — VS, VSOP and XO.",
      frameLabel: "Packshot — Patte Blanche organic cognac",
    },
    sephina: {
      category: "Spirit drink · 30%",
      descriptor:
        "Blended in the house: 56% VSOP cognac with 44% Pineau des Charentes — prune, dried fruit, walnut and toasted oak.",
      frameLabel: "Packshot — Sephina spirit drink",
    },
    gin40: {
      category: "Gin · 50 cl",
      descriptor:
        "Artisanally distilled in south-west France with Landes influences — juniper, pine and wild blackberry.",
      frameLabel: "Packshot — GIN40 bottle",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40%",
      descriptor:
        "Distilled from Bordeaux grapes — the power of Cabernet Sauvignon, the roundness of Merlot, the finesse of Sémillon.",
      frameLabel: "Packshot — Nade Vodka 2022 vintage",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40%",
      descriptor:
        "Rested four months in Fronsac red-wine casks — faintly pink with golden nuance, in fewer than 250 numbered bottles.",
      frameLabel: "Packshot — Nade Vodka 2019 vintage",
    },
  },

  families: {
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary: "The house appellation, worked for partners from the crus around Brie-sous-Archiac.",
      intro: [
        "The house stands among the Petite Champagne and Fins Bois crus, and cognac is the spirit it has made longest. For partners, that means eaux-de-vie selected and blended to a brief, then aged in Limousin oak until the quality — VS, VSOP, XO — is the one the market asks for.",
        "Patte Blanche is the collection's organic expression: ECOCERT-certified, hand-distilled at Arthenac, with no artificial input from vine to glass.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary: "Single malt of France — Charentais double distillation, finished in cognac oak.",
      intro: [
        "Whisky made the Charentais way: double-distilled in the same copper pot stills the house uses for cognac, then laid down in Limousin oak casks that previously held it.",
        "Palisson Batch 01 is the first release of that programme — at least three years in wood, bottled at 43%.",
      ],
    },
    rum: {
      name: "Rum",
      title: "Rum",
      summary:
        "Cane distillates sourced abroad, then aged, finished, blended and dressed in France.",
      intro: [
        "Rum arrives as a distillate and leaves as a brand. The house sources from the cane-growing origins, then carries out the work that gives a rum its character here in the Charente — ageing, finishing in cognac wood, blending and dress.",
        "MACA is distilled in Mauritius and finished in France on cinnamon and tonka bean; TIJUCA is a Brazilian blend, coppery, on vanilla, pepper and honey.",
      ],
    },
    gin: {
      name: "Gin",
      title: "Gin",
      summary: "Three readings of juniper, each distilled in copper to a partner's brief.",
      intro: [
        "Gin is where a brief becomes most legible: the botanical bill is the brand. The house macerates and distils in copper, and can move a recipe from first sketch to sealed case without leaving the courtyard.",
        "Hold Up meets juniper with tonka and anise; Gigi en Provence is organic, on violet, rosemary and a discreet note of olive; GIN40 carries the Landes — pine and wild blackberry.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Grape vodka made by vintage, from Bordeaux fruit.",
      intro: [
        "Vodka need not be neutral in origin. Nade is distilled from Bordeaux grapes and released by vintage — the power of Cabernet Sauvignon, the roundness of Merlot, the finesse of Sémillon.",
        "The 2019 was rested four months in Fronsac red-wine casks and bottled in fewer than 250 numbered bottles; the 2022 is the current vintage.",
      ],
    },
    aperitifs: {
      name: "Apéritifs & spirit drinks",
      title: "Apéritifs & spirit drinks",
      summary: "Lower-strength grape products — French apéritifs and cognac-based spirit drinks.",
      intro: [
        "Grape must, eaux-de-vie and Pineau des Charentes, composed at apéritif strength. These are the house's answer to markets that want a cognac character served long, chilled or over ice.",
        "Brigitte et Louise is a French apéritif at 17.5%, white and red; Sephina is a spirit drink at 30% — 56% VSOP cognac blended with 44% Pineau des Charentes, and so outside the cognac appellation by design.",
      ],
    },
  },

  partnerships: {
    title: "Partnerships",
    intro: [
      "Every bottle here belongs to someone else. Importers, retailers and brand owners come to Brie-sous-Archiac with a market in mind; the house composes the liquid, sources the dress and ships the finished case under their name.",
      "The collection is grouped below by category — proof of range across grape, grain and cane, and the quickest way to find the nearest thing to the project you have in mind.",
    ],
    note: "Distributed in France by Mähler-Besse.",
    ctaLabel: "Start a project",
    brandCountOne: "1 brand",
    brandCountOther: "{count} brands",
    inCollectionOne: "1 brand in the collection",
    inCollectionOther: "{count} brands in the collection",
    explore: "Explore {name}",
    otherCategories: "Other categories",
    backToAll: "Back to all categories",
    viewDetails: "View details",
    viewDetailsAria: "View details for {name} (opens in a new tab)",
    metaDescription:
      "Brands shaped by Vinet-Puranik for importers, retailers and brand owners — cognac, whisky, rum, gin, vodka and apéritifs, grouped by category.",
  },

  featurePanels: {
    bespoke: {
      title: "Tailor-made from the first brief",
      body: "Recipe, liquid, dress and dossier composed around your market — one house carrying a project from first sketch to sealed case.",
      ctaLabel: "Start a project",
      frameLabel: "Feature — blender's bench, glasses mid-assembly",
    },
    "know-how": {
      ctaLabel: "Start a project",
      frameLabel: "Feature — copper pot stills in the distillation hall",
    },
  },

  timeline: {
    kicker: "Heritage",
    title: "Two families, one house",
    intro:
      "From an eighteenth-century estate in the Charente to a merged house shipping to more than twenty countries.",
    entries: [
      {
        year: "1777",
        body: "The Delpech Fougerat family buys the Font Gireau estate and begins creating their own eaux-de-vie.",
      },
      { year: "1934", body: "Félix Chartier establishes his first cognac distillery." },
      {
        year: "1972",
        body: "He transmits the distillery to his nephew Guy Vinet, who renames it after himself and later passes it to his daughter Annie Delannoy and his son-in-law Bruno Delannoy.",
      },
      {
        year: "2011",
        body: "Both families decide to work together and merge — Distillerie Vinet-Puranik is born.",
      },
      {
        year: "2014 — 2017",
        body: "A new bottling plant and storage warehouse open, with the installation of a fourth bottling line.",
      },
      {
        year: "2018",
        body: "Jean-Baptiste Delannoy, Bruno's son, becomes General Manager of the company.",
      },
      {
        year: "2019",
        body: "AEO status (Authorised Economic Operator) and ECOCERT certification obtained.",
      },
    ],
  },

  presidentWord: {
    title: "A word from the president",
    quote: "Passion above all",
    body: [
      "After taking over the family business in 1994, I decided to enter into export — and discovered another world. Asia in particular captivated me, and it has been a large part of my life ever since.",
      "I understood immediately that the importers I met wanted bespoke products, made to their own wishes. It didn't matter which country: they felt more invested in products they had helped to design.",
      "So I became a promoter of tailor-made spirits, and a specialist in private brands. Twenty-five years on, with a vibrant, motivated and multicultural team, Vinet-Puranik is present in more than twenty countries.",
    ],
    portraitAlt:
      "Bruno Delannoy, President of Distillerie Vinet-Puranik, photographed in the still house.",
    signatureRole: "President",
  },

  team: {
    alt: "The Vinet-Puranik team, photographed among the copper stills in the distillation hall.",
    label: "The house",
    caption: "The Vinet-Puranik team — Brie-sous-Archiac, Charente",
  },

  contact: {
    kicker: "Start a project",
    title: "Build your next spirit with Vinet-Puranik",
    body: "Share your brief — product ambition, market and timeline. The house replies with a considered path from first idea to finished bottle.",
    distilleryHeading: "The distillery",
    enquiryTypes: [
      "Bespoke product development",
      "Private label",
      "Bulk spirits",
      "Bottling & logistics",
      "Visits & tastings",
      "Other enquiry",
    ],
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      enquiryType: "Nature of enquiry",
      selectPlaceholder: "Select…",
      message: "Your project",
      messagePlaceholder: "Product ambition, market, volumes, timeline…",
      submit: "Send enquiry",
      submitting: "Sending…",
      honeypot: "Leave this field empty",
      successMessage: "Thank you — your enquiry has been received. The house will reply shortly.",
      errorMessage:
        "Something went wrong and your enquiry was not sent. Please email us directly.",
      errorReview: "Please review the highlighted fields.",
      errors: {
        name: "Please tell us your name.",
        email: "Please give a valid email address.",
        enquiryType: "Please choose the nature of your enquiry.",
        message: "Please tell us a little about your project.",
      },
    },
  },

  footer: {
    navigateCta: "Start a project",
    navigateHeading: "Navigate",
    capabilitiesHeading: "Capabilities",
    legalHeading: "Legal",
    contactHeading: "Contact",
    capabilities: [
      "Private labels",
      "Product development",
      "Dry-goods sourcing",
      "Custom bottling",
    ],
    legalLinks: ["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Accessibility"],
    rights: "All rights reserved.",
  },

  ageGate: {
    title: "Age Verification Required",
    subhead: "You must be of legal drinking age to enter this website",
    dobPrompt: "Please enter your date of birth",
    labels: { month: "Month", day: "Day", year: "Year" },
    placeholders: { month: "MM", day: "DD", year: "YYYY" },
    submit: "Verify Age",
    errors: {
      incomplete: "Please enter your full date of birth.",
      invalid: "That date doesn’t exist — please check and try again.",
      future: "Please enter a date in the past.",
    },
    deniedTitle: "We’re sorry",
    deniedMessage: "You must be at least {age} years old to visit Vinet-Puranik.",
    legal:
      "By entering, you confirm you are at least {age} years old and that it is lawful to view alcohol-related content in your country of residence. Your date of birth is checked in your browser and is never sent to us or stored.",
  },

  visit: {
    kicker: "Visit us",
    title: "The estate at Brie-sous-Archiac",
    heroLabel: "Hero — estate courtyard and cellars, golden hour",
    intro: [
      "Between the Petite Champagne and Fins Bois crus, the distillery opens its courtyard, cellars and stills to trade partners and curious visitors alike.",
      "Walk the barrel cellars, stand beside the copper pot stills, and taste the house's work where it is made.",
    ],
    expect: [
      {
        title: "The cellars",
        body: "Ageing halls where cognac, brandy and cask-finished whiskies rest.",
      },
      {
        title: "The still house",
        body: "Copper pot stills at work — the heart of the house since 1777.",
      },
      {
        title: "The tasting room",
        body: "Guided flights of the house's brands and works-in-progress.",
      },
    ],
    entries: [
      {
        title: "Tours",
        body: "Guided visits through the cellars, still house and bottling halls.",
        frameLabel: "Card — barrel cellar walkway",
      },
      {
        title: "Tastings",
        body: "Seated flights and masterclasses in the estate tasting room.",
        frameLabel: "Card — tasting glasses on oak",
      },
    ],
    discover: "Discover",
    expectLabel: "What to expect",
    mapLabel: "Map / drone view — the estate at Brie-sous-Archiac",
    bookCta: "Book a visit",
    practicalCta: "Practical information",
    book: {
      heading: "Book a visit",
      body: "All visits are by appointment. Send the dates you have in mind, your party size and the experience you would like — the house will confirm by return.",
      ctaLabel: "Book through the enquiry form",
      mailSubject: "Visit booking — Vinet-Puranik estate",
    },
    practical: {
      heading: "Practical information",
      items: [
        { label: "Address", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France" },
        { label: "Hours", value: "By appointment — Monday to Friday" },
        {
          label: "Access",
          value: "20 minutes from Jonzac, 35 minutes from Cognac; on-site parking",
        },
        { label: "Languages", value: "Visits in French and English" },
      ],
    },
    metaDescription:
      "Visit the Vinet-Puranik estate at Brie-sous-Archiac — cellars, copper pot stills and tastings in the heart of the Cognac region. Tours and tastings by appointment.",
  },

  experiences: {
    included: "Included",
    book: "Book this experience",
    orEmail: "Or email the house",
    bookingSubject: "Visit booking — {name}",
    duration: "Duration",
    groupSize: "Group size",
    languages: "Languages",
    price: "Price",
    onEnquiry: "On enquiry",
  },

  tours: {
    kicker: "Visit us · Tours",
    title: "Tours of the house",
    intro:
      "Three ways through the estate — from a first look at the cellars to a full day inside the métiers of tailor-made spirits.",
    note: "Programme, durations and prices to be confirmed by the house — all visits by appointment.",
    crossLinkTitle: "Prefer to stay at the table?",
    crossLinkCta: "Discover our tastings",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Guided tours of the Vinet-Puranik estate — barrel cellars, copper pot stills and the family's story since 1777. By appointment at Brie-sous-Archiac.",
    items: {
      "discovery-tour": {
        name: "Discovery Tour",
        duration: "1 hour",
        groupSize: "2–15 guests",
        languages: "French · English",
        includes: [
          "Welcome in the estate courtyard",
          "Barrel cellar walk-through",
          "Introductory tasting of two house spirits",
        ],
        body: "A first encounter with the house — the story since 1777, the cellars, and a short guided taste of what Vinet-Puranik makes.",
        frameLabel: "Tour — cellar doors opening onto the courtyard",
      },
      "cellar-and-distillery-tour": {
        name: "Cellar & Distillery Tour",
        duration: "2 hours",
        groupSize: "2–10 guests",
        languages: "French · English",
        includes: [
          "Still house visit with the distilling team",
          "Ageing cellars and blending room",
          "Guided tasting of four spirits from cask and bottle",
        ],
        body: "The full production journey — grape and grain to copper, cask and bottling line — guided by the people who run it.",
        frameLabel: "Tour — copper pot stills in the still house",
      },
      "heritage-tour": {
        name: "Heritage Tour — Since 1777",
        duration: "Half day",
        groupSize: "2–8 guests",
        languages: "French · English",
        includes: [
          "Private tour of the estate and family archives",
          "Vineyard visit in Petite Champagne and Fins Bois",
          "Extended tasting hosted in the family cellar",
        ],
        body: "For partners and collectors — the long story of the Delannoy family's house, told across the vineyards, the archives and the oldest casks.",
        frameLabel: "Tour — vineyard rows above the estate",
      },
    },
  },

  tastings: {
    kicker: "Visit us · Tastings",
    title: "Tastings at the estate",
    intro:
      "Seated flights in the estate tasting room — from a signature tour of the house's brands to a working masterclass at the blender's bench.",
    note: "Flights, durations and prices to be confirmed by the house — all tastings by appointment.",
    crossLinkTitle: "Rather walk the cellars first?",
    crossLinkCta: "Discover our tours",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Seated tastings at the Vinet-Puranik estate — signature flights, cognac and Pineau, and a bespoke spirits masterclass. By appointment at Brie-sous-Archiac.",
    items: {
      "signature-tasting": {
        name: "Signature Tasting",
        duration: "1 hour",
        groupSize: "2–12 guests",
        languages: "French · English",
        includes: [
          "Five spirits across the house collection",
          "Guided by a member of the tasting committee",
          "Tasting notes to take home",
        ],
        body: "The house in five glasses — gin, whisky, rum, Pineau des Charentes and cognac, tasted side by side.",
        frameLabel: "Tasting — five glasses on the tasting-room table",
      },
      "cognac-and-pineau-flight": {
        name: "Cognac & Pineau Flight",
        duration: "45 minutes",
        groupSize: "2–12 guests",
        languages: "French · English",
        includes: [
          "Delpech-Fougerat cognacs by age",
          "Brigitte et Louise red and white",
          "Regional pairing bites",
        ],
        body: "The Charente classics — the house cognac marque and its Pineau, tasted the way the region drinks them.",
        frameLabel: "Tasting — cognac snifters and Pineau glasses",
      },
      "bespoke-spirits-masterclass": {
        name: "Bespoke Spirits Masterclass",
        duration: "2 hours",
        groupSize: "2–8 guests",
        languages: "French · English",
        includes: [
          "Blending session at the bench with the cellar master",
          "Cask samples and works-in-progress",
          "Your own blended sample to keep",
        ],
        body: "For trade partners — how a tailor-made spirit is composed, from brief to blend, with your hands on the pipettes.",
        frameLabel: "Tasting — blender's bench with cask samples",
      },
    },
  },

  nav: {
    about: {
      label: "About us",
      links: [
        "Tailor-made from the first brief",
        "Know-how & innovation",
        "Our story",
        "A word from the president",
        "Commitments",
      ],
      featuredHeading: "In the house",
      featured: [
        { label: "Our production", frameLabel: "Featured — copper pot stills" },
        { label: "Since 1777", frameLabel: "Featured — family portrait in the cellar" },
      ],
      viewAll: "Our know-how",
    },
    partnerships: {
      label: "Partnerships",
      overview: "Overview",
      featuredHeading: "By category",
      featuredFrameLabels: [
        "Featured — Patte Blanche packshot",
        "Featured — Hold Up packshot",
        "Featured — MACA rum packshot",
      ],
      viewAll: "View all categories",
    },
    visit: {
      label: "Visit Us",
      links: ["The estate", "Tours", "Tastings", "Book a visit", "Practical information"],
      featuredHeading: "Favorite experiences",
      featured: [
        { label: "Cellar & Distillery Tour", frameLabel: "Featured — barrel cellar walkway" },
        { label: "Signature Tasting", frameLabel: "Featured — tasting glasses on oak" },
      ],
      viewAll: "Plan your visit",
    },
    contact: {
      label: "Contact",
      links: ["Start a project", "Send an enquiry", "The distillery", "Book a visit"],
      featuredHeading: "Get in touch",
      featured: [{ label: "Start a project", frameLabel: "Featured — blender's bench" }],
    },
  },

  ui: {
    home: "home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    languageUnavailable: "Coming soon",
    previousBrands: "Previous brands",
    nextBrands: "Next brands",
    brandCollection: "Brand collection",
    featured: "Featured",
    startAProject: "Start a project",
    skipToContent: "Skip to content",
  },

  notFound: {
    title: "Lost in the cellars",
    body: "The page you are looking for has been moved, renamed, or never existed.",
    cta: "Back to the house",
  },

  metadata: {
    homeTitle: "Creators of tailor-made spirits since 1777",
    titleTemplate: "%s · Vinet-Puranik",
    description:
      "Family-owned Cognac-region distillery designing bespoke spirits, private labels, bottling solutions and product development programmes for trade partners in more than twenty countries.",
    partnershipsTitle: "Partnerships",
    visitTitle: "Visit us",
    toursTitle: "Tours",
    tastingsTitle: "Tastings",
  },

  responsibleDrinking: "Alcohol abuse is dangerous for your health. Please drink responsibly.",
};

/**
 * The shape every locale must satisfy. Inferred from English so there is one
 * definition to keep in step rather than a hand-written interface that can
 * silently fall behind the copy.
 */
export type Content = typeof en;
