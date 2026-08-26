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
    support: "Un héritage français. Une présence mondiale.",
    primaryCtaLabel: "Démarrer un projet",
    posterLabel: "Ouverture : chai de vieillissement, travelling lent",
    scroll: "Défiler",
  },

  maisonStatement: {
    kicker: "La maison",
    line: "De la terre au verre. De la vigne à la bouteille. Votre rêve en bouteille.",
    body: "Vinet-Puranik est une distillerie à l'héritage riche et aux racines profondes. Nous ne vendons pas seulement des produits : nous proposons une expérience, un art de vivre. Chaque produit est élaboré à la distillerie : de la vigne aux chais, de la distillation à la mise en bouteille.",
    origin: "100 % fabriqué en France",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Six métiers, une maison",
    intro:
      "Tout ce qu'exige un spiritueux sur mesure, réuni sous un même toit à Brie-sous-Archiac, pour qu'un seul interlocuteur porte un projet de la première idée au carton scellé.",
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
      "Une distillerie indépendante en région de Cognac : savoir-faire séculaire, art de la distillation et spiritueux premium élaborés en France, de la vigne à la bouteille.",
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
    crossLinkTitle: "Poursuivre la visite",
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
    "puranique-vodka": {
      category: "Vodka ultra-premium · neuf distillations",
      descriptor:
        "Blé français fin, distillé neuf fois puis filtré avec précision : un profil franc et subtil, rond en bouche, net en finale.",
      frameLabel: "Packshot : Puranique Vodka, étiquette tricolore",
    },
    "puranique-cognac-vs": {
      category: "Cognac V.S · deux ans minimum",
      descriptor:
        "Jeune et expressif, vieilli au moins deux ans en chêne français : fruits de verger sur un caractère souple et accessible.",
      frameLabel: "Packshot : Puranique Cognac V.S",
    },
    "puranique-cognac-vsop": {
      category: "Cognac V.S.O.P · quatre ans minimum",
      descriptor:
        "Eaux-de-vie sélectionnées à la main, vieillies au moins quatre ans, certaines bien davantage : fruits secs, vanille et épices sur une longue finale.",
      frameLabel: "Packshot : Puranique Cognac V.S.O.P",
    },
    "jus-d-manguier": {
      category: "Liqueur de mangue",
      descriptor:
        "De véritables mangues Alphonso travaillées en Cognac, sans additif artificiel : juteuse, équilibrée, franchement tropicale.",
      frameLabel: "Packshot : liqueur de mangue Jus d'Manguier",
    },
    mangeaux: {
      category: "Liqueur de mangue au cognac",
      descriptor:
        "Une base de cognac primée infusée à la mangue Alphonso : ambre brillant, sur le fruit mûr, l'écorce confite et le pain d'épices.",
      frameLabel: "Packshot : liqueur de cognac et mangue Mangeaux",
    },
    "puranique-pineau-blanc": {
      category: "Pineau des Charentes · Blanc",
      descriptor:
        "Moût de montils et d'ugni blanc assemblé au cognac du vignoble familial : généreux, vif, légèrement acidulé.",
      frameLabel: "Packshot : Puranique Pineau des Charentes Blanc",
    },
    "puranique-pineau-rouge": {
      category: "Pineau des Charentes · Rouge",
      descriptor:
        "Moût de merlot et de cabernet sauvignon et eau-de-vie de Cognac : vif et rond, sur les fruits des bois et à noyau.",
      frameLabel: "Packshot : Puranique Pineau des Charentes Rouge",
    },
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
        "Moût de merlot et de cabernet-sauvignon à l'eau-de-vie de cognac : vif et rond, sur le sous-bois et les fruits à noyau.",
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
        "Cuivré aux reflets dorés ; le bois et les épices laissent place à la vanille, au poivre et au miel, sur une finale de coco.",
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
      category: "Spirit drink · 30 %",
      descriptor:
        "Assemblé dans la maison : 56 % de cognac VSOP et 44 % de Pineau des Charentes. Pruneau, fruits secs, noix et chêne toasté.",
      frameLabel: "Packshot : spirit drink Sephina",
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
      figures: { distillations: "distillations", ageing: "ans de chêne, minimum" },
      ctaLabel: "Démarrer un projet",
      brandSiteLabel: "puraniques.com",
    },
    items: {
      "puranique-vodka": {
        heritage:
          "Ancrée dans les traditions de distillation du sud-ouest de la France, Puranique Vodka reflète des générations de savoir-faire et d'attention. Élaborée à partir d'un blé français fin et distillée neuf fois, chaque bouteille porte la main du maître de chai.",
        story:
          "Chaque bouteille commence par le meilleur blé français, choisi pour sa pureté. Sous la conduite de notre maître de chai, il connaît une distillation exigeante répétée neuf fois, puis une filtration soignée. Il en résulte un profil franc et subtil : rond en bouche, net en finale. À servir sèche ou au cœur d'un cocktail.",
        notes: {
          eye: "Limpide et cristalline",
          nose: "Fraîche et agréable",
          palate: "Ronde, souple et délicate",
        },
        storyFrameLabel: "Ambiance : Puranique Vodka servie sur glace et agrumes",
      },
      "puranique-cognac-vs": {
        heritage:
          "Ancré dans les traditions de Cognac, Puranique V.S reflète l'esprit essentiel de son origine. Vieilli en chêne français pendant au moins deux ans, chaque lot est conduit par des maîtres de chai fidèles aux techniques éprouvées, pour un cognac clair et expressif.",
        story:
          "Un cognac jeune et vibrant, élaboré en région de Cognac et vieilli au moins deux ans en fût de chêne français. L'assemblage porte sur le fruit croquant et un caractère souple et accessible, aussi à l'aise en cocktail que servi sec. Sa fraîcheur et sa clarté sont le versant audacieux du cognac contemporain.",
        notes: {
          eye: "Fruits de verger frais",
          nose: "Vanille et chêne léger",
          palate: "Finale douce et accessible",
        },
        storyFrameLabel: "Ambiance : Puranique Cognac V.S à la table d'un café parisien",
      },
      "puranique-cognac-vsop": {
        heritage:
          "Élaboré en région de Cognac, Puranique V.S.O.P puise dans une réserve profonde d'eaux-de-vie sélectionnées à la main. Vieilli au moins quatre ans, enrichi d'assemblages plus anciens, il s'affine par un vieillissement et un assemblage méticuleux.",
        story:
          "Une expression raffinée, vieillie au moins quatre ans, dont certaines eaux-de-vie ont mûri bien plus longtemps en fût. Distillé à Cognac, il révèle des couches de fruits secs, de vanille et d'épices sur une finale longue et souple : l'héritage, la patience et la profondeur à chaque gorgée.",
        notes: {
          eye: "Fruits secs et miel",
          nose: "Vanille, chêne toasté, pointe d'épices",
          palate: "Finale ronde et persistante",
        },
        storyFrameLabel: "Ambiance : Puranique Cognac V.S.O.P versé dans un verre tulipe",
      },
      "jus-d-manguier": {
        heritage:
          "Élaboré dans la région historique de Cognac, Jus d'Manguier allie la tradition à l'élégance tropicale. Chaque lot part de véritables mangues Alphonso, connues pour leur douceur éclatante et leur arôme riche, travaillées avec précision et sans additif artificiel.",
        story:
          "Une liqueur de mangue qui tient son goût des mangues Alphonso, recherchées pour leur douceur, leur richesse et leur profondeur. Fruit naturel, distillation française, rien d'artificiel. À servir frais, sur glace ou en base de cocktail.",
        notes: {
          eye: "Mangue tropicale juteuse",
          nose: "Douceur équilibrée, éclat d'agrumes",
          palate: "Finale nette et rafraîchissante",
        },
        storyFrameLabel: "Ambiance : Jus d'Manguier servi long sur glace",
      },
      mangeaux: {
        heritage:
          "Mangeaux commence en cognac. Chaque lot part de la base de cognac de la maison, puis reçoit une lente infusion de mangues Alphonso : le savoir-faire du cognac portant un fruit tropical.",
        story:
          "Née de l'idée d'unir la maîtrise de la distillation française aux saveurs tropicales, Mangeaux repose sur un cognac primé, distingué par une médaille d'argent au concours New York Spirits & Wine. Dans cette base, nous infusons les mangues Alphonso les plus recherchées, pour une liqueur ambre brillant dont les couches se déploient à chaque gorgée.",
        notes: {
          eye: "Robe ambrée brillante",
          nose: "Arômes fruités, vanille et agrumes",
          palate: "Texture subtile et souple : mangue mûre, fruits confits, pain d'épices",
        },
        storyFrameLabel: "Ambiance : Mangeaux en coupe, mangue et citron vert",
      },
      "puranique-pineau-blanc": {
        heritage:
          "Le Pineau des Charentes Puranique est un apéritif français obtenu en assemblant un moût de raisin et du cognac issu du vignoble familial, au cœur de l'aire délimitée et certifié Haute Valeur Environnementale, niveau 3.",
        story:
          "Le Blanc est élaboré à partir des cépages montils et ugni blanc. Léger et facile à boire, il se déguste frais, sur glace, en long drink ou en cocktail.",
        notes: {
          eye: "Robe or profond",
          nose: "Intense : fruits et notes de fleurs blanches",
          palate: "Généreux, vif, souple et légèrement acidulé, sur une superbe finale",
        },
        storyFrameLabel: "Ambiance : Pineau blanc servi frais à l'heure de l'apéritif",
      },
      "puranique-pineau-rouge": {
        heritage:
          "Le Pineau des Charentes Puranique est un apéritif français obtenu en assemblant un moût de raisin et du cognac issu du vignoble familial, au cœur de l'aire délimitée et certifié Haute Valeur Environnementale, niveau 3.",
        story:
          "Le Rouge assemble un moût de merlot et de cabernet sauvignon à de l'eau-de-vie de Cognac. Léger et facile à boire, il se déguste frais, sur glace, en long drink ou en cocktail.",
        notes: {
          eye: "Robe rubis éclatante",
          nose: "Aromatique, à la fois boisé et fruité",
          palate: "Vif et rond sur les fruits des bois et à noyau, finale riche et soutenue",
        },
        storyFrameLabel: "Ambiance : Pineau rouge sur glace, accompagné de charcuterie",
      },
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
      summary: "Brandy de raisin distillé en colonne et vieilli en fût : hors appellation cognac, par construction.",
      intro: [
        "Un brandy issu d'une sélection rigoureuse de raisins, distillé en colonne et non dans l'alambic charentais que l'appellation impose. Méthode différente, spiritueux différent : il a donc sa propre page plutôt qu'une place parmi les cognacs.",
        "Montlieu X.O est celui de la maison : au moins trois ans en fût de chêne, à servir en digestif, sec ou sur glace.",
      ],
    },
    liqueurs: {
      name: "Liqueurs",
      title: "Liqueurs",
      summary: "La mangue Alphonso travaillée en Cognac : l'une sur le fruit seul, l'autre sur une base de cognac.",
      intro: [
        "Des liqueurs de fruits élaborées en région de Cognac à partir de véritables mangues Alphonso, distillées avec précision et sans additif artificiel. Chaque lot suit la récolte : le caractère bouge un peu d'une année à l'autre.",
        "Jus d'Manguier est l'expression fruit, à servir frais, sur glace ou en base de cocktail. Mangeaux infuse la même mangue dans un cognac primé, pour une liqueur ambre brillant nettement plus profonde.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "L'appellation de la maison, travaillée pour nos partenaires depuis les crus de Brie-sous-Archiac.",
      intro: [
        "La maison se tient au cœur des crus de Petite Champagne et de Fins Bois, et le cognac est le spiritueux qu'elle élabore depuis le plus longtemps. Pour nos partenaires, cela signifie des eaux-de-vie sélectionnées et assemblées selon un cahier des charges, puis vieillies en chêne du Limousin jusqu'à la qualité recherchée : VS, VSOP, XO.",
        "Les cognacs Puranique de la maison y figurent également : le V.S clair et accessible après deux ans de chêne français, le V.S.O.P puisé dans une réserve profonde d'eaux-de-vie sélectionnées à la main et vieilli au moins quatre ans.",
        "Patte Blanche en est l'expression bio : certifié ECOCERT, distillé à la main à Arthenac, sans intrant artificiel de la vigne au verre.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary:
        "Single malt de France : double distillation charentaise, affiné en fût de cognac.",
      intro: [
        "Un whisky élaboré à la charentaise : deux chauffes dans les mêmes alambics de cuivre que le cognac, puis un repos en fûts de chêne du Limousin qui l'ont précédemment contenu.",
        "Palisson Batch 01 est la première sortie de ce programme : au moins trois ans de bois, embouteillé à 43 %. À ses côtés, la maison embouteille Glen Mac Clay, un Blended Scotch sélectionné dans le sud des Highlands et vieilli en fût de Bourbon.",
      ],
    },
    rum: {
      name: "Rhum",
      title: "Rhum",
      summary:
        "Des distillats de canne sourcés à l'étranger, puis vieillis, affinés, assemblés et habillés en France.",
      intro: [
        "Le rhum arrive comme distillat et repart comme marque. La maison source auprès des origines cannières, puis mène ici, en Charente, le travail qui donne à un rhum son caractère : vieillissement, finition en bois de cognac, assemblage et habillage.",
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
        "Hold Up marie le genièvre à la tonka et à l'anis ; Gigi en Provence est bio, sur la violette, le romarin et une note discrète d'olive ; GIN40 porte les Landes : pin et mûre sauvage.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Une vodka de raisin élaborée par millésime, à partir de fruits bordelais.",
      intro: [
        "Puranique Vodka est celle de la maison : un blé français fin, distillé neuf fois puis soigneusement filtré, pour un profil franc et subtil, rond en bouche et net en finale.",
        "Une vodka n'est pas tenue d'être neutre d'origine pour autant. Nade est distillée à partir de raisins bordelais et sortie par millésime : la puissance du cabernet-sauvignon, la rondeur du merlot, la finesse du sémillon.",
        "Le millésime 2019 a reposé quatre mois en fûts de vin rouge de Fronsac et a été embouteillé en moins de 250 bouteilles numérotées ; le 2022 est le millésime courant.",
      ],
    },
    aperitifs: {
      name: "Apéritifs et spirit drinks",
      title: "Apéritifs et spirit drinks",
      summary:
        "Des produits de raisin à faible degré : apéritifs français et spirit drinks à base de cognac.",
      intro: [
        "Moût de raisin, eaux-de-vie et Pineau des Charentes, composés au degré de l'apéritif. C'est la réponse de la maison aux marchés qui veulent un caractère de cognac servi long, frais ou sur glace.",
        "Le Pineau des Charentes Puranique est celui de la maison, blanc et rouge : un moût de raisin assemblé au cognac du vignoble familial, au cœur de l'aire délimitée. Certifié Haute Valeur Environnementale, niveau 3.",
        "Brigitte et Louise est un apéritif français à 17,5 %, blanc et rouge ; Sephina est un spirit drink à 30 % : 56 % de cognac VSOP assemblé à 44 % de Pineau des Charentes, et donc volontairement hors appellation cognac.",
      ],
    },
  },

  partnerships: {
    title: "Partenariats",
    intro: [
      "Certaines de ces bouteilles sont les nôtres. Les autres appartiennent aux importateurs, distributeurs et propriétaires de marques venus à Brie-sous-Archiac avec un marché en tête. La maison compose le liquide, source l'habillage et expédie le carton fini sous leur nom.",
      "L'ensemble est regroupé ci-dessous par catégorie, de sorte que la gamme de la maison et les marques de distributeur qu'elle façonne pour d'autres se tiennent côte à côte : la preuve d'une étendue de savoir-faire, du raisin à la céréale et à la canne, et le chemin le plus court vers ce qui ressemble le plus au projet que vous avez en tête.",
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
    readTheStory: "Lire l'histoire",
    readTheStoryAria: "Lire l'histoire de {name}",
    houseHeading: "De la maison",
    partnerHeading: "Façonnés pour nos partenaires",
    metaDescription:
      "La gamme Vinet-Puranik et les marques de distributeur que la maison façonne pour les importateurs, les distributeurs et les propriétaires de marques : cognac, brandy, whisky, rhum, gin, vodka, liqueurs et apéritifs, par catégorie.",
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
      "Une distillerie familiale en Charente, et un groupe présent sur quatre continents. La maison est conduite par les deux.",
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
        role: "Directeur général du groupe",
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
      "Le Sawnee Group est une organisation multinationale dont le siège est à Atlanta, aux États-Unis. Le groupe met son expérience internationale au service de plusieurs secteurs : aéronautique, investissement immobilier, hôtellerie, distillation, distribution de boissons, logistique internationale et achats stratégiques.",
      "Par son portefeuille diversifié et son réseau international, le Sawnee Group opère dans plusieurs régions, avec des bureaux en France, en Irlande, à Singapour, en Inde et aux États-Unis. Cette présence lui permet d'allier expertise opérationnelle et accès stratégique aux marchés.",
    ],
    industriesLabel: "Secteurs",
    industries: [
      "Aéronautique",
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
      countries: "pays servis",
      offices: "bureaux internationaux",
      industries: "secteurs",
    },
  },

  presidentWord: {
    title: "Le mot du directeur général",
    quote: "La passion avant tout",
    body: [
      "Après avoir repris l'entreprise familiale en 1994, j'ai décidé de me tourner vers l'export, et j'ai découvert un autre monde. L'Asie en particulier m'a captivé, et elle occupe depuis une grande place dans ma vie.",
      "J'ai compris immédiatement que les importateurs que je rencontrais voulaient des produits sur mesure, faits selon leurs propres souhaits. Peu importait le pays : ils se sentaient davantage engagés dans des produits qu'ils avaient contribué à concevoir.",
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
    title: "Construisez votre prochain spiritueux avec Vinet-Puranik",
    body: "Partagez votre brief : ambition produit, marché et calendrier. La maison répond par un chemin réfléchi, de la première idée à la bouteille finie.",
    metaDescription:
      "Parlez à la Distillerie Vinet-Puranik de spiritueux sur mesure, de marques de distributeur, de vrac, d’embouteillage ou d’une visite. Contact commercial nommé, lignes directes et formulaire.",
    intro: [
      "Dites-nous ce que vous cherchez à construire : le produit, le marché, le calendrier. Chaque demande arrive chez une personne, pas dans une file d’attente.",
    ],
    formHeading: "Envoyer une demande",
    formIntro: "Les champs marqués d’un astérisque sont obligatoires.",
    detailsLabel: "Joindre la maison directement",
    switchboardHeading: "Standard",
    followHeading: "Suivre la maison",
    homeTitle: "Un projet en tête ?",
    homeBody:
      "De la première esquisse au carton scellé, la maison travaille selon votre brief. Dites-nous le marché que vous visez.",
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
    capabilitiesHeading: "Savoir-faire",
    legalHeading: "Mentions",
    contactHeading: "Contact",
    capabilities: [
      "Marque de distributeur & sur mesure",
      "Savoir-faire et innovation",
      "Ce que nous produisons",
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
      invalid: "Cette date n'existe pas : merci de vérifier et de réessayer.",
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
        title: "La distillerie",
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
        body: "Dégustations assises et masterclasses dans la salle de dégustation du domaine.",
        frameLabel: "Carte : verres de dégustation sur le chêne",
      },
    ],
    discover: "Découvrir",
    expectLabel: "Ce qui vous attend",
    mapLabel: "Carte / vue aérienne : le domaine à Brie-sous-Archiac",
    bookCta: "Réserver une visite",
    practicalCta: "Informations pratiques",
    book: {
      heading: "Réserver une visite",
      body: "Toutes les visites se font sur rendez-vous. Indiquez les dates envisagées, le nombre de participants et l'expérience souhaitée. La maison vous confirmera en retour.",
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
          value: "À 20 minutes de Jonzac, 35 minutes de Cognac ; parking sur place",
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
    crossLinkTitle: "Vous préférez rester à table ?",
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
        name: "Visite Héritage, Depuis 1777",
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
      "Des dégustations assises dans la salle du domaine : du tour d'horizon des marques de la maison à une masterclass à l'établi du maître de chai.",
    note: "Sélections, durées et tarifs à confirmer par la maison : toutes les dégustations sur rendez-vous.",
    crossLinkTitle: "Vous préférez d'abord parcourir les chais ?",
    crossLinkCta: "Découvrir nos visites",
    crossLinkBack: "Retour au domaine",
    metaDescription:
      "Dégustations assises au domaine Vinet-Puranik : sélection signature, cognac et Pineau, masterclass spiritueux sur mesure. Sur rendez-vous à Brie-sous-Archiac.",
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
        body: "La maison en cinq verres : gin, whisky, rhum, Pineau des Charentes et cognac, dégustés côte à côte.",
        frameLabel: "Dégustation : cinq verres sur la table de dégustation",
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
        body: "Les classiques charentais : la marque de cognac de la maison et son Pineau, dégustés comme la région les boit.",
        frameLabel: "Dégustation : verres à cognac et verres à Pineau",
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
        body: "Pour les partenaires professionnels : comment se compose un spiritueux sur mesure, du brief à l'assemblage, les pipettes en main.",
        frameLabel: "Dégustation : établi du maître de chai et échantillons de fûts",
      },
    },
  },

  nav: {
    about: {
      label: "À propos",
      links: [
        "Notre histoire",
        "Marque de distributeur & sur mesure",
        "Savoir-faire et innovation",
        "Le mot de la direction",
        "Notre chronologie",
      ],
      featuredHeading: "Dans la maison",
      featured: [
        { label: "Notre production", frameLabel: "À la une : alambics de cuivre" },
        { label: "Depuis 1777", frameLabel: "À la une : portrait de famille dans le chai" },
      ],
      viewAll: "Notre savoir-faire",
    },
    partnerships: {
      label: "Partenariats",
      overview: "Vue d'ensemble",
      featuredHeading: "Par catégorie",
      featuredFrameLabels: [
        "À la une : packshot Patte Blanche",
        "À la une : packshot Hold Up",
        "À la une : packshot rhum MACA",
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
      ],
      featuredHeading: "Expériences préférées",
      featured: [
        {
          label: "Visite Chais et Distillerie",
          frameLabel: "À la une : allée du chai de vieillissement",
        },
        { label: "Dégustation Signature", frameLabel: "À la une : grappes sur le pied de vigne" },
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
      "Distillerie familiale de la région de Cognac, créatrice de spiritueux sur mesure, de marques de distributeur et de marque blanche, de solutions d'embouteillage et de programmes de développement produit pour des partenaires dans plus de vingt pays.",
    aboutTitle: "Notre histoire",
    partnershipsTitle: "Partenariats",
    contactTitle: "Contact",
    visitTitle: "Nous rendre visite",
    toursTitle: "Visites",
    tastingsTitle: "Dégustations",
  },

  responsibleDrinking:
    "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",
} satisfies Content;
