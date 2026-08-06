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
    support: "Expertos en espirituosos a medida",
    primaryCtaLabel: "Iniciar un proyecto",
    posterLabel: "Apertura — bodega de barricas, travelling lento",
    scroll: "Desplazar",
  },

  maisonStatement: {
    kicker: "La casa",
    line: "Un espirituoso empieza mucho antes del alambique: empieza con una conversación.",
    body: "Vinet-Puranik escucha primero: su mercado, su ambición, sus limitaciones. Después la casa compone —uva y cereal, barrica y tiempo— hasta que el líquido responde.",
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
        title: "Control de calidad",
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
      rd: { label: "I+D", body: "Acabados, maceraciones, destilación, productos híbridos." },
    },
  },

  collection: {
    kicker: "La colección",
    title: "Marcas moldeadas por la casa",
    intro:
      "Espirituosos creados para y con nuestros socios: la prueba de un registro amplio, entre categorías, barricas y mercados.",
    distributionNote: "Distribuido en Francia por Mähler-Besse.",
    allProducts: "Todos nuestros productos",
  },

  brands: {
    "hold-up": {
      category: "Ginebra · 43 %",
      descriptor:
        "Ginebra artesanal destilada en alambique de cobre: el enebro se encuentra con el haba tonka, el anís y un ligero filo cítrico.",
      frameLabel: "Packshot — botella de ginebra Hold Up",
    },
    "palisson-batch-01": {
      category: "Single malt francés · 43 %",
      descriptor:
        "Single malt charentés de doble destilación, envejecido al menos tres años en roble del Limousin que antes contuvo cognac.",
      frameLabel: "Packshot — single malt Palisson Batch 01",
    },
    "brigitte-et-louise-blanc": {
      category: "Aperitivo · 17,5 %",
      descriptor:
        "Mosto de uva ensamblado con eau-de-vie de cognac de una finca familiar: fruta y flores blancas, amplio y redondo.",
      frameLabel: "Packshot — Brigitte et Louise Blanc",
    },
    "brigitte-et-louise-rouge": {
      category: "Aperitivo · 17,5 %",
      descriptor:
        "Mosto de merlot y cabernet sauvignon con eau-de-vie de cognac: vivo y redondo, sobre sotobosque y fruta de hueso.",
      frameLabel: "Packshot — Brigitte et Louise Rouge",
    },
    "maca-rum": {
      category: "Ron especiado",
      descriptor:
        "Destilado en Mauricio, envejecido y afinado en Francia: canela envolvente y el misterio redondo del haba tonka.",
      frameLabel: "Packshot — botella de ron MACA",
    },
    tijuca: {
      category: "Ron blended · Brasil",
      descriptor:
        "Cobrizo con reflejos dorados; la madera y las especias dejan paso a vainilla, pimienta y miel, con final de coco.",
      frameLabel: "Packshot — ron brasileño TIJUCA",
    },
    "gigi-en-provence": {
      category: "Ginebra ecológica · 44 %",
      descriptor:
        "Ginebra ecológica provenzal: violeta y enebro sobre limón, con romero, cilantro y una nota discreta de oliva.",
      frameLabel: "Packshot — ginebra Gigi en Provence",
    },
    "patte-blanche": {
      category: "Cognac ecológico",
      descriptor:
        "Cognac certificado ECOCERT, destilado a mano en Arthenac sin insumos artificiales, de la viña a la copa: VS, VSOP y XO.",
      frameLabel: "Packshot — cognac ecológico Patte Blanche",
    },
    sephina: {
      category: "Spirit drink · 30 %",
      descriptor:
        "Ensamblado en la casa: 56 % de cognac VSOP con 44 % de Pineau des Charentes. Ciruela pasa, frutos secos, nuez y roble tostado.",
      frameLabel: "Packshot — spirit drink Sephina",
    },
    gin40: {
      category: "Ginebra · 50 cl",
      descriptor:
        "Destilada artesanalmente en el suroeste de Francia con influencia de Las Landas: enebro, pino y mora silvestre.",
      frameLabel: "Packshot — botella GIN40",
    },
    "nade-vodka-2022": {
      category: "Vodka · 40 %",
      descriptor:
        "Destilado a partir de uvas bordelesas: la potencia del cabernet sauvignon, la redondez del merlot, la finura del sémillon.",
      frameLabel: "Packshot — Nade Vodka añada 2022",
    },
    "nade-vodka-2019": {
      category: "Vodka · 40 %",
      descriptor:
        "Reposado cuatro meses en barricas de vino tinto de Fronsac: levemente rosado con matices dorados, en menos de 250 botellas numeradas.",
      frameLabel: "Packshot — Nade Vodka añada 2019",
    },
  },

  families: {
    cognac: {
      name: "Cognac",
      title: "Cognac",
      summary:
        "La denominación de la casa, trabajada para nuestros socios desde los crus de Brie-sous-Archiac.",
      intro: [
        "La casa se asienta entre los crus de Petite Champagne y Fins Bois, y el cognac es el espirituoso que lleva más tiempo elaborando. Para nuestros socios, eso significa eaux-de-vie seleccionadas y ensambladas según un brief, y después envejecidas en roble del Limousin hasta la calidad que pide el mercado: VS, VSOP, XO.",
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
        "Palisson Batch 01 es la primera salida de ese programa: al menos tres años de madera, embotellado a 43 %.",
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
      summary: "Vodka de uva elaborado por añadas, a partir de fruta bordelesa.",
      intro: [
        "Un vodka no tiene por qué ser neutro de origen. Nade se destila a partir de uvas bordelesas y se publica por añadas: la potencia del cabernet sauvignon, la redondez del merlot, la finura del sémillon.",
        "La añada 2019 reposó cuatro meses en barricas de vino tinto de Fronsac y se embotelló en menos de 250 botellas numeradas; la 2022 es la añada en curso.",
      ],
    },
    aperitifs: {
      name: "Aperitivos y spirit drinks",
      title: "Aperitivos y spirit drinks",
      summary:
        "Productos de uva de baja graduación: aperitivos franceses y spirit drinks a base de cognac.",
      intro: [
        "Mosto de uva, eaux-de-vie y Pineau des Charentes, compuestos a graduación de aperitivo. Es la respuesta de la casa a los mercados que buscan un carácter de cognac servido largo, frío o con hielo.",
        "Brigitte et Louise es un aperitivo francés de 17,5 %, blanco y tinto; Sephina es un spirit drink de 30 %: 56 % de cognac VSOP ensamblado con 44 % de Pineau des Charentes y, por tanto, deliberadamente fuera de la denominación cognac.",
      ],
    },
  },

  partnerships: {
    title: "Colaboraciones",
    intro: [
      "Cada botella que ve aquí pertenece a otra persona. Importadores, distribuidores y propietarios de marcas llegan a Brie-sous-Archiac con un mercado en mente; la casa compone el líquido, gestiona el vestido y envía la caja terminada con su nombre.",
      "La colección está agrupada por categorías: la prueba de un registro amplio, de la uva al cereal y a la caña, y el camino más corto hacia lo más parecido al proyecto que tiene en mente.",
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
    metaDescription:
      "Marcas moldeadas por Vinet-Puranik para importadores, distribuidores y propietarios de marcas: cognac, whisky, ron, ginebra, vodka y aperitivos, por categoría.",
  },

  featurePanels: {
    bespoke: {
      title: "A medida desde el primer brief",
      body: "Receta, líquido, vestido y dosier compuestos en torno a su mercado: una sola casa lleva el proyecto del primer boceto a la caja precintada.",
      ctaLabel: "Iniciar un proyecto",
      frameLabel: "Imagen — mesa del maestro bodeguero, copas en pleno ensamblaje",
    },
    "know-how": {
      ctaLabel: "Iniciar un proyecto",
      frameLabel: "Imagen — alambiques de cobre en la destilería",
    },
  },

  timeline: {
    kicker: "Herencia",
    title: "Dos familias, una casa",
    intro:
      "De una finca charentesa del siglo XVIII a una casa unida que exporta a más de veinte países.",
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
        year: "2014 — 2017",
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

  presidentWord: {
    title: "Unas palabras del presidente",
    quote: "La pasión ante todo",
    body: [
      "Tras hacerme cargo de la empresa familiar en 1994, decidí abrirme a la exportación, y descubrí otro mundo. Asia en particular me cautivó, y desde entonces ocupa buena parte de mi vida.",
      "Entendí enseguida que los importadores con los que me reunía querían productos a medida, hechos según sus propios deseos. Daba igual el país: se sentían más implicados en productos que ellos mismos habían ayudado a diseñar.",
      "Así me convertí en promotor de espirituosos a medida y en especialista en marcas de distribución. Veinticinco años después, con un equipo vivo, motivado y multicultural, Vinet-Puranik está presente en más de veinte países.",
    ],
    portraitAlt:
      "Bruno Delannoy, presidente de la Distillerie Vinet-Puranik, fotografiado en la destilería.",
    signatureRole: "Presidente",
  },

  team: {
    alt: "El equipo de Vinet-Puranik, fotografiado entre los alambiques de cobre de la destilería.",
    label: "La casa",
    caption: "El equipo de Vinet-Puranik — Brie-sous-Archiac, Charente",
  },

  contact: {
    kicker: "Iniciar un proyecto",
    title: "Construya su próximo espirituoso con Vinet-Puranik",
    body: "Cuéntenos su brief: ambición de producto, mercado y calendario. La casa responde con un recorrido meditado, de la primera idea a la botella terminada.",
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
      enquiryType: "Naturaleza de la consulta",
      selectPlaceholder: "Seleccionar…",
      message: "Su proyecto",
      messagePlaceholder: "Ambición de producto, mercado, volúmenes, calendario…",
      submit: "Enviar consulta",
      submitting: "Enviando…",
      honeypot: "Deje este campo vacío",
      successMessage:
        "Gracias: hemos recibido su consulta. La casa le responderá en breve.",
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
      "Marcas de distribución",
      "Desarrollo de producto",
      "Abastecimiento de materiales secos",
      "Embotellado personalizado",
    ],
    legalLinks: [
      "Términos y condiciones",
      "Política de privacidad",
      "Política de cookies",
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
    legal:
      "Al entrar, confirma que tiene al menos {age} años y que es legal consultar contenido relacionado con el alcohol en su país de residencia. Su fecha de nacimiento se comprueba en su navegador: nunca se nos envía ni se almacena.",
  },

  visit: {
    kicker: "Visítenos",
    title: "La finca de Brie-sous-Archiac",
    heroLabel: "Apertura — patio de la finca y bodegas, luz dorada",
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
        title: "La destilería",
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
        frameLabel: "Tarjeta — pasillo de la bodega de barricas",
      },
      {
        title: "Catas",
        body: "Catas sentadas y clases magistrales en la sala de catas de la finca.",
        frameLabel: "Tarjeta — copas de cata sobre roble",
      },
    ],
    discover: "Descubrir",
    expectLabel: "Lo que le espera",
    mapLabel: "Mapa / vista aérea — la finca en Brie-sous-Archiac",
    bookCta: "Reservar una visita",
    practicalCta: "Información práctica",
    book: {
      heading: "Reservar una visita",
      body: "Todas las visitas son con cita previa. Envíenos las fechas que tiene en mente, el número de personas y la experiencia que desea: la casa se lo confirmará a vuelta de correo.",
      ctaLabel: "Reservar mediante el formulario",
      mailSubject: "Reserva de visita — finca Vinet-Puranik",
    },
    practical: {
      heading: "Información práctica",
      items: [
        { label: "Dirección", value: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, Francia" },
        { label: "Horario", value: "Con cita previa — de lunes a viernes" },
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
    bookingSubject: "Reserva de visita — {name}",
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
        frameLabel: "Visita — puertas de la bodega abiertas al patio",
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
        body: "El recorrido completo de producción —de la uva y el cereal al cobre, la barrica y la línea de embotellado— guiado por quienes lo hacen funcionar.",
        frameLabel: "Visita — alambiques de cobre en la destilería",
      },
      "heritage-tour": {
        name: "Visita Herencia — Desde 1777",
        duration: "Media jornada",
        groupSize: "De 2 a 8 personas",
        languages: "Francés · Inglés",
        includes: [
          "Visita privada de la finca y de los archivos familiares",
          "Visita al viñedo en Petite Champagne y Fins Bois",
          "Cata ampliada en la bodega familiar",
        ],
        body: "Para socios y coleccionistas: la larga historia de la casa de los Delannoy, contada a través de los viñedos, los archivos y las barricas más antiguas.",
        frameLabel: "Visita — hileras de viñedo sobre la finca",
      },
    },
  },

  tastings: {
    kicker: "Visítenos · Catas",
    title: "Las catas en la finca",
    intro:
      "Catas sentadas en la sala de la finca: del recorrido por las marcas de la casa a una clase magistral en la mesa del maestro bodeguero.",
    note: "Selecciones, duraciones y tarifas pendientes de confirmación por la casa; todas las catas con cita previa.",
    crossLinkTitle: "¿Prefiere recorrer antes las bodegas?",
    crossLinkCta: "Descubrir nuestras visitas",
    crossLinkBack: "Volver a la finca",
    metaDescription:
      "Catas sentadas en la finca Vinet-Puranik: selección signature, cognac y Pineau, y clase magistral de espirituosos a medida. Con cita previa en Brie-sous-Archiac.",
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
        frameLabel: "Cata — cinco copas sobre la mesa de catas",
      },
      "cognac-and-pineau-flight": {
        name: "Cata de Cognac y Pineau",
        duration: "45 minutos",
        groupSize: "De 2 a 12 personas",
        languages: "Francés · Inglés",
        includes: [
          "Los cognacs Delpech-Fougerat por edad",
          "Brigitte et Louise, tinto y blanco",
          "Bocados de maridaje regional",
        ],
        body: "Los clásicos charenteses: la marca de cognac de la casa y su Pineau, catados como los bebe la región.",
        frameLabel: "Cata — copas de cognac y copas de Pineau",
      },
      "bespoke-spirits-masterclass": {
        name: "Clase Magistral de Espirituosos a Medida",
        duration: "2 horas",
        groupSize: "De 2 a 8 personas",
        languages: "Francés · Inglés",
        includes: [
          "Sesión de ensamblaje en la mesa con el maestro bodeguero",
          "Muestras de barrica y trabajos en curso",
          "Su propio ensamblaje para llevar",
        ],
        body: "Para socios profesionales: cómo se compone un espirituoso a medida, del brief al ensamblaje, con las pipetas en la mano.",
        frameLabel: "Cata — mesa del maestro bodeguero con muestras de barrica",
      },
    },
  },

  nav: {
    about: {
      label: "La casa",
      links: [
        "A medida desde el primer brief",
        "Saber hacer e innovación",
        "Nuestra historia",
        "Unas palabras del presidente",
        "Compromisos",
      ],
      featuredHeading: "En la casa",
      featured: [
        { label: "Nuestra producción", frameLabel: "Destacado — alambiques de cobre" },
        { label: "Desde 1777", frameLabel: "Destacado — retrato familiar en la bodega" },
      ],
      viewAll: "Nuestro saber hacer",
    },
    partnerships: {
      label: "Colaboraciones",
      overview: "Visión general",
      featuredHeading: "Por categoría",
      featuredFrameLabels: [
        "Destacado — packshot Patte Blanche",
        "Destacado — packshot Hold Up",
        "Destacado — packshot ron MACA",
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
        "Información práctica",
      ],
      featuredHeading: "Experiencias favoritas",
      featured: [
        {
          label: "Visita Bodegas y Destilería",
          frameLabel: "Destacado — pasillo de la bodega de barricas",
        },
        { label: "Cata Signature", frameLabel: "Destacado — copas de cata sobre roble" },
      ],
      viewAll: "Prepare su visita",
    },
    contact: {
      label: "Contacto",
      links: [
        "Iniciar un proyecto",
        "Enviar una consulta",
        "La destilería",
        "Reservar una visita",
      ],
      featuredHeading: "Escríbanos",
      featured: [
        { label: "Iniciar un proyecto", frameLabel: "Destacado — mesa del maestro bodeguero" },
      ],
    },
  },

  ui: {
    home: "inicio",
    mainNavigation: "Navegación principal",
    mobileNavigation: "Navegación móvil",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
    languageUnavailable: "Próximamente",
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
    cta: "Volver a la casa",
  },

  metadata: {
    homeTitle: "Creadores de espirituosos a medida desde 1777",
    titleTemplate: "%s · Vinet-Puranik",
    description:
      "Destilería familiar de la región de Cognac que diseña espirituosos a medida, marcas de distribución, soluciones de embotellado y programas de desarrollo de producto para socios comerciales en más de veinte países.",
    partnershipsTitle: "Colaboraciones",
    visitTitle: "Visítenos",
    toursTitle: "Visitas",
    tastingsTitle: "Catas",
  },

  responsibleDrinking:
    "El abuso de alcohol es peligroso para la salud. Consuma con moderación.",
} satisfies Content;
