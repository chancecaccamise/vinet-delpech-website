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
    support: "A French heritage. A global presence.",
    primaryCtaLabel: "Start a project",
    posterLabel: "Hero: barrel cellar, cinematic slow dolly",
    scroll: "Scroll",
  },

  maisonStatement: {
    kicker: "The house",
    line: "From the soil to the glass. From the vineyard to the bottle. Your dream in a bottle.",
    body: "Vinet-Puranik is a distillery with a rich heritage and deep roots. We do not simply sell products. We offer an experience, a way of life. Every product is crafted at the distillery: from the vineyard to the cellars, through distillation, and finally to the bottle.",
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
        body: "Fins Bois and Petite Champagne vines, a Charente estate, and the appellations that come with them.",
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
    crossLinkHistory: "Our history",
    crossLinkPresident: "A word from our leadership",
    crossLinkPartnerships: "The brands we shape",
  },

  collection: {
    kicker: "The collection",
    title: "Brands shaped by the house",
    intro:
      "The house's own range, and the private-label brands it shapes for partners: proof of reach across categories, casks and markets.",
    distributionNote: "Distributed in France by Mähler-Besse.",
    allProducts: "All our products",
  },

  // Keyed by brand slug — all twenty-one, the house's own range first and the
  // partner brands after, in one uniform shape so `getBrands` sees a single
  // record type. Names stay as they are in every language: they are trade
  // marks, not our copy. The house's long-form brochure copy lives separately
  // in `houseBrands` below.
  brands: {
    "puranique-vodka": {
      category: "Ultra-premium vodka · nine times distilled",
      descriptor:
        "Fine French wheat distilled nine times and filtered with precision: bold yet subtle, smooth on the palate, crisp on the finish.",
      frameLabel: "Packshot: Puranique Vodka, tricolour label",
    },
    "puranique-cognac-vs": {
      category: "Cognac V.S · two years minimum",
      descriptor:
        "Youthful and expressive, aged at least two years in French oak: crisp orchard fruit over a smooth, approachable character.",
      frameLabel: "Packshot: Puranique Cognac V.S",
    },
    "puranique-cognac-vsop": {
      category: "Cognac V.S.O.P · four years minimum",
      descriptor:
        "Hand-selected eaux-de-vie aged at least four years, some far longer: dried fruit, vanilla and spice over a lingering finish.",
      frameLabel: "Packshot: Puranique Cognac V.S.O.P",
    },
    "jus-d-manguier": {
      category: "Mango liqueur",
      descriptor:
        "Real Alphonso mangoes worked in Cognac with no artificial additives: juicy, balanced and unmistakably tropical.",
      frameLabel: "Packshot: Jus d'Manguier mango liqueur",
    },
    mangeaux: {
      category: "Cognac-infused mango liqueur",
      descriptor:
        "An award-winning cognac base infused with Alphonso mango: brilliant amber, on ripe fruit, candied peel and gingerbread.",
      frameLabel: "Packshot: Mangeaux cognac and mango liqueur",
    },
    "puranique-pineau-blanc": {
      category: "Pineau des Charentes · Blanc",
      descriptor:
        "Montils and ugni blanc must blended with cognac from the family vineyard: generous, lively and slightly tangy.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Blanc",
    },
    "puranique-pineau-rouge": {
      category: "Pineau des Charentes · Rouge",
      descriptor:
        "Merlot and cabernet sauvignon must with cognac eau-de-vie: lively and round, on forest and stone fruit.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Rouge",
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
    "brigitte-et-louise-blanc": {
      category: "Apéritif · 17.5%",
      descriptor:
        "Grape must blended with cognac eau-de-vie from a family estate: fruit and white flowers, ample and round.",
      frameLabel: "Packshot: Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Apéritif · 17.5%",
      descriptor:
        "Merlot and Cabernet Sauvignon must with cognac eau-de-vie: lively and round, on woodland and stone fruit.",
      frameLabel: "Packshot: Brigitte et Louise Rouge",
    },
    "maca-rum": {
      category: "Spiced rum",
      descriptor:
        "Distilled in Mauritius, aged and finished in France: enveloping cinnamon and the round mystery of tonka bean.",
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
        "Artisanally distilled in south-west France with Landes influences: juniper, pine and wild blackberry.",
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
        "Rested four months in Fronsac red-wine casks: faintly pink with golden nuance, in fewer than 250 numbered bottles.",
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
      "puranique-vodka": {
        heritage:
          "Rooted in the spirit-making traditions of southwest France, Puranique Vodka reflects generations of craft and care. Made from fine French wheat and distilled nine times, every bottle is shaped by a master distiller's expertise.",
        story:
          "Each bottle begins with the finest French wheat, selected for its purity. Under the guidance of our cellar master it undergoes an exacting distillation repeated nine times, then careful filtration. The result is a bold yet subtle profile: smooth on the palate, crisp on the finish. Serve it neat or at the centre of a cocktail.",
        notes: {
          eye: "Crystal clear",
          nose: "Fresh and pleasant",
          palate: "Round, smooth and delicate",
        },
        storyFrameLabel: "Lifestyle: Puranique Vodka served over ice with citrus",
      },
      "puranique-cognac-vs": {
        heritage:
          "Rooted in the traditions of Cognac, Puranique V.S reflects the essential spirit of its origin. Aged in French oak for a minimum of two years, each batch is guided by cellar masters who uphold time-honoured technique to shape a bright, expressive cognac.",
        story:
          "A youthful, vibrant cognac crafted in the Cognac region and aged at least two years in French oak barrels. The blend leads on crisp fruit and a smooth, approachable character, which makes it as comfortable in a cocktail as it is served neat. Its freshness and clarity are the bold side of modern cognac.",
        notes: {
          eye: "Fresh orchard fruit",
          nose: "Vanilla lift with light oak",
          palate: "Soft, approachable finish",
        },
        storyFrameLabel: "Lifestyle: Puranique Cognac V.S on a Paris café table",
      },
      "puranique-cognac-vsop": {
        heritage:
          "Made in the Cognac region, Puranique V.S.O.P draws on a deep reserve of hand-selected eaux-de-vie. Aged at least four years, with older blends lending complexity, it is refined through meticulous ageing and blending.",
        story:
          "A refined expression aged at least four years, with select eaux-de-vie matured far longer in oak. Distilled in Cognac, it reveals rich layers of dried fruit, vanilla and spice over a smooth, lingering finish: heritage, patience and depth in every sip.",
        notes: {
          eye: "Dried fruits and honey",
          nose: "Vanilla, toasted oak, a hint of spice",
          palate: "Rounded, lingering finish",
        },
        storyFrameLabel: "Lifestyle: Puranique Cognac V.S.O.P poured into a snifter",
      },
      "jus-d-manguier": {
        heritage:
          "Crafted in the historic Cognac region, Jus d'Manguier blends tradition with tropical elegance. Each batch begins with real Alphonso mangoes, known for their vibrant sweetness and rich aroma, worked with precision and free from artificial additives.",
        story:
          "A mango liqueur that takes its flavour from Alphonso mangoes, prized for their sweetness, richness and depth. Natural fruit, French distillation, nothing artificial. Serve it chilled, over ice, or as a base for cocktails.",
        notes: {
          eye: "Juicy tropical mango",
          nose: "Balanced sweetness, citrus lift",
          palate: "Crisp, refreshing finish",
        },
        storyFrameLabel: "Lifestyle: Jus d'Manguier served long over ice",
      },
      mangeaux: {
        heritage:
          "Mangeaux begins as cognac. Each batch starts from the house's own cognac base, then takes a slow infusion of Alphonso mangoes: cognac craftsmanship carrying a tropical fruit.",
        story:
          "Born from the idea of combining French distillation mastery with tropical flavour, Mangeaux is built on an award-winning cognac recognised with a silver medal at the New York Spirits & Wine competition. Into that base we infuse the most prized Alphonso mangoes, for a brilliant amber liqueur whose layers unfold with each sip.",
        notes: {
          eye: "Brilliant amber colour",
          nose: "Fruity aromas with vanilla and citrus",
          palate: "Subtle and smooth: ripe mango, candied fruit, gingerbread",
        },
        storyFrameLabel: "Lifestyle: Mangeaux in a coupe, mango and lime alongside",
      },
      "puranique-pineau-blanc": {
        heritage:
          "Puranique Pineau des Charentes is a French apéritif obtained by blending grape must with cognac from the family vineyard, at the heart of the delimited production area and certified Haute Valeur Environnementale, level 3.",
        story:
          "The Blanc is made from the montils and ugni blanc grape varieties. Light and easy-drinking, it is enjoyed chilled, on the rocks, in long drinks or in cocktails.",
        notes: {
          eye: "Deep gold appearance",
          nose: "Intense: fruit and notes of white flowers",
          palate: "Generous, lively, supple and slightly tangy, with a fantastic finish",
        },
        storyFrameLabel: "Lifestyle: Pineau blanc served chilled at the apéritif table",
      },
      "puranique-pineau-rouge": {
        heritage:
          "Puranique Pineau des Charentes is a French apéritif obtained by blending grape must with cognac from the family vineyard, at the heart of the delimited production area and certified Haute Valeur Environnementale, level 3.",
        story:
          "The Rouge blends merlot and cabernet sauvignon must with eau-de-vie de Cognac. Light and easy-drinking, it is enjoyed chilled, on the rocks, in long drinks or in cocktails.",
        notes: {
          eye: "Bright ruby appearance",
          nose: "Aromatic, at once woody and fruity",
          palate: "Lively and round on forest and stone fruit, with a rich, sustained finish",
        },
        storyFrameLabel: "Lifestyle: Pineau rouge served over ice with charcuterie",
      },
      "montlieu-xo": {
        heritage:
          "This authentic finest brandy comes from a very careful selection of grapes. Distilled in a column still, Montlieu X.O is then aged in oak barrels for a minimum of three years.",
        story:
          "Aged in oak casks, Montlieu X.O is recommended as a digestive, neat or over ice. It seduces with its elegance, its balance and its aromas.",
        notes: {
          eye: "Amber colour",
          nose: "Delicate notes of almond and vanilla",
          palate: "Well balanced and smooth",
        },
        storyFrameLabel: "Lifestyle: Montlieu X.O poured at a celebration table",
      },
      "glen-mac-clay": {
        heritage:
          "Glen Mac Clay Blended Scotch Whisky was carefully selected in the south of the Highlands. It is composed primarily of wheat and malt distilled in a column still, then blended with an unpeated blended malt from the same distillery, distilled in a copper pot still, and matured in Bourbon casks for a minimum of three years.",
        story:
          "This Scotch was elaborated in the purest tradition: distilled with passion and aged in oak barrels for several years. Enjoy it as a long drink with soda water or ginger beer.",
        notes: {
          eye: "Bright, with light hints of gold",
          nose: "Fruity notes of pear, apple and grape",
          palate: "Balanced and smooth, malted, on refreshing pear",
        },
        storyFrameLabel: "Lifestyle: Glen Mac Clay in a Highland landscape",
      },
    },
  },

  families: {
    brandy: {
      name: "Brandy",
      title: "Brandy",
      summary: "Column-distilled grape brandy, aged in oak: outside the cognac appellation by design.",
      intro: [
        "Brandy made from a careful selection of grapes and distilled in a column still rather than the copper pot the appellation requires. It is a different method and a different spirit, so it is shown on its own page rather than folded in beside the cognacs.",
        "Montlieu X.O is the house's own: at least three years in oak casks, recommended as a digestive, neat or over ice.",
      ],
    },
    liqueurs: {
      name: "Liqueurs",
      title: "Liqueurs",
      summary: "Alphonso mango worked in Cognac: one on fruit alone, one on a cognac base.",
      intro: [
        "Fruit liqueurs made in the Cognac region from real Alphonso mangoes, distilled with precision and free of artificial additives. Each batch follows the harvest, so the character moves a little from year to year.",
        "Jus d'Manguier is the fruit expression, served chilled, over ice or as a base for cocktails. Mangeaux infuses the same mango into an award-winning cognac, for a brilliant amber liqueur with rather more depth.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary: "The house appellation, worked for partners from the crus around Brie-sous-Archiac.",
      intro: [
        "The house stands among the Petite Champagne and Fins Bois crus, and cognac is the spirit it has made longest. For partners, that means eaux-de-vie selected and blended to a brief, then aged in Limousin oak until the quality (VS, VSOP, XO) is the one the market asks for.",
        "The house's own Puranique cognacs sit here too: the V.S bright and approachable after two years in French oak, the V.S.O.P drawn from a deep reserve of hand-selected eaux-de-vie and aged at least four.",
        "Patte Blanche is the collection's organic expression: ECOCERT-certified, hand-distilled at Arthenac, with no artificial input from vine to glass.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary: "Single malt of France: Charentais double distillation, finished in cognac oak.",
      intro: [
        "Whisky made the Charentais way: double-distilled in the same copper pot stills the house uses for cognac, then laid down in Limousin oak casks that previously held it.",
        "Palisson Batch 01 is the first release of that programme: at least three years in wood, bottled at 43%. Alongside it the house bottles Glen Mac Clay, a Blended Scotch selected in the southern Highlands and matured in Bourbon casks.",
      ],
    },
    rum: {
      name: "Rum",
      title: "Rum",
      summary:
        "Cane distillates sourced abroad, then aged, finished, blended and dressed in France.",
      intro: [
        "Rum arrives as a distillate and leaves as a brand. The house sources from the cane-growing origins, then carries out the work that gives a rum its character here in the Charente: ageing, finishing in cognac wood, blending and dress.",
        "MACA is distilled in Mauritius and finished in France on cinnamon and tonka bean; TIJUCA is a Brazilian blend, coppery, on vanilla, pepper and honey.",
      ],
    },
    gin: {
      name: "Gin",
      title: "Gin",
      summary: "Three readings of juniper, each distilled in copper to a partner's brief.",
      intro: [
        "Gin is where a brief becomes most legible: the botanical bill is the brand. The house macerates and distils in copper, and can move a recipe from first sketch to sealed case without leaving the courtyard.",
        "Hold Up meets juniper with tonka and anise; Gigi en Provence is organic, on violet, rosemary and a discreet note of olive; GIN40 carries the Landes: pine and wild blackberry.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "The house's own French wheat vodka, and grape vodka made by vintage.",
      intro: [
        "Puranique Vodka is the house's own: fine French wheat distilled nine times and carefully filtered, for a profile that is bold yet subtle, round on the palate and crisp on the finish.",
        "Vodka need not be neutral in origin either. Nade is distilled from Bordeaux grapes and released by vintage: the power of Cabernet Sauvignon, the roundness of Merlot, the finesse of Sémillon.",
        "The 2019 was rested four months in Fronsac red-wine casks and bottled in fewer than 250 numbered bottles; the 2022 is the current vintage.",
      ],
    },
    aperitifs: {
      name: "Apéritifs & spirit drinks",
      title: "Apéritifs & spirit drinks",
      summary: "Lower-strength grape products: French apéritifs and cognac-based spirit drinks.",
      intro: [
        "Grape must, eaux-de-vie and Pineau des Charentes, composed at apéritif strength. These are the house's answer to markets that want a cognac character served long, chilled or over ice.",
        "Puranique Pineau des Charentes is the house's own, white and red, blending grape must with cognac from the family vineyard at the heart of the delimited area: certified Haute Valeur Environnementale, level 3.",
        "Brigitte et Louise is a French apéritif at 17.5%, white and red; Sephina is a spirit drink at 30%: 56% VSOP cognac blended with 44% Pineau des Charentes, and so outside the cognac appellation by design.",
      ],
    },
  },

  partnerships: {
    title: "Partnerships",
    intro: [
      "Some of these bottles are ours. The rest belong to importers, retailers and brand owners who came to Brie-sous-Archiac with a market in mind. The house composes the liquid, sources the dress and ships the finished case under their name.",
      "Everything is grouped below by category, so the house's own range and the private-label brands it shapes for others stand side by side: proof of reach across grape, grain and cane, and the quickest way to find the nearest thing to the project you have in mind.",
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
    // House bottles have no producer page to link out to — their story is on
    // the category page itself, so the label says so rather than promising a
    // spec sheet elsewhere.
    readTheStory: "Read the story",
    readTheStoryAria: "Read the story of {name}",
    houseHeading: "From the house",
    partnerHeading: "Shaped for partners",
    metaDescription:
      "The Vinet-Puranik range and the private-label brands the house shapes for importers, retailers and brand owners: cognac, brandy, whisky, rum, gin, vodka, liqueurs and apéritifs, grouped by category.",
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
      frameLabel: "Feature: copper pot stills in the distillation hall",
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
    frameLabel: "New-make spirit running from the still into a copper receiver",
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
        body: "Both families decide to work together and merge: Distillerie Vinet-Puranik is born.",
      },
      {
        year: "2014-2017",
        body: "A new bottling plant and storage warehouse open, with the installation of a fourth bottling line.",
      },
      {
        year: "2018",
        // TODO(confirm): Bruno is now titled general manager per the house
        // brochure, yet this entry grants the same title to Jean-Baptiste in
        // 2018. Ask the house which is current, or what Jean-Baptiste's
        // present role is.
        body: "Jean-Baptiste Delannoy, Bruno's son, becomes General Manager of the company.",
      },
      {
        year: "2019",
        body: "AEO status (Authorised Economic Operator) and ECOCERT certification obtained.",
      },
    ],
  },

  // The two people who speak for the house. The home page keeps Bruno's longer
  // statement in `presidentWord`; these are the brochure's shorter quotes, so
  // /about does not simply repeat the home page.
  leadership: {
    label: "Leadership",
    // Title of the two-voice section on the home page.
    homeTitle: "A word from our leadership",
    title: "Two leaders, one house",
    intro:
      "A family distillery in the Charente, and a group with offices on four continents. The house is run by both.",
    leaders: {
      bruno: {
        name: "Bruno Delannoy",
        role: "General manager",
        quote: "Passion above all.",
        body: [
          "After taking over the family business for generations at the beginning of the 1990s, I decided to enter into export, and I discovered another world.",
          "Over thirty years later, with a vibrant, motivated and multicultural team, Vinet-Puranik Distillerie is present in more than twenty different countries.",
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
      "Through its diversified portfolio and international network, Sawnee Group operates across multiple regions with offices in France, Ireland, Singapore, India and the United States. That presence lets the group combine operational expertise with strategic market access.",
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

  presidentWord: {
    title: "A word from the general manager",
    quote: "Passion above all",
    body: [
      "After taking over the family business in 1994, I decided to enter into export, and discovered another world. Asia in particular captivated me, and it has been a large part of my life ever since.",
      "I understood immediately that the importers I met wanted bespoke products, made to their own wishes. It didn't matter which country: they felt more invested in products they had helped to design.",
      "So I became a promoter of tailor-made spirits, and a specialist in private brands. More than thirty years on, with a vibrant, motivated and multicultural team, Vinet-Puranik is present in more than twenty countries.",
    ],
    portraitAlt:
      "Bruno Delannoy, general manager of Distillerie Vinet-Puranik, photographed in the still house.",
    signatureRole: "General manager",
  },

  team: {
    alt: "The Vinet-Puranik team, photographed among the copper stills in the distillation hall.",
    label: "The house",
    caption: "The Vinet-Puranik team: Brie-sous-Archiac, Charente",
  },

  // TODO(launch): placeholder quotes — see the note on `testimonialSlugs` in
  // site.ts. Names live there too; only the words are translated here.
  testimonials: {
    label: "What our partners say",
    showAria: "Show testimonial {index}",
    items: {
      "private-label": {
        quote:
          "From the first sample to the sealed case, the house held our brief exactly — and the cognac that came back was better than the one we asked for.",
      },
      creation: {
        quote:
          "We arrived with a recipe and a label. Vinet-Puranik turned them into a gin we could actually put in front of buyers, on time, at the volume we promised.",
      },
      export: {
        quote:
          "Three markets, three sets of paperwork, one bottling run — their team carried the compliance so ours could carry the brand.",
      },
    },
  },

  contact: {
    kicker: "Start a project",
    title: "Build your next spirit with Vinet-Puranik",
    body: "Share your brief: product ambition, market and timeline. The house replies with a considered path from first idea to finished bottle.",
    metaDescription:
      "Talk to Distillerie Vinet-Puranik about bespoke spirits, private label, bulk, bottling or a visit. Named commercial contact, direct lines and an enquiry form.",
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
    title: "Age Verification Required",
    subhead: "You must be of legal drinking age to enter this website",
    dobPrompt: "Please enter your date of birth",
    labels: { month: "Month", day: "Day", year: "Year" },
    placeholders: { month: "MM", day: "DD", year: "YYYY" },
    submit: "Verify Age",
    errors: {
      incomplete: "Please enter your full date of birth.",
      invalid: "That date doesn't exist. Please check and try again.",
      future: "Please enter a date in the past.",
    },
    deniedTitle: "We're sorry",
    deniedMessage: "You must be at least {age} years old to visit Vinet-Puranik.",
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
      "Walk the barrel cellars, stand beside the copper pot stills, and taste the house's work where it is made.",
    ],
    expect: [
      {
        title: "The cellars",
        body: "Ageing halls where cognac, brandy and cask-finished whiskies rest.",
      },
      {
        title: "The still house",
        body: "Copper pot stills at work: the heart of the house since 1777.",
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
        frameLabel: "Card: barrel cellar walkway",
      },
      {
        title: "Tastings",
        body: "Seated flights in the estate tasting room.",
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
      body: "All visits are by appointment. Send the dates you have in mind, your party size and the experience you would like. The house will confirm by return.",
      ctaLabel: "Book through the enquiry form",
      mailSubject: "Visit booking: Vinet-Puranik estate",
    },
    practical: {
      heading: "Practical information",
      items: [
        { label: "Address", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France" },
        { label: "Hours", value: "By appointment. Monday to Friday" },
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

  experiences: {
    included: "Included",
    book: "Book this experience",
    orEmail: "Or email the house",
    bookingSubject: "Visit booking: {name}",
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
      "Three ways through the estate, from a first look at the cellars to a full day inside the métiers of tailor-made spirits.",
    note: "Programme, durations and prices to be confirmed by the house: all visits by appointment.",
    crossLinkTitle: "Prefer to stay at the table?",
    crossLinkCta: "Discover our tastings",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Guided tours of the Vinet-Puranik estate: barrel cellars, copper pot stills and the family's story since 1777. By appointment at Brie-sous-Archiac.",
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
        body: "A first encounter with the house: the story since 1777, the cellars, and a short guided taste of what Vinet-Puranik makes.",
        frameLabel: "Tour: cellar doors opening onto the courtyard",
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
        body: "The full production journey, from grape and grain to copper, cask and bottling line, guided by the people who run it.",
        frameLabel: "Tour: copper pot stills in the still house",
      },
      "heritage-tour": {
        name: "Heritage Tour: Since 1777",
        duration: "Half day",
        groupSize: "2–8 guests",
        languages: "French · English",
        includes: [
          "Private tour of the estate and family archives",
          "Vineyard visit in Petite Champagne and Fins Bois",
          "Extended tasting hosted in the family cellar",
        ],
        body: "For partners and collectors: the long story of the Delannoy family's house, told across the vineyards, the archives and the oldest casks.",
        frameLabel: "Tour: vineyard rows above the estate",
      },
    },
  },

  tastings: {
    kicker: "Visit us · Tastings",
    title: "Tastings at the estate",
    intro:
      "Seated flights in the estate tasting room, from a signature tour of the house's brands to the Charente classics side by side.",
    note: "Flights, durations and prices to be confirmed by the house: all tastings by appointment.",
    crossLinkTitle: "Rather walk the cellars first?",
    crossLinkCta: "Discover our tours",
    crossLinkBack: "Back to the estate",
    metaDescription:
      "Seated tastings at the Vinet-Puranik estate: signature flights of the house range, and cognac and Pineau side by side. By appointment at Brie-sous-Archiac.",
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
        body: "The house in five glasses: gin, whisky, rum, Pineau des Charentes and cognac, tasted side by side.",
        frameLabel: "Tasting: five glasses on the tasting-room table",
      },
      "cognac-and-pineau-flight": {
        name: "Cognac & Pineau Flight",
        duration: "45 minutes",
        groupSize: "2–12 guests",
        languages: "French · English",
        includes: [
          "Puranique cognacs by age",
          "Brigitte et Louise red and white",
          "Regional pairing bites",
        ],
        body: "The Charente classics. The house cognac marque and its Pineau, tasted the way the region drinks them.",
        frameLabel: "Tasting: cognac snifters and Pineau glasses",
      },
    },
  },

  nav: {
    about: {
      label: "About us",
      links: [
        "Our story",
        "Private label & bespoke spirits",
        "Know-how & innovation",
        "A word from our leadership",
        "Our timeline",
      ],
      featuredHeading: "In the house",
      featured: [
        { label: "Our production", frameLabel: "Featured: copper pot stills" },
        { label: "Since 1777", frameLabel: "Featured: family portrait in the cellar" },
      ],
      viewAll: "Our know-how",
    },
    partnerships: {
      label: "Partnerships",
      overview: "Overview",
      featuredHeading: "By category",
      featuredFrameLabels: [
        "Featured: Patte Blanche packshot",
        "Featured: Hold Up packshot",
        "Featured: MACA rum packshot",
      ],
      viewAll: "View all categories",
    },
    visit: {
      label: "Visit Us",
      links: ["The estate", "Tours", "Tastings", "Book a visit"],
      featuredHeading: "Favorite experiences",
      featured: [
        { label: "Cellar & Distillery Tour", frameLabel: "Featured: barrel cellar walkway" },
        { label: "Signature Tasting", frameLabel: "Featured: the estate tasting room" },
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
    titleTemplate: "Vinet-Puranik · %s",
    description:
      "Family-owned Cognac-region distillery designing bespoke spirits, private-label and white-label programmes, bottling solutions and product development for trade partners in more than twenty countries.",
    aboutTitle: "Our story",
    partnershipsTitle: "Partnerships",
    contactTitle: "Contact",
    visitTitle: "Visit us",
    toursTitle: "Tours",
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
  legal: {
    updatedLabel: "Last updated",
    updated: "26 August 2026",
    backLabel: "Back to home",
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
              "This site is published by Distillerie Vinet-Puranik, a {legalForm} with share capital of {shareCapital}.",
              "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France.",
              "Telephone +33 5 46 49 10 10. Email contact@vinet-puranik.com.",
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
            heading: "Director of publication",
            body: ["{ceoName}, {ceoRole}. {gmName}, {gmRole}."],
          },
          {
            heading: "Hosting",
            body: ["This site is hosted by {host}."],
          },
          {
            heading: "Text and images",
            body: [
              "The words, photographs and design on this site belong to us, or we have permission to use them. Please ask before reproducing any of it.",
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
              "Some small text on tinted backgrounds sits close to the minimum contrast. Our estate photography is described by its surrounding text rather than individually. We have not yet had an independent audit.",
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
