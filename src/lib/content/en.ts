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
    title: "French Distilling Heritage Since 1777",
    support: "Distilled. Aged. Blended. Bottled. All Under One Roof.",
    primaryCtaLabel: "Start a project",
    posterLabel: "Hero: barrel cellar, cinematic slow dolly",
    scroll: "Scroll",
  },

  homeIntro: {
    kicker: "The distillery",
    paragraphs: [
      "Located in Brie-sous-Archiac in south-west France, Vinet-Puranik Distillerie brings together centuries of French distilling heritage with modern production capabilities.",
      "From distillation and ageing to blending, bottling and private-label development, we work with our own brands and partners around the world.",
    ],
    map: {
      ocean: "Atlantic Ocean",
      description:
        "Map of the Charentes in south-west France: the distillery is marked at Brie-sous-Archiac, in Charente-Maritime, south of Cognac and north of Bordeaux.",
    },
  },

  // Only `origin` survives of the old house statement — the "100% made in
  // France" mark on /about. The rest of the block retired when the home page
  // took the client's own positioning copy.
  maisonStatement: {
    origin: "100% made in France",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Six métiers, one house",
    intro:
      "Everything a bespoke spirit requires, held under one roof in Brie-sous-Archiac, so a single conversation carries a project from first idea to finished case.",
    services: {
      creation: {
        title: "Bespoke creation",
        body: "Recipes, styles and liquid profiles composed to your brief and your market, from first sketch to signature.",
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
        body: "A permanent search for improvement, from spirit and blend to the sealed, finished case.",
      },
    },
  },

  knowHow: {
    title: "Know-how & innovation",
    body: "Stills, cellars and bottling halls share one courtyard at Brie-sous-Archiac, among a hundred hectares of Fins Bois and Petite Champagne vines.",
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

  // The about page. `marks` are the house's own keywords; each carries one
  // supporting clause so the list reads as a statement rather than a word cloud.
  about: {
    title: "Our story",
    metaDescription:
      "An independent Cognac-region distillery: time-honoured expertise, the art of distillation and premium spirits made from the vineyard to the bottle in France.",
    intro: [
      "Vinet-Puranik is a distillery with a rich heritage and deep roots: two families, one house, and a courtyard at Brie-sous-Archiac where every stage of a spirit happens under the same roof.",
      "From the soil to the glass. From the vineyard to the bottle. Your dream in a bottle.",
    ],
    projectCta: "Start a project",
    visitCta: "Visit the estate",
    marksLabel: "What the house stands for",
    marks: [
      {
        label: "Independent distillery",
        body: "One house at Brie-sous-Archiac, owned and run by the two families that built it.",
      },
      {
        label: "Time-honoured expertise",
        body: "Pot stills, cellars and blending benches worked by hand since 1777.",
      },
      {
        label: "The art of distillation",
        body: "Grape and grain, cask and time: composed until the liquid answers the brief.",
      },
      {
        label: "French heritage",
        body: "Fins Bois and Petite Champagne vines, a Charente estate and the appellations that come with them.",
      },
      {
        label: "Premium and luxury products",
        body: "Spirits dressed and finished for the top of the shelf, in short runs and large series alike.",
      },
    ],
    skillsLabel: "Our skills",
    skills: [
      {
        title: "Quality",
        body: "A permanent search for improvement, from spirit and blend to the finished case.",
      },
      {
        title: "Reliability",
        body: "Volumes, deadlines and specifications held: flexible lines, one point of contact.",
      },
      {
        title: "Worldwide export",
        body: "AEO status, customs and labelling handled for trade partners in more than twenty countries.",
      },
    ],
    crossLinkTitle: "More of the house",
    crossLinkTerroir: "The vineyards and the region",
    crossLinkPartnerships: "The brands we shape",
  },

  estate: {
    kicker: "The estate",
    title: "One estate, every stage",
    intro:
      "Copper stills, ageing cellars and bottling lines share one courtyard at Brie-sous-Archiac. Every stage of a spirit's life happens here, in the house's own hands.",
    ctaLabel: "Visit the estate",
    alts: {
      stills: "A copper pot still in the Vinet-Puranik still house.",
      cellar: "Oak casks resting in a barrel cellar at the estate.",
      vines: "Rows of vines at sunrise near Brie-sous-Archiac.",
    },
    metiers: {
      distillation: {
        title: "Distillation",
        body: "Copper pot stills, run slowly and watched closely, turn wine and wash into eau-de-vie.",
      },
      ageing: {
        title: "Ageing",
        body: "French oak casks rest in dim cellars, giving each spirit its colour and depth.",
      },
      blending: {
        title: "Blending",
        body: "The cellar master composes each expression from the house's reserves, cask by cask.",
      },
      bottling: {
        title: "Bottling",
        body: "Lines under the same roof dress, fill and seal every bottle before the case ships.",
      },
    },
  },

  // Keyed by brand slug — all sixteen, the house's own bottles first and the
  // partner brands after, in one uniform shape so `getBrands` sees a single
  // record type. Names stay as they are in every language: they are trade
  // marks, not our copy. The house's long-form brochure copy lives separately
  // in `houseBrands` below.
  brands: {
    "glen-smith": {
      category: "Blended Scotch whisky · 40%",
      descriptor:
        "Blended Scotch whisky, distilled and matured in Scotland, bottled there at 40% in 70 cl.",
      frameLabel: "Packshot: Glen Smith blended Scotch whisky",
    },
    "velorin-vodka": {
      category: "Vodka · crafted in France",
      descriptor:
        "Vodka made in France, dressed on the three words its label carries: purity, tradition, elegance.",
      frameLabel: "Packshot: Velorin Vodka",
    },
    "montlieu-xo": {
      category: "Brandy X.O · three years minimum",
      descriptor:
        "A careful selection of grapes, column-distilled and aged at least three years in oak: elegant, balanced, aromatic.",
      frameLabel: "Packshot: Montlieu X.O brandy",
    },
    "glen-mac-clay": {
      category: "Blended Scotch Whisky · three years minimum",
      descriptor:
        "Selected in the southern Highlands, blended with an unpeated malt and matured in Bourbon casks: pear, apple and grape.",
      frameLabel: "Packshot: Glen Mac Clay Blended Scotch Whisky",
    },

    "hold-up": {
      category: "Gin · 43%",
      descriptor:
        "Artisanal gin distilled in copper stills: juniper met by tonka bean, anise and a light citrus edge.",
      frameLabel: "Packshot: Hold Up gin bottle",
    },
    "palisson-batch-01": {
      category: "French single malt · 43%",
      descriptor:
        "Charentais double-distilled single malt, aged at least three years in Limousin oak that previously held cognac.",
      frameLabel: "Packshot: Palisson Batch 01 single malt",
    },
    "irie-republique-dominicaine": {
      category: "Rum · Dominican Republic · 41%",
      descriptor:
        "Amber, with a fruity nose of butter and vanilla: rich and generous on the palate, tropical and yellow fruit closing on butterscotch.",
      frameLabel: "Packshot: Irie République Dominicaine",
    },
    "irie-trinidad-tobago": {
      category: "Rum · Trinidad & Tobago · 41%",
      descriptor:
        "Amber, on tropical fruit and flambéed banana with a green edge: generous and structured, concentrated on praline, banana and caramel.",
      frameLabel: "Packshot: Irie Trinidad & Tobago",
    },
    "maca-rum": {
      category: "Spiced rum",
      descriptor:
        "Distilled in Mauritius, aged and finished in France: enveloping cinnamon and the roundness of tonka bean.",
      frameLabel: "Packshot: MACA rum bottle",
    },
    tijuca: {
      category: "Blended rum · Brazil",
      descriptor:
        "Coppery with golden highlights; wood and spice give way to vanilla, pepper and honey, closing on coconut.",
      frameLabel: "Packshot: TIJUCA Brazilian rum",
    },
    "gigi-en-provence": {
      category: "Organic gin · 44%",
      descriptor:
        "Provençal organic gin: violet and juniper over lemon, with rosemary, coriander and a discreet note of olive.",
      frameLabel: "Packshot: Gigi en Provence gin",
    },
    "patte-blanche": {
      category: "Organic cognac",
      descriptor:
        "ECOCERT-certified cognac, hand-distilled at Arthenac with no artificial input from vine to glass: VS, VSOP and XO.",
      frameLabel: "Packshot: Patte Blanche organic cognac",
    },
    sephina: {
      category: "Spirit drink · 30%",
      descriptor:
        "Blended in the house: 56% VSOP cognac with 44% Pineau des Charentes. Prune, dried fruit, walnut and toasted oak.",
      frameLabel: "Packshot: Sephina spirit drink",
    },
    gin40: {
      category: "Gin · 50 cl",
      descriptor:
        "Distilled by hand in south-west France, with the Landes in its botanicals: juniper, pine and wild blackberry.",
      frameLabel: "Packshot: GIN40 bottle",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40%",
      descriptor:
        "Distilled from Bordeaux grapes: the power of Cabernet Sauvignon, the roundness of Merlot, the finesse of Sémillon.",
      frameLabel: "Packshot: Nade Vodka 2022 vintage",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40%",
      descriptor:
        "Rested four months in Fronsac red-wine casks: faintly pink with golden glints, in fewer than 250 numbered bottles.",
      frameLabel: "Packshot: Nade Vodka 2019 vintage",
    },
  },

  // The nine house bottles carry the brochure's long-form copy. Only records
  // marked `origin: "house"` in site.ts appear here; the shared card fields
  // stay in `brands` above, so `getBrands` keeps seeing one uniform shape.
  houseBrands: {
    labels: {
      houseMark: "A Vinet-Puranik brand",
      heritage: "Heritage & craftsmanship",
      story: "Origin story",
      tasting: "Tasting notes",
      awards: "Awards",
      senses: { eye: "Eye", nose: "Nose", palate: "Palate" },
      ranks: { gold: "Gold", silver: "Silver", bronze: "Bronze", score: "{score} points" },
      figures: { distillations: "distillations", ageing: "years in oak, minimum" },
      ctaLabel: "Start a project",
      brandSiteLabel: "puraniques.com",
    },
    items: {
      "montlieu-xo": {
        heritage:
          "This authentic brandy comes from a careful selection of grapes. Distilled in a column still, Montlieu X.O is then aged in oak casks for a minimum of three years.",
        story:
          "Aged in oak casks, Montlieu X.O is recommended as a digestif, neat or over ice. It wins you over with its elegance, balance and aromas.",
        notes: {
          eye: "Amber colour",
          nose: "Delicate notes of almond and vanilla",
          palate: "Well balanced and smooth",
        },
        storyFrameLabel: "Lifestyle: Montlieu X.O poured at a celebration table",
      },
      "glen-mac-clay": {
        heritage:
          "Glen Mac Clay Blended Scotch Whisky was carefully selected in the south of the Highlands. It is composed primarily of wheat and malt distilled in a column still, then blended with an unpeated malt from the same distillery, distilled in a copper pot still. It is matured in Bourbon casks for a minimum of three years.",
        story:
          "This Scotch is made in the traditional way: distilled with care and aged in oak casks for several years. Enjoy it as a long drink with soda water or ginger beer.",
        notes: {
          eye: "Bright, with light hints of gold",
          nose: "Fruity notes of pear, apple and grape",
          palate: "Balanced and smooth, malty, on refreshing pear",
        },
        storyFrameLabel: "Lifestyle: Glen Mac Clay in a Highland landscape",
      },
    },
  },

  families: {
    brandy: {
      name: "Brandy",
      title: "Brandy",
      summary: "Column-distilled grape brandy, aged in oak: outside the Cognac appellation by design.",
      intro: [
        "Brandy made from a careful selection of grapes and distilled in a column still rather than the copper pot the appellation requires. It is a different method and a different spirit, so it is shown on its own page rather than folded in beside the cognacs.",
        "Montlieu X.O is the house's own: at least three years in oak casks, recommended as a digestif, neat or over ice.",
      ],
    },
    liqueurs: {
      name: "Liqueurs",
      title: "Liqueurs",
      summary: "Fruit and cognac-based liqueurs, macerated and blended to a brief.",
      intro: [
        "Fruit liqueurs made in the Cognac region: whole fruit macerated and blended without artificial additives, on a neutral spirit or on a cognac base, at the strength and sweetness a market asks for.",
        "The house has made mango liqueurs both ways: one on fruit alone, one infused into an award-winning cognac; and the same route is open to any fruit a partner brings.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary: "The house appellation, worked for partners from the crus around Brie-sous-Archiac.",
      intro: [
        "The house stands among the Petite Champagne and Fins Bois crus, and cognac is the spirit it has made longest. For partners, that means eaux-de-vie selected and blended to a brief, then aged in Limousin oak to the grade the market asks for: VS, VSOP or XO.",
        "Puranique is the family's own cognac. The range lives on puraniques.com rather than here.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary: "Charentais double distillation and cognac-cask finishing, for malt and blend alike.",
      intro: [
        "For partners, whisky can be made the Charentais way: double-distilled in the same copper pot stills the house uses for cognac, then laid down in Limousin oak casks that previously held cognac.",
        "Glen Mac Clay is the house's own bottling in the category: a blended Scotch selected in the southern Highlands, married with an unpeated malt and matured in Bourbon casks.",
      ],
    },
    rum: {
      name: "Rum",
      title: "Rum",
      summary:
        "Cane distillates sourced abroad, then aged, finished, blended and dressed in France.",
      intro: [
        "Rum arrives as a distillate and leaves as a brand. The house sources from cane-growing origins, then carries out the work that gives a rum its character here in the Charente: ageing, finishing in cognac wood, blending and dress.",
        "Irie comes from the Dominican Republic and from Trinidad & Tobago, amber, on tropical fruit, praline and caramel; TIJUCA is a Brazilian blend, coppery, on vanilla, pepper and honey.",
      ],
    },
    gin: {
      name: "Gin",
      title: "Gin",
      summary: "Juniper composed to a partner's brief, macerated and distilled in copper.",
      intro: [
        "Gin is where a brief becomes most legible: the botanical bill is the brand. The house macerates and distils in copper, and can move a recipe from first sketch to sealed case without leaving the courtyard.",
        "Hold Up meets juniper with tonka bean, anise and a light citrus edge; GIN40 carries the Landes: pine and wild blackberry.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Grape vodka from Bordeaux, distilled and released by vintage.",
      intro: [
        "Vodka need not be neutral in origin. The house distils from Bordeaux grapes and releases by vintage: the power of Cabernet Sauvignon, the roundness of Merlot, the finesse of Sémillon.",
        "Puranique is the family's own vodka. The range lives on puraniques.com rather than here.",
      ],
    },
    aperitifs: {
      name: "Apéritifs & spirit drinks",
      title: "Apéritifs & spirit drinks",
      summary: "Lower-strength grape products: French apéritifs and cognac-based spirit drinks.",
      intro: [
        "Grape must, eaux-de-vie and Pineau des Charentes, composed at apéritif strength. These are the house's answer to markets that want a cognac character served long, chilled or over ice.",
        "Puranique Pineau des Charentes is the family's own apéritif. The range lives on puraniques.com rather than here.",
      ],
    },
  },

  // The Partners section. Two houses, deliberately unalike: Les Brûleries
  // Modernes shares the courtyard at Brie-sous-Archiac and its range is carried
  // here in full, while Puranique has a site of its own and the house asked
  // that its portfolio not be restated on this one. `linkLabel` is the bare
  // domain, shown on the card that leaves the site.
  partners: {
    title: "Partners",
    intro: [
      "Two houses stand beside the distillery. One shares its courtyard and its stills; the other carries the family's own name and keeps a site of its own.",
    ],
    note: "Distributed in France by Mähler-Besse.",
    ctaLabel: "Start a project",
    backToPartners: "Back to partners",
    rangeHeading: "The range",
    visitSite: "Visit the site",
    visitSiteAria: "Visit the {name} site (opens in a new tab)",
    viewRange: "View the range",
    viewRangeAria: "View the {name} range",
    metaDescription:
      "The two houses alongside Distillerie Vinet-Puranik: Les Brûleries Modernes, whose apéritifs and spirits are made on the estate, and Puranique, the family's own label.",
    companies: {
      "les-bruleries-modernes": {
        descriptor: "Gin, whisky and rum for the on-trade",
        intro:
          "Founded in 2019 and built on the distillery's own stills, Les Brûleries Modernes assembles a portfolio of spirits for bars, restaurants and independent merchants. Its bottles are finished and dressed in the same courtyard at Brie-sous-Archiac.",
        frameLabel: "Packshot: Hold Up gin",
        linkLabel: "lesbruleriesmodernes.com",
      },
      puranique: {
        descriptor: "The family's own label",
        intro:
          "Puranique is the family's own range of French spirits. It has a site of its own, and that is where the range lives: cognac, vodka, Pineau and liqueurs, with the tasting notes and awards that belong to them.",
        frameLabel: "Packshot: Puranique Cognac V.S.O.P",
        linkLabel: "puraniques.com",
      },
    },
  },

  privateLabel: {
    title: "Private labels & white labels",
    intro: [
      "Most of these bottles belong to importers, retailers and brand owners who came to Brie-sous-Archiac with a market in mind. The house composes the liquid, sources the dress and ships the finished case under their name.",
      "They are grouped below by category, alongside the house's own bottles: proof of reach across grape, grain and cane, and the quickest way to find the nearest thing to the project you have in mind.",
    ],
    note: "Distributed in France by Mähler-Besse.",
    ctaLabel: "Start a project",
    noBrandsYet: "Made to order",
    brandCountOne: "1 brand",
    brandCountOther: "{count} brands",
    inCollectionOne: "1 brand in the collection",
    inCollectionOther: "{count} brands in the collection",
    explore: "Explore {name}",
    otherCategories: "Other categories",
    backToAll: "Back to all categories",
    viewDetails: "View details",
    viewDetailsAria: "View details for {name} (opens in a new tab)",
    // House bottles have no producer page to link out to — their story is on
    // the category page itself, so the label says so rather than promising a
    // spec sheet elsewhere.
    readTheStory: "Read the story",
    readTheStoryAria: "Read the story of {name}",
    houseHeading: "From the house",
    partnerHeading: "Shaped for partners",
    metaDescription:
      "Private-label and white-label spirits from Distillerie Vinet-Puranik: cognac, brandy, whisky, rum, gin, vodka, liqueurs and apéritifs made for importers, retailers and brand owners, grouped by category.",
  },

  featurePanels: {
    bespoke: {
      title: "Private label & bespoke spirits",
      body: "Private-label and white-label programmes built around your market: recipe, liquid, dress and dossier, carried from first sketch to a sealed case under your name.",
      ctaLabel: "Start a project",
      frameLabel: "Feature: barrels ageing in the cellar",
    },
    "know-how": {
      ctaLabel: "Start a project",
      frameLabel: "Feature: copper pot stills in the still house",
    },
  },

  // The eight categories the house can produce, told on the home page. The
  // category names themselves come from `families` via getSpiritFamilies, so
  // only the frame copy lives here.
  production: {
    kicker: "What we produce",
    title: "Every spirit, one house",
    intro:
      "Cognac and brandy, whisky, rum, gin, vodka, liqueurs and apéritifs. The house distils, ages, blends and bottles across eight categories, for its own range and for the private-label brands it builds with partners.",
    frameLabel:
      "A sample drawn from an oak cask in the cellar, the pipette in hand and the tasting glass beside the bung.",
    allProducts: "All categories",
  },

  // The two people who speak for the house, on /about: the brochure's shorter
  // quotes. Bruno's longer statement used to sit on the home page as well; that
  // section now belongs to the vineyards (`terroir`).
  leadership: {
    label: "Leadership",
    title: "Two leaders, one house",
    intro:
      "A family distillery in the Charente, and a group with offices on three continents. The house is run by both.",
    leaders: {
      bruno: {
        name: "Bruno Delannoy",
        role: "General Manager",
        quote: "Passion above all.",
        body: [
          "At the beginning of the 1990s I took over a family business handed down for generations, decided to enter into export, and discovered another world.",
          "Over thirty years later, with a vibrant, motivated and multicultural team, Vinet-Puranik Distillerie is present in more than twenty countries.",
        ],
        portraitAlt: "Bruno Delannoy in the still house, holding a tasting glass.",
      },
      rahul: {
        name: "Rahul Puranik",
        role: "Chief Executive Officer",
        quote: "One team. One vision. One future.",
        body: [
          "Vinet-Puranik Distillerie combines the historical expertise of French distillation with the group's international network.",
          "We aim to strengthen our presence in international markets while building on the existing infrastructure and expertise.",
        ],
        portraitAlt: "Rahul Puranik, Chief Executive Officer of Distillerie Vinet-Puranik.",
      },
    },
  },

  group: {
    label: "Our group",
    title: "The Sawnee Group",
    body: [
      "The Sawnee Group is a multinational organisation headquartered in Atlanta, United States. The group brings its multinational experience and global business perspective across several industries, including aviation, real-estate investment, hospitality, distilling, beverage retail, international logistics and strategic procurement.",
      "Through its diversified portfolio and international network, the Sawnee Group operates across multiple regions with offices in France, Ireland, Singapore, India and the United States. That presence lets the group combine operational expertise with strategic market access.",
    ],
    industriesLabel: "Industries",
    industries: [
      "Aviation",
      "Real-estate investment",
      "Hospitality",
      "Distilling",
      "Beverage retail",
      "International logistics",
      "Strategic procurement",
    ],
    officesLabel: "Offices",
    offices: ["France", "Ireland", "Singapore", "India", "United States"],
    mapAlt: "World map showing the Sawnee Group's offices and markets.",
    figureLabels: {
      countries: "countries served",
      offices: "international offices",
      industries: "industries",
    },
  },

  // The vineyards and the region, where the two leadership quotes used to sit
  // on the home page: the house asked that the page show the estate, the vines
  // and the craft rather than the people. The leaders still speak on /about.
  terroir: {
    kicker: "The vineyards and the region",
    title: "French craftsmanship, rooted in the Charente",
    intro: [
      "Brie-sous-Archiac stands in the south of the Cognac appellation, where the Petite Champagne and Fins Bois crus meet. Around the courtyard, a hundred hectares of vines run over low chalk hills between Cognac and Bordeaux, an hour from the Atlantic coast.",
      "The craft is the region's own: white grapes pressed within hours of picking, wine distilled twice in copper pot stills, eau-de-vie left to rest in French oak. The house keeps those methods at the heart of everything it makes, for its own labels and for partners around the world.",
    ],
    facetsLabel: "From the vineyard to the bottle",
    facets: [
      {
        title: "The region",
        body: "The Haute-Saintonge, in Charente-Maritime: low hills of vines, Romanesque churches and stone villages, with Cognac thirty-five minutes to the north and the Gironde estuary to the west.",
      },
      {
        title: "The crus",
        body: "Petite Champagne and Fins Bois, two of the appellation's six growth areas, on chalk and limestone soils that give their eaux-de-vie finesse and length.",
      },
      {
        title: "The grape",
        body: "Ugni Blanc, the white grape that makes almost all cognac: picked in early autumn, pressed the same day and distilled through the winter.",
      },
      {
        title: "The craft",
        body: "Double distillation in copper Charentais pot stills, then years in Limousin oak: the method the appellation wrote down, still worked by hand at the house.",
      },
    ],
    alts: {
      landscape:
        "The distillery at Brie-sous-Archiac from the air: a row of steel vats along the bottling hall, with the village, the fields and the vines around them.",
      rows: "Rows of vines running to the horizon in late summer.",
      grapes: "Ripe white grapes on the vine, a few days before the harvest.",
    },
    captions: {
      landscape: "The house at Brie-sous-Archiac, from the air",
      rows: "The vines in late summer",
      grapes: "Before the harvest",
    },
    ctaLabel: "Visit the estate",
  },

  team: {
    alt: "Copper pot stills in the Vinet-Puranik still house at Brie-sous-Archiac.",
    label: "The house",
    caption: "The still house: Brie-sous-Archiac, Charente-Maritime",
  },

  // TODO(launch): placeholder quotes — see the note on `testimonialSlugs` in
  // site.ts. Names live there too; only the words are translated here.
  testimonials: {
    label: "What our partners say",
    showAria: "Show testimonial {index}",
    items: {
      "private-label": {
        quote:
          "From the first sample to the sealed case, the house held our brief exactly, and the cognac that came back was better than the one we asked for.",
      },
      creation: {
        quote:
          "We arrived with a recipe and a label. Vinet-Puranik turned them into a gin we could actually put in front of buyers, on time, at the volume we promised.",
      },
      export: {
        quote:
          "Three markets, three sets of paperwork, one bottling run: their team carried the compliance so ours could carry the brand.",
      },
    },
  },

  contact: {
    kicker: "Start a project",
    title: "Build your next spirit with Vinet-Puranik",
    body: "Share your brief: product ambition, market and timeline. The house replies with a considered path from first idea to finished bottle.",
    metaDescription:
      "Talk to Distillerie Vinet-Puranik about bespoke spirits, private label, bulk spirits, bottling or a visit. Named commercial contact, direct lines and an enquiry form.",
    intro: [
      "Tell us what you are trying to build: the product, the market, the timeline. Every enquiry reaches a person, not a queue.",
    ],
    formHeading: "Send an enquiry",
    formIntro: "Fields marked with an asterisk are required.",
    detailsLabel: "Reach the house directly",
    switchboardHeading: "Switchboard",
    followHeading: "Follow the house",
    homeTitle: "Have a project in mind?",
    homeBody:
      "From a first sketch to a sealed case, the house works to your brief. Tell us the market you are aiming at.",
    commercialHeading: "Commercial contact",
    commercialRole: "Export & commercial",
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
      successMessage: "Thank you. Your enquiry has been received. The house will reply shortly.",
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
      "Private label & bespoke spirits",
      "Know-how & innovation",
      "What we produce",
    ],
    legalLinks: [
      "Legal notice",
      "Privacy policy",
      "Cookie policy",
      "Terms of use",
      "Accessibility",
    ],
    rights: "All rights reserved.",
  },

  ageGate: {
    title: "Age verification required",
    subhead: "You must be of legal drinking age to enter this website",
    dobPrompt: "Please enter your date of birth",
    labels: { month: "Month", day: "Day", year: "Year" },
    placeholders: { month: "MM", day: "DD", year: "YYYY" },
    submit: "Verify age",
    errors: {
      incomplete: "Please enter your full date of birth.",
      invalid: "That date does not exist. Please check and try again.",
      future: "Please enter a date in the past.",
    },
    deniedTitle: "We're sorry",
    deniedMessage: "You must be at least {age} years old to enter this site.",
    deniedBack: "Go back",
    legal:
      "By entering, you confirm you are at least {age} years old and that it is lawful to view alcohol-related content in your country of residence. Your date of birth is checked in your browser and is never sent to us or stored.",
  },

  visit: {
    kicker: "Visit us",
    title: "The estate at Brie-sous-Archiac",
    heroLabel: "Hero: estate courtyard and cellars, golden hour",
    intro: [
      "Between the Petite Champagne and Fins Bois crus, the distillery opens its courtyard, cellars and stills to trade partners and curious visitors alike.",
      "Walk the ageing cellars, stand beside the copper pot stills and taste the house's work where it is made.",
    ],
    expect: [
      {
        title: "The cellars",
        body: "Ageing cellars where cognac, brandy and cask-finished whiskies rest.",
      },
      {
        title: "The still house",
        body: "Copper pot stills at work: the heart of the house since 1777.",
      },
      {
        title: "The tasting room",
        body: "Seated tastings of the house's spirits and works in progress, by appointment.",
      },
    ],
    entries: [
      {
        title: "Tours",
        body: "Guided visits through the cellars, still house and bottling halls.",
        frameLabel: "Card: barrel cellar walkway",
      },
      {
        title: "Tastings",
        body: "Seated tastings in the estate tasting room.",
        frameLabel: "Card: tasting glasses on oak",
      },
    ],
    discover: "Discover",
    expectLabel: "What to expect",
    mapLabel: "Aerial view of the estate at Brie-sous-Archiac",
    bookCta: "Book a visit",
    practicalCta: "Practical information",
    book: {
      heading: "Book a visit",
      body: "All visits are by appointment. Send the dates you have in mind, your party size and whether you would like a tour, a tasting or both. The house will confirm by return.",
      ctaLabel: "Book through the enquiry form",
      mailSubject: "Visit booking: Vinet-Puranik estate",
    },
    practical: {
      heading: "Practical information",
      items: [
        { label: "Address", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France" },
        { label: "Hours", value: "By appointment, Monday to Friday" },
        {
          label: "Access",
          value: "20 minutes from Jonzac, 35 minutes from Cognac; on-site parking",
        },
        { label: "Languages", value: "Visits in French and English" },
      ],
    },
    metaDescription:
      "Visit the Vinet-Puranik estate at Brie-sous-Archiac: cellars, copper pot stills and tastings in the heart of the Cognac region. Tours and tastings by appointment.",
  },

  tours: {
    kicker: "Visit us · Tours",
    title: "Private tours",
    intro:
      "Private tours can be arranged for individuals, groups, customers, distributors, trade partners and special guests.",
    body: "Tours and tastings are available by prior appointment. Please contact our office to arrange your visit.",
    ctaLabel: "Contact us",
    frameLabel: "Copper pot stills in the still house",
    crossLinkTitle: "Prefer to stay at the table?",
    crossLinkCta: "Discover our tastings",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Private tours of the Vinet-Puranik distillery at Brie-sous-Archiac for individuals, groups, distributors and trade partners. Tours and tastings by prior appointment.",
  },

  tastings: {
    kicker: "Visit us · Tastings",
    title: "Tastings at the estate",
    intro:
      "Seated tastings in the estate tasting room can be arranged for individuals, groups, customers, distributors, trade partners and special guests.",
    body: "Tours and tastings are available by prior appointment. Please contact our office to arrange your visit.",
    ctaLabel: "Contact us",
    frameLabel: "New-make spirit running off the still into a copper receiver",
    crossLinkTitle: "Rather walk the cellars first?",
    crossLinkCta: "Discover our tours",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Seated tastings of the house's spirits at the Vinet-Puranik estate in Brie-sous-Archiac, for individuals, groups, distributors and trade partners. Tours and tastings by prior appointment.",
  },

  // Six top-level items, in the order the house asked for them. "Private label
  // & bespoke spirits" has left the About column: it is a section of its own
  // now, and listing it twice made the widest menu on the bar the one place a
  // visitor could not find it.
  nav: {
    about: {
      label: "About us",
      links: [
        "Our story",
        "Know-how & innovation",
        "Our leadership",
        "Events",
      ],
      featuredHeading: "In the house",
      featured: [
        { label: "Our production", frameLabel: "Featured: copper pot stills" },
        { label: "Since 1777", frameLabel: "Featured: family portrait in the cellar" },
      ],
      viewAll: "Our know-how",
    },
    partners: {
      label: "Partners",
      featuredHeading: "The two houses",
      viewAll: "Both partners",
    },
    privateLabel: {
      label: "Private labels / white labels",
      overview: "Overview",
      featuredHeading: "By category",
      featuredFrameLabels: [
        "Featured: Glen Smith packshot",
        "Featured: Velorin Vodka packshot",
        "Featured: Montlieu X.O packshot",
      ],
      viewAll: "View all categories",
    },
    visit: {
      label: "Visit us",
      links: ["The estate", "Book a visit", "Practical information"],
      featuredHeading: "The estate",
      featured: [{ label: "Brie-sous-Archiac", frameLabel: "Featured: the estate from the air" }],
      viewAll: "Plan your visit",
    },
    // Tours and tastings keep their own pages under /visit; this menu is the
    // house's request that they be reachable without going through the estate
    // page first.
    toursTastings: {
      label: "Tours & tastings",
      links: ["Tours", "Tastings"],
      featuredHeading: "At the estate",
      featured: [
        { label: "Private tours", frameLabel: "Featured: barrel cellar walkway" },
        { label: "Tastings at the estate", frameLabel: "Featured: the estate tasting room" },
      ],
      viewAll: "Plan your visit",
    },
    // Contact has no megamenu: the top-level item links straight to
    // the enquiry form, so it needs a label and nothing else.
    contact: {
      label: "Contact",
    },
  },

  ui: {
    home: "home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    featured: "Featured",
    startAProject: "Start a project",
    skipToContent: "Skip to content",
  },

  notFound: {
    title: "Lost in the cellars",
    body: "The page you are looking for has been moved, renamed or never existed.",
    cta: "Back to the house",
  },

  metadata: {
    // Meta keywords, one list per language; search engines weigh them little,
    // but the French and Spanish editions should not carry English ones.
    keywords: [
      "bespoke spirits",
      "private label spirits",
      "contract distilling",
      "custom bottling",
      "Cognac region distillery",
      "white label spirits",
    ],
    homeTitle: "French distilling heritage since 1777",
    titleTemplate: "Vinet-Puranik · %s",
    description:
      "Family-owned Cognac-region distillery offering bespoke spirits, private-label and white-label programmes, bottling and product development for trade partners in more than twenty countries.",
    aboutTitle: "Our story",
    privateLabelTitle: "Private labels & white labels",
    partnersTitle: "Partners",
    contactTitle: "Contact",
    visitTitle: "Visit us",
    toursTitle: "Private tours",
    tastingsTitle: "Tastings",
  },

  // ---------------------------------------------------------------------------
  // Legal pages. Drafts: they describe what the site genuinely does, but the
  // company identifiers are placeholders and nothing here has been reviewed by
  // the house's counsel. `[...]` marks every value the house must supply.
  // ---------------------------------------------------------------------------
  // Legal pages. Written to be read by a visitor: short sentences, no
  // recitals, only what the law requires. Identifiers are interpolated from
  // `companyRegistration` in site.ts so they cannot drift between languages.
  events: {
    title: "Events",
    metaDescription:
      "Tastings, open days and trade shows at Distillerie Vinet-Puranik and beyond. Where to meet the house.",
    intro: "Where to meet the house: at the estate and at trade shows.",
    empty: "No events are scheduled at the moment. Write to us and we will arrange a visit.",
    placeholderTag: "Sample",
    ctaLabel: "Ask about this event",
    items: {
      "sample-trade-tasting": {
        name: "Sample: trade tasting, Paris",
        location: "Paris, France",
        description:
          "A seated tasting of the house range for importers and brand owners, led by the cellar master.",
      },
      "sample-harvest-open-day": {
        name: "Sample: harvest open day",
        location: "Brie-sous-Archiac",
        description:
          "The estate opens its courtyard during the harvest: the presses at work, the stills running and the new eaux-de-vie straight off the still.",
      },
      "sample-distillery-day": {
        name: "Sample: distillery day",
        location: "Brie-sous-Archiac",
        description:
          "A day in the still house with the distilling team, from the first heating to the cut, finishing in the cellars.",
      },
    },
  },

  legal: {
    updatedLabel: "Last updated",
    updated: "26 August 2026",
    backLabel: "Back to the house",
    pages: {
      "mentions-legales": {
        title: "Legal notice",
        metaDescription:
          "Who publishes and hosts the Vinet-Puranik website: company details, registration numbers and contact information.",
        intro: "Who runs this site, and how to reach us.",
        sections: [
          {
            heading: "The company",
            body: [
              "This site is published by Distillerie Vinet-Puranik, an {legalForm} with share capital of {shareCapital}.",
              "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France.",
              "Telephone {phone}. Email {email}.",
            ],
          },
          {
            heading: "Registration",
            body: [
              "Registered with the Trade and Companies Register of {rcsCity} under number {siren}.",
              "SIRET {siret}. VAT number {vat}.",
            ],
          },
          {
            heading: "Directors of publication",
            body: ["{ceoName}, {ceoRole}. {gmName}, {gmRole}."],
          },
          {
            heading: "Hosting",
            body: ["This site is hosted by {host}."],
          },
          {
            heading: "Text and images",
            body: [
              "The words, photographs and design on this site belong to us, or we have permission to use them. Please ask before reproducing any of them.",
              "Product names and logos belong to their owners, including the partner brands we produce for.",
            ],
          },
          {
            heading: "Applicable law",
            body: ["This site is governed by French law."],
          },
        ],
      },
      privacy: {
        title: "Privacy policy",
        metaDescription:
          "The Vinet-Puranik site collects only what you type into the enquiry form. No analytics, no advertising, no tracking.",
        intro:
          "We collect almost nothing. There is no analytics, no advertising and no tracking on this site.",
        sections: [
          {
            heading: "What we collect",
            body: [
              "Only what you type into the enquiry form: your name, your company if you give it, your email address, the type of enquiry and your message.",
              "We use it to read your enquiry and reply to it. Nothing else. We do not profile you, we do not add you to a mailing list, and we never sell or share your details.",
            ],
          },
          {
            heading: "We do not keep your date of birth",
            body: [
              "The age check runs inside your browser. Your date of birth is used to work out whether you are old enough, then discarded. It never reaches us.",
            ],
          },
          {
            heading: "Who else sees your enquiry",
            body: [
              "Your message reaches our inbox through Resend, the service that delivers our email. Our hosting provider serves the pages. Nobody else is involved.",
              "Resend is based in the United States, so your enquiry leaves the European Union on its way to us. That transfer is covered by a data processing agreement with them, using the standard contractual clauses approved by the European Commission.",
              "Even the typefaces are served from our own site, so simply reading a page sends nothing to anyone else.",
            ],
          },
          {
            heading: "How long we keep it",
            body: [
              "For as long as we are working together, and for up to three years after we last hear from you if nothing comes of it.",
            ],
          },
          {
            heading: "Your rights",
            body: [
              "You can ask us for a copy of what we hold about you, have it corrected or deleted, ask us to limit how we use it, object to our using it, or ask for it in a form you can take elsewhere. Write to contact@vinet-puranik.com and we will reply within a month.",
              "Nothing here makes automated decisions about you, and we do not profile you.",
              "If you are not satisfied, you can complain to the CNIL, the French data protection authority, at cnil.fr.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie policy",
        metaDescription:
          "This site uses one cookie, to remember the age check. No analytics, no advertising, no tracking cookies.",
        intro: "This site uses one cookie, and it holds nothing about you.",
        sections: [
          {
            heading: "The one cookie",
            body: [
              "It is called vd_age_verified. It records that you have passed the age check, so you are not asked again on every page.",
              "It contains a single character: 1. No date of birth, no identifier, nothing personal. It lasts thirty days and is never sent to anyone else.",
            ],
          },
          {
            heading: "Why there is no cookie banner",
            body: [
              "Cookies that are strictly necessary for something you asked for do not need consent, and an age check is one of them. Since we set nothing else, there is nothing for you to accept or refuse.",
            ],
          },
          {
            heading: "What we do not use",
            body: [
              "No analytics. No advertising or retargeting. No social media pixels. No third-party scripts at all.",
            ],
          },
          {
            heading: "Removing it",
            body: [
              "You can delete it in your browser settings at any time, or block cookies altogether. The age check will simply appear again on your next visit.",
            ],
          },
        ],
      },
      terms: {
        title: "Terms of use",
        metaDescription:
          "Terms for using the Vinet-Puranik website: an information site for trade partners, with no online sales.",
        intro: "The terms for using this site. Using it means accepting them.",
        sections: [
          {
            heading: "What this site is",
            body: [
              "An information site for trade partners: importers, distributors, retailers and brand owners. Nothing is sold here, no prices are published, and no order can be placed.",
              "Sending an enquiry is asking us a question. It is not an order, and our reply is not a contract. Any supply is agreed separately, in writing.",
            ],
          },
          {
            heading: "You must be of legal drinking age",
            body: [
              "This site shows alcoholic drinks. Please only use it if you have reached the legal drinking age where you live.",
            ],
          },
          {
            heading: "Information may change",
            body: [
              "We describe our products carefully, but the range, its specifications and its availability change over time. Descriptions, tasting notes, ages and figures here are indicative, not promises.",
            ],
          },
          {
            heading: "Links to other sites",
            body: [
              "We link to the sites of the producers and brand owners we work with. Those sites are not ours, and we are not responsible for them.",
            ],
          },
          {
            heading: "Availability",
            body: [
              "We aim to keep this site working and accurate, but we cannot guarantee it is always available or free of error.",
            ],
          },
          {
            heading: "Changes to these terms",
            body: [
              "We may update these terms; the version on this page is the one that applies. If part of them turns out not to be enforceable, the rest still stands.",
            ],
          },
          {
            heading: "Applicable law",
            body: ["These terms are governed by French law."],
          },
        ],
      },
      accessibility: {
        title: "Accessibility",
        metaDescription:
          "How the Vinet-Puranik site works for visitors using a keyboard, a screen reader, or reduced-motion and contrast settings.",
        intro: "We want this site to work for everyone. Here is where it stands.",
        sections: [
          {
            heading: "What we aim for",
            body: [
              "Level AA of the Web Content Accessibility Guidelines (WCAG 2.1), the standard behind the French RGAA.",
              "This statement covers the whole of this site and reflects our own review on the date above, not an independent audit.",
            ],
          },
          {
            heading: "What works today",
            body: [
              "Every page has one main heading and a skip link. The menus, the language switcher and the enquiry form all work by keyboard, and you can always see where you are.",
              "If your device asks for reduced motion, every animation on the site turns itself off. Photographs that carry information have descriptions; decorative ones are skipped rather than read out twice.",
              "Form errors are announced, marked with more than colour, and move you to the field that needs fixing.",
            ],
          },
          {
            heading: "Where it falls short",
            body: [
              "Some small text on tinted backgrounds sits close to the minimum contrast. We have not yet had an independent audit.",
            ],
          },
          {
            heading: "Tell us if something blocks you",
            body: [
              "Write to contact@vinet-puranik.com and tell us what happened. We will reply, and where we can we will get you the information another way.",
              "If you tell us about a problem and our answer does not satisfy you, you can refer the matter to the Défenseur des droits at defenseurdesdroits.fr.",
            ],
          },
        ],
      },
    },
  },

  responsibleDrinking: "Alcohol abuse is dangerous for your health. Please drink responsibly.",
};

/**
 * The shape every locale must satisfy. Inferred from English so there is one
 * definition to keep in step rather than a hand-written interface that can
 * silently fall behind the copy.
 */
export type Content = typeof en;
