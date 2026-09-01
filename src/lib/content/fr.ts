import type { Content } from "@/lib/content/en";

// ---------------------------------------------------------------------------
// French. Much of this content began in French — the president's statement and
// the family chronology in particular — so it is written here in the house's
// own register rather than translated word for word from the English.
//
// Typography follows French convention: « » for quotations, a narrow
// no-break space before % : ; ! ?, and a comma as the decimal separator
// (17,5 % rather than 17.5%).
// ---------------------------------------------------------------------------

export const fr = {
  hero: {
    eyebrow: "Distillerie Vinet-Puranik · Cognac, France",
    title: "L'héritage de la distillation française depuis 1777",
    support: "Distillé. Vieilli. Assemblé. Embouteillé. Le tout sous un même toit.",
    primaryCtaLabel: "Démarrer un projet",
    posterLabel: "Ouverture : chai de vieillissement, travelling lent",
    scroll: "Défiler",
  },

  homeIntro: {
    kicker: "La distillerie",
    paragraphs: [
      "Située à Brie-sous-Archiac, dans le Sud-Ouest de la France, la Distillerie Vinet-Puranik unit des siècles d'héritage de distillation française à des moyens de production modernes.",
      "De la distillation et du vieillissement à l'assemblage, à l'embouteillage et au développement de marques de distributeur, nous travaillons pour nos propres marques et pour des partenaires du monde entier.",
    ],
  },

  maisonStatement: {
    kicker: "La maison",
    line: "De la terre au verre. De la vigne à la bouteille. Votre rêve en bouteille.",
    body: "Vinet-Puranik est une distillerie à l'héritage riche et aux racines profondes. Nous ne vendons pas seulement des produits : nous proposons une expérience, un art de vivre. Chaque produit est élaboré à la distillerie : de la vigne aux chais, de la distillation à la mise en bouteille.",
    origin: "100 % fabriqué en France",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Six métiers, une maison",
    intro:
      "Tout ce qu'exige un spiritueux sur mesure, réuni sous un même toit à Brie-sous-Archiac, pour qu'un seul échange porte un projet de la première idée au carton scellé.",
    services: {
      creation: {
        title: "Création sur mesure",
        body: "Recettes, styles et profils de liquide composés selon votre cahier des charges et votre marché : du premier croquis à la signature.",
      },
      sourcing: {
        title: "Sourcing des matières sèches",
        body: "Bouteilles, bouchages, capsules et habillage sourcés avec précision, fiabilité et le sens du linéaire.",
      },
      advisory: {
        title: "Conseil technique et marketing",
        body: "Connaissance des catégories et accompagnement technique sur le développement produit, le positionnement et la présentation, à chaque étape.",
      },
      regulatory: {
        title: "Accompagnement réglementaire",
        body: "Étiquetage, douanes et conformité pris en charge pour chaque marché de destination, pour que les frontières ne retardent jamais un lancement.",
      },
      bottling: {
        title: "Embouteillage personnalisé",
        body: "Des lignes flexibles pour les petites séries comme pour les grands volumes, finies exactement selon le cahier des charges.",
      },
      quality: {
        title: "Assurance qualité",
        body: "Une recherche permanente d'amélioration : de l'eau-de-vie et de l'assemblage jusqu'au carton scellé.",
      },
    },
  },

  knowHow: {
    title: "Savoir-faire et innovation",
    body: "Alambics, chais et halls d'embouteillage partagent une même cour à Brie-sous-Archiac, au milieu de 100 hectares de vignes en Fins Bois et Petite Champagne.",
    figureLabels: {
      stills: "alambics",
      lines: "lignes d'embouteillage",
      vats: "de stockage en cuve",
      warehouse: "d'entrepôt",
      vineyard: "de vignoble",
    },
    details: {
      certified: { label: "Certifications", body: "Statut OEA et certification ECOCERT." },
      languages: {
        label: "Langues",
        body: "Français, anglais, espagnol, chinois (mandarin, cantonais).",
      },
      rd: { label: "R&D", body: "Finitions, macérations, distillation, produits hybrides." },
    },
  },

  // La page « notre histoire ». Les `marks` sont les mots-clés de la maison ;
  // chacun porte une phrase d'appui, pour une déclaration plutôt qu'une liste.
  about: {
    title: "Notre histoire",
    metaDescription:
      "Une distillerie indépendante en région de Cognac : savoir-faire séculaire, art de la distillation et spiritueux premium élaborés en France, de la vigne à la bouteille.",
    intro: [
      "Vinet-Puranik est une distillerie à l'héritage riche et aux racines profondes : deux familles, une maison, et une cour à Brie-sous-Archiac où chaque étape d'un spiritueux se joue sous le même toit.",
      "De la terre au verre. De la vigne à la bouteille. Votre rêve en bouteille.",
    ],
    projectCta: "Démarrer un projet",
    visitCta: "Visiter le domaine",
    marksLabel: "Ce que défend la maison",
    marks: [
      {
        label: "Distillerie indépendante",
        body: "Une maison à Brie-sous-Archiac, détenue et dirigée par les deux familles qui l'ont bâtie.",
      },
      {
        label: "Savoir-faire séculaire",
        body: "Alambics, chais et bancs d'assemblage travaillés à la main depuis 1777.",
      },
      {
        label: "L'art de la distillation",
        body: "Raisin et céréale, fût et temps : composés jusqu'à ce que le liquide réponde au brief.",
      },
      {
        label: "Héritage français",
        body: "Des vignes de Fins Bois et de Petite Champagne, un domaine charentais et les appellations qui vont avec.",
      },
      {
        label: "Produits premium et de luxe",
        body: "Des spiritueux habillés et finis pour le haut de gamme, en petites séries comme en grands volumes.",
      },
    ],
    skillsLabel: "Nos compétences",
    skills: [
      {
        title: "Qualité",
        body: "Une recherche permanente d'amélioration, du spiritueux et de l'assemblage au carton fini.",
      },
      {
        title: "Fiabilité",
        body: "Volumes, délais et cahiers des charges tenus : des lignes flexibles, un seul interlocuteur.",
      },
      {
        title: "Export mondial",
        body: "Statut OEA, douane et étiquetage pris en charge pour des partenaires dans plus de vingt pays.",
      },
    ],
    crossLinkTitle: "Découvrir la maison",
    crossLinkHistory: "Notre chronologie",
    crossLinkPresident: "Le mot de la direction",
    crossLinkPartnerships: "Les marques que nous façonnons",
  },

  collection: {
    kicker: "La collection",
    title: "Des marques façonnées par la maison",
    intro:
      "La gamme de la maison, et les marques de distributeur qu'elle façonne pour ses partenaires : la preuve d'une étendue de savoir-faire, à travers les catégories, les fûts et les marchés.",
    distributionNote: "Distribué en France par Mähler-Besse.",
    allProducts: "Tous nos produits",
  },

  brands: {
    "montlieu-xo": {
      category: "Brandy X.O · trois ans minimum",
      descriptor:
        "Une sélection rigoureuse de raisins, distillée en colonne et vieillie au moins trois ans en fût de chêne : élégant, équilibré, aromatique.",
      frameLabel: "Packshot : brandy Montlieu X.O",
    },
    "glen-mac-clay": {
      category: "Blended Scotch Whisky · trois ans minimum",
      descriptor:
        "Sélectionné dans le sud des Highlands, assemblé à un malt non tourbé et vieilli en fût de Bourbon : poire, pomme et raisin.",
      frameLabel: "Packshot : Glen Mac Clay Blended Scotch Whisky",
    },
    "hold-up": {
      category: "Gin · 43 %",
      descriptor:
        "Gin artisanal distillé en alambic de cuivre : le genièvre rencontre la fève tonka, l'anis et une pointe d'agrumes.",
      frameLabel: "Packshot : bouteille de gin Hold Up",
    },
    "palisson-batch-01": {
      category: "Single malt français · 43 %",
      descriptor:
        "Single malt charentais à double distillation, vieilli au moins trois ans en chêne du Limousin ayant précédemment contenu du cognac.",
      frameLabel: "Packshot : single malt Palisson Batch 01",
    },
    "brigitte-et-louise-blanc": {
      category: "Apéritif · 17,5 %",
      descriptor:
        "Moût de raisin assemblé à l'eau-de-vie de cognac d'un domaine familial : fruits et fleurs blanches, ample et rond.",
      frameLabel: "Packshot : Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Apéritif · 17,5 %",
      descriptor:
        "Moût de merlot et de cabernet-sauvignon assemblé à l'eau-de-vie de cognac : vif et rond, sur les fruits des bois et les fruits à noyau.",
      frameLabel: "Packshot : Brigitte et Louise Rouge",
    },
    "maca-rum": {
      category: "Rhum épicé",
      descriptor:
        "Distillé à l'île Maurice, vieilli et affiné en France : cannelle enveloppante et mystère rond de la fève tonka.",
      frameLabel: "Packshot : bouteille de rhum MACA",
    },
    tijuca: {
      category: "Rhum blended · Brésil",
      descriptor:
        "Cuivré aux reflets dorés ; le bois et les épices laissent place à la vanille, au poivre et au miel, sur une finale de coco.",
      frameLabel: "Packshot : rhum brésilien TIJUCA",
    },
    "gigi-en-provence": {
      category: "Gin bio · 44 %",
      descriptor:
        "Gin bio provençal : violette et genièvre sur le citron, avec romarin, coriandre et une note discrète d'olive.",
      frameLabel: "Packshot : gin Gigi en Provence",
    },
    "patte-blanche": {
      category: "Cognac bio",
      descriptor:
        "Cognac certifié ECOCERT, distillé à la main à Arthenac sans intrant artificiel, de la vigne au verre : VS, VSOP et XO.",
      frameLabel: "Packshot : cognac bio Patte Blanche",
    },
    sephina: {
      category: "Boisson spiritueuse · 30 %",
      descriptor:
        "Assemblage maison : 56 % de cognac VSOP et 44 % de Pineau des Charentes. Pruneau, fruits secs, noix et chêne toasté.",
      frameLabel: "Packshot : boisson spiritueuse Sephina",
    },
    gin40: {
      category: "Gin · 50 cl",
      descriptor:
        "Distillé artisanalement dans le Sud-Ouest, d'inspiration landaise : genièvre, pin et mûre sauvage.",
      frameLabel: "Packshot : bouteille GIN40",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40 %",
      descriptor:
        "Distillée à partir de raisins bordelais : la puissance du cabernet-sauvignon, la rondeur du merlot, la finesse du sémillon.",
      frameLabel: "Packshot : Nade Vodka millésime 2022",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40 %",
      descriptor:
        "Reposée quatre mois en fûts de vin rouge de Fronsac : légèrement rosée aux nuances dorées, en moins de 250 bouteilles numérotées.",
      frameLabel: "Packshot : Nade Vodka millésime 2019",
    },
  },

  houseBrands: {
    labels: {
      houseMark: "Une marque Vinet-Puranik",
      heritage: "Héritage et savoir-faire",
      story: "L'histoire",
      tasting: "Notes de dégustation",
      awards: "Distinctions",
      senses: { eye: "Œil", nose: "Nez", palate: "Bouche" },
      ranks: { gold: "Or", silver: "Argent", bronze: "Bronze", score: "{score} points" },
      figures: { distillations: "distillations", ageing: "ans en fût de chêne, minimum" },
      ctaLabel: "Démarrer un projet",
      brandSiteLabel: "puraniques.com",
    },
    items: {
      "montlieu-xo": {
        heritage:
          "Ce brandy authentique naît d'une sélection très rigoureuse de raisins. Distillé en colonne, Montlieu X.O est ensuite vieilli en fût de chêne pendant au moins trois ans.",
        story:
          "Vieilli en fût de chêne, Montlieu X.O se recommande en digestif, sec ou sur glace. Il séduit par son élégance, son équilibre et ses arômes.",
        notes: {
          eye: "Robe ambrée",
          nose: "Notes délicates d'amande et de vanille",
          palate: "Bien équilibré et souple",
        },
        storyFrameLabel: "Ambiance : Montlieu X.O servi à une table de fête",
      },
      "glen-mac-clay": {
        heritage:
          "Glen Mac Clay Blended Scotch Whisky a été sélectionné avec soin dans le sud des Highlands. Composé principalement de blé et de malt distillés en colonne, il est ensuite assemblé à un blended malt non tourbé de la même distillerie, distillé en alambic de cuivre, puis vieilli en fût de Bourbon pendant au moins trois ans.",
        story:
          "Ce Scotch a été élaboré dans la plus pure tradition : distillé avec passion et vieilli plusieurs années en fût de chêne. À apprécier en long drink, avec de l'eau gazeuse ou de la ginger beer.",
        notes: {
          eye: "Brillant, légers reflets dorés",
          nose: "Notes fruitées de poire, de pomme et de raisin",
          palate: "Équilibré et souple, malté, sur une poire rafraîchissante",
        },
        storyFrameLabel: "Ambiance : Glen Mac Clay dans un paysage des Highlands",
      },
    },
  },

  families: {
    brandy: {
      name: "Brandy",
      title: "Brandy",
      summary:
        "Brandy de raisin distillé en colonne et vieilli en fût de chêne : volontairement hors appellation cognac.",
      intro: [
        "Un brandy issu d'une sélection rigoureuse de raisins, distillé en colonne et non dans l'alambic charentais que l'appellation impose. Méthode différente, spiritueux différent : il a donc sa propre page plutôt qu'une place parmi les cognacs.",
        "Montlieu X.O est celui de la maison : au moins trois ans en fût de chêne, à servir en digestif, sec ou sur glace.",
      ],
    },
    liqueurs: {
      name: "Liqueurs",
      title: "Liqueurs",
      summary:
        "Liqueurs de fruit et liqueurs sur base de cognac, macérées et assemblées sur cahier des charges.",
      intro: [
        "Des liqueurs de fruit élaborées en Cognac : le fruit entier macéré puis assemblé sans additif artificiel, sur alcool neutre ou sur base de cognac, au degré et à la sucrosité que demande un marché.",
        "La maison a construit des liqueurs de mangue dans les deux sens — l'une sur le fruit seul, l'autre infusée dans un cognac primé — et la même voie est ouverte à tout fruit qu'un partenaire apporte.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "L'appellation de la maison, travaillée pour nos partenaires depuis les crus de Brie-sous-Archiac.",
      intro: [
        "La maison se tient au cœur des crus de Petite Champagne et de Fins Bois, et le cognac est le spiritueux qu'elle élabore depuis le plus longtemps. Pour nos partenaires, cela signifie des eaux-de-vie sélectionnées et assemblées selon un cahier des charges, puis vieillies en chêne du Limousin jusqu'à la qualité recherchée : VS, VSOP, XO.",
        "Patte Blanche en est l'expression bio : certifié ECOCERT, distillé à la main à Arthenac, sans intrant artificiel de la vigne au verre.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary:
        "Double distillation charentaise et affinage en fût de cognac, pour le malt comme pour l'assemblage.",
      intro: [
        "Un whisky élaboré à la charentaise : deux chauffes dans les mêmes alambics de cuivre que le cognac, puis un repos en fûts de chêne du Limousin qui l'ont précédemment contenu.",
        "Glen Mac Clay est la bouteille de la maison dans la catégorie : un Blended Scotch sélectionné dans le sud des Highlands, marié à un malt non tourbé et vieilli en fût de Bourbon.",
      ],
    },
    rum: {
      name: "Rhum",
      title: "Rhum",
      summary:
        "Des distillats de canne sourcés à l'étranger, puis vieillis, affinés, assemblés et habillés en France.",
      intro: [
        "Le rhum arrive comme distillat et repart comme marque. La maison s'approvisionne auprès des pays producteurs de canne, puis mène ici, en Charente, le travail qui donne à un rhum son caractère : vieillissement, finition en bois de cognac, assemblage et habillage.",
        "MACA est distillé à l'île Maurice et affiné en France sur la cannelle et la fève tonka ; TIJUCA est un assemblage brésilien, cuivré, sur la vanille, le poivre et le miel.",
      ],
    },
    gin: {
      name: "Gin",
      title: "Gin",
      summary:
        "Le genièvre composé selon le cahier des charges d'un partenaire, macéré et distillé en cuivre.",
      intro: [
        "C'est dans le gin qu'un cahier des charges se lit le mieux : la liste des botaniques fait la marque. La maison macère et distille en cuivre, et peut mener une recette du premier croquis au carton scellé sans quitter la cour.",
        "Gigi en Provence est bio, sur la violette, le romarin et une note discrète d'olive ; GIN40 porte les Landes : pin et mûre sauvage.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Une vodka de raisin bordelais, distillée et sortie par millésime.",
      intro: [
        "Une vodka n'est pas tenue d'être neutre d'origine. Nade est distillée à partir de raisins bordelais et sortie par millésime : la puissance du cabernet-sauvignon, la rondeur du merlot, la finesse du sémillon.",
        "Le millésime 2019 a reposé quatre mois en fûts de vin rouge de Fronsac et a été embouteillé en moins de 250 bouteilles numérotées ; le 2022 est le millésime courant.",
      ],
    },
    aperitifs: {
      name: "Apéritifs et spirit drinks",
      title: "Apéritifs et spirit drinks",
      summary:
        "Des produits de raisin à faible degré : apéritifs français et spirit drinks à base de cognac.",
      intro: [
        "Moût de raisin, eaux-de-vie et Pineau des Charentes, composés au degré de l'apéritif. C'est la réponse de la maison aux marchés qui veulent un caractère de cognac servi en long drink, frais ou sur glace.",
        "Sephina est un spirit drink à 30 % : 56 % de cognac VSOP assemblé à 44 % de Pineau des Charentes, et donc volontairement hors appellation cognac.",
      ],
    },
  },

  // The Partners section. Two houses, deliberately unalike: Les Brûleries
  // Modernes shares the courtyard at Brie-sous-Archiac and its range is carried
  // here in full, while Puranique has a site of its own and the house asked
  // that its portfolio not be restated on this one. `linkLabel` is the bare
  // domain, shown on the card that leaves the site.
  partners: {
    title: "Partenaires",
    intro: [
      "Deux maisons se tiennent aux côtés de la distillerie. L'une partage sa cour et ses alambics ; l'autre porte le nom de la famille et garde son propre site.",
    ],
    note: "Distribué en France par Mähler-Besse.",
    ctaLabel: "Démarrer un projet",
    backToPartners: "Retour aux partenaires",
    rangeHeading: "La gamme",
    visitSite: "Voir le site",
    visitSiteAria: "Voir le site {name} (ouvre un nouvel onglet)",
    viewRange: "Voir la gamme",
    viewRangeAria: "Voir la gamme {name}",
    metaDescription:
      "Les deux maisons aux côtés de la Distillerie Vinet-Puranik : Les Brûleries Modernes, dont les apéritifs et spiritueux sont élaborés au domaine, et Puranique, la marque de la famille.",
    companies: {
      "les-bruleries-modernes": {
        descriptor: "Apéritifs et spiritueux français pour les CHR",
        intro:
          "Fondée en 2019 et construite sur les alambics de la distillerie, Les Brûleries Modernes réunit un portefeuille d'apéritifs et de spiritueux français destinés aux bars, aux restaurants et aux cavistes indépendants. Ses bouteilles naissent dans la même cour, à Brie-sous-Archiac.",
        frameLabel: "Packshot : Gin Hold Up",
        linkLabel: "lesbruleriesmodernes.com",
      },
      puranique: {
        descriptor: "La marque de la famille",
        intro:
          "Puranique est la gamme de spiritueux français de la maison. Elle dispose de son propre site, et c'est là qu'elle vit : cognac, vodka, pineau et liqueurs, avec les notes de dégustation et les médailles qui leur appartiennent.",
        frameLabel: "Packshot : Puranique Cognac V.S.O.P",
        linkLabel: "puraniques.com",
      },
    },
  },

  privateLabel: {
    title: "Marques de distributeur et marques blanches",
    intro: [
      "La plupart de ces bouteilles appartiennent aux importateurs, distributeurs et propriétaires de marques venus à Brie-sous-Archiac avec un marché en tête. La maison compose le liquide, source l'habillage et expédie le carton fini sous leur nom.",
      "Elles sont regroupées ci-dessous par catégorie, aux côtés des bouteilles de la maison : la preuve d'une étendue de savoir-faire, du raisin à la céréale et à la canne, et le chemin le plus court vers ce qui ressemble le plus au projet que vous avez en tête.",
    ],
    note: "Distribué en France par Mähler-Besse.",
    ctaLabel: "Démarrer un projet",
    noBrandsYet: "Élaboré sur mesure",
    brandCountOne: "1 marque",
    brandCountOther: "{count} marques",
    inCollectionOne: "1 marque dans la collection",
    inCollectionOther: "{count} marques dans la collection",
    explore: "Découvrir : {name}",
    otherCategories: "Autres catégories",
    backToAll: "Retour à toutes les catégories",
    viewDetails: "Voir le détail",
    viewDetailsAria: "Voir le détail de {name} (s'ouvre dans un nouvel onglet)",
    readTheStory: "Lire l'histoire",
    readTheStoryAria: "Lire l'histoire de {name}",
    houseHeading: "De la maison",
    partnerHeading: "Façonnés pour nos partenaires",
    metaDescription:
      "Marques de distributeur et marques blanches de la Distillerie Vinet-Puranik : cognac, brandy, whisky, rhum, gin, vodka, liqueurs et apéritifs élaborés pour importateurs, distributeurs et propriétaires de marques, classés par catégorie.",
  },

  featurePanels: {
    bespoke: {
      title: "Marque de distributeur & spiritueux sur mesure",
      body: "Programmes de marque de distributeur et de marque blanche construits autour de votre marché : recette, liquide, habillage et dossier, portés du premier croquis au carton scellé sous votre nom.",
      ctaLabel: "Démarrer un projet",
      frameLabel: "Visuel : fûts en vieillissement dans le chai",
    },
    "know-how": {
      ctaLabel: "Démarrer un projet",
      frameLabel: "Visuel : alambics de cuivre dans la distillerie",
    },
  },

  production: {
    kicker: "Ce que nous produisons",
    title: "Tous les spiritueux, une seule maison",
    intro:
      "Cognac et brandy, whisky, rhum, gin, vodka, liqueurs et apéritifs. La maison distille, vieillit, assemble et embouteille dans huit catégories, pour sa propre gamme comme pour les marques de distributeur qu'elle construit avec ses partenaires.",
    frameLabel: "L'eau-de-vie nouvelle coulant de l'alambic dans un récipient de cuivre",
  },

  timeline: {
    kicker: "Héritage",
    title: "Deux familles, une maison",
    intro:
      "D'un domaine charentais du XVIIIᵉ siècle à une maison née d'une fusion qui expédie dans plus de vingt pays.",
    entries: [
      {
        year: "1777",
        body: "La famille Delpech Fougerat acquiert le domaine de Font Gireau et commence à élaborer ses propres eaux-de-vie.",
      },
      { year: "1934", body: "Félix Chartier fonde sa première distillerie de cognac." },
      {
        year: "1972",
        body: "Il transmet la distillerie à son neveu Guy Vinet, qui lui donne son nom avant de la céder à sa fille Annie Delannoy et à son gendre Bruno Delannoy.",
      },
      {
        year: "2011",
        body: "Les deux familles décident de travailler ensemble et fusionnent : la Distillerie Vinet-Puranik est née.",
      },
      {
        year: "2014-2017",
        body: "Ouverture d'un nouveau site d'embouteillage et d'un entrepôt de stockage, avec l'installation d'une quatrième ligne.",
      },
      {
        year: "2018",
        body: "Jean-Baptiste Delannoy, fils de Bruno, devient directeur général de l'entreprise.",
      },
      {
        year: "2019",
        body: "Obtention du statut OEA (opérateur économique agréé) et de la certification ECOCERT.",
      },
    ],
  },

  leadership: {
    label: "Direction",
    homeTitle: "Le mot de la direction",
    title: "Deux dirigeants, une maison",
    intro:
      "Une distillerie familiale en Charente, et un groupe présent sur quatre continents. La maison est dirigée par les deux.",
    leaders: {
      bruno: {
        name: "Bruno Delannoy",
        role: "Directeur général",
        quote: "La passion avant tout.",
        body: [
          "Après avoir repris au début des années 1990 l'entreprise familiale transmise de génération en génération, j'ai décidé de me tourner vers l'export, et j'ai découvert un autre monde.",
          "Plus de trente ans plus tard, avec une équipe vivante, motivée et multiculturelle, la Distillerie Vinet-Puranik est présente dans plus de vingt pays.",
        ],
        portraitAlt: "Bruno Delannoy dans la distillerie, un verre de dégustation à la main.",
      },
      rahul: {
        name: "Rahul Puranik",
        role: "Président-directeur général",
        quote: "Une équipe. Une vision. Un avenir.",
        body: [
          "La Distillerie Vinet-Puranik associe l'expertise historique de la distillation française au réseau international du groupe.",
          "Nous voulons renforcer notre présence sur les marchés internationaux en nous appuyant sur les infrastructures et les compétences existantes.",
        ],
        portraitAlt: "Rahul Puranik, directeur général du groupe, Distillerie Vinet-Puranik.",
      },
    },
  },

  group: {
    label: "Notre groupe",
    title: "Le Sawnee Group",
    body: [
      "Le Sawnee Group est une organisation multinationale dont le siège est à Atlanta, aux États-Unis. Le groupe met son expérience multinationale et sa vision globale des affaires au service de plusieurs secteurs : aviation, investissement immobilier, hôtellerie, distillation, distribution de boissons, logistique internationale et achats stratégiques.",
      "Par son portefeuille diversifié et son réseau international, le Sawnee Group opère dans plusieurs régions, avec des bureaux en France, en Irlande, à Singapour, en Inde et aux États-Unis. Cette présence lui permet d'allier expertise opérationnelle et accès stratégique aux marchés.",
    ],
    industriesLabel: "Secteurs",
    industries: [
      "Aviation",
      "Investissement immobilier",
      "Hôtellerie",
      "Distillation",
      "Distribution de boissons",
      "Logistique internationale",
      "Achats stratégiques",
    ],
    officesLabel: "Bureaux",
    offices: ["France", "Irlande", "Singapour", "Inde", "États-Unis"],
    mapAlt: "Carte du monde situant les bureaux et les marchés du Sawnee Group.",
    figureLabels: {
      countries: "pays desservis",
      offices: "bureaux internationaux",
      industries: "secteurs",
    },
  },

  presidentWord: {
    title: "Le mot du directeur général",
    quote: "La passion avant tout",
    body: [
      "Après avoir repris l'entreprise familiale en 1994, j'ai décidé de me tourner vers l'export, et j'ai découvert un autre monde. L'Asie en particulier m'a captivé, et elle occupe depuis une grande place dans ma vie.",
      "J'ai compris immédiatement que les importateurs que je rencontrais voulaient des produits sur mesure, faits selon leurs propres souhaits. Peu importait le pays : ils se sentaient davantage engagés dans des produits qu'ils avaient contribué à concevoir.",
      "Je suis donc devenu un promoteur des spiritueux sur mesure et un spécialiste des marques de distributeur. Plus de trente ans plus tard, avec une équipe vivante, motivée et multiculturelle, Vinet-Puranik est présente dans plus de vingt pays.",
    ],
    portraitAlt:
      "Bruno Delannoy, directeur général de la Distillerie Vinet-Puranik, photographié dans la distillerie.",
    signatureRole: "Directeur général",
  },

  team: {
    alt: "L'équipe Vinet-Puranik, photographiée parmi les alambics de cuivre de la distillerie.",
    label: "La maison",
    caption: "L'équipe Vinet-Puranik : Brie-sous-Archiac, Charente",
  },

  testimonials: {
    label: "Ce que disent nos partenaires",
    showAria: "Afficher le témoignage {index}",
    items: {
      "private-label": {
        quote:
          "Du premier échantillon à la caisse scellée, la maison a tenu notre cahier des charges à la lettre — et le cognac livré dépassait celui que nous avions demandé.",
      },
      creation: {
        quote:
          "Nous sommes arrivés avec une recette et une étiquette. Vinet-Puranik en a fait un gin que nous pouvions vraiment présenter aux acheteurs, dans les délais, aux volumes promis.",
      },
      export: {
        quote:
          "Trois marchés, trois réglementations, un seul embouteillage — leur équipe a porté la conformité pour que la nôtre porte la marque.",
      },
    },
  },

  contact: {
    kicker: "Démarrer un projet",
    title: "Créez votre prochain spiritueux avec Vinet-Puranik",
    body: "Partagez votre brief : ambition produit, marché et calendrier. La maison vous répond en proposant une trajectoire réfléchie, de la première idée à la bouteille finie.",
    metaDescription:
      "Parlez à la Distillerie Vinet-Puranik de spiritueux sur mesure, de marques de distributeur, de vrac, d'embouteillage ou d'une visite. Contact commercial nommé, lignes directes et formulaire.",
    intro: [
      "Dites-nous ce que vous cherchez à construire : le produit, le marché, le calendrier. Chaque demande arrive chez une personne, pas dans une file d'attente.",
    ],
    formHeading: "Envoyer une demande",
    formIntro: "Les champs marqués d'un astérisque sont obligatoires.",
    detailsLabel: "Joindre la maison directement",
    switchboardHeading: "Standard",
    followHeading: "Suivre la maison",
    homeTitle: "Un projet en tête ?",
    homeBody:
      "De la première esquisse au carton scellé, la maison travaille selon votre brief. Dites-nous quel marché vous visez.",
    commercialHeading: "Contact commercial",
    commercialRole: "Export et commercial",
    distilleryHeading: "La distillerie",
    enquiryTypes: [
      "Développement de produit sur mesure",
      "Marque de distributeur",
      "Spiritueux en vrac",
      "Embouteillage et logistique",
      "Visites et dégustations",
      "Autre demande",
    ],
    form: {
      name: "Nom",
      company: "Société",
      email: "E-mail",
      enquiryType: "Nature de la demande",
      selectPlaceholder: "Sélectionner…",
      message: "Votre projet",
      messagePlaceholder: "Ambition produit, marché, volumes, calendrier…",
      submit: "Envoyer la demande",
      submitting: "Envoi…",
      honeypot: "Laissez ce champ vide",
      successMessage:
        "Merci, votre demande a bien été reçue. La maison vous répondra dans les meilleurs délais.",
      errorMessage:
        "Une erreur est survenue et votre demande n'a pas été envoyée. Merci de nous écrire directement.",
      errorReview: "Merci de vérifier les champs signalés.",
      errors: {
        name: "Merci d'indiquer votre nom.",
        email: "Merci d'indiquer une adresse e-mail valide.",
        enquiryType: "Merci de choisir la nature de votre demande.",
        message: "Merci de nous dire quelques mots sur votre projet.",
      },
    },
  },

  footer: {
    navigateCta: "Démarrer un projet",
    navigateHeading: "Navigation",
    capabilitiesHeading: "Nos expertises",
    legalHeading: "Mentions légales",
    contactHeading: "Contact",
    capabilities: [
      "Marque de distributeur & spiritueux sur mesure",
      "Savoir-faire et innovation",
      "Ce que nous produisons",
    ],
    legalLinks: [
      "Mentions légales",
      "Politique de confidentialité",
      "Politique de cookies",
      "Conditions d'utilisation",
      "Accessibilité",
    ],
    rights: "Tous droits réservés.",
  },

  ageGate: {
    title: "Vérification de l'âge requise",
    subhead: "Vous devez avoir l'âge légal pour consommer de l'alcool afin d'accéder à ce site",
    dobPrompt: "Merci d'indiquer votre date de naissance",
    labels: { month: "Mois", day: "Jour", year: "Année" },
    placeholders: { month: "MM", day: "JJ", year: "AAAA" },
    submit: "Vérifier mon âge",
    errors: {
      incomplete: "Merci de saisir votre date de naissance complète.",
      invalid: "Cette date n'existe pas : merci de vérifier et de réessayer.",
      future: "Merci de saisir une date passée.",
    },
    deniedTitle: "Nous sommes désolés",
    deniedMessage: "Vous devez avoir au moins {age} ans pour visiter Vinet-Puranik.",
    deniedBack: "Revenir en arrière",
    legal:
      "En entrant, vous confirmez que vous avez au moins {age} ans et qu'il est légal de consulter un contenu lié à l'alcool dans votre pays de résidence. Votre date de naissance est vérifiée dans votre navigateur : elle ne nous est jamais transmise ni conservée.",
  },

  visit: {
    kicker: "Nous rendre visite",
    title: "Le domaine de Brie-sous-Archiac",
    heroLabel: "Ouverture : cour du domaine et chais, lumière dorée",
    intro: [
      "Entre les crus de Petite Champagne et de Fins Bois, la distillerie ouvre sa cour, ses chais et ses alambics aux partenaires professionnels comme aux visiteurs curieux.",
      "Parcourez les chais de vieillissement, tenez-vous auprès des alambics de cuivre et dégustez le travail de la maison là où il se fait.",
    ],
    expect: [
      {
        title: "Les chais",
        body: "Les halls de vieillissement où reposent cognacs, brandies et whiskies finis en fût.",
      },
      {
        title: "La salle des alambics",
        body: "Les alambics de cuivre au travail : le cœur de la maison depuis 1777.",
      },
      {
        title: "La salle de dégustation",
        body: "Des dégustations guidées des marques de la maison et de ses travaux en cours.",
      },
    ],
    entries: [
      {
        title: "Visites",
        body: "Des parcours guidés à travers les chais, la distillerie et les halls d'embouteillage.",
        frameLabel: "Carte : allée du chai de vieillissement",
      },
      {
        title: "Dégustations",
        body: "Dégustations assises dans la salle de dégustation du domaine.",
        frameLabel: "Carte : verres de dégustation sur le chêne",
      },
    ],
    discover: "Découvrir",
    expectLabel: "Ce qui vous attend",
    mapLabel: "Vue aérienne du domaine à Brie-sous-Archiac",
    bookCta: "Réserver une visite",
    practicalCta: "Informations pratiques",
    book: {
      heading: "Réserver une visite",
      body: "Toutes les visites se font sur rendez-vous. Indiquez les dates envisagées, le nombre de participants et l'expérience souhaitée. La maison vous confirmera par retour.",
      ctaLabel: "Réserver via le formulaire de contact",
      mailSubject: "Réservation de visite : domaine Vinet-Puranik",
    },
    practical: {
      heading: "Informations pratiques",
      items: [
        { label: "Adresse", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France" },
        { label: "Horaires", value: "Sur rendez-vous. Du lundi au vendredi" },
        {
          label: "Accès",
          value: "À 20 minutes de Jonzac, 35 minutes de Cognac ; parking sur place",
        },
        { label: "Langues", value: "Visites en français et en anglais" },
      ],
    },
    metaDescription:
      "Visitez le domaine Vinet-Puranik à Brie-sous-Archiac : chais, alambics de cuivre et dégustations au cœur de la région de Cognac. Visites et dégustations sur rendez-vous.",
  },

  experiences: {
    included: "Inclus",
    book: "Réserver cette expérience",
    orEmail: "Ou écrire à la maison",
    bookingSubject: "Réservation de visite : {name}",
    duration: "Durée",
    groupSize: "Groupe",
    languages: "Langues",
    price: "Tarif",
    onEnquiry: "Sur demande",
  },

  tours: {
    kicker: "Nous rendre visite · Visites",
    title: "Les visites de la maison",
    intro:
      "Trois façons de parcourir le domaine : du premier regard sur les chais à une journée entière au cœur des métiers du spiritueux sur mesure.",
    note: "Programme, durées et tarifs à confirmer par la maison : toutes les visites sur rendez-vous.",
    crossLinkTitle: "Vous préférez rester à table ?",
    crossLinkCta: "Découvrir nos dégustations",
    crossLinkBack: "Retour au domaine",
    metaDescription:
      "Visites guidées du domaine Vinet-Puranik : chais de vieillissement, alambics de cuivre et l'histoire familiale depuis 1777. Sur rendez-vous à Brie-sous-Archiac.",
    items: {
      "discovery-tour": {
        name: "Visite Découverte",
        duration: "1 heure",
        groupSize: "2 à 15 personnes",
        languages: "Français · Anglais",
        includes: [
          "Accueil dans la cour du domaine",
          "Parcours dans le chai de vieillissement",
          "Dégustation d'initiation de deux spiritueux de la maison",
        ],
        body: "Une première rencontre avec la maison : l'histoire depuis 1777, les chais, et une courte dégustation guidée de ce que fait Vinet-Puranik.",
        frameLabel: "Visite : portes du chai ouvrant sur la cour",
      },
      "cellar-and-distillery-tour": {
        name: "Visite Chais et Distillerie",
        duration: "2 heures",
        groupSize: "2 à 10 personnes",
        languages: "Français · Anglais",
        includes: [
          "Visite de la distillerie avec l'équipe de distillation",
          "Chais de vieillissement et salle d'assemblage",
          "Dégustation guidée de quatre spiritueux, au fût et à la bouteille",
        ],
        body: "Tout le parcours de production, du raisin et de la céréale au cuivre, au fût et à la ligne d'embouteillage, guidé par ceux qui le font vivre.",
        frameLabel: "Visite : alambics de cuivre dans la distillerie",
      },
      "heritage-tour": {
        name: "Visite Patrimoine : Depuis 1777",
        duration: "Demi-journée",
        groupSize: "2 à 8 personnes",
        languages: "Français · Anglais",
        includes: [
          "Visite privée du domaine et des archives familiales",
          "Visite du vignoble en Petite Champagne et Fins Bois",
          "Dégustation prolongée dans le chai familial",
        ],
        body: "Pour les partenaires et les collectionneurs : la longue histoire de la maison des Delannoy, racontée à travers les vignes, les archives et les plus vieux fûts.",
        frameLabel: "Visite : rangs de vigne au-dessus du domaine",
      },
    },
  },

  tastings: {
    kicker: "Nous rendre visite · Dégustations",
    title: "Les dégustations au domaine",
    intro:
      "Des dégustations assises dans la salle de dégustation du domaine : du tour d'horizon des marques de la maison aux classiques charentais réunis.",
    note: "Sélections, durées et tarifs à confirmer par la maison : toutes les dégustations sur rendez-vous.",
    crossLinkTitle: "Vous préférez d'abord parcourir les chais ?",
    crossLinkCta: "Découvrir nos visites",
    crossLinkBack: "Retour au domaine",
    metaDescription:
      "Dégustations assises au domaine Vinet-Puranik : sélection signature de la gamme, cognac et Pineau réunis. Sur rendez-vous à Brie-sous-Archiac.",
    items: {
      "signature-tasting": {
        name: "Dégustation Signature",
        duration: "1 heure",
        groupSize: "2 à 12 personnes",
        languages: "Français · Anglais",
        includes: [
          "Cinq spiritueux issus de toute la collection de la maison",
          "Guidée par un membre du comité de dégustation",
          "Des notes de dégustation à emporter",
        ],
        body: "La maison en cinq verres : gin, whisky, rhum, Pineau des Charentes et cognac, dégustés côte à côte.",
        frameLabel: "Dégustation : cinq verres sur la table de dégustation",
      },
      "cognac-and-pineau-flight": {
        name: "Dégustation Cognac et Pineau",
        duration: "45 minutes",
        groupSize: "2 à 12 personnes",
        languages: "Français · Anglais",
        includes: [
          "Les cognacs Puranique par âge",
          "Brigitte et Louise, rouge et blanc",
          "Bouchées régionales en accord",
        ],
        body: "Les classiques charentais : la marque de cognac de la maison et son Pineau, dégustés comme la région les boit.",
        frameLabel: "Dégustation : verres à cognac et verres à Pineau",
      },
    },
  },

  nav: {
    about: {
      label: "À propos",
      links: [
        "Notre histoire",
        "Savoir-faire et innovation",
        "Le mot de la direction",
        "Notre chronologie",
        "Événements",
      ],
      featuredHeading: "Dans la maison",
      featured: [
        { label: "Notre production", frameLabel: "À la une : alambics en cuivre" },
        { label: "Depuis 1777", frameLabel: "À la une : portrait de famille dans le chai" },
      ],
      viewAll: "Notre savoir-faire",
    },
    partners: {
      label: "Partenaires",
      featuredHeading: "Les deux maisons",
      viewAll: "Les deux partenaires",
    },
    privateLabel: {
      label: "Marques de distributeur",
      overview: "Vue d'ensemble",
      featuredHeading: "Par catégorie",
      featuredFrameLabels: [
        "À la une : packshot Patte Blanche",
        "À la une : packshot GIN40",
        "À la une : packshot rhum MACA",
      ],
      viewAll: "Voir toutes les catégories",
    },
    visit: {
      label: "Nous rendre visite",
      links: [
        "Le domaine",
        "Réserver une visite",
        "Informations pratiques",
      ],
      featuredHeading: "Le domaine",
      featured: [
        { label: "Brie-sous-Archiac", frameLabel: "À la une : le domaine vu du ciel" },
      ],
      viewAll: "Préparer votre visite",
    },
    // Tours and tastings keep their own pages under /visit; this menu is the
    // house's request that they be reachable without going through the estate
    // page first.
    toursTastings: {
      label: "Visites & Dégustations",
      links: ["Visites", "Dégustations"],
      featuredHeading: "Nos expériences favorites",
      featured: [
        {
          label: "Visite Chais et Distillerie",
          frameLabel: "À la une : allée du chai de vieillissement",
        },
        { label: "Dégustation Signature", frameLabel: "À la une : la salle de dégustation du domaine" },
      ],
      viewAll: "Préparer votre visite",
    },
    // Contact has no megamenu: the top-level item links straight to
    // the enquiry form, so it needs a label and nothing else.
    contact: {
      label: "Contact",
    },
  },

  ui: {
    home: "accueil",
    mainNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    previousBrands: "Marques précédentes",
    nextBrands: "Marques suivantes",
    brandCollection: "Collection de marques",
    featured: "À la une",
    startAProject: "Démarrer un projet",
    skipToContent: "Aller au contenu",
  },

  notFound: {
    title: "Perdu dans les chais",
    body: "La page que vous cherchez a été déplacée, renommée, ou n'a jamais existé.",
    cta: "Retour à l'accueil",
  },

  metadata: {
    homeTitle: "L'héritage de la distillation française depuis 1777",
    titleTemplate: "Vinet-Puranik · %s",
    description:
      "Distillerie familiale de la région de Cognac, créatrice de spiritueux sur mesure, de marques de distributeur et de marque blanche, de solutions d'embouteillage et de programmes de développement produit pour des partenaires professionnels dans plus de vingt pays.",
    aboutTitle: "Notre histoire",
    privateLabelTitle: "Marques de distributeur et marques blanches",
    partnersTitle: "Partenaires",
    contactTitle: "Contact",
    visitTitle: "Nous rendre visite",
    toursTitle: "Visites",
    tastingsTitle: "Dégustations",
  },

  events: {
    title: "Événements",
    metaDescription:
      "Dégustations, journées portes ouvertes et salons professionnels à la Distillerie Vinet-Puranik et ailleurs. Où rencontrer la maison.",
    intro: "Où rencontrer la maison : au domaine comme sur les salons.",
    empty: "Aucun événement n'est programmé pour le moment. Écrivez-nous et nous organiserons une visite.",
    placeholderTag: "Exemple",
    ctaLabel: "Se renseigner sur cet événement",
    items: {
      "sample-trade-tasting": {
        name: "Exemple : dégustation professionnelle, Paris",
        location: "Paris, France",
        description:
          "Une dégustation assise de la gamme de la maison pour importateurs et propriétaires de marques, conduite par le maître de chai.",
      },
      "sample-harvest-open-day": {
        name: "Exemple : journée portes ouvertes des vendanges",
        location: "Brie-sous-Archiac",
        description:
          "Le domaine ouvre sa cour pendant les vendanges : les pressoirs en action, les alambics en chauffe et les eaux-de-vie nouvelles au sortir de l'alambic.",
      },
      "sample-distillery-day": {
        name: "Exemple : journée distillerie",
        location: "Brie-sous-Archiac",
        description:
          "Une journée dans la salle des alambics avec l'équipe de distillation, de la première chauffe à la coupe, pour finir dans les chais.",
      },
    },
  },

  legal: {
    updatedLabel: "Dernière mise à jour",
    updated: "26 août 2026",
    backLabel: "Retour à l'accueil",
    pages: {
      "mentions-legales": {
        title: "Mentions légales",
        metaDescription:
          "Qui édite et qui héberge le site Vinet-Puranik : informations société, numéros d'immatriculation et coordonnées.",
        intro: "Qui édite ce site, et comment nous joindre.",
        sections: [
          {
            heading: "La société",
            body: [
              "Ce site est édité par la Distillerie Vinet-Puranik, {legalForm} au capital de {shareCapital}.",
              "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France.",
              "Téléphone +33 5 46 49 10 10. Courriel contact@vinet-puranik.com.",
            ],
          },
          {
            heading: "Immatriculation",
            body: [
              "Immatriculée au registre du commerce et des sociétés de {rcsCity} sous le numéro {siren}.",
              "SIRET {siret}. Numéro de TVA {vat}.",
            ],
          },
          {
            heading: "Directeur de la publication",
            body: ["{ceoName}, {ceoRole}. {gmName}, {gmRole}."],
          },
          {
            heading: "Hébergement",
            body: ["Ce site est hébergé par {host}."],
          },
          {
            heading: "Textes et images",
            body: [
              "Les textes, photographies et la conception de ce site nous appartiennent, ou nous avons l'autorisation de les utiliser. Merci de nous demander avant d'en reproduire une partie.",
              "Les noms de produits et les logos appartiennent à leurs titulaires, y compris ceux des marques partenaires que nous élaborons.",
            ],
          },
          {
            heading: "Droit applicable",
            body: ["Ce site est régi par le droit français."],
          },
        ],
      },
      privacy: {
        title: "Politique de confidentialité",
        metaDescription:
          "Le site Vinet-Puranik ne recueille que ce que vous inscrivez dans le formulaire. Aucune mesure d'audience, aucune publicité, aucun traceur.",
        intro:
          "Nous ne recueillons presque rien. Ce site ne comporte aucune mesure d'audience, aucune publicité et aucun traceur.",
        sections: [
          {
            heading: "Ce que nous recueillons",
            body: [
              "Uniquement ce que vous inscrivez dans le formulaire : votre nom, votre société si vous l'indiquez, votre adresse électronique, le type de demande et votre message.",
              "Nous nous en servons pour lire votre demande et y répondre. Rien d'autre. Nous n'établissons aucun profil, nous ne vous inscrivons à aucune liste de diffusion, et nous ne vendons ni ne communiquons jamais vos coordonnées.",
            ],
          },
          {
            heading: "Nous ne conservons pas votre date de naissance",
            body: [
              "La vérification de l'âge s'effectue dans votre navigateur. Votre date de naissance sert à déterminer si vous avez l'âge requis, puis elle est abandonnée. Elle ne nous parvient jamais.",
            ],
          },
          {
            heading: "Qui d'autre voit votre demande",
            body: [
              "Votre message parvient à notre boîte de réception via Resend, le service qui achemine nos courriels. Notre hébergeur sert les pages. Personne d'autre n'intervient.",
              "Resend est établi aux États-Unis : votre demande quitte donc l'Union européenne pour nous parvenir. Ce transfert est encadré par un accord de traitement conclu avec eux, fondé sur les clauses contractuelles types approuvées par la Commission européenne.",
              "Même les polices de caractères sont servies depuis notre site : lire une page n'envoie donc rien à qui que ce soit d'autre.",
            ],
          },
          {
            heading: "Combien de temps nous les conservons",
            body: [
              "Aussi longtemps que nous travaillons ensemble, et jusqu'à trois ans après notre dernier échange si la demande n'aboutit pas.",
            ],
          },
          {
            heading: "Vos droits",
            body: [
              "Vous pouvez nous demander une copie des données que nous détenons sur vous, leur rectification ou leur suppression, la limitation de leur utilisation, vous opposer à cette utilisation, ou en demander une copie dans un format réutilisable ailleurs. Écrivez à contact@vinet-puranik.com : nous répondons sous un mois.",
              "Rien ici ne prend de décision automatisée à votre sujet, et nous n'établissons aucun profil.",
              "Si notre réponse ne vous satisfait pas, vous pouvez saisir la CNIL, sur cnil.fr.",
            ],
          },
        ],
      },
      cookies: {
        title: "Politique de cookies",
        metaDescription:
          "Ce site utilise un seul cookie, pour mémoriser la vérification de l'âge. Aucune mesure d'audience, aucune publicité, aucun traceur.",
        intro: "Ce site utilise un seul cookie, et il ne contient rien sur vous.",
        sections: [
          {
            heading: "L'unique cookie",
            body: [
              "Il s'appelle vd_age_verified. Il retient que vous avez passé la vérification de l'âge, pour ne pas vous la redemander à chaque page.",
              "Il contient un seul caractère : 1. Aucune date de naissance, aucun identifiant, rien de personnel. Il dure trente jours et n'est jamais transmis à un tiers.",
            ],
          },
          {
            heading: "Pourquoi il n'y a pas de bandeau cookies",
            body: [
              "Les cookies strictement nécessaires à un service que vous avez demandé n'exigent pas de consentement, et la vérification de l'âge en fait partie. Comme nous n'en déposons aucun autre, vous n'avez rien à accepter ni à refuser.",
            ],
          },
          {
            heading: "Ce que nous n'utilisons pas",
            body: [
              "Aucune mesure d'audience. Aucune publicité ni reciblage. Aucun pixel de réseau social. Aucun script tiers.",
            ],
          },
          {
            heading: "Le supprimer",
            body: [
              "Vous pouvez le supprimer à tout moment dans les réglages de votre navigateur, ou bloquer les cookies. La vérification de l'âge réapparaîtra simplement à votre prochaine visite.",
            ],
          },
        ],
      },
      terms: {
        title: "Conditions d'utilisation",
        metaDescription:
          "Conditions d'utilisation du site Vinet-Puranik : un site d'information destiné aux professionnels, sans vente en ligne.",
        intro: "Les conditions d'utilisation de ce site. L'utiliser, c'est les accepter.",
        sections: [
          {
            heading: "Ce qu'est ce site",
            body: [
              "Un site d'information destiné aux professionnels : importateurs, distributeurs, détaillants et propriétaires de marques. Rien n'y est vendu, aucun prix n'y est publié et aucune commande ne peut y être passée.",
              "Envoyer une demande, c'est nous poser une question. Ce n'est pas une commande, et notre réponse n'est pas un contrat. Toute fourniture fait l'objet d'un accord écrit distinct.",
            ],
          },
          {
            heading: "Vous devez avoir l'âge légal",
            body: [
              "Ce site présente des boissons alcoolisées. Merci de ne l'utiliser que si vous avez atteint l'âge légal de consommation là où vous vivez.",
            ],
          },
          {
            heading: "Les informations évoluent",
            body: [
              "Nous décrivons nos produits avec soin, mais la gamme, ses caractéristiques et sa disponibilité changent avec le temps. Les descriptions, notes de dégustation, âges et chiffres donnés ici sont indicatifs, non contractuels.",
            ],
          },
          {
            heading: "Liens vers d'autres sites",
            body: [
              "Nous renvoyons vers les sites des producteurs et propriétaires de marques avec lesquels nous travaillons. Ces sites ne sont pas les nôtres et nous n'en répondons pas.",
            ],
          },
          {
            heading: "Disponibilité",
            body: [
              "Nous nous efforçons de maintenir ce site en état de marche et à jour, sans pouvoir garantir qu'il soit toujours disponible ni exempt d'erreur.",
            ],
          },
          {
            heading: "Modification des conditions",
            body: [
              "Nous pouvons faire évoluer ces conditions ; la version affichée sur cette page est celle qui s'applique. Si l'une de leurs stipulations se révélait inapplicable, les autres resteraient en vigueur.",
            ],
          },
          {
            heading: "Droit applicable",
            body: ["Ces conditions sont régies par le droit français."],
          },
        ],
      },
      accessibility: {
        title: "Accessibilité",
        metaDescription:
          "Comment le site Vinet-Puranik fonctionne pour les visiteurs au clavier, au lecteur d'écran, ou avec des réglages de mouvement et de contraste.",
        intro: "Nous voulons que ce site fonctionne pour tout le monde. Voici où nous en sommes.",
        sections: [
          {
            heading: "Ce que nous visons",
            body: [
              "Le niveau AA des règles pour l'accessibilité des contenus web (WCAG 2.1), référentiel sur lequel repose le RGAA.",
              "Cette déclaration porte sur l'ensemble du site et reflète notre propre examen à la date indiquée ci-dessus, et non un audit indépendant.",
            ],
          },
          {
            heading: "Ce qui fonctionne aujourd'hui",
            body: [
              "Chaque page a un titre principal unique et un lien d'évitement. Les menus, le sélecteur de langue et le formulaire s'utilisent au clavier, et vous voyez toujours où vous êtes.",
              "Si votre appareil demande une réduction des animations, toutes celles du site se désactivent. Les photographies porteuses d'information ont une description ; les images décoratives sont ignorées plutôt que lues deux fois.",
              "Les erreurs de formulaire sont annoncées, signalées autrement que par la couleur, et vous amènent au champ à corriger.",
            ],
          },
          {
            heading: "Ce qui reste à améliorer",
            body: [
              "Certains textes de petite taille sur fonds teintés restent proches du contraste minimal. Nos photographies du domaine sont décrites par le texte qui les entoure plutôt qu'individuellement. Nous n'avons pas encore fait réaliser d'audit indépendant.",
            ],
          },
          {
            heading: "Signalez-nous une difficulté",
            body: [
              "Écrivez à contact@vinet-puranik.com en nous disant ce qui s'est passé. Nous vous répondrons et, lorsque c'est possible, nous vous transmettrons l'information autrement.",
              "Si vous nous signalez une difficulté et que notre réponse ne vous satisfait pas, vous pouvez saisir le Défenseur des droits sur defenseurdesdroits.fr.",
            ],
          },
        ],
      },
    },
  },

  responsibleDrinking:
    "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",
} satisfies Content;
