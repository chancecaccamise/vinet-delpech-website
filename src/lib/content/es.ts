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
    eyebrow: "Distillerie Vinet-Puranik · Cognac, Francia",
    support: "Una herencia francesa. Una presencia global.",
    primaryCtaLabel: "Iniciar un proyecto",
    posterLabel: "Apertura: bodega de barricas, travelling lento",
    scroll: "Desplazar",
  },

  maisonStatement: {
    kicker: "La casa",
    line: "De la tierra a la copa. De la viña a la botella. Su sueño hecho botella.",
    body: "Vinet-Puranik es una destilería de rica herencia y raíces profundas. No vendemos solo productos: ofrecemos una experiencia, un modo de vida. Elaboramos cada producto en la destilería: de la viña a las bodegas, pasando por la destilación, hasta el embotellado.",
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
        title: "Abastecimiento de materiales secos",
        body: "Botellas, tapones, cápsulas y vestido seleccionados con precisión, fiabilidad y criterio de lineal.",
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
    body: "Alambiques, bodegas y naves de embotellado comparten un mismo patio en Brie-sous-Archiac, entre 100 hectáreas de viñedo en Fins Bois y Petite Champagne.",
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
      "De la tierra a la copa. De la viña a la botella. Su sueño hecho botella.",
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
        body: "Uva y cereal, barrica y tiempo: compuestos hasta que el líquido responda al encargo.",
      },
      {
        label: "Herencia francesa",
        body: "Viñedos de Fins Bois y Petite Champagne, una finca charentesa y las appellations que los acompañan.",
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
        body: "Volúmenes, plazos y pliegos cumplidos: líneas flexibles y un único interlocutor.",
      },
      {
        title: "Exportación mundial",
        body: "Estatus OEA, aduanas y etiquetado gestionados para socios en más de veinte países.",
      },
    ],
    crossLinkTitle: "Más sobre la casa",
    crossLinkHistory: "Nuestra cronología",
    crossLinkPresident: "Unas palabras de la dirección",
    crossLinkPartnerships: "Las marcas que moldeamos",
  },

  collection: {
    kicker: "La colección",
    title: "Marcas moldeadas por la casa",
    intro:
      "La gama propia de la casa, y las marcas de distribución que moldea para sus socios: la prueba de un alcance amplio, entre categorías, barricas y mercados.",
    distributionNote: "Distribuido en Francia por Mähler-Besse.",
    allProducts: "Todos nuestros productos",
  },

  brands: {
    "puranique-vodka": {
      category: "Vodka ultra-premium · nueve destilaciones",
      descriptor:
        "Trigo francés fino, destilado nueve veces y filtrado con precisión: un perfil rotundo y sutil, redondo en boca, nítido en el final.",
      frameLabel: "Packshot: Puranique Vodka, etiqueta tricolor",
    },
    "puranique-cognac-vs": {
      category: "Cognac V.S · dos años mínimo",
      descriptor:
        "Joven y expresivo, envejecido al menos dos años en roble francés: fruta de huerto sobre un carácter suave y accesible.",
      frameLabel: "Packshot: Puranique Cognac V.S",
    },
    "puranique-cognac-vsop": {
      category: "Cognac V.S.O.P · cuatro años mínimo",
      descriptor:
        "Eaux-de-vie seleccionadas a mano y envejecidas al menos cuatro años, algunas mucho más: fruta seca, vainilla y especia sobre un final largo.",
      frameLabel: "Packshot: Puranique Cognac V.S.O.P",
    },
    "jus-d-manguier": {
      category: "Licor de mango",
      descriptor:
        "Mangos Alphonso auténticos trabajados en Cognac, sin aditivos artificiales: jugoso, equilibrado e inconfundiblemente tropical.",
      frameLabel: "Packshot: licor de mango Jus d'Manguier",
    },
    mangeaux: {
      category: "Licor de mango al cognac",
      descriptor:
        "Licor de mango al cognac, de ámbar brillante, sobre fruta madura, cáscara confitada y pan de especias.",
      frameLabel: "Packshot: licor de cognac y mango Mangeaux",
    },
    "puranique-pineau-blanc": {
      category: "Pineau des Charentes · Blanco",
      descriptor:
        "Pineau des Charentes del viñedo familiar: generoso, vivo y ligeramente acidulado.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Blanco",
    },
    "puranique-pineau-rouge": {
      category: "Pineau des Charentes · Tinto",
      descriptor:
        "Mosto de merlot y cabernet sauvignon con eau-de-vie de Cognac: vivo y redondo, sobre frutos del bosque y de hueso.",
      frameLabel: "Packshot: Puranique Pineau des Charentes Tinto",
    },
    "montlieu-xo": {
      category: "Brandy X.O · tres años mínimo",
      descriptor:
        "Una selección cuidada de uva, destilada en columna y envejecida al menos tres años en roble: elegante, equilibrado, aromático.",
      frameLabel: "Packshot: brandy Montlieu X.O",
    },
    "glen-mac-clay": {
      category: "Blended Scotch Whisky · tres años mínimo",
      descriptor:
        "Blended Scotch seleccionado en el sur de las Highlands, ensamblada con una malta no turbada y madurada en barrica de Bourbon: pera, manzana y uva.",
      frameLabel: "Packshot: Glen Mac Clay Blended Scotch Whisky",
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
    "brigitte-et-louise-blanc": {
      category: "Aperitivo · 17,5 %",
      descriptor:
        "Mosto de uva ensamblado con eau-de-vie de cognac de una finca familiar: fruta y flores blancas, amplio y redondo.",
      frameLabel: "Packshot: Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Aperitivo · 17,5 %",
      descriptor:
        "Mosto de merlot y cabernet sauvignon con eau-de-vie de cognac: vivo y redondo, sobre frutos del bosque y fruta de hueso.",
      frameLabel: "Packshot: Brigitte et Louise Rouge",
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
    sephina: {
      category: "Bebida espirituosa · 30 %",
      descriptor:
        "Ensamblaje de la casa: 56 % de cognac VSOP con 44 % de Pineau des Charentes. Ciruela pasa, fruta seca, nuez y roble tostado.",
      frameLabel: "Packshot: bebida espirituosa Sephina",
    },
    gin40: {
      category: "Ginebra · 50 cl",
      descriptor:
        "Destilada artesanalmente en el suroeste de Francia con influencia de Las Landas: enebro, pino y mora silvestre.",
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
      "puranique-vodka": {
        heritage:
          "Arraigada en las tradiciones destiladoras del suroeste de Francia, Puranique Vodka refleja generaciones de oficio y cuidado. Elaborada con trigo francés fino y destilada nueve veces, cada botella lleva la mano del maestro destilador.",
        story:
          "Cada botella empieza por el mejor trigo francés, elegido por su pureza. Bajo la guía de nuestro maestro de bodega atraviesa una destilación exigente repetida nueve veces y después un filtrado cuidadoso. El resultado es un perfil rotundo y sutil: redondo en boca, nítido en el final. Para servir sola o en el centro de un cóctel.",
        notes: {
          eye: "Cristalina y limpia",
          nose: "Fresca y agradable",
          palate: "Redonda, suave y delicada",
        },
        storyFrameLabel: "Ambiente: Puranique Vodka servida con hielo y cítricos",
      },
      "puranique-cognac-vs": {
        heritage:
          "Arraigado en las tradiciones de Cognac, Puranique V.S refleja el espíritu esencial de su origen. Envejecido en roble francés un mínimo de dos años, cada lote lo guían maestros de bodega fieles a técnicas consagradas, para un cognac vivo y expresivo.",
        story:
          "Un cognac joven y vibrante, elaborado en la región de Cognac y envejecido al menos dos años en barrica de roble francés. El ensamblaje destaca la fruta crujiente y un carácter suave y accesible, tan cómodo en coctelería como servido solo. Su frescura y su claridad son la cara audaz del cognac contemporáneo.",
        notes: {
          eye: "Fruta de huerto fresca",
          nose: "Vainilla y roble ligero",
          palate: "Final suave y accesible",
        },
        storyFrameLabel: "Ambiente: Puranique Cognac V.S en la mesa de un café parisino",
      },
      "puranique-cognac-vsop": {
        heritage:
          "Elaborado en la región de Cognac, Puranique V.S.O.P bebe de una reserva profunda de eaux-de-vie seleccionadas a mano. Envejecido al menos cuatro años, con ensamblajes más viejos que le suman complejidad, se afina mediante una crianza y un ensamblaje meticulosos.",
        story:
          "Una expresión refinada envejecida al menos cuatro años, con eaux-de-vie seleccionadas que han madurado mucho más tiempo en roble. Destilada en Cognac, revela capas de fruta seca, vainilla y especia sobre un final largo y suave: herencia, paciencia y profundidad en cada sorbo.",
        notes: {
          eye: "Fruta seca y miel",
          nose: "Vainilla, roble tostado, un punto de especia",
          palate: "Final redondo y persistente",
        },
        storyFrameLabel: "Ambiente: Puranique Cognac V.S.O.P servido en copa balón",
      },
      "jus-d-manguier": {
        heritage:
          "Elaborado en la histórica región de Cognac, Jus d'Manguier une la tradición con la elegancia tropical. Cada lote parte de mangos Alphonso auténticos, conocidos por su dulzor vibrante y su aroma intenso, trabajados con precisión y sin aditivos artificiales.",
        story:
          "Un licor de mango que toma su sabor del mango Alphonso, apreciado por su dulzor, su riqueza y su profundidad. Fruta natural, destilación francesa, nada artificial. Para servir frío, con hielo o como base de coctelería.",
        notes: {
          eye: "Mango tropical jugoso",
          nose: "Dulzor equilibrado, chispa cítrica",
          palate: "Final nítido y refrescante",
        },
        storyFrameLabel: "Ambiente: Jus d'Manguier servido largo con hielo",
      },
      mangeaux: {
        heritage:
          "Mangeaux empieza como cognac. Cada lote parte de la base de cognac de la casa y recibe después una lenta infusión de mango Alphonso: el oficio del cognac llevando una fruta tropical.",
        story:
          "Nacido de la idea de unir el dominio de la destilación francesa con el sabor tropical, Mangeaux se asienta sobre un cognac premiado, distinguido con una medalla de plata en el concurso New York Spirits & Wine. Sobre esa base infusionamos los mangos Alphonso más apreciados, para un licor ámbar brillante cuyas capas se despliegan sorbo a sorbo.",
        notes: {
          eye: "Color ámbar brillante",
          nose: "Aromas frutales con vainilla y cítricos",
          palate: "Textura sutil y suave: mango maduro, fruta confitada, pan de especias",
        },
        storyFrameLabel: "Ambiente: Mangeaux en copa, con mango y lima",
      },
      "puranique-pineau-blanc": {
        heritage:
          "El Pineau des Charentes Puranique es un aperitivo francés obtenido ensamblando mosto de uva con cognac del viñedo familiar, en el corazón de la zona de producción delimitada y con certificación Haute Valeur Environnementale, nivel 3.",
        story:
          "El Blanco se elabora con las variedades montils y ugni blanc. Ligero y fácil de beber, se disfruta frío, con hielo, en combinado o en coctelería.",
        notes: {
          eye: "Color oro intenso",
          nose: "Intenso: fruta y notas de flores blancas",
          palate: "Generoso, vivo, suave y ligeramente ácido, con un final espléndido",
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
          "Glen Mac Clay Blended Scotch Whisky se seleccionó con cuidado en el sur de las Highlands. Compuesto principalmente por trigo y malta destilados en columna, se ensambla después con una blended malt sin turba de la misma destilería, destilada en alambique de cobre, y madura en barrica de Bourbon un mínimo de tres años.",
        story:
          "Este Scotch se elaboró en la más pura tradición: destilado con pasión y envejecido varios años en barrica de roble. Para disfrutarlo en trago largo, con agua con gas o ginger beer.",
        notes: {
          eye: "Brillante, con ligeros reflejos dorados",
          nose: "Notas frutales de pera, manzana y uva",
          palate: "Equilibrado y suave, maltoso, sobre una pera refrescante",
        },
        storyFrameLabel: "Ambiente: Glen Mac Clay en un paisaje de las Highlands",
      },
    },
  },

  families: {
    brandy: {
      name: "Brandy",
      title: "Brandy",
      summary:
        "Brandy de uva destilado en columna y envejecido en roble: deliberadamente fuera de la denominación cognac.",
      intro: [
        "Un brandy nacido de una selección cuidada de uva, destilado en columna y no en el alambique charentais que exige la denominación. Método distinto, espirituoso distinto: por eso tiene página propia en lugar de un sitio entre los cognacs.",
        "Montlieu X.O es el de la casa: al menos tres años en barrica de roble, recomendado como digestivo, solo o con hielo.",
      ],
    },
    liqueurs: {
      name: "Licores",
      title: "Licores",
      summary: "Mango Alphonso trabajado en Cognac: uno sobre la fruta sola, otro sobre una base de cognac.",
      intro: [
        "Licores de fruta elaborados en la región de Cognac a partir de mangos Alphonso auténticos, destilados con precisión y sin aditivos artificiales. Cada lote sigue la cosecha, de modo que el carácter se mueve algo de un año a otro.",
        "Jus d'Manguier es la expresión frutal, para servir frío, con hielo o como base de coctelería. Mangeaux infusiona ese mismo mango en un cognac premiado, para un licor ámbar brillante bastante más profundo.",
      ],
    },
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "La denominación de la casa, trabajada para nuestros socios desde los crus de Brie-sous-Archiac.",
      intro: [
        "La casa se asienta entre los crus de Petite Champagne y Fins Bois, y el cognac es el espirituoso que lleva más tiempo elaborando. Para nuestros socios, eso significa eaux-de-vie seleccionadas y ensambladas según un brief, y después envejecidas en roble del Limousin hasta la calidad que pide el mercado: VS, VSOP, XO.",
        "Los cognacs Puranique de la casa también figuran aquí: el V.S vivo y accesible tras dos años de roble francés, el V.S.O.P extraído de una reserva profunda de eaux-de-vie seleccionadas a mano y envejecido al menos cuatro años.",
        "Patte Blanche es su expresión ecológica: certificada por ECOCERT, destilada a mano en Arthenac, sin insumos artificiales de la viña a la copa.",
      ],
    },
    whisky: {
      name: "Whisky",
      title: "Whisky",
      summary:
        "Single malt de Francia: doble destilación charentesa, afinado en roble de cognac.",
      intro: [
        "Whisky elaborado a la manera charentesa: doble destilación en los mismos alambiques de cobre que la casa emplea para el cognac, y después reposo en barricas de roble del Limousin que antes lo contuvieron.",
        "Palisson Batch 01 es la primera salida de ese programa: al menos tres años de madera, embotellado a 43 %. Junto a él, la casa embotella Glen Mac Clay, un Blended Scotch seleccionado en el sur de las Highlands y madurado en barrica de Bourbon.",
      ],
    },
    rum: {
      name: "Ron",
      title: "Ron",
      summary:
        "Destilados de caña de origen extranjero, envejecidos, afinados, ensamblados y vestidos en Francia.",
      intro: [
        "El ron llega como destilado y sale como marca. La casa se abastece en los orígenes cañeros y realiza aquí, en la Charente, el trabajo que da carácter a un ron: envejecimiento, afinado en madera de cognac, ensamblaje y vestido.",
        "MACA se destila en Mauricio y se afina en Francia sobre canela y haba tonka; TIJUCA es un ensamblaje brasileño, cobrizo, sobre vainilla, pimienta y miel.",
      ],
    },
    gin: {
      name: "Ginebra",
      title: "Ginebra",
      summary:
        "Tres lecturas del enebro, cada una destilada en cobre según el brief de un socio.",
      intro: [
        "Es en la ginebra donde mejor se lee un brief: la lista de botánicos es la marca. La casa macera y destila en cobre, y puede llevar una receta del primer boceto a la caja precintada sin salir del patio.",
        "Hold Up une el enebro a la tonka y al anís; Gigi en Provence es ecológica, sobre violeta, romero y una nota discreta de oliva; GIN40 lleva Las Landas: pino y mora silvestre.",
      ],
    },
    vodka: {
      name: "Vodka",
      title: "Vodka",
      summary: "El vodka de trigo francés de la casa, y un vodka de uva elaborado por añadas.",
      intro: [
        "Puranique Vodka es el de la casa: trigo francés de calidad, destilado nueve veces y filtrado con esmero, para un perfil rotundo y a la vez sutil, redondo en boca y nítido en el final.",
        "Un vodka no tiene por qué ser neutro de origen. Nade se destila a partir de uvas bordelesas y se lanza por añadas: la potencia del cabernet sauvignon, la redondez del merlot, la finura del sémillon.",
        "La añada 2019 reposó cuatro meses en barricas de vino tinto de Fronsac y se embotelló en menos de 250 botellas numeradas; la 2022 es la añada en curso.",
      ],
    },
    aperitifs: {
      name: "Aperitivos y spirit drinks",
      title: "Aperitivos y spirit drinks",
      summary:
        "Productos de uva de baja graduación: aperitivos franceses y spirit drinks a base de cognac.",
      intro: [
        "Mosto de uva, eaux-de-vie y Pineau des Charentes, compuestos a graduación de aperitivo. Es la respuesta de la casa a los mercados que buscan un carácter de cognac servido en trago largo, frío o con hielo.",
        "El Pineau des Charentes Puranique es el de la casa, blanco y tinto: mosto de uva ensamblado con cognac del viñedo familiar, en el corazón de la zona delimitada y con certificación Haute Valeur Environnementale, nivel 3.",
        "Brigitte et Louise es un aperitivo francés de 17,5 %, blanco y tinto; Sephina es un spirit drink de 30 %: 56 % de cognac VSOP ensamblado con 44 % de Pineau des Charentes y, por tanto, deliberadamente fuera de la denominación cognac.",
      ],
    },
  },

  partnerships: {
    title: "Colaboraciones",
    intro: [
      "Algunas de estas botellas son nuestras. Las demás pertenecen a los importadores, distribuidores y propietarios de marcas que llegaron a Brie-sous-Archiac con un mercado en mente: la casa compone el líquido, gestiona el vestido y envía la caja terminada con su nombre.",
      "Todo está agrupado por categorías, de modo que la gama de la casa y las marcas de distribución que moldea para otros quedan una al lado de la otra: la prueba de un alcance amplio, de la uva al cereal y a la caña, y el camino más corto hacia lo más parecido al proyecto que tiene en mente.",
    ],
    note: "Distribuido en Francia por Mähler-Besse.",
    ctaLabel: "Iniciar un proyecto",
    brandCountOne: "1 marca",
    brandCountOther: "{count} marcas",
    inCollectionOne: "1 marca en la colección",
    inCollectionOther: "{count} marcas en la colección",
    explore: "Descubrir: {name}",
    otherCategories: "Otras categorías",
    backToAll: "Volver a todas las categorías",
    viewDetails: "Ver detalle",
    viewDetailsAria: "Ver el detalle de {name} (se abre en una pestaña nueva)",
    readTheStory: "Leer la historia",
    readTheStoryAria: "Leer la historia de {name}",
    houseHeading: "De la casa",
    partnerHeading: "Moldeadas para nuestros socios",
    metaDescription:
      "La gama Vinet-Puranik y las marcas de distribución que la casa moldea para importadores, distribuidores y propietarios de marcas: cognac, brandy, whisky, ron, ginebra, vodka, licores y aperitivos, por categoría.",
  },

  featurePanels: {
    bespoke: {
      title: "Marca de distribución y espirituosos a medida",
      body: "Programas de marca de distribución y marca blanca construidos en torno a su mercado: receta, líquido, vestido y dosier, llevados del primer boceto a una caja precintada con su nombre.",
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
    frameLabel: "El aguardiente nuevo cayendo del alambique a un recipiente de cobre",
  },

  timeline: {
    kicker: "Herencia",
    title: "Dos familias, una casa",
    intro:
      "De una finca charentesa del siglo XVIII a una casa nacida de una fusión que exporta a más de veinte países.",
    entries: [
      {
        year: "1777",
        body: "La familia Delpech Fougerat adquiere la finca de Font Gireau y empieza a elaborar sus propias eaux-de-vie.",
      },
      { year: "1934", body: "Félix Chartier funda su primera destilería de cognac." },
      {
        year: "1972",
        body: "Transmite la destilería a su sobrino Guy Vinet, que le da su nombre y más tarde la cede a su hija Annie Delannoy y a su yerno Bruno Delannoy.",
      },
      {
        year: "2011",
        body: "Ambas familias deciden trabajar juntas y fusionarse: nace la Distillerie Vinet-Puranik.",
      },
      {
        year: "2014-2017",
        body: "Se abren una nueva planta de embotellado y un almacén, con la instalación de una cuarta línea.",
      },
      {
        year: "2018",
        body: "Jean-Baptiste Delannoy, hijo de Bruno, asume la dirección general de la empresa.",
      },
      {
        year: "2019",
        body: "Obtención del estatus OEA (operador económico autorizado) y de la certificación ECOCERT.",
      },
    ],
  },

  leadership: {
    label: "Dirección",
    homeTitle: "Unas palabras de la dirección",
    title: "Dos líderes, una casa",
    intro:
      "Una destilería familiar en la Charente y un grupo con oficinas en cuatro continentes: la casa la dirigen ambos.",
    leaders: {
      bruno: {
        name: "Bruno Delannoy",
        role: "Director general",
        quote: "La pasión por encima de todo.",
        body: [
          "Después de asumir a principios de los años noventa la empresa familiar transmitida de generación en generación, decidí volcarme en la exportación, y descubrí otro mundo.",
          "Más de treinta años después, con un equipo vivo, motivado y multicultural, la Distillerie Vinet-Puranik está presente en más de veinte países.",
        ],
        portraitAlt: "Bruno Delannoy en la destilería, con una copa de cata en la mano.",
      },
      rahul: {
        name: "Rahul Puranik",
        role: "Director ejecutivo del grupo",
        quote: "Un equipo. Una visión. Un futuro.",
        body: [
          "La Distillerie Vinet-Puranik combina la experiencia histórica de la destilación francesa con la red internacional del grupo.",
          "Queremos reforzar nuestra presencia en los mercados internacionales apoyándonos en la infraestructura y las competencias que ya existen.",
        ],
        portraitAlt: "Rahul Puranik, director general del grupo, Distillerie Vinet-Puranik.",
      },
    },
  },

  group: {
    label: "Nuestro grupo",
    title: "El Sawnee Group",
    body: [
      "El Sawnee Group es una organización multinacional con sede en Atlanta, Estados Unidos. El grupo aporta su experiencia multinacional y su visión global de los negocios a varios sectores: aviación, inversión inmobiliaria, hotelería, destilación, distribución de bebidas, logística internacional y compras estratégicas.",
      "Gracias a su cartera diversificada y a su red internacional, el Sawnee Group opera en varias regiones, con oficinas en Francia, Irlanda, Singapur, India y Estados Unidos. Esa presencia le permite unir la experiencia operativa con un acceso estratégico a los mercados.",
    ],
    industriesLabel: "Sectores",
    industries: [
      "Aviación",
      "Inversión inmobiliaria",
      "Hotelería",
      "Destilación",
      "Distribución de bebidas",
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

  presidentWord: {
    title: "Unas palabras del director general",
    quote: "La pasión ante todo",
    body: [
      "Tras hacerme cargo de la empresa familiar en 1994, decidí abrirme a la exportación, y descubrí otro mundo. Asia en particular me cautivó, y desde entonces ocupa buena parte de mi vida.",
      "Entendí enseguida que los importadores con los que me reunía querían productos a medida, hechos según sus propios deseos. Daba igual el país: se sentían más implicados en productos que ellos mismos habían ayudado a diseñar.",
      "Así me convertí en promotor de espirituosos a medida y en especialista en marcas de distribución. Más de treinta años después, con un equipo vivo, motivado y multicultural, Vinet-Puranik está presente en más de veinte países.",
    ],
    portraitAlt:
      "Bruno Delannoy, director general de la Distillerie Vinet-Puranik, fotografiado en la destilería.",
    signatureRole: "Director general",
  },

  team: {
    alt: "El equipo de Vinet-Puranik, fotografiado entre los alambiques de cobre de la destilería.",
    label: "La casa",
    caption: "El equipo de Vinet-Puranik: Brie-sous-Archiac, Charente",
  },

  testimonials: {
    label: "Lo que dicen nuestros socios",
    showAria: "Mostrar el testimonio {index}",
    items: {
      "private-label": {
        quote:
          "De la primera muestra a la caja precintada, la casa siguió nuestro pliego al pie de la letra — y el cognac entregado superó al que habíamos pedido.",
      },
      creation: {
        quote:
          "Llegamos con una receta y una etiqueta. Vinet-Puranik las convirtió en una ginebra que de verdad podíamos presentar a los compradores, a tiempo y en el volumen prometido.",
      },
      export: {
        quote:
          "Tres mercados, tres normativas, un solo embotellado — su equipo se ocupó del cumplimiento normativo para que el nuestro se ocupara de la marca.",
      },
    },
  },

  contact: {
    kicker: "Iniciar un proyecto",
    title: "Cree su próximo espirituoso con Vinet-Puranik",
    body: "Cuéntenos su brief: ambición de producto, mercado y calendario. La casa responde con un recorrido meditado, de la primera idea a la botella terminada.",
    metaDescription:
      "Hable con Distillerie Vinet-Puranik sobre espirituosos a medida, marca de distribución, granel, embotellado o una visita. Contacto comercial con nombre, líneas directas y formulario.",
    intro: [
      "Cuéntenos qué quiere construir: el producto, el mercado, el calendario. Cada consulta llega a una persona, no a una cola.",
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
        name: "Indíquenos su nombre, por favor.",
        email: "Indique una dirección de correo válida.",
        enquiryType: "Elija la naturaleza de su consulta.",
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
      "Marca de distribuidor y espirituosos a medida",
      "Saber hacer e innovación",
      "Lo que producimos",
    ],
    legalLinks: [
      "Aviso legal",
      "Política de privacidad",
      "Política de cookies",
      "Términos y condiciones",
      "Accesibilidad",
    ],
    rights: "Todos los derechos reservados.",
  },

  ageGate: {
    title: "Verificación de edad requerida",
    subhead: "Debe tener la edad legal para consumir alcohol para acceder a este sitio",
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
    deniedMessage: "Debe tener al menos {age} años para visitar Vinet-Puranik.",
    deniedBack: "Volver atrás",
    legal:
      "Al entrar, confirma que tiene al menos {age} años y que es legal consultar contenido relacionado con el alcohol en su país de residencia. Su fecha de nacimiento se comprueba en su navegador: nunca se nos envía ni se almacena.",
  },

  visit: {
    kicker: "Visítenos",
    title: "La finca de Brie-sous-Archiac",
    heroLabel: "Apertura: patio de la finca y bodegas, luz dorada",
    intro: [
      "Entre los crus de Petite Champagne y Fins Bois, la destilería abre su patio, sus bodegas y sus alambiques tanto a socios profesionales como a visitantes curiosos.",
      "Recorra las bodegas de barricas, sitúese junto a los alambiques de cobre y pruebe el trabajo de la casa allí donde se hace.",
    ],
    expect: [
      {
        title: "Las bodegas",
        body: "Las naves de crianza donde reposan cognacs, brandies y whiskies afinados en barrica.",
      },
      {
        title: "La sala de alambiques",
        body: "Los alambiques de cobre en marcha: el corazón de la casa desde 1777.",
      },
      {
        title: "La sala de catas",
        body: "Catas guiadas de las marcas de la casa y de sus trabajos en curso.",
      },
    ],
    entries: [
      {
        title: "Visitas",
        body: "Recorridos guiados por las bodegas, la destilería y las naves de embotellado.",
        frameLabel: "Tarjeta: pasillo de la bodega de barricas",
      },
      {
        title: "Catas",
        body: "Catas sentadas en la sala de catas de la finca.",
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
      body: "Todas las visitas son con cita previa. Envíenos las fechas que tiene en mente, el número de personas y la experiencia que desea: la casa se lo confirmará a vuelta de correo.",
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
          value: "A 20 minutos de Jonzac y 35 de Cognac; aparcamiento en el recinto",
        },
        { label: "Idiomas", value: "Visitas en francés e inglés" },
      ],
    },
    metaDescription:
      "Visite la finca Vinet-Puranik en Brie-sous-Archiac: bodegas, alambiques de cobre y catas en el corazón de la región de Cognac. Visitas y catas con cita previa.",
  },

  experiences: {
    included: "Incluye",
    book: "Reservar esta experiencia",
    orEmail: "O escribir a la casa",
    bookingSubject: "Reserva de visita: {name}",
    duration: "Duración",
    groupSize: "Grupo",
    languages: "Idiomas",
    price: "Tarifa",
    onEnquiry: "Bajo consulta",
  },

  tours: {
    kicker: "Visítenos · Visitas",
    title: "Las visitas de la casa",
    intro:
      "Tres maneras de recorrer la finca: de un primer vistazo a las bodegas a una jornada completa dentro de los oficios del espirituoso a medida.",
    note: "Programa, duraciones y tarifas pendientes de confirmación por la casa; todas las visitas con cita previa.",
    crossLinkTitle: "¿Prefiere quedarse en la mesa?",
    crossLinkCta: "Descubrir nuestras catas",
    crossLinkBack: "Volver a la finca",
    metaDescription:
      "Visitas guiadas de la finca Vinet-Puranik: bodegas de barricas, alambiques de cobre y la historia familiar desde 1777. Con cita previa en Brie-sous-Archiac.",
    items: {
      "discovery-tour": {
        name: "Visita Descubrimiento",
        duration: "1 hora",
        groupSize: "De 2 a 15 personas",
        languages: "Francés · Inglés",
        includes: [
          "Bienvenida en el patio de la finca",
          "Recorrido por la bodega de barricas",
          "Cata de iniciación de dos espirituosos de la casa",
        ],
        body: "Un primer encuentro con la casa: la historia desde 1777, las bodegas y una breve cata guiada de lo que elabora Vinet-Puranik.",
        frameLabel: "Visita: puertas de la bodega abiertas al patio",
      },
      "cellar-and-distillery-tour": {
        name: "Visita Bodegas y Destilería",
        duration: "2 horas",
        groupSize: "De 2 a 10 personas",
        languages: "Francés · Inglés",
        includes: [
          "Visita a la destilería con el equipo de destilación",
          "Bodegas de crianza y sala de ensamblaje",
          "Cata guiada de cuatro espirituosos, de barrica y de botella",
        ],
        body: "El recorrido completo de producción, de la uva y el cereal al cobre, la barrica y la línea de embotellado, guiado por quienes lo hacen funcionar.",
        frameLabel: "Visita: alambiques de cobre en la destilería",
      },
      "heritage-tour": {
        name: "Visita Patrimonio: Desde 1777",
        duration: "Media jornada",
        groupSize: "De 2 a 8 personas",
        languages: "Francés · Inglés",
        includes: [
          "Visita privada de la finca y de los archivos familiares",
          "Visita al viñedo en Petite Champagne y Fins Bois",
          "Cata ampliada en la bodega familiar",
        ],
        body: "Para socios y coleccionistas: la larga historia de la casa de los Delannoy, contada a través de los viñedos, los archivos y las barricas más antiguas.",
        frameLabel: "Visita: hileras de viñedo sobre la finca",
      },
    },
  },

  tastings: {
    kicker: "Visítenos · Catas",
    title: "Las catas en la finca",
    intro:
      "Catas sentadas en la sala de catas de la finca: del recorrido por las marcas de la casa a los clásicos charenteses reunidos.",
    note: "Selecciones, duraciones y tarifas pendientes de confirmación por la casa; todas las catas con cita previa.",
    crossLinkTitle: "¿Prefiere recorrer antes las bodegas?",
    crossLinkCta: "Descubrir nuestras visitas",
    crossLinkBack: "Volver a la finca",
    metaDescription:
      "Catas sentadas en la finca Vinet-Puranik: selección signature de la gama, cognac y Pineau reunidos. Con cita previa en Brie-sous-Archiac.",
    items: {
      "signature-tasting": {
        name: "Cata Signature",
        duration: "1 hora",
        groupSize: "De 2 a 12 personas",
        languages: "Francés · Inglés",
        includes: [
          "Cinco espirituosos de toda la colección de la casa",
          "Guiada por un miembro del comité de cata",
          "Notas de cata para llevar",
        ],
        body: "La casa en cinco copas: ginebra, whisky, ron, Pineau des Charentes y cognac, catados uno junto a otro.",
        frameLabel: "Cata: cinco copas sobre la mesa de catas",
      },
      "cognac-and-pineau-flight": {
        name: "Cata de Cognac y Pineau",
        duration: "45 minutos",
        groupSize: "De 2 a 12 personas",
        languages: "Francés · Inglés",
        includes: [
          "Los cognacs Puranique por edad",
          "Brigitte et Louise, tinto y blanco",
          "Bocados de maridaje regional",
        ],
        body: "Los clásicos charenteses: la marca de cognac de la casa y su Pineau, catados como los bebe la región.",
        frameLabel: "Cata: copas de cognac y copas de Pineau",
      },
    },
  },

  nav: {
    about: {
      label: "Sobre nosotros",
      links: [
        "Nuestra historia",
        "Marca de distribuidor y espirituosos a medida",
        "Saber hacer e innovación",
        "Unas palabras de la dirección",
        "Nuestra cronología",
      ],
      featuredHeading: "Puertas adentro",
      featured: [
        { label: "Nuestra producción", frameLabel: "Destacado: alambiques de cobre" },
        { label: "Desde 1777", frameLabel: "Destacado: retrato familiar en la bodega" },
      ],
      viewAll: "Nuestro saber hacer",
    },
    partnerships: {
      label: "Colaboraciones",
      overview: "Visión general",
      featuredHeading: "Por categoría",
      featuredFrameLabels: [
        "Destacado: packshot Patte Blanche",
        "Destacado: packshot Hold Up",
        "Destacado: packshot ron MACA",
      ],
      viewAll: "Ver todas las categorías",
    },
    visit: {
      label: "Visítenos",
      links: [
        "La finca",
        "Visitas",
        "Catas",
        "Reservar una visita",
      ],
      featuredHeading: "Experiencias favoritas",
      featured: [
        {
          label: "Visita Bodegas y Destilería",
          frameLabel: "Destacado: pasillo de la bodega de barricas",
        },
        { label: "Cata Signature", frameLabel: "Destacado: la sala de catas de la finca" },
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
    previousBrands: "Marcas anteriores",
    nextBrands: "Marcas siguientes",
    brandCollection: "Colección de marcas",
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
    homeTitle: "Creadores de espirituosos a medida desde 1777",
    titleTemplate: "Vinet-Puranik · %s",
    description:
      "Destilería familiar de la región de Cognac que diseña espirituosos a medida, marcas de distribución y marca blanca, soluciones de embotellado y programas de desarrollo de producto para socios comerciales en más de veinte países.",
    aboutTitle: "Nuestra historia",
    partnershipsTitle: "Colaboraciones",
    contactTitle: "Contacto",
    visitTitle: "Visítenos",
    toursTitle: "Visitas",
    tastingsTitle: "Catas",
  },

  legal: {
    draftNotice:
      "Borrador para revisión. Este texto describe cómo funciona realmente el sitio, pero los datos societarios indicados entre corchetes están pendientes de aportar y la redacción aún no ha sido aprobada por la asesoría jurídica de la casa.",
    updatedLabel: "Última actualización",
    updated: "26 de agosto de 2026",
    backLabel: "Volver al inicio",
    pages: {
      "mentions-legales": {
        title: "Aviso legal",
        metaDescription:
          "Editor, alojamiento y propiedad intelectual del sitio de Vinet-Puranik, conforme a la legislación francesa.",
        intro:
          "Información sobre quién edita y quién aloja este sitio, publicada en aplicación del artículo 6 III de la ley francesa para la confianza en la economía digital (LCEN).",
        sections: [
          {
            heading: "Editor",
            body: [
              "Distillerie Vinet-Puranik SAS, sociedad por acciones simplificada con un capital social de [CAPITAL SOCIAL] euros.",
              "Domicilio social: 3, impasse Félix Chartier, 17520 Brie-sous-Archiac, Francia.",
              "Inscrita en el Registro Mercantil de [CIUDAD DEL RCS] con el número [NÚMERO RCS]. SIRET [SIRET]. Número de IVA intracomunitario [NÚMERO DE IVA].",
              "Teléfono: +33 5 46 49 10 10. Correo electrónico: contact@vinet-puranik.com.",
            ],
          },
          {
            heading: "Director de la publicación",
            body: ["[NOMBRE DEL DIRECTOR DE LA PUBLICACIÓN], en su calidad de [CARGO]."],
          },
          {
            heading: "Alojamiento",
            body: [
              "Este sitio está alojado por [NOMBRE DEL PROVEEDOR], [DIRECCIÓN DEL PROVEEDOR], teléfono [TELÉFONO DEL PROVEEDOR].",
            ],
          },
          {
            heading: "Propiedad intelectual",
            body: [
              "La estructura de este sitio, así como los textos, fotografías, ilustraciones y demás obras que contiene, son propiedad de Distillerie Vinet-Puranik SAS o se utilizan con la autorización de su titular. Queda prohibida toda reproducción, representación o adaptación, total o parcial, en cualquier soporte, sin consentimiento previo por escrito.",
              "Los nombres de marca, nombres de producto y logotipos que figuran en este sitio — incluidos los de las marcas de socios que la casa elabora — son marcas de sus respectivos titulares y no pueden utilizarse sin su consentimiento.",
            ],
          },
          {
            heading: "Legislación aplicable",
            body: [
              "Este sitio y el presente aviso se rigen por la legislación francesa. Cualquier litigio relativo al sitio será competencia de los tribunales franceses competentes.",
            ],
          },
        ],
      },
      privacy: {
        title: "Política de privacidad",
        metaDescription:
          "Qué datos personales recoge el sitio de Vinet-Puranik, con qué fin, cuánto tiempo se conservan y qué derechos le asisten conforme al RGPD.",
        intro:
          "Este sitio recoge muy poco. No hay analítica, ni publicidad, ni rastreo de terceros de ningún tipo. Los únicos datos personales que llegan a la casa son los que usted decide escribir en el formulario de consulta.",
        sections: [
          {
            heading: "Responsable del tratamiento",
            body: [
              "El responsable del tratamiento es Distillerie Vinet-Puranik SAS, 3, impasse Félix Chartier, 17520 Brie-sous-Archiac, Francia. Para cualquier cuestión relativa a esta política, o para ejercer los derechos que se indican más abajo, escriba a [CORREO DE CONTACTO DE PRIVACIDAD].",
            ],
          },
          {
            heading: "Qué recogemos, y por qué",
            body: [
              "El formulario de consulta le pide su nombre, su empresa (opcional), su dirección de correo electrónico, la naturaleza de su consulta y su mensaje. Esos datos se utilizan con una sola finalidad: leer su consulta y responderla.",
              "La base jurídica es nuestro interés legítimo en responder a las consultas profesionales que se nos dirigen y, cuando su consulta se refiere a un posible pedido, las medidas precontractuales adoptadas a petición suya.",
              "No recogemos nada más. No elaboramos ningún perfil, no utilizamos sus datos con fines comerciales salvo que usted lo solicite expresamente, y nunca los vendemos ni los cedemos.",
            ],
          },
          {
            heading: "Su fecha de nacimiento no se recoge",
            body: [
              "La verificación de edad al entrar se realiza íntegramente en su navegador. La fecha que introduce sirve para calcular si tiene la edad legal y después se descarta. Nunca se nos transmite y nunca se almacena: solo se recuerda que la verificación se superó, en una cookie que no contiene ninguna fecha.",
            ],
          },
          {
            heading: "Quién más accede a ellos",
            body: [
              "Las consultas nos llegan por correo electrónico a través de Resend, proveedor de envío que actúa como encargado del tratamiento. Su mensaje pasa por sus sistemas para llegar a nuestro buzón.",
              "El sitio lo sirve nuestro proveedor de alojamiento, identificado en el aviso legal. Ningún otro tercero recibe sus datos. Las tipografías empleadas se sirven desde nuestros propios servidores, de modo que consultar una página no envía nada a ningún proveedor de fuentes.",
            ],
          },
          {
            heading: "Cuánto tiempo se conservan",
            body: [
              "Las consultas se conservan en el buzón de la casa mientras siga activa la relación comercial a la que se refieren, y hasta tres años desde nuestro último contacto cuando no prospera. [PLAZO PENDIENTE DE CONFIRMAR CON LA CASA.]",
            ],
          },
          {
            heading: "Sus derechos",
            body: [
              "Puede solicitar el acceso a los datos personales que tenemos sobre usted, su rectificación o supresión, la limitación de su tratamiento, oponerse a su uso y pedir una copia en formato portátil. Escriba a [CORREO DE CONTACTO DE PRIVACIDAD] y le responderemos en el plazo de un mes.",
              "Si considera que sus datos se han tratado indebidamente, puede presentar una reclamación ante la CNIL, la autoridad francesa de protección de datos, en cnil.fr.",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de cookies",
        metaDescription:
          "Este sitio instala una única cookie, estrictamente necesaria para la verificación de la edad legal. Sin analítica, publicidad ni rastreo de terceros.",
        intro:
          "Este sitio utiliza una cookie. Existe para que no se le pregunte la edad en cada página, y no contiene ningún dato personal.",
        sections: [
          {
            heading: "La única cookie que instalamos",
            body: [
              "Nombre: vd_age_verified. Finalidad: registrar que se ha superado la verificación de edad legal. Contenido: el carácter 1 — ninguna fecha de nacimiento, ningún identificador, nada que le describa. Duración: treinta días. La instala únicamente este sitio y nunca se envía a terceros.",
            ],
          },
          {
            heading: "Por qué no se le pide consentimiento",
            body: [
              "Conforme a la normativa ePrivacy y a las orientaciones de la CNIL, las cookies estrictamente necesarias para prestar un servicio solicitado expresamente por el visitante están exentas de consentimiento. La verificación de edad en el sitio de un productor de espirituosos es una de ellas: sin esa cookie, el sitio no puede mostrarle su contenido lícitamente sin volver a preguntar en cada página.",
              "Como no instalamos nada más, este sitio no tiene banner de consentimiento. No hay nada que usted deba rechazar.",
            ],
          },
          {
            heading: "Lo que no utilizamos",
            body: [
              "Ninguna analítica ni medición de audiencia. Ninguna publicidad ni retargeting. Ningún píxel de redes sociales. Ningún script de terceros. Las tipografías se sirven desde los servidores de este sitio y no desde un proveedor externo.",
            ],
          },
          {
            heading: "Cómo eliminarla",
            body: [
              "Puede eliminar la cookie en cualquier momento desde la configuración de su navegador, y puede rechazar las cookies por completo. Si lo hace, la verificación de edad volverá a mostrarse la próxima vez que abra el sitio.",
            ],
          },
        ],
      },
      terms: {
        title: "Términos y condiciones",
        metaDescription:
          "Las condiciones en las que se pone a disposición el sitio de Vinet-Puranik: un sitio informativo profesional, sin venta en línea.",
        intro:
          "Estos términos rigen el uso de este sitio web. Al navegar por él, usted los acepta.",
        sections: [
          {
            heading: "Qué es este sitio",
            body: [
              "Es un sitio informativo dirigido a socios profesionales: importadores, distribuidores, minoristas y propietarios de marcas. Nada se vende aquí en línea, no se publican precios y no puede cursarse ningún pedido.",
              "Una consulta enviada mediante el formulario es una solicitud de información. No constituye un pedido, y ni nuestra respuesta ni la información orientativa que podamos facilitarle forman un contrato. Todo suministro se rige por un acuerdo escrito independiente.",
            ],
          },
          {
            heading: "Edad legal",
            body: [
              "Este sitio presenta bebidas alcohólicas. Se dirige únicamente a visitantes que hayan alcanzado la edad legal para consumir alcohol en su país de residencia y que puedan consultar lícitamente este tipo de contenido. Le rogamos que no utilice este sitio si no es su caso.",
            ],
          },
          {
            heading: "Exactitud",
            body: [
              "Describimos nuestros productos y nuestra producción con cuidado, pero las características, la disponibilidad y la composición de la gama pueden cambiar. Las descripciones, notas de cata, edades y cifras que aquí figuran son orientativas y no constituyen compromisos contractuales.",
            ],
          },
          {
            heading: "Enlaces a otros sitios",
            body: [
              "Este sitio enlaza con los sitios de los productores y propietarios de marcas con los que trabajamos. Esos sitios quedan fuera de nuestro control: no respondemos de su contenido, de sus productos ni de sus propias prácticas en materia de datos.",
            ],
          },
          {
            heading: "Responsabilidad",
            body: [
              "Procuramos mantener este sitio disponible y exacto, pero no garantizamos que esté libre de interrupciones o errores. En la medida en que lo permita la ley, no respondemos de los daños indirectos derivados del uso del sitio.",
            ],
          },
          {
            heading: "Legislación aplicable",
            body: [
              "Estos términos se rigen por la legislación francesa. Cualquier litigio será competencia de los tribunales franceses competentes.",
            ],
          },
        ],
      },
      accessibility: {
        title: "Accesibilidad",
        metaDescription:
          "El compromiso de accesibilidad de Vinet-Puranik para este sitio, el estándar al que aspira y sus limitaciones conocidas.",
        intro:
          "Queremos que este sitio pueda usarlo cualquier persona, incluidos los visitantes que navegan con teclado, con lector de pantalla o con preferencias de movimiento o contraste activadas.",
        sections: [
          {
            heading: "El nivel al que aspiramos",
            body: [
              "Aspiramos al nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1), el estándar en el que se basan el RGAA francés y la Directiva Europea de Accesibilidad.",
            ],
          },
          {
            heading: "Lo que ya está en marcha",
            body: [
              "Cada página tiene un único encabezado principal y un enlace para saltar al contenido. La navegación, el selector de idioma y el formulario de consulta funcionan con teclado, y el foco permanece visible en todo momento. Los errores del formulario se anuncian, se señalan con algo más que el color y el foco se desplaza al campo que requiere atención.",
              "Todas las animaciones — las apariciones al desplazarse, el paralaje, las cifras animadas y el carrusel de testimonios — se desactivan automáticamente cuando su sistema solicita reducir el movimiento. Las fotografías que aportan información llevan descripción textual; las puramente decorativas se ocultan a los lectores de pantalla en lugar de describirse dos veces.",
            ],
          },
          {
            heading: "Limitaciones conocidas",
            body: [
              "La conformidad es parcial. Algunos textos de tamaño pequeño sobre fondos con color quedan cerca del contraste mínimo, y las fotografías de la finca no se han descrito individualmente más allá de su contexto. [SECCIÓN PENDIENTE DE REVISAR Y ACTUALIZAR TRAS UNA AUDITORÍA RGAA COMPLETA.]",
            ],
          },
          {
            heading: "Comunicarnos una dificultad",
            body: [
              "Si alguna parte de este sitio le impide acceder a una información que necesita, escriba a [CORREO DE CONTACTO DE ACCESIBILIDAD] describiendo lo ocurrido. Le responderemos y, cuando sea posible, le facilitaremos la información por otra vía.",
            ],
          },
        ],
      },
    },
  },

  responsibleDrinking:
    "El abuso de alcohol es peligroso para la salud. Consuma con moderación.",
} satisfies Content;
