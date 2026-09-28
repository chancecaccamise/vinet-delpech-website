import type { Content } from "@/lib/content/en";

// ---------------------------------------------------------------------------
// Spanish. Written for the trade audience the house actually sells to —
// importers and brand owners in Spain and Latin America — so the register is
// professional rather than touristic, and vocabulary is kept pan-Hispanic
// (evitando localismos) where the two markets diverge.
//
// Wine and spirit terms that are French appellations or house names stay in
// French: cognac, Pineau des Charentes, Fins Bois, Petite Champagne,
// eau-de-vie. These are legally protected designations, not words to translate.
// ---------------------------------------------------------------------------

export const es = {
  hero: {
    title: "Tradición destiladora francesa desde 1777",
    support: "Destilado. Envejecido. Ensamblado. Embotellado. Todo bajo un mismo techo.",
    primaryCtaLabel: "Iniciar un proyecto",
    posterLabel: "Apertura: bodega de barricas, travelling lento",
    scroll: "Desplazar",
  },

  homeIntro: {
    kicker: "La destilería",
    paragraphs: [
      "Situada en Brie-sous-Archiac, en el suroeste de Francia, la Distillerie Vinet-Puranik une siglos de tradición destiladora francesa con medios de producción modernos.",
      "De la destilación y el envejecimiento al ensamblaje, el embotellado y el desarrollo de marcas de distribución, trabajamos para nuestras propias marcas y para socios de todo el mundo.",
    ],
    map: {
      ocean: "Océano Atlántico",
      description:
        "Mapa de las Charentes, en el suroeste de Francia: la destilería está señalada en Brie-sous-Archiac, en Charente-Maritime, al sur de Cognac y al norte de Burdeos.",
    },
  },

  maisonStatement: {
    origin: "100 % hecho en Francia",
  },

  savoirFaire: {
    kicker: "Savoir-faire",
    title: "Seis oficios, una casa",
    intro:
      "Todo lo que exige un espirituoso a medida, reunido bajo un mismo techo en Brie-sous-Archiac, para que una sola conversación lleve el proyecto de la primera idea a la caja precintada.",
    services: {
      creation: {
        title: "Creación a medida",
        body: "Recetas, estilos y perfiles de líquido compuestos según su brief y su mercado, del primer boceto a la firma.",
      },
      sourcing: {
        title: "Abastecimiento de materia seca",
        body: "Botellas, tapones, cápsulas y presentación seleccionados con precisión, fiabilidad y ojo para el punto de venta.",
      },
      advisory: {
        title: "Asesoría técnica y de marketing",
        body: "Conocimiento de categoría y acompañamiento técnico en desarrollo de producto, posicionamiento y presentación, en cada etapa.",
      },
      regulatory: {
        title: "Apoyo normativo",
        body: "Etiquetado, aduanas y cumplimiento gestionados para cada mercado de destino, para que las fronteras nunca frenen un lanzamiento.",
      },
      bottling: {
        title: "Embotellado personalizado",
        body: "Líneas flexibles tanto para series cortas como para grandes volúmenes, acabadas exactamente según especificación.",
      },
      quality: {
        title: "Aseguramiento de la calidad",
        body: "Una búsqueda permanente de mejora, del destilado y el ensamblaje hasta la caja precintada.",
      },
    },
  },

  knowHow: {
    title: "Saber hacer e innovación",
    body: "Alambiques, bodegas y naves de embotellado comparten un mismo patio en Brie-sous-Archiac, entre un centenar de hectáreas de viñedo en Fins Bois y Petite Champagne.",
    figureLabels: {
      stills: "alambiques",
      lines: "líneas de embotellado",
      vats: "de almacenamiento en cuba",
      warehouse: "de almacén",
      vineyard: "de viñedo",
    },
    details: {
      certified: { label: "Certificaciones", body: "Estatus OEA y certificación ECOCERT." },
      languages: {
        label: "Idiomas",
        body: "Francés, inglés, español, chino (mandarín, cantonés).",
      },
      rd: { label: "I+D", body: "Afinados, maceraciones, destilación, productos híbridos." },
    },
  },

  // La página « nuestra historia ». Los `marks` son las palabras clave de la
  // casa; cada una lleva una frase de apoyo, para que la lista sea una
  // declaración y no un listado suelto.
  about: {
    title: "Nuestra historia",
    metaDescription:
      "Una destilería independiente en la región de Cognac: saber hacer secular, el arte de la destilación y espirituosos premium elaborados en Francia, de la viña a la botella.",
    intro: [
      "Vinet-Puranik es una destilería de rica herencia y raíces profundas: dos familias, una casa y un patio en Brie-sous-Archiac donde cada etapa de un espirituoso ocurre bajo el mismo techo.",
      "De la tierra a la copa. De la viña a la botella. Su sueño en una botella.",
    ],
    projectCta: "Iniciar un proyecto",
    visitCta: "Visitar la finca",
    marksLabel: "Lo que defiende la casa",
    marks: [
      {
        label: "Destilería independiente",
        body: "Una casa en Brie-sous-Archiac, en manos de las dos familias que la levantaron.",
      },
      {
        label: "Saber hacer secular",
        body: "Alambiques, bodegas y mesas de ensamblaje trabajados a mano desde 1777.",
      },
      {
        label: "El arte de la destilación",
        body: "Uva y cereal, barrica y tiempo: compuestos hasta que el líquido responda al brief.",
      },
      {
        label: "Herencia francesa",
        body: "Viñedos de Fins Bois y Petite Champagne, una finca charentesa y las denominaciones que los acompañan.",
      },
      {
        label: "Productos premium y de lujo",
        body: "Espirituosos vestidos y acabados para la gama alta, tanto en series cortas como en grandes volúmenes.",
      },
    ],
    skillsLabel: "Nuestras competencias",
    skills: [
      {
        title: "Calidad",
        body: "Una búsqueda permanente de mejora, del espirituoso y el ensamblaje a la caja terminada.",
      },
      {
        title: "Fiabilidad",
        body: "Volúmenes, plazos y especificaciones cumplidos: líneas flexibles y un único interlocutor.",
      },
      {
        title: "Exportación mundial",
        body: "Estatus OEA, aduanas y etiquetado gestionados para socios en más de veinte países.",
      },
    ],
    crossLinkTitle: "Más sobre la casa",
    crossLinkTerroir: "Los viñedos y la región",
    crossLinkPartnerships: "Las marcas a las que damos forma",
  },

  estate: {
    kicker: "La finca",
    title: "Una finca, todas las etapas",
    intro:
      "Alambiques de cobre, bodegas de envejecimiento y líneas de embotellado comparten un mismo patio en Brie-sous-Archiac. Cada etapa de la vida de un espirituoso sucede aquí, en manos de la casa.",
    ctaLabel: "Visitar la finca",
    alts: {
      stills: "Un alambique de cobre en la sala de alambiques de la Distillerie Vinet-Puranik.",
      cellar: "Barricas de roble reposando en una bodega de la finca.",
      vines: "Hileras de viñas al amanecer cerca de Brie-sous-Archiac.",
    },
    metiers: {
      distillation: {
        title: "Destilación",
        body: "Los alambiques de cobre, conducidos despacio y vigilados de cerca, convierten vinos y mostos en eaux-de-vie.",
      },
      ageing: {
        title: "Envejecimiento",
        body: "Las barricas de roble francés reposan en la penumbra de las bodegas y dan a cada espirituoso su color y su profundidad.",
      },
      blending: {
        title: "Ensamblaje",
        body: "El maestro de bodega compone cada expresión a partir de las reservas de la casa, barrica a barrica.",
      },
      bottling: {
        title: "Embotellado",
        body: "Bajo el mismo techo, las líneas visten, llenan y sellan cada botella antes de que salga la caja.",
      },
    },
  },

  brands: {
    "glen-smith": {
      category: "Blended Scotch whisky · 40 %",
      descriptor:
        "Blended Scotch whisky, destilado y envejecido en Escocia, embotellado allí a 40 % en 70 cl.",
      frameLabel: "Packshot: blended Scotch whisky Glen Smith",
    },
    "velorin-vodka": {
      category: "Vodka · elaborado en Francia",
      descriptor:
        "Vodka elaborado en Francia, vestido con las tres palabras que lleva su etiqueta: pureza, tradición, elegancia.",
      frameLabel: "Packshot: Velorin Vodka",
    },
    "montlieu-xo": {
      category: "Brandy X.O · tres años mínimo",
      descriptor:
        "Uvas cuidadosamente seleccionadas, destiladas en columna y envejecidas al menos tres años en roble: un brandy elegante, equilibrado y aromático.",
      frameLabel: "Packshot: brandy Montlieu X.O",
    },
    "glen-mac-clay": {
      category: "Blended Scotch Whisky · tres años mínimo",
      descriptor:
        "Blended Scotch seleccionado en el sur de las Highlands, ensamblado con una malta sin turba y madurado en barrica de bourbon: pera, manzana y uva.",
      frameLabel: "Packshot: Glen Mac Clay Blended Scotch Whisky",
    },
    "puranique-pineau-blanc": {
      category: "Pineau des Charentes · Blanco",
      descriptor:
        "Mosto de montils y ugni blanc ensamblado con cognac del viñedo familiar: generoso, vivo y ligeramente acidulado.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Blanco",
    },
    "puranique-pineau-rouge": {
      category: "Pineau des Charentes · Tinto",
      descriptor:
        "Mosto de merlot y cabernet sauvignon con eau-de-vie de Cognac: vivo y redondo, sobre frutos del bosque y de hueso.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Tinto",
    },
    "hold-up": {
      category: "Ginebra · 43 %",
      descriptor:
        "Ginebra artesanal destilada en alambique de cobre: el enebro se encuentra con el haba tonka, el anís y un ligero toque cítrico.",
      frameLabel: "Packshot: botella de ginebra Hold Up",
    },
    "palisson-batch-01": {
      category: "Single malt francés · 43 %",
      descriptor:
        "Single malt charentés de doble destilación, envejecido al menos tres años en roble del Limousin que antes contuvo cognac.",
      frameLabel: "Packshot: single malt Palisson Batch 01",
    },
    "irie-republique-dominicaine": {
      category: "Ron · República Dominicana · 41 %",
      descriptor:
        "Color ámbar, nariz afrutada de mantequilla y vainilla: boca rica y golosa, fruta tropical y fruta amarilla, con final de caramelo de mantequilla.",
      frameLabel: "Packshot: Irie République Dominicaine",
    },
    "irie-trinidad-tobago": {
      category: "Ron · Trinidad y Tobago · 41 %",
      descriptor:
        "Color ámbar, nariz de fruta tropical y plátano flambeado sobre una nota vegetal: boca golosa y estructurada, praliné, plátano y caramelo.",
      frameLabel: "Packshot: Irie Trinidad & Tobago",
    },
    "maca-rum": {
      category: "Ron especiado",
      descriptor:
        "Destilado en Mauricio, envejecido y afinado en Francia: canela envolvente y el misterio redondo del haba tonka.",
      frameLabel: "Packshot: botella de ron MACA",
    },
    tijuca: {
      category: "Ron blended · Brasil",
      descriptor:
        "Cobrizo con reflejos dorados; la madera y las especias dejan paso a vainilla, pimienta y miel, con final de coco.",
      frameLabel: "Packshot: ron brasileño TIJUCA",
    },
    "gigi-en-provence": {
      category: "Ginebra ecológica · 44 %",
      descriptor:
        "Ginebra ecológica provenzal: violeta y enebro sobre limón, con romero, cilantro y una nota discreta de oliva.",
      frameLabel: "Packshot: ginebra Gigi en Provence",
    },
    "patte-blanche": {
      category: "Cognac ecológico",
      descriptor:
        "Cognac certificado ECOCERT, destilado a mano en Arthenac sin insumos artificiales, de la viña a la copa: VS, VSOP y XO.",
      frameLabel: "Packshot: cognac ecológico Patte Blanche",
    },
    gin40: {
      category: "Ginebra · 50 cl",
      descriptor:
        "Destilada artesanalmente en el suroeste de Francia con influencia de las Landas: enebro, pino y mora silvestre.",
      frameLabel: "Packshot: botella GIN40",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40 %",
      descriptor:
        "Destilado a partir de uvas bordelesas: la potencia del cabernet sauvignon, la redondez del merlot, la finura del sémillon.",
      frameLabel: "Packshot: Nade Vodka añada 2022",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40 %",
      descriptor:
        "Reposado cuatro meses en barricas de vino tinto de Fronsac: levemente rosado con matices dorados, en menos de 250 botellas numeradas.",
      frameLabel: "Packshot: Nade Vodka añada 2019",
    },
  },

  houseBrands: {
    labels: {
      houseMark: "Una marca Vinet-Puranik",
      heritage: "Herencia y oficio",
      story: "La historia",
      tasting: "Notas de cata",
      awards: "Distinciones",
      senses: { eye: "Vista", nose: "Nariz", palate: "Boca" },
      ranks: { gold: "Oro", silver: "Plata", bronze: "Bronce", score: "{score} puntos" },
      figures: { distillations: "destilaciones", ageing: "años en roble, mínimo" },
      ctaLabel: "Iniciar un proyecto",
      brandSiteLabel: "puraniques.com",
    },
    items: {
      "montlieu-xo": {
        heritage:
          "Este brandy auténtico nace de una selección muy cuidada de uva. Destilado en columna, Montlieu X.O envejece después en barrica de roble un mínimo de tres años.",
        story:
          "Envejecido en barrica de roble, Montlieu X.O se recomienda como digestivo, solo o con hielo. Seduce por su elegancia, su equilibrio y sus aromas.",
        notes: {
          eye: "Color ámbar",
          nose: "Notas delicadas de almendra y vainilla",
          palate: "Bien equilibrado y suave",
        },
        storyFrameLabel: "Ambiente: Montlieu X.O servido en una mesa de celebración",
      },
      "glen-mac-clay": {
        heritage:
          "Glen Mac Clay Blended Scotch Whisky se seleccionó con cuidado en el sur de las Highlands. Compuesto principalmente por trigo y malta destilados en columna, se ensambla después con una malta sin turba de la misma destilería, destilado en alambique de cobre, y madura en barrica de bourbon un mínimo de tres años.",
        story:
          "Este Scotch se elaboró en la más pura tradición: destilado con pasión y envejecido varios años en barrica de roble. Para disfrutarlo en trago largo, con agua con gas o ginger beer.",
        notes: {
          eye: "Brillante, con ligeros reflejos dorados",
          nose: "Notas frutales de pera, manzana y uva",
          palate: "Equilibrado y suave, maltoso, con un fresco recuerdo de pera",
        },
        storyFrameLabel: "Ambiente: Glen Mac Clay en un paisaje de las Highlands",
      },
      "puranique-pineau-blanc": {
        heritage:
          "El Pineau des Charentes Puranique es un aperitivo francés obtenido ensamblando mosto de uva con cognac del viñedo familiar, en el corazón de la zona de producción delimitada y con certificación Haute Valeur Environnementale, nivel 3.",
        story:
          "El Blanco se elabora con las variedades montils y ugni blanc. Ligero y fácil de beber, se disfruta frío, con hielo, en combinado o en coctelería.",
        notes: {
          eye: "Color oro intenso",
          nose: "Intenso: fruta y notas de flores blancas",
          palate: "Generoso, vivo, suave y ligeramente acidulado, con un final espléndido",
        },
        storyFrameLabel: "Ambiente: Pineau blanco servido frío a la hora del aperitivo",
      },
      "puranique-pineau-rouge": {
        heritage:
          "El Pineau des Charentes Puranique es un aperitivo francés obtenido ensamblando mosto de uva con cognac del viñedo familiar, en el corazón de la zona de producción delimitada y con certificación Haute Valeur Environnementale, nivel 3.",
        story:
          "El Tinto ensambla mosto de merlot y cabernet sauvignon con eau-de-vie de Cognac. Ligero y fácil de beber, se disfruta frío, con hielo, en combinado o en coctelería.",
        notes: {
          eye: "Color rubí brillante",
          nose: "Aromático, a la vez amaderado y frutal",
          palate: "Vivo y redondo sobre frutos del bosque y de hueso, con un final rico y sostenido",
        },
        storyFrameLabel: "Ambiente: Pineau tinto con hielo, acompañado de embutidos",
      },
    },
  },

  families: {
    brandy: {
      name: "Brandy",
      title: "Brandy",
      summary:
        "Brandy de uva destilado en columna y envejecido en roble: deliberadamente fuera de la denominación Cognac.",
      intro: [
        "Un brandy nacido de una selección cuidada de uva, destilado en columna y no en el alambique de cobre que exige la denominación. Método distinto, espirituoso distinto: por eso tiene página propia en lugar de un sitio entre los cognacs.",
        "Montlieu X.O es el de la casa: al menos tres años en barrica de roble, recomendado como digestivo, solo o con hielo.",
      ],
    },
    liqueurs: {
      name: "Licores",
      title: "Licores",
      summary:
        "Licores de fruta y licores sobre base de cognac, macerados y ensamblados según el brief.",
      intro: [
        "Licores de fruta elaborados en la región de Cognac: fruta entera macerada y ensamblada sin aditivos artificiales, sobre alcohol neutro o sobre base de cognac, a la graduación y el dulzor que pide un mercado.",
        "La casa ha elaborado licores de mango de las dos maneras: uno solo con la fruta, otro infusionado en un cognac premiado; y la misma vía está abierta a cualquier fruta que traiga un socio.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "La denominación de la casa, trabajada para nuestros socios a partir de los crus que rodean Brie-sous-Archiac.",
      intro: [
        "La casa se asienta entre los crus de Petite Champagne y Fins Bois, y el cognac es el espirituoso que lleva más tiempo elaborando. Para nuestros socios, eso significa eaux-de-vie seleccionadas y ensambladas según un brief, y después envejecidas en roble del Limousin hasta la calidad que pide el mercado: VS, VSOP, XO.",
        "Puranique es el cognac de la familia. La gama se encuentra en puraniques.com, no aquí.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary:
        "Doble destilación charentesa y afinado en roble de cognac, tanto para malta como para blend.",
      intro: [
        "Para nuestros socios, el whisky puede elaborarse a la manera charentesa: doble destilación en los mismos alambiques de cobre que la casa emplea para el cognac, y después reposo en barricas de roble del Limousin que antes contuvieron cognac.",
        "Glen Mac Clay es la botella de la casa en la categoría: un Blended Scotch seleccionado en el sur de las Highlands, casado con una malta sin turba y madurado en barrica de bourbon.",
      ],
    },
    rum: {
      name: "Ron",
      title: "Ron",
      summary:
        "Destilados de caña de origen extranjero, envejecidos, afinados, ensamblados y vestidos en Francia.",
      intro: [
        "El ron llega como destilado y sale como marca. La casa se abastece en los países productores de caña y realiza aquí, en la Charente, el trabajo que da carácter a un ron: envejecimiento, afinado en madera de cognac, ensamblaje y presentación.",
        "Irie viene de República Dominicana y de Trinidad y Tobago, color ámbar, sobre fruta tropical, praliné y caramelo; TIJUCA es un ensamblaje brasileño, cobrizo, sobre vainilla, pimienta y miel.",
      ],
    },
    gin: {
      name: "Ginebra",
      title: "Ginebra",
      summary:
        "El enebro compuesto según el brief de un socio, macerado y destilado en cobre.",
      intro: [
        "Es en la ginebra donde mejor se lee un brief: la lista de botánicos es la marca. La casa macera y destila en cobre, y puede llevar una receta del primer boceto a la caja precintada sin salir del patio.",
        "Hold Up se destila en alambique de cobre, sobre el haba tonka, el anís y un ligero toque cítrico; GIN40 lleva el sello de las Landas: pino y mora silvestre.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "Un vodka de uva bordelesa, destilado y lanzado por añadas.",
      intro: [
        "Un vodka no tiene por qué ser neutro de origen. La casa destila uvas bordelesas y lanza su vodka por añadas: la potencia del cabernet sauvignon, la redondez del merlot, la finura del sémillon.",
        "Puranique es el vodka de la familia. La gama se encuentra en puraniques.com, no aquí.",
      ],
    },
    aperitifs: {
      name: "Aperitivos y bebidas espirituosas",
      title: "Aperitivos y bebidas espirituosas",
      summary:
        "Productos de uva de menor graduación: aperitivos franceses y bebidas espirituosas a base de cognac.",
      intro: [
        "Mosto de uva, eaux-de-vie y Pineau des Charentes, compuestos a graduación de aperitivo. Es la respuesta de la casa a los mercados que buscan un carácter de cognac servido en trago largo, frío o con hielo.",
        "El Pineau des Charentes Puranique es el aperitivo de la familia: un Blanco de montils y ugni blanc, un Tinto de merlot y cabernet sauvignon.",
      ],
    },
  },

  // The Partners section. Two houses, deliberately unalike: Les Brûleries
  // Modernes shares the courtyard at Brie-sous-Archiac and its range is carried
  // here in full, while Puranique has a site of its own and the house asked
  // that its portfolio not be restated on this one. `linkLabel` is the bare
  // domain, shown on the card that leaves the site.
  partners: {
    title: "Socios",
    intro: [
      "Dos casas acompañan a la destilería. Una comparte su patio y sus alambiques; la otra lleva el nombre de la familia y mantiene su propio sitio.",
    ],
    note: "Distribuido en Francia por Mähler-Besse.",
    ctaLabel: "Iniciar un proyecto",
    backToPartners: "Volver a socios",
    rangeHeading: "La gama",
    visitSite: "Ver el sitio",
    visitSiteAria: "Ver el sitio de {name} (se abre en una pestaña nueva)",
    viewRange: "Ver la gama",
    viewRangeAria: "Ver la gama de {name}",
    metaDescription:
      "Las dos casas junto a la Distillerie Vinet-Puranik: Les Brûleries Modernes, cuyos aperitivos y espirituosos se elaboran en la finca, y Puranique, la marca de la familia.",
    companies: {
      "les-bruleries-modernes": {
        descriptor: "Ginebra, whisky y ron para el canal HORECA",
        intro:
          "Fundada en 2019 y construida sobre los alambiques de la destilería, Les Brûleries Modernes reúne una cartera de espirituosos para bares, restaurantes y tiendas independientes. Sus botellas se afinan y se visten en el mismo patio, en Brie-sous-Archiac.",
        frameLabel: "Packshot: Gin Hold Up",
        linkLabel: "lesbruleriesmodernes.com",
      },
      puranique: {
        descriptor: "La marca de la familia",
        intro:
          "Puranique es la gama de espirituosos franceses de la familia. Tiene su propio sitio, y ahí es donde se encuentra la gama: cognac, vodka, pineau y licores, con las notas de cata y las distinciones que les corresponden.",
        frameLabel: "Packshot: Puranique Cognac V.S.O.P",
        linkLabel: "puraniques.com",
      },
    },
  },

  privateLabel: {
    title: "Marca de distribuidor y marca blanca",
    intro: [
      "La mayoría de estas botellas pertenecen a importadores, minoristas y propietarios de marcas que llegaron a Brie-sous-Archiac con un mercado en mente: la casa compone el líquido, gestiona la presentación y envía la caja terminada a su nombre.",
      "Están agrupadas por categorías, junto a las botellas de la propia casa: la prueba de un alcance amplio, de la uva al cereal y a la caña, y el camino más corto hacia lo más parecido al proyecto que tiene en mente.",
    ],
    note: "Distribuido en Francia por Mähler-Besse.",
    ctaLabel: "Iniciar un proyecto",
    noBrandsYet: "Elaborado a medida",
    brandCountOne: "1 marca",
    brandCountOther: "{count} marcas",
    inCollectionOne: "1 marca en la colección",
    inCollectionOther: "{count} marcas en la colección",
    explore: "Descubrir {name}",
    otherCategories: "Otras categorías",
    backToAll: "Volver a todas las categorías",
    viewDetails: "Ver detalle",
    viewDetailsAria: "Ver el detalle de {name} (se abre en una pestaña nueva)",
    readTheStory: "Leer la historia",
    readTheStoryAria: "Leer la historia de {name}",
    houseHeading: "De la casa",
    partnerHeading: "Creadas para nuestros socios",
    metaDescription:
      "Marca de distribuidor y marca blanca de la Distillerie Vinet-Puranik: cognac, brandy, whisky, ron, ginebra, vodka, licores y aperitivos elaborados para importadores, minoristas y propietarios de marcas, agrupados por categoría.",
  },

  featurePanels: {
    bespoke: {
      title: "Marca de distribución y espirituosos a medida",
      body: "Programas de marca de distribución y marca blanca construidos en torno a su mercado: receta, líquido, presentación y dosier, llevados del primer boceto a una caja precintada con su nombre.",
      ctaLabel: "Iniciar un proyecto",
      frameLabel: "Imagen: barricas envejeciendo en la bodega",
    },
    "know-how": {
      ctaLabel: "Iniciar un proyecto",
      frameLabel: "Imagen: alambiques de cobre en la destilería",
    },
  },

  production: {
    kicker: "Lo que producimos",
    title: "Todos los espirituosos, una sola casa",
    intro:
      "Cognac y brandy, whisky, ron, ginebra, vodka, licores y aperitivos. La casa destila, envejece, ensambla y embotella en ocho categorías, para su propia gama y para las marcas de distribución que construye con sus socios.",
    frameLabel:
      "Una muestra extraída con pipeta de una barrica de roble de la bodega, con la copa de cata junto al tapón.",
    allProducts: "Todas las categorías",
  },

  leadership: {
    label: "Dirección",
    title: "Dos líderes, una casa",
    intro:
      "Una destilería familiar en la Charente y un grupo con oficinas en tres continentes: la casa la dirigen ambos.",
    leaders: {
      bruno: {
        name: "Bruno Delannoy",
        role: "Director general",
        quote: "La pasión por encima de todo.",
        body: [
          "Después de asumir a principios de los años noventa la empresa familiar transmitida de generación en generación, decidí volcarme en la exportación, y descubrí otro mundo.",
          "Más de treinta años después, con un equipo vivo, motivado y multicultural, la Distillerie Vinet-Puranik está presente en más de veinte países.",
        ],
        portraitAlt: "Bruno Delannoy en la sala de alambiques, con una copa de cata en la mano.",
      },
      rahul: {
        name: "Rahul Puranik",
        role: "Director ejecutivo",
        quote: "Un equipo. Una visión. Un futuro.",
        body: [
          "La Distillerie Vinet-Puranik combina la experiencia histórica de la destilación francesa con la red internacional del grupo.",
          "Queremos reforzar nuestra presencia en los mercados internacionales apoyándonos en la infraestructura y las competencias que ya existen.",
        ],
        portraitAlt: "Rahul Puranik, director ejecutivo de la Distillerie Vinet-Puranik.",
      },
    },
  },

  group: {
    label: "Nuestro grupo",
    title: "El Sawnee Group",
    body: [
      "El Sawnee Group es una organización multinacional con sede en Atlanta, Estados Unidos. El grupo aporta su experiencia multinacional y su visión global de los negocios a varios sectores: aviación, inversión inmobiliaria, hotelería, destilación, venta minorista de bebidas, logística internacional y compras estratégicas.",
      "Gracias a su cartera diversificada y a su red internacional, el Sawnee Group opera en varias regiones, con oficinas en Francia, Irlanda, Singapur, India y Estados Unidos. Esa presencia le permite unir la experiencia operativa con un acceso estratégico a los mercados.",
    ],
    industriesLabel: "Sectores",
    industries: [
      "Aviación",
      "Inversión inmobiliaria",
      "Hotelería",
      "Destilación",
      "Venta minorista de bebidas",
      "Logística internacional",
      "Compras estratégicas",
    ],
    officesLabel: "Oficinas",
    offices: ["Francia", "Irlanda", "Singapur", "India", "Estados Unidos"],
    mapAlt: "Mapa del mundo con las oficinas y los mercados del Sawnee Group.",
    figureLabels: {
      countries: "países atendidos",
      offices: "oficinas internacionales",
      industries: "sectores",
    },
  },

  terroir: {
    kicker: "Los viñedos y la región",
    title: "Oficio francés, arraigado en la Charente",
    intro: [
      "Brie-sous-Archiac se encuentra en el sur de la denominación Cognac, donde se unen los crus de Petite Champagne y Fins Bois. Alrededor del patio, un centenar de hectáreas de viñas se extienden por suaves colinas calcáreas entre Cognac y Burdeos, a una hora de la costa atlántica.",
      "El oficio es el propio de la región: uvas blancas prensadas pocas horas después de la vendimia, vino destilado dos veces en alambiques de cobre, eau-de-vie que reposa en roble francés. La casa mantiene esos métodos en el centro de todo lo que elabora, para sus propias marcas y para sus socios en todo el mundo.",
    ],
    facetsLabel: "De la viña a la botella",
    facets: [
      {
        title: "La región",
        body: "La Haute-Saintonge, en Charente-Maritime: colinas de viñas, iglesias románicas y pueblos de piedra, con Cognac a treinta y cinco minutos al norte y el estuario de la Gironda al oeste.",
      },
      {
        title: "Los crus",
        body: "Petite Champagne y Fins Bois, dos de los seis crus de la denominación, sobre suelos de creta y caliza que dan a las eaux-de-vie su finura y su longitud.",
      },
      {
        title: "La uva",
        body: "Ugni blanc, la uva blanca con la que se elabora casi todo el cognac: vendimiada a principios de otoño, prensada el mismo día y destilada durante todo el invierno.",
      },
      {
        title: "El oficio",
        body: "Doble destilación en alambiques charenteses de cobre y, después, años en barricas de roble del Limousin: el método que fijó la denominación, todavía practicado a mano en la casa.",
      },
    ],
    alts: {
      landscape:
        "La destilería de Brie-sous-Archiac vista desde el aire: una hilera de depósitos de acero junto a la nave de embotellado, con el pueblo, los campos y las viñas alrededor.",
      rows: "Hileras de viñas hacia el horizonte a finales del verano.",
      grapes: "Uvas blancas maduras en la cepa, pocos días antes de la vendimia.",
    },
    captions: {
      landscape: "La casa en Brie-sous-Archiac, vista desde el aire",
      rows: "Las viñas a finales del verano",
      grapes: "Antes de la vendimia",
    },
    ctaLabel: "Visitar la finca",
  },

  team: {
    alt: "Los alambiques de cobre en la sala de alambiques de la Distillerie Vinet-Puranik en Brie-sous-Archiac.",
    label: "La casa",
    caption: "La sala de alambiques: Brie-sous-Archiac, Charente-Maritime",
  },

  testimonials: {
    label: "Lo que dicen nuestros socios",
    showAria: "Mostrar el testimonio {index}",
    items: {
      "private-label": {
        quote:
          "De la primera muestra a la caja precintada, la casa siguió nuestro brief al pie de la letra, y el cognac que nos entregaron superó al que habíamos pedido.",
      },
      creation: {
        quote:
          "Llegamos con una receta y una etiqueta. Vinet-Puranik las convirtió en una ginebra que de verdad podíamos presentar a los compradores, a tiempo y en el volumen prometido.",
      },
      export: {
        quote:
          "Tres mercados, tres normativas, un solo embotellado: su equipo se ocupó del cumplimiento normativo para que el nuestro se ocupara de la marca.",
      },
    },
  },

  contact: {
    kicker: "Iniciar un proyecto",
    title: "Cree su próximo espirituoso con Vinet-Puranik",
    body: "Cuéntenos su brief: ambición de producto, mercado y calendario. La casa responde con una hoja de ruta meditada, de la primera idea a la botella terminada.",
    metaDescription:
      "Hable con Distillerie Vinet-Puranik sobre espirituosos a medida, marca de distribución, granel, embotellado o una visita. Un interlocutor comercial con nombre y apellidos, líneas directas y formulario de consulta.",
    intro: [
      "Cuéntenos qué quiere construir: el producto, el mercado, el calendario. Cada consulta llega a una persona, no a un buzón genérico.",
    ],
    formHeading: "Enviar una consulta",
    formIntro: "Los campos marcados con asterisco son obligatorios.",
    detailsLabel: "Contactar directamente con la casa",
    switchboardHeading: "Teléfono principal",
    followHeading: "Siga a la casa",
    homeTitle: "¿Tiene un proyecto en mente?",
    homeBody:
      "Del primer boceto a la caja precintada, la casa trabaja según su brief. Díganos a qué mercado apunta.",
    commercialHeading: "Contacto comercial",
    commercialRole: "Exportación y comercial",
    distilleryHeading: "La destilería",
    enquiryTypes: [
      "Desarrollo de producto a medida",
      "Marca de distribución",
      "Espirituosos a granel",
      "Embotellado y logística",
      "Visitas y catas",
      "Otra consulta",
    ],
    form: {
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      enquiryType: "Tipo de consulta",
      selectPlaceholder: "Seleccionar…",
      message: "Su proyecto",
      messagePlaceholder: "Ambición de producto, mercado, volúmenes, calendario…",
      submit: "Enviar consulta",
      submitting: "Enviando…",
      honeypot: "Deje este campo vacío",
      successMessage:
        "Gracias. Hemos recibido su consulta. La casa le responderá en breve.",
      errorMessage:
        "Se ha producido un error y su consulta no se ha enviado. Escríbanos directamente, por favor.",
      errorReview: "Revise los campos señalados, por favor.",
      errors: {
        name: "Indíquenos su nombre.",
        email: "Indique una dirección de correo válida.",
        enquiryType: "Elija el tipo de consulta.",
        message: "Cuéntenos algo sobre su proyecto.",
      },
    },
  },

  footer: {
    navigateCta: "Iniciar un proyecto",
    navigateHeading: "Navegación",
    capabilitiesHeading: "Capacidades",
    legalHeading: "Legal",
    contactHeading: "Contacto",
    capabilities: [
      "Marca de distribución y espirituosos a medida",
      "Saber hacer e innovación",
      "Lo que producimos",
    ],
    legalLinks: [
      "Aviso legal",
      "Política de privacidad",
      "Política de cookies",
      "Condiciones de uso",
      "Accesibilidad",
    ],
    rights: "Todos los derechos reservados.",
  },

  ageGate: {
    title: "Es necesario verificar su edad",
    subhead: "Para acceder a este sitio debe tener la edad legal para consumir alcohol",
    dobPrompt: "Introduzca su fecha de nacimiento",
    labels: { month: "Mes", day: "Día", year: "Año" },
    placeholders: { month: "MM", day: "DD", year: "AAAA" },
    submit: "Verificar mi edad",
    errors: {
      incomplete: "Introduzca su fecha de nacimiento completa.",
      invalid: "Esa fecha no existe: compruébela e inténtelo de nuevo.",
      future: "Introduzca una fecha pasada.",
    },
    deniedTitle: "Lo sentimos",
    deniedMessage: "Debe tener al menos {age} años para acceder a este sitio.",
    deniedBack: "Volver atrás",
    legal:
      "Al entrar, confirma que tiene al menos {age} años y que es legal consultar contenido relacionado con el alcohol en su país de residencia. Su fecha de nacimiento se comprueba en su navegador: nunca se nos envía ni se almacena.",
  },

  visit: {
    kicker: "Visítenos",
    title: "La finca de Brie-sous-Archiac",
    heroLabel: "Apertura: patio de la finca y bodegas, luz dorada",
    intro: [
      "Entre los crus de Petite Champagne y Fins Bois, la destilería abre su patio, sus bodegas y sus alambiques tanto a socios comerciales como a visitantes curiosos.",
      "Recorra las bodegas de envejecimiento, sitúese junto a los alambiques de cobre y pruebe el trabajo de la casa allí donde se hace.",
    ],
    expect: [
      {
        title: "Las bodegas",
        body: "Las bodegas de envejecimiento donde reposan cognacs, brandies y whiskies afinados en barrica.",
      },
      {
        title: "La sala de alambiques",
        body: "Los alambiques de cobre en marcha: el corazón de la casa desde 1777.",
      },
      {
        title: "La sala de catas",
        body: "Catas en mesa de los espirituosos de la casa y de sus creaciones en curso, con cita previa.",
      },
    ],
    entries: [
      {
        title: "Visitas",
        body: "Recorridos guiados por las bodegas, la sala de alambiques y las naves de embotellado.",
        frameLabel: "Tarjeta: pasillo de la bodega de barricas",
      },
      {
        title: "Catas",
        body: "Catas en mesa en la sala de catas de la finca.",
        frameLabel: "Tarjeta: copas de cata sobre roble",
      },
    ],
    discover: "Descubrir",
    expectLabel: "Lo que le espera",
    mapLabel: "Vista aérea de la finca en Brie-sous-Archiac",
    bookCta: "Reservar una visita",
    practicalCta: "Información práctica",
    book: {
      heading: "Reservar una visita",
      body: "Todas las visitas son con cita previa. Envíenos las fechas que tiene en mente, el número de personas y si desea una visita, una cata o ambas: la casa se lo confirmará a vuelta de correo.",
      ctaLabel: "Reservar mediante el formulario",
      mailSubject: "Reserva de visita: finca Vinet-Puranik",
    },
    practical: {
      heading: "Información práctica",
      items: [
        { label: "Dirección", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, Francia" },
        { label: "Horario", value: "Con cita previa. De lunes a viernes" },
        {
          label: "Acceso",
          value: "A 20 minutos de Jonzac y 35 de Cognac; estacionamiento en el recinto",
        },
        { label: "Idiomas", value: "Visitas en francés e inglés" },
      ],
    },
    metaDescription:
      "Visite la finca Vinet-Puranik en Brie-sous-Archiac: bodegas, alambiques de cobre y catas en el corazón de la región de Cognac. Visitas y catas con cita previa.",
  },

  tours: {
    kicker: "Visítenos · Visitas",
    title: "Visitas privadas",
    intro:
      "Se pueden organizar visitas privadas para particulares, grupos, clientes, distribuidores, socios comerciales e invitados especiales.",
    body: "Las visitas y catas están disponibles con cita previa. Póngase en contacto con nuestra oficina para organizar su visita.",
    ctaLabel: "Contáctenos",
    frameLabel: "Los alambiques de cobre en la sala de alambiques",
    crossLinkTitle: "¿Prefiere quedarse en la mesa?",
    crossLinkCta: "Descubrir nuestras catas",
    crossLinkBack: "Volver a la finca",
    metaDescription:
      "Visitas privadas a la Distillerie Vinet-Puranik en Brie-sous-Archiac para particulares, grupos, distribuidores y socios comerciales. Visitas y catas con cita previa.",
  },

  tastings: {
    kicker: "Visítenos · Catas",
    title: "Las catas en la finca",
    intro:
      "Se pueden organizar catas en mesa en la sala de catas de la finca para particulares, grupos, clientes, distribuidores, socios comerciales e invitados especiales.",
    body: "Las visitas y catas están disponibles con cita previa. Póngase en contacto con nuestra oficina para organizar su visita.",
    ctaLabel: "Contáctenos",
    frameLabel: "Eau-de-vie nueva saliendo del alambique hacia un recipiente de cobre",
    crossLinkTitle: "¿Prefiere recorrer antes las bodegas?",
    crossLinkCta: "Descubrir nuestras visitas",
    crossLinkBack: "Volver a la finca",
    metaDescription:
      "Catas en mesa de los espirituosos de la casa en la finca Vinet-Puranik, en Brie-sous-Archiac, para particulares, grupos, distribuidores y socios comerciales. Visitas y catas con cita previa.",
  },

  nav: {
    about: {
      label: "Sobre nosotros",
      links: [
        "Nuestra historia",
        "Saber hacer e innovación",
        "Nuestra dirección",
        "Eventos",
      ],
      featuredHeading: "Puertas adentro",
      featured: [
        { label: "Nuestra producción", frameLabel: "Destacado: alambiques de cobre" },
        { label: "Desde 1777", frameLabel: "Destacado: retrato familiar en la bodega" },
      ],
      viewAll: "Nuestro saber hacer",
    },
    partners: {
      label: "Socios",
      featuredHeading: "Las dos casas",
      viewAll: "Ambos socios",
    },
    privateLabel: {
      label: "Marca blanca",
      overview: "Visión general",
      featuredHeading: "Por categoría",
      featuredFrameLabels: [
        "Destacado: packshot Glen Smith",
        "Destacado: packshot Velorin Vodka",
        "Destacado: packshot Montlieu X.O",
      ],
      viewAll: "Ver todas las categorías",
    },
    visit: {
      label: "Visítenos",
      links: [
        "La finca",
        "Reservar una visita",
        "Información práctica",
      ],
      featuredHeading: "La finca",
      featured: [
        { label: "Brie-sous-Archiac", frameLabel: "Destacado: la finca vista desde el aire" },
      ],
      viewAll: "Prepare su visita",
    },
    // Tours and tastings keep their own pages under /visit; this menu is the
    // house's request that they be reachable without going through the estate
    // page first.
    toursTastings: {
      label: "Visitas y catas",
      links: ["Visitas", "Catas"],
      featuredHeading: "En la finca",
      featured: [
        {
          label: "Visitas privadas",
          frameLabel: "Destacado: pasillo de la bodega de barricas",
        },
        { label: "Las catas en la finca", frameLabel: "Destacado: la sala de catas de la finca" },
      ],
      viewAll: "Prepare su visita",
    },
    // Contact has no megamenu: the top-level item links straight to
    // the enquiry form, so it needs a label and nothing else.
    contact: {
      label: "Contacto",
    },
  },

  ui: {
    home: "inicio",
    mainNavigation: "Navegación principal",
    mobileNavigation: "Navegación móvil",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
    featured: "Destacado",
    startAProject: "Iniciar un proyecto",
    skipToContent: "Ir al contenido",
  },

  notFound: {
    title: "Perdido en las bodegas",
    body: "La página que busca se ha movido, ha cambiado de nombre o nunca existió.",
    cta: "Volver al inicio",
  },

  metadata: {
    keywords: [
      "espirituosos a medida",
      "espirituosos de marca blanca",
      "destilación por encargo",
      "embotellado a medida",
      "destilería de la región de Cognac",
      "espirituosos de marca de distribuidor",
    ],
    homeTitle: "Tradición destiladora francesa desde 1777",
    titleTemplate: "Vinet-Puranik · %s",
    description:
      "Destilería familiar de la región de Cognac que diseña espirituosos a medida, programas de marca de distribución y marca blanca, soluciones de embotellado y desarrollo de producto para socios comerciales en más de veinte países.",
    aboutTitle: "Nuestra historia",
    privateLabelTitle: "Marca de distribuidor y marca blanca",
    partnersTitle: "Socios",
    contactTitle: "Contacto",
    visitTitle: "Visítenos",
    toursTitle: "Visitas privadas",
    tastingsTitle: "Catas",
  },

  events: {
    title: "Eventos",
    metaDescription:
      "Catas, jornadas de puertas abiertas y ferias profesionales en la Distillerie Vinet-Puranik y fuera de ella. Dónde encontrarse con la casa.",
    intro: "Dónde encontrarse con la casa: en la finca y en las ferias.",
    empty: "No hay eventos programados por el momento. Escríbanos y organizaremos una visita.",
    placeholderTag: "Ejemplo",
    ctaLabel: "Consultar sobre este evento",
    items: {
      "sample-trade-tasting": {
        name: "Ejemplo: cata profesional, París",
        location: "París, Francia",
        description:
          "Una cata en mesa de la gama de la casa para importadores y propietarios de marcas, dirigida por el maestro de bodega.",
      },
      "sample-harvest-open-day": {
        name: "Ejemplo: jornada de puertas abiertas de la vendimia",
        location: "Brie-sous-Archiac",
        description:
          "La finca abre su patio durante la vendimia: las prensas en marcha, los alambiques encendidos y las eaux-de-vie nuevas recién salidas del alambique.",
      },
      "sample-distillery-day": {
        name: "Ejemplo: jornada en la destilería",
        location: "Brie-sous-Archiac",
        description:
          "Una jornada en la sala de alambiques con el equipo de destilación, del primer calentamiento al corte, para terminar en las bodegas.",
      },
    },
  },

  legal: {
    updatedLabel: "Última actualización",
    updated: "26 de agosto de 2026",
    backLabel: "Volver al inicio",
    pages: {
      "mentions-legales": {
        title: "Aviso legal",
        metaDescription:
          "Quién edita y quién aloja el sitio de Vinet-Puranik: datos de la empresa, números de registro y contacto.",
        intro: "Quién edita este sitio y cómo contactarnos.",
        sections: [
          {
            heading: "La empresa",
            body: [
              "Este sitio lo edita Distillerie Vinet-Puranik, una {legalForm} con un capital social de {shareCapital}.",
              "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, Francia.",
              "Teléfono {phone}. Correo electrónico {email}.",
            ],
          },
          {
            heading: "Registro",
            body: [
              "Inscrita en el Registro Mercantil de {rcsCity} con el número {siren}.",
              "SIRET {siret}. Número de IVA {vat}.",
            ],
          },
          {
            heading: "Directores de la publicación",
            body: ["{ceoName}, {ceoRole}. {gmName}, {gmRole}."],
          },
          {
            heading: "Alojamiento",
            body: ["Este sitio está alojado por {host}."],
          },
          {
            heading: "Textos e imágenes",
            body: [
              "Los textos, las fotografías y el diseño de este sitio nos pertenecen, o contamos con permiso para usarlos. Pregúntenos antes de reproducir cualquier parte.",
              "Los nombres de producto y los logotipos pertenecen a sus titulares, incluidos los de las marcas asociadas para las que producimos.",
            ],
          },
          {
            heading: "Legislación aplicable",
            body: ["Este sitio se rige por la legislación francesa."],
          },
        ],
      },
      privacy: {
        title: "Política de privacidad",
        metaDescription:
          "El sitio de Vinet-Puranik solo recoge lo que usted escribe en el formulario. Sin analítica, sin publicidad y sin rastreo.",
        intro:
          "No recogemos casi nada. Este sitio no tiene analítica, ni publicidad, ni rastreo.",
        sections: [
          {
            heading: "Qué recogemos",
            body: [
              "Solo lo que usted escribe en el formulario: su nombre, su empresa si la indica, su correo electrónico, el tipo de consulta y su mensaje.",
              "Lo usamos para leer su consulta y responderla. Nada más. No elaboramos perfiles, no incluimos su dirección en ninguna lista de correo y nunca vendemos ni cedemos sus datos.",
            ],
          },
          {
            heading: "No guardamos su fecha de nacimiento",
            body: [
              "La verificación de edad se realiza en su navegador. Su fecha de nacimiento sirve para comprobar si tiene la edad necesaria y después se descarta. Nunca llega hasta nosotros.",
            ],
          },
          {
            heading: "Quién más ve su consulta",
            body: [
              "Su mensaje llega a nuestro buzón a través de Resend, el servicio que entrega nuestro correo. Nuestro proveedor de alojamiento sirve las páginas. Nadie más interviene.",
              "Resend tiene su sede en Estados Unidos, de modo que su consulta sale de la Unión Europea para llegar hasta nosotros. Esa transferencia está amparada por un acuerdo de tratamiento con ellos, basado en las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
              "Incluso las tipografías se sirven desde nuestro propio sitio, así que leer una página no envía nada a nadie.",
            ],
          },
          {
            heading: "Cuánto tiempo los conservamos",
            body: [
              "Mientras trabajemos juntos, y hasta tres años desde nuestro último contacto si la consulta no prospera.",
            ],
          },
          {
            heading: "Sus derechos",
            body: [
              "Puede pedirnos una copia de lo que tenemos sobre usted, su corrección o su supresión, que limitemos su uso, oponerse a ese uso, o pedirla en un formato que pueda llevarse a otra parte. Escriba a contact@vinet-puranik.com y le responderemos en el plazo de un mes.",
              "Aquí nada toma decisiones automatizadas sobre usted, y no elaboramos perfiles.",
              "Si no queda conforme, puede reclamar ante la CNIL, la autoridad francesa de protección de datos, en cnil.fr.",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de cookies",
        metaDescription:
          "Este sitio usa una sola cookie, para recordar la verificación de edad. Sin analítica, sin publicidad y sin cookies de rastreo.",
        intro: "Este sitio usa una sola cookie, y no contiene nada sobre usted.",
        sections: [
          {
            heading: "La única cookie",
            body: [
              "Se llama vd_age_verified. Registra que ha superado la verificación de edad, para no volver a preguntárselo en cada página.",
              "Contiene un solo carácter: 1. Ninguna fecha de nacimiento, ningún identificador, nada personal. Dura treinta días y nunca se envía a nadie más.",
            ],
          },
          {
            heading: "Por qué no hay banner de cookies",
            body: [
              "Las cookies estrictamente necesarias para algo que usted ha pedido no requieren consentimiento, y la verificación de edad es una de ellas. Como no instalamos ninguna otra, no hay nada que aceptar ni rechazar.",
            ],
          },
          {
            heading: "Lo que no utilizamos",
            body: [
              "Sin analítica. Sin publicidad ni retargeting. Sin píxeles de redes sociales. Sin scripts de terceros.",
            ],
          },
          {
            heading: "Cómo eliminarla",
            body: [
              "Puede eliminarla cuando quiera desde la configuración de su navegador, o bloquear las cookies. La verificación de edad simplemente volverá a aparecer en su próxima visita.",
            ],
          },
        ],
      },
      terms: {
        title: "Condiciones de uso",
        metaDescription:
          "Condiciones de uso del sitio de Vinet-Puranik: un sitio informativo para profesionales, sin venta en línea.",
        intro: "Las condiciones de uso de este sitio. Usarlo supone aceptarlas.",
        sections: [
          {
            heading: "Qué es este sitio",
            body: [
              "Un sitio informativo para profesionales: importadores, distribuidores, minoristas y propietarios de marcas. Aquí no se vende nada, no se publican precios y no puede hacerse ningún pedido.",
              "Enviar una consulta es hacernos una pregunta. No es un pedido, y nuestra respuesta no es un contrato. Todo suministro se acuerda aparte y por escrito.",
            ],
          },
          {
            heading: "Debe tener la edad legal",
            body: [
              "Este sitio muestra bebidas alcohólicas. Utilícelo solo si ha alcanzado la edad legal para consumir alcohol donde reside.",
            ],
          },
          {
            heading: "La información cambia",
            body: [
              "Describimos nuestros productos con cuidado, pero la gama, sus características y su disponibilidad cambian con el tiempo. Las descripciones, notas de cata, edades y cifras que aquí figuran son orientativas, no compromisos.",
            ],
          },
          {
            heading: "Enlaces a otros sitios",
            body: [
              "Enlazamos con los sitios de los productores y propietarios de marcas con los que trabajamos. Esos sitios no son nuestros y no respondemos de ellos.",
            ],
          },
          {
            heading: "Disponibilidad",
            body: [
              "Procuramos mantener este sitio en funcionamiento y actualizado, pero no podemos garantizar que esté siempre disponible ni libre de errores.",
            ],
          },
          {
            heading: "Cambios en estas condiciones",
            body: [
              "Podemos actualizar estas condiciones; la versión publicada en esta página es la que se aplica. Si alguna de ellas resultara inaplicable, el resto seguiría vigente.",
            ],
          },
          {
            heading: "Legislación aplicable",
            body: ["Estas condiciones se rigen por la legislación francesa."],
          },
        ],
      },
      accessibility: {
        title: "Accesibilidad",
        metaDescription:
          "Cómo funciona el sitio de Vinet-Puranik para quienes navegan con teclado, con lector de pantalla o con ajustes de reducción de movimiento y de contraste.",
        intro: "Queremos que este sitio funcione para todo el mundo. Este es su estado actual.",
        sections: [
          {
            heading: "A qué aspiramos",
            body: [
              "Al nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1), el estándar en el que se basa el RGAA francés.",
              "Esta declaración abarca todo el sitio y refleja nuestra propia revisión en la fecha indicada arriba, no una auditoría independiente.",
            ],
          },
          {
            heading: "Lo que ya funciona",
            body: [
              "Cada página tiene un único encabezado principal y un enlace para saltar al contenido. Los menús, el selector de idioma y el formulario funcionan con teclado, y siempre se ve dónde está.",
              "Si su dispositivo pide reducir el movimiento, todas las animaciones del sitio se desactivan. Las fotografías que aportan información llevan descripción; las decorativas se omiten en lugar de leerse dos veces.",
              "Los errores del formulario se anuncian, se señalan con algo más que el color y sitúan el foco en el campo que hay que corregir.",
            ],
          },
          {
            heading: "Lo que falta por mejorar",
            body: [
              "Algunos textos pequeños sobre fondos con color quedan cerca del contraste mínimo. Todavía no hemos encargado una auditoría independiente.",
            ],
          },
          {
            heading: "Cuéntenos si algo se lo impide",
            body: [
              "Escriba a contact@vinet-puranik.com y cuéntenos qué ha pasado. Le responderemos y, cuando sea posible, le haremos llegar la información por otra vía.",
              "Si nos comunica un problema y nuestra respuesta no le satisface, puede dirigirse al Défenseur des droits en defenseurdesdroits.fr.",
            ],
          },
        ],
      },
    },
  },

  responsibleDrinking:
    "El abuso de alcohol es peligroso para la salud. Consuma con moderación.",
} satisfies Content;
