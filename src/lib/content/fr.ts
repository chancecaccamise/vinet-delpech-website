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
    support: "Experts en spiritueux sur mesure",
    primaryCtaLabel: "Démarrer un projet",
    posterLabel: "Ouverture — chai de vieillissement, travelling lent",
    scroll: "Défiler",
  },

  maisonStatement: {
    kicker: "La maison",
    line: "Un spiritueux commence bien avant l'alambic — il commence par une conversation.",
    body: "Vinet-Puranik écoute d'abord : votre marché, votre ambition, vos contraintes. Puis la maison compose — raisin et céréale, fût et temps — jusqu'à ce que le liquide réponde.",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Six métiers, une maison",
    intro:
      "Tout ce qu'exige un spiritueux sur mesure, réuni sous un même toit à Brie-sous-Archiac — pour qu'un seul interlocuteur porte un projet de la première idée au carton scellé.",
    services: {
      creation: {
        title: "Création sur mesure",
        body: "Recettes, styles et profils de liquide composés selon votre cahier des charges et votre marché — du premier croquis à la signature.",
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
        body: "Une recherche permanente d'amélioration — de l'eau-de-vie et de l'assemblage jusqu'au carton scellé.",
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

  collection: {
    kicker: "La collection",
    title: "Des marques façonnées par la maison",
    intro:
      "Des spiritueux créés pour et avec nos partenaires — la preuve d'une étendue de savoir-faire, à travers les catégories, les fûts et les marchés.",
    distributionNote: "Distribué en France par Mähler-Besse.",
    allProducts: "Tous nos produits",
  },

  brands: {
    "hold-up": {
      category: "Gin · 43 %",
      descriptor:
        "Gin artisanal distillé en alambic de cuivre — le genièvre rencontre la fève tonka, l'anis et une pointe d'agrumes.",
      frameLabel: "Packshot — bouteille de gin Hold Up",
    },
    "palisson-batch-01": {
      category: "Single malt français · 43 %",
      descriptor:
        "Single malt charentais à double distillation, vieilli au moins trois ans en chêne du Limousin ayant précédemment contenu du cognac.",
      frameLabel: "Packshot — single malt Palisson Batch 01",
    },
    "brigitte-et-louise-blanc": {
      category: "Apéritif · 17,5 %",
      descriptor:
        "Moût de raisin assemblé à l'eau-de-vie de cognac d'un domaine familial — fruits et fleurs blanches, ample et rond.",
      frameLabel: "Packshot — Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Apéritif · 17,5 %",
      descriptor:
        "Moût de merlot et de cabernet-sauvignon à l'eau-de-vie de cognac — vif et rond, sur le sous-bois et les fruits à noyau.",
      frameLabel: "Packshot — Brigitte et Louise Rouge",
    },
    "maca-rum": {
      category: "Rhum épicé",
      descriptor:
        "Distillé à l'île Maurice, vieilli et affiné en France — cannelle enveloppante et mystère rond de la fève tonka.",
      frameLabel: "Packshot — bouteille de rhum MACA",
    },
    tijuca: {
      category: "Rhum blended · Brésil",
      descriptor:
        "Cuivré aux reflets dorés ; le bois et les épices laissent place à la vanille, au poivre et au miel, sur une finale de coco.",
      frameLabel: "Packshot — rhum brésilien TIJUCA",
    },
    "gigi-en-provence": {
      category: "Gin bio · 44 %",
      descriptor:
        "Gin bio provençal — violette et genièvre sur le citron, avec romarin, coriandre et une note discrète d'olive.",
      frameLabel: "Packshot — gin Gigi en Provence",
    },
    "patte-blanche": {
      category: "Cognac bio",
      descriptor:
        "Cognac certifié ECOCERT, distillé à la main à Arthenac sans intrant artificiel, de la vigne au verre — VS, VSOP et XO.",
      frameLabel: "Packshot — cognac bio Patte Blanche",
    },
    sephina: {
      category: "Spirit drink · 30 %",
      descriptor:
        "Assemblé dans la maison : 56 % de cognac VSOP et 44 % de Pineau des Charentes — pruneau, fruits secs, noix et chêne toasté.",
      frameLabel: "Packshot — spirit drink Sephina",
    },
    gin40: {
      category: "Gin · 50 cl",
      descriptor:
        "Distillé artisanalement dans le Sud-Ouest, d'inspiration landaise — genièvre, pin et mûre sauvage.",
      frameLabel: "Packshot — bouteille GIN40",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40 %",
      descriptor:
        "Distillée à partir de raisins bordelais — la puissance du cabernet-sauvignon, la rondeur du merlot, la finesse du sémillon.",
      frameLabel: "Packshot — Nade Vodka millésime 2022",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40 %",
      descriptor:
        "Reposée quatre mois en fûts de vin rouge de Fronsac — légèrement rosée aux nuances dorées, en moins de 250 bouteilles numérotées.",
      frameLabel: "Packshot — Nade Vodka millésime 2019",
    },
  },

  families: {
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "L'appellation de la maison, travaillée pour nos partenaires depuis les crus de Brie-sous-Archiac.",
      intro: [
        "La maison se tient au cœur des crus de Petite Champagne et de Fins Bois, et le cognac est le spiritueux qu'elle élabore depuis le plus longtemps. Pour nos partenaires, cela signifie des eaux-de-vie sélectionnées et assemblées selon un cahier des charges, puis vieillies en chêne du Limousin jusqu'à la qualité recherchée — VS, VSOP, XO.",
        "Patte Blanche en est l'expression bio : certifié ECOCERT, distillé à la main à Arthenac, sans intrant artificiel de la vigne au verre.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary:
        "Single malt de France — double distillation charentaise, affiné en fût de cognac.",
      intro: [
        "Un whisky élaboré à la charentaise : deux chauffes dans les mêmes alambics de cuivre que le cognac, puis un repos en fûts de chêne du Limousin qui l'ont précédemment contenu.",
        "Palisson Batch 01 est la première sortie de ce programme — au moins trois ans de bois, embouteillé à 43 %.",
      ],
    },
    rum: {
      name: "Rhum",
      title: "Rhum",
      summary:
        "Des distillats de canne sourcés à l'étranger, puis vieillis, affinés, assemblés et habillés en France.",
      intro: [
        "Le rhum arrive comme distillat et repart comme marque. La maison source auprès des origines cannières, puis mène ici, en Charente, le travail qui donne à un rhum son caractère — vieillissement, finition en bois de cognac, assemblage et habillage.",
        "MACA est distillé à l'île Maurice et affiné en France sur la cannelle et la fève tonka ; TIJUCA est un assemblage brésilien, cuivré, sur la vanille, le poivre et le miel.",
      ],
    },
    gin: {
      name: "Gin",
      title: "Gin",
      summary:
        "Trois lectures du genièvre, chacune distillée en cuivre selon le cahier des charges d'un partenaire.",
      intro: [
        "C'est dans le gin qu'un cahier des charges se lit le mieux : la liste des botaniques fait la marque. La maison macère et distille en cuivre, et peut mener une recette du premier croquis au carton scellé sans quitter la cour.",
        "Hold Up marie le genièvre à la tonka et à l'anis ; Gigi en Provence est bio, sur la violette, le romarin et une note discrète d'olive ; GIN40 porte les Landes — pin et mûre sauvage.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Une vodka de raisin élaborée par millésime, à partir de fruits bordelais.",
      intro: [
        "Une vodka n'est pas tenue d'être neutre d'origine. Nade est distillée à partir de raisins bordelais et sortie par millésime — la puissance du cabernet-sauvignon, la rondeur du merlot, la finesse du sémillon.",
        "Le millésime 2019 a reposé quatre mois en fûts de vin rouge de Fronsac et a été embouteillé en moins de 250 bouteilles numérotées ; le 2022 est le millésime courant.",
      ],
    },
    aperitifs: {
      name: "Apéritifs et spirit drinks",
      title: "Apéritifs et spirit drinks",
      summary:
        "Des produits de raisin à faible degré — apéritifs français et spirit drinks à base de cognac.",
      intro: [
        "Moût de raisin, eaux-de-vie et Pineau des Charentes, composés au degré de l'apéritif. C'est la réponse de la maison aux marchés qui veulent un caractère de cognac servi long, frais ou sur glace.",
        "Brigitte et Louise est un apéritif français à 17,5 %, blanc et rouge ; Sephina est un spirit drink à 30 % — 56 % de cognac VSOP assemblé à 44 % de Pineau des Charentes, et donc volontairement hors appellation cognac.",
      ],
    },
  },

  partnerships: {
    title: "Partenariats",
    intro: [
      "Chaque bouteille présentée ici appartient à quelqu'un d'autre. Importateurs, distributeurs et propriétaires de marques viennent à Brie-sous-Archiac avec un marché en tête ; la maison compose le liquide, source l'habillage et expédie le carton fini sous leur nom.",
      "La collection est regroupée ci-dessous par catégorie — la preuve d'une étendue de savoir-faire, du raisin à la céréale et à la canne, et le chemin le plus court vers ce qui ressemble le plus au projet que vous avez en tête.",
    ],
    note: "Distribué en France par Mähler-Besse.",
    ctaLabel: "Démarrer un projet",
    brandCountOne: "1 marque",
    brandCountOther: "{count} marques",
    inCollectionOne: "1 marque dans la collection",
    inCollectionOther: "{count} marques dans la collection",
    explore: "Découvrir : {name}",
    otherCategories: "Autres catégories",
    backToAll: "Retour à toutes les catégories",
    viewDetails: "Voir le détail",
    viewDetailsAria: "Voir le détail de {name} (ouvre dans un nouvel onglet)",
    metaDescription:
      "Des marques façonnées par Vinet-Puranik pour les importateurs, les distributeurs et les propriétaires de marques — cognac, whisky, rhum, gin, vodka et apéritifs, par catégorie.",
  },

  featurePanels: {
    bespoke: {
      title: "Sur mesure dès le premier brief",
      body: "Recette, liquide, habillage et dossier composés autour de votre marché — une seule maison porte le projet du premier croquis au carton scellé.",
      ctaLabel: "Démarrer un projet",
      frameLabel: "Visuel — établi du maître de chai, verres en cours d'assemblage",
    },
    "know-how": {
      ctaLabel: "Démarrer un projet",
      frameLabel: "Visuel — alambics de cuivre dans la distillerie",
    },
  },

  timeline: {
    kicker: "Héritage",
    title: "Deux familles, une maison",
    intro:
      "D'un domaine charentais du XVIIIᵉ siècle à une maison réunie qui expédie dans plus de vingt pays.",
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
        body: "Les deux familles décident de travailler ensemble et fusionnent — la Distillerie Vinet-Puranik est née.",
      },
      {
        year: "2014 — 2017",
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

  presidentWord: {
    title: "Le mot du président",
    quote: "La passion avant tout",
    body: [
      "Après avoir repris l'entreprise familiale en 1994, j'ai décidé de me tourner vers l'export — et j'ai découvert un autre monde. L'Asie en particulier m'a captivé, et elle occupe depuis une grande place dans ma vie.",
      "J'ai compris immédiatement que les importateurs que je rencontrais voulaient des produits sur mesure, faits selon leurs propres souhaits. Peu importait le pays : ils se sentaient davantage engagés dans des produits qu'ils avaient contribué à concevoir.",
      "Je suis donc devenu un promoteur des spiritueux sur mesure et un spécialiste des marques de distributeur. Vingt-cinq ans plus tard, avec une équipe vivante, motivée et multiculturelle, Vinet-Puranik est présente dans plus de vingt pays.",
    ],
    portraitAlt:
      "Bruno Delannoy, président de la Distillerie Vinet-Puranik, photographié dans la distillerie.",
    signatureRole: "Président",
  },

  team: {
    alt: "L'équipe Vinet-Puranik, photographiée parmi les alambics de cuivre de la distillerie.",
    label: "La maison",
    caption: "L'équipe Vinet-Puranik — Brie-sous-Archiac, Charente",
  },

  contact: {
    kicker: "Démarrer un projet",
    title: "Construisez votre prochain spiritueux avec Vinet-Puranik",
    body: "Partagez votre brief — ambition produit, marché et calendrier. La maison répond par un chemin réfléchi, de la première idée à la bouteille finie.",
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
        "Merci — votre demande a bien été reçue. La maison vous répondra dans les meilleurs délais.",
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
    capabilitiesHeading: "Savoir-faire",
    legalHeading: "Mentions",
    contactHeading: "Contact",
    capabilities: [
      "Marques de distributeur",
      "Développement produit",
      "Sourcing matières sèches",
      "Embouteillage personnalisé",
    ],
    legalLinks: [
      "Conditions générales",
      "Politique de confidentialité",
      "Politique de cookies",
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
      invalid: "Cette date n'existe pas — merci de vérifier et de réessayer.",
      future: "Merci de saisir une date passée.",
    },
    deniedTitle: "Nous sommes désolés",
    deniedMessage: "Vous devez avoir au moins {age} ans pour visiter Vinet-Puranik.",
    legal:
      "En entrant, vous confirmez avoir au moins {age} ans et qu'il est légal de consulter un contenu lié à l'alcool dans votre pays de résidence. Votre date de naissance est vérifiée dans votre navigateur : elle ne nous est jamais transmise ni conservée.",
  },

  visit: {
    kicker: "Nous rendre visite",
    title: "Le domaine de Brie-sous-Archiac",
    heroLabel: "Ouverture — cour du domaine et chais, lumière dorée",
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
        title: "La distillerie",
        body: "Les alambics de cuivre au travail — le cœur de la maison depuis 1777.",
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
        frameLabel: "Carte — allée du chai de vieillissement",
      },
      {
        title: "Dégustations",
        body: "Dégustations assises et masterclasses dans la salle de dégustation du domaine.",
        frameLabel: "Carte — verres de dégustation sur le chêne",
      },
    ],
    discover: "Découvrir",
    expectLabel: "Ce qui vous attend",
    mapLabel: "Carte / vue aérienne — le domaine à Brie-sous-Archiac",
    bookCta: "Réserver une visite",
    practicalCta: "Informations pratiques",
    book: {
      heading: "Réserver une visite",
      body: "Toutes les visites se font sur rendez-vous. Indiquez les dates envisagées, le nombre de participants et l'expérience souhaitée — la maison vous confirmera en retour.",
      ctaLabel: "Réserver via le formulaire de contact",
      mailSubject: "Réservation de visite — domaine Vinet-Puranik",
    },
    practical: {
      heading: "Informations pratiques",
      items: [
        { label: "Adresse", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France" },
        { label: "Horaires", value: "Sur rendez-vous — du lundi au vendredi" },
        {
          label: "Accès",
          value: "À 20 minutes de Jonzac, 35 minutes de Cognac ; parking sur place",
        },
        { label: "Langues", value: "Visites en français et en anglais" },
      ],
    },
    metaDescription:
      "Visitez le domaine Vinet-Puranik à Brie-sous-Archiac — chais, alambics de cuivre et dégustations au cœur de la région de Cognac. Visites et dégustations sur rendez-vous.",
  },

  experiences: {
    included: "Inclus",
    book: "Réserver cette expérience",
    orEmail: "Ou écrire à la maison",
    bookingSubject: "Réservation de visite — {name}",
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
      "Trois façons de parcourir le domaine — du premier regard sur les chais à une journée entière au cœur des métiers du spiritueux sur mesure.",
    note: "Programme, durées et tarifs à confirmer par la maison — toutes les visites sur rendez-vous.",
    crossLinkTitle: "Vous préférez rester à table ?",
    crossLinkCta: "Découvrir nos dégustations",
    crossLinkBack: "Retour au domaine",
    metaDescription:
      "Visites guidées du domaine Vinet-Puranik — chais de vieillissement, alambics de cuivre et l'histoire familiale depuis 1777. Sur rendez-vous à Brie-sous-Archiac.",
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
        body: "Une première rencontre avec la maison — l'histoire depuis 1777, les chais, et une courte dégustation guidée de ce que fait Vinet-Puranik.",
        frameLabel: "Visite — portes du chai ouvrant sur la cour",
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
        body: "Tout le parcours de production — du raisin et de la céréale au cuivre, au fût et à la ligne d'embouteillage — guidé par ceux qui le font vivre.",
        frameLabel: "Visite — alambics de cuivre dans la distillerie",
      },
      "heritage-tour": {
        name: "Visite Héritage — Depuis 1777",
        duration: "Demi-journée",
        groupSize: "2 à 8 personnes",
        languages: "Français · Anglais",
        includes: [
          "Visite privée du domaine et des archives familiales",
          "Visite du vignoble en Petite Champagne et Fins Bois",
          "Dégustation prolongée dans le chai familial",
        ],
        body: "Pour les partenaires et les collectionneurs — la longue histoire de la maison des Delannoy, racontée à travers les vignes, les archives et les plus vieux fûts.",
        frameLabel: "Visite — rangs de vigne au-dessus du domaine",
      },
    },
  },

  tastings: {
    kicker: "Nous rendre visite · Dégustations",
    title: "Les dégustations au domaine",
    intro:
      "Des dégustations assises dans la salle du domaine — du tour d'horizon des marques de la maison à une masterclass à l'établi du maître de chai.",
    note: "Sélections, durées et tarifs à confirmer par la maison — toutes les dégustations sur rendez-vous.",
    crossLinkTitle: "Vous préférez d'abord parcourir les chais ?",
    crossLinkCta: "Découvrir nos visites",
    crossLinkBack: "Retour au domaine",
    metaDescription:
      "Dégustations assises au domaine Vinet-Puranik — sélection signature, cognac et Pineau, masterclass spiritueux sur mesure. Sur rendez-vous à Brie-sous-Archiac.",
    items: {
      "signature-tasting": {
        name: "Dégustation Signature",
        duration: "1 heure",
        groupSize: "2 à 12 personnes",
        languages: "Français · Anglais",
        includes: [
          "Cinq spiritueux à travers la collection de la maison",
          "Guidée par un membre du comité de dégustation",
          "Des notes de dégustation à emporter",
        ],
        body: "La maison en cinq verres — gin, whisky, rhum, Pineau des Charentes et cognac, dégustés côte à côte.",
        frameLabel: "Dégustation — cinq verres sur la table de dégustation",
      },
      "cognac-and-pineau-flight": {
        name: "Dégustation Cognac et Pineau",
        duration: "45 minutes",
        groupSize: "2 à 12 personnes",
        languages: "Français · Anglais",
        includes: [
          "Les cognacs Delpech-Fougerat par âge",
          "Brigitte et Louise, rouge et blanc",
          "Bouchées d'accord régionales",
        ],
        body: "Les classiques charentais — la marque de cognac de la maison et son Pineau, dégustés comme la région les boit.",
        frameLabel: "Dégustation — verres à cognac et verres à Pineau",
      },
      "bespoke-spirits-masterclass": {
        name: "Masterclass Spiritueux sur Mesure",
        duration: "2 heures",
        groupSize: "2 à 8 personnes",
        languages: "Français · Anglais",
        includes: [
          "Séance d'assemblage à l'établi avec le maître de chai",
          "Échantillons de fûts et travaux en cours",
          "Votre propre assemblage à emporter",
        ],
        body: "Pour les partenaires professionnels — comment se compose un spiritueux sur mesure, du brief à l'assemblage, les pipettes en main.",
        frameLabel: "Dégustation — établi du maître de chai et échantillons de fûts",
      },
    },
  },

  nav: {
    about: {
      label: "La maison",
      links: [
        "Sur mesure dès le premier brief",
        "Savoir-faire et innovation",
        "Notre histoire",
        "Le mot du président",
        "Engagements",
      ],
      featuredHeading: "Dans la maison",
      featured: [
        { label: "Notre production", frameLabel: "À la une — alambics de cuivre" },
        { label: "Depuis 1777", frameLabel: "À la une — portrait de famille dans le chai" },
      ],
      viewAll: "Notre savoir-faire",
    },
    partnerships: {
      label: "Partenariats",
      overview: "Vue d'ensemble",
      featuredHeading: "Par catégorie",
      featuredFrameLabels: [
        "À la une — packshot Patte Blanche",
        "À la une — packshot Hold Up",
        "À la une — packshot rhum MACA",
      ],
      viewAll: "Voir toutes les catégories",
    },
    visit: {
      label: "Nous rendre visite",
      links: [
        "Le domaine",
        "Visites",
        "Dégustations",
        "Réserver une visite",
        "Informations pratiques",
      ],
      featuredHeading: "Expériences préférées",
      featured: [
        {
          label: "Visite Chais et Distillerie",
          frameLabel: "À la une — allée du chai de vieillissement",
        },
        { label: "Dégustation Signature", frameLabel: "À la une — verres de dégustation sur le chêne" },
      ],
      viewAll: "Préparer votre visite",
    },
    contact: {
      label: "Contact",
      links: [
        "Démarrer un projet",
        "Envoyer une demande",
        "La distillerie",
        "Réserver une visite",
      ],
      featuredHeading: "Nous écrire",
      featured: [
        { label: "Démarrer un projet", frameLabel: "À la une — établi du maître de chai" },
      ],
    },
  },

  ui: {
    home: "accueil",
    mainNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    languageUnavailable: "Bientôt disponible",
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
    cta: "Retour à la maison",
  },

  metadata: {
    homeTitle: "Créateurs de spiritueux sur mesure depuis 1777",
    titleTemplate: "%s · Vinet-Puranik",
    description:
      "Distillerie familiale de la région de Cognac, créatrice de spiritueux sur mesure, de marques de distributeur, de solutions d'embouteillage et de programmes de développement produit pour des partenaires dans plus de vingt pays.",
    partnershipsTitle: "Partenariats",
    visitTitle: "Nous rendre visite",
    toursTitle: "Visites",
    tastingsTitle: "Dégustations",
  },

  responsibleDrinking:
    "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",
} satisfies Content;
