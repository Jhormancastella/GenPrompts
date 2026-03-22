/**
 * Textos en español para el prompt cuando la UI está en ES (valueEs en cada opción).
 * Debe cargarse justo después de data.js.
 */
(function () {
  const D = window.GPROMPTS_DATA;
  if (!D) return;

  function byId(arr, map) {
    arr.forEach((o) => {
      if (o.id && Object.prototype.hasOwnProperty.call(map, o.id)) {
        o.valueEs = map[o.id];
      }
    });
  }

  function applyOrder(arr, list) {
    arr.forEach((o, i) => {
      if (list[i] !== undefined) o.valueEs = list[i];
    });
  }

  byId(D.atmosphere, {
    atmoFog:
      'niebla baja arrastrándose por el suelo, concentrada a la altura de los pies, fina y translúcida',
    atmoPetals: 'pétalos de flor delicados flotando suavemente en el aire alrededor del sujeto',
    atmoSnow: 'copos de nieve cayendo suavemente alrededor del sujeto, escarcha en superficies cercanas',
    atmoRain: 'lluvia ligera con gotas visibles a la luz, superficies mojadas reflectantes, surcos de lluvia',
    atmoFireflies: 'luciérnagas mágicas y partículas luminosas flotando en el aire',
    atmoDust: 'partículas de polvo visibles bailando en los haces de luz',
    atmoLeaves: 'hojas otoñales cayendo y arremolinándose con una brisa ligera',
    atmoSteam: 'vapor y bruma atmosférica ascendiendo desde el suelo',
    atmoSparks: 'chispas doradas mágicas y brasas flotando hacia arriba',
    atmoBokeh: 'orbes de luz bokeh hermosos en el fondo',
    atmoStorm: 'nubes de tormenta dramáticas, relámpagos lejanos, atmósfera cargada',
    atmoRainbow: 'bruma arcoíris suave y refracción de luz en el aire',
    atmoHaze: 'bruma atmosférica fina suavizando edificios lejanos',
    atmoSunbeams: 'rayos de sol atravesando nubes y árboles',
    atmoUnderwater: 'cáusticas de luz subacuática danzando sobre las superficies',
    atmoHeat: 'calor sutil distorsionando el aire con temblores',
    atmoPollen: 'partículas de polen brillantes flotando suavemente',
    atmoSmoke: 'humo suave flotando en el fondo',
    atmoEmbers: 'pequeñas partículas de ceniza flotando en el aire',
    atmoSnowstorm: 'ventisca ligera con nieve arremolinada',
    atmoBreeze: 'brisa suave moviendo tela y cabello',
    atmoGlow: 'brillo ambiental suave alrededor del sujeto',
    atmoMist: 'niebla densa llenando la escena',
    atmoLens: 'destellos y reflejos sutiles en el aire',
    atmoAurora: 'tenues franjas de aurora en el cielo'
  });

  (function patchLightingKey() {
    const map = {
      'warm golden hour sunlight from the right': 'luz dorada de hora dorada desde la derecha',
      'cold blue moonlight from above': 'luz de luna azul fría desde arriba',
      'soft natural window light from the left': 'luz natural suave de ventana desde la izquierda',
      'dramatic side lighting from the left creating deep shadows':
        'luz lateral dramática desde la izquierda con sombras profundas',
      'bright overhead tropical sunlight': 'luz solar tropical brillante cenital',
      'soft overcast diffused light from cloudy sky': 'luz difusa nublada suave desde el cielo',
      'neon colored light from signs and screens': 'luz de neón de carteles y pantallas',
      'warm candlelight and firelight': 'luz cálida de velas y fuego',
      'Rembrandt lighting with key light at 45 degrees creating triangle on cheek':
        'iluminación Rembrandt con luz principal a 45° formando triángulo en la mejilla',
      'butterfly lighting from above creating shadow under nose':
        'iluminación mariposa desde arriba con sombra bajo la nariz',
      'large softbox light, even and soft': 'luz de softbox grande, uniforme y suave',
      'studio strobe flash lighting': 'flash de estudio tipo stroboscópico',
      'red emergency light casting dramatic tones': 'luz de emergencia roja con tonos dramáticos',
      'cool blue fill light from the right': 'luz de relleno azul fría desde la derecha',
      'warm tungsten light indoor': 'luz cálida de tungsteno en interior',
      'direct flashlight beam as key light': 'haz de linterna directa como luz principal',
      'car headlights as the main light source': 'faros de coche como fuente principal de luz',
      'streetlamp light casting long shadows': 'luz de farola proyectando sombras largas',
      'fireplace light flickering warmly': 'luz de chimenea parpadeando cálidamente',
      'theater spotlight from above': 'foco teatral cenital',
      'colorful dance floor spotlights': 'focos de pista de baile de colores',
      'hard top-down light creating strong shadows': 'luz cenital dura con sombras fuertes',
      'window blinds light stripes across subject': 'franjas de luz de persianas cruzando al sujeto',
      'icy blue light giving cold mood': 'luz helada azulada con ambiente frío',
      'soft ambient light wrapping the subject': 'luz ambiental suave envolviendo al sujeto'
    };
    D.lightingKey.forEach((o) => {
      if (map[o.value]) o.valueEs = map[o.value];
    });
  })();

  byId(D.lightingTech, {
    lightRim: 'luz de contorno cálida desde detrás del sujeto',
    lightVol: 'rayos de luz volumétricos suaves visibles en la atmósfera',
    lightHighKey: 'iluminación high-key con pocas sombras, brillante y aireada',
    lightLowKey: 'iluminación low-key con sombras profundas y luces selectivas',
    lightFlare: 'destello de lente suave desde la fuente de luz',
    lightChiaroscuro: 'claroscuro con fuerte contraste entre luz y sombra',
    lightDappled: 'patrón de luz filtrada entre hojas o ramas',
    lightHard: 'luz dura con sombras nítidas',
    lightSoft: 'luz suave con transiciones graduales',
    lightSplit: 'iluminación split dividiendo rostro en luz y sombra',
    lightShort: 'iluminación short resaltando contornos faciales',
    lightBroad: 'iluminación broad llenando el rostro de forma uniforme',
    lightGels: 'iluminación con geles de color para tonos estilizados',
    lightBounce: 'luz rebotada rellenando sombras suavemente',
    lightFill: 'luz de relleno para reducir sombras duras',
    lightPractical: 'luces prácticas visibles en la escena',
    lightSilhouette: 'silueta con solo contraluz',
    lightEdge: 'luz de borde delineando al sujeto',
    lightClamshell: 'iluminación clam con luz superior e inferior',
    lightFlat: 'luz plana con poco contraste',
    lightMotivated: 'iluminación motivada según fuentes de la escena',
    lightAmbient: 'luz ambiental dominando la escena',
    lightBack: 'contraluz fuerte para separar al sujeto',
    lightNeon: 'doble iluminación de neón con colores contrastados',
    lightGodrays: 'rayos crepusculares visibles atravesando la atmósfera'
  });

  (function patchStyles() {
    const map = {
      'hyperrealistic photography': 'fotografía hiperrealista',
      'cinematic film still': 'fotograma de cine',
      'editorial fashion photography': 'fotografía editorial de moda',
      'fine art portrait photography': 'fotografía de retrato de arte',
      'documentary photography': 'fotografía documental',
      'digital oil painting, highly detailed brushstrokes': 'pintura digital al óleo, pinceladas muy detalladas',
      'watercolor illustration with soft edges': 'ilustración en acuarela con bordes suaves',
      '3D render, octane render, highly detailed': 'render 3D, octane render, muy detallado',
      'anime style, detailed anime illustration': 'estilo anime, ilustración anime detallada',
      'dark fantasy art, highly detailed digital painting': 'arte fantástico oscuro, pintura digital muy detallada',
      'concept art, matte painting style': 'concept art, estilo matte painting',
      'vintage film photograph, Kodak Portra 400 film grain':
        'fotografía vintage en película, grano Kodak Portra 400',
      'low poly 3D style, clean geometry': 'estilo 3D low poly, geometría limpia',
      'minimalist composition, clean shapes': 'composición minimalista, formas limpias',
      'ink illustration with bold lines': 'ilustración de tinta con trazos marcados',
      'flat design, vector style': 'diseño plano, estilo vectorial',
      'isometric illustration, clean perspective': 'ilustración isométrica con perspectiva limpia',
      'mixed media collage, layered textures': 'collage multimedia con texturas superpuestas',
      'film grain, analog texture': 'grano de película, textura analógica',
      'noir photography, high contrast shadows': 'fotografía noir con sombras de alto contraste',
      'surreal dreamlike visual style': 'estilo visual surrealista onírico',
      'baroque painting style, ornate details': 'estilo barroco, detalles ornamentados',
      'magical realism with subtle fantasy elements': 'realismo mágico con toques fantásticos sutiles',
      'HDR realistic photography, crisp detail': 'fotografía HDR realista, detalle nítido',
      'pastel illustration with soft gradients': 'ilustración pastel con degradados suaves'
    };
    D.styles.forEach((o) => {
      if (map[o.value]) o.valueEs = map[o.value];
    });
  })();

  applyOrder(D.cameras, [
    'fotografía con Canon EOS R5',
    'fotografía con Sony A7R IV',
    'fotografía con Nikon Z9',
    'fotografía con Hasselblad X2D',
    'fotografía con Fujifilm GFX 100S',
    'fotografía con Leica M11',
    'fotografía con Canon 5D Mark IV',
    'fotografía con Sony A1',
    'fotografía con Sony FX3',
    'fotografía con Panasonic S1H',
    'fotografía con RED Komodo',
    'fotografía con Blackmagic Pocket 6K',
    'fotografía con Arri Alexa Mini',
    'fotografía con Canon C70',
    'fotografía con Nikon D850',
    'fotografía con Fujifilm X-T5',
    'fotografía con Olympus OM-1',
    'fotografía con Pentax K-1',
    'fotografía con Sony A7S III',
    'fotografía con Canon R6',
    'fotografía con Nikon Z6 II',
    'fotografía con Fujifilm X100V',
    'fotografía con Ricoh GR III',
    'fotografía con Phase One XF',
    ''
  ]);

  applyOrder(D.lenses, [
    'objetivo 85 mm f/1,4, poca profundidad de campo',
    'objetivo 50 mm f/1,2, perspectiva natural',
    'objetivo 35 mm f/1,4, perspectiva ligeramente angular',
    'objetivo 135 mm f/2, fondo comprimido, bokeh hermoso',
    'objetivo gran angular 24 mm f/2,8, campo amplio',
    'objetivo macro 100 mm, detalle extremo',
    'objetivo ultra gran angular 16 mm f/2,8, perspectiva dramática',
    'objetivo 28 mm f/1,8, campo inmersivo',
    'objetivo 40 mm f/2, estética callejera natural',
    'objetivo 70-200 mm f/2,8, fondo comprimido',
    'objetivo zoom 24-70 mm f/2,8, encuadre versátil',
    'objetivo 200 mm f/2,8 teleobjetivo',
    'objetivo 14 mm f/2,8 ultra gran angular extremo',
    'objetivo 55 mm f/1,8, nítido y definido',
    'objetivo macro 90 mm f/2,8',
    'objetivo 105 mm f/1,4, bokeh cremoso',
    'objetivo 35 mm f/2, sensación documental',
    'objetivo 18 mm f/1,8, mirada callejera dinámica',
    'objetivo retrato 65 mm f/2,8',
    'objetivo 135 mm f/1,8, compresión marcada',
    'objetivo 24 mm f/1,4, mirada cinematográfica amplia',
    'objetivo 70 mm f/2,8, perspectiva favorecedora',
    'objetivo 300 mm f/4, teleobjetivo extremo',
    'objetivo 45 mm f/1,8, visión natural limpia',
    ''
  ]);

  byId(D.quality, {
    qual8k: 'resolución 8K',
    qualUltra: 'ultradetallado',
    qualRaw: 'foto RAW',
    qualSharp: 'enfoque nítido en el sujeto',
    qualCinematic: 'gradación de color cinematográfica',
    qualSkin: 'textura de piel natural, poros detallados',
    qualHdr: 'alto rango dinámico',
    qualClean: 'imagen limpia, sin ruido',
    qualTexture: 'textura de superficie rica',
    qualDoF: 'poca profundidad de campo',
    qualBokeh: 'fondo con bokeh cremoso',
    qualContrast: 'iluminación de alto contraste',
    qualSoft: 'tonos de contraste suave',
    qualColor: 'reproducción de color precisa',
    qualGI: 'iluminación global',
    qualSSS: 'dispersión subsuperficial',
    qualAO: 'oclusión ambiental',
    qualSharp2: 'microdetalles y textura fina',
    qualFilm: 'grano de película sutil',
    qualCrisp: 'bordes nítidos y claridad',
    qualClean2: 'sin artefactos ni fallos',
    qualStudio: 'claridad y luz de estudio',
    qualPro: 'imagen de nivel profesional',
    qualVignette: 'viñeta sutil',
    qualTilt: 'efecto tilt-shift de enfoque'
  });

  applyOrder(D.palettes, [
    'tonos fríos desaturados, azules profundos y verdes azulados, acentos naranjas cálidos selectivos',
    'tonos pastel suaves, rosa melocotón, melocotón, verdes frescos, acentos dorados cálidos, lavanda',
    'blancos fríos, azules helados, ámbar cálido, verdes bosque profundos, reflejos plateados',
    'turquesa y aguamarina vivos, arena dorada cálida, verdes exuberantes, acentos coral',
    'negros profundos, cian eléctrico, magenta intenso, neón púrpura, grises acero fríos',
    'naranja tostado, carmesí profundo, oro cálido, marrón chocolate, verde oliva',
    'tonos dorados cálidos, ámbar miel, crema suave, toques burdeos',
    'paleta monocromática azul, desde azul marino hasta cielo',
    'blanco y negro con acentos de color selectivos',
    'tonos tierra apagados, verde salvia, terracota, beige cálido, rosa polvo',
    'gradación cinematográfica teal y naranja, contraste complementario',
    'lavanda soñadora, púrpura suave, azul brumoso, blanco etéreo',
    'paleta atardecer, naranjas y rosas cálidos',
    'paleta mínima fría, azules helados y grises suaves',
    'grises suaves, tonos apagados, contraste mínimo',
    'verde esmeralda, acentos dorados, negros profundos',
    'beige arena, naranja arcilla, neutros cálidos',
    'rojos monocromáticos, variaciones carmesí profundo',
    'paleta vaporwave, brillo cian y magenta',
    'azules oceánicos, degradados turquesa, acentos espuma de mar',
    'tonos sepia, calidez vintage',
    'terracota y paleta tierra cálida',
    'acentos amarillos, energía luminosa',
    'púrpura real, violeta profundo, brillos elegantes',
    'verdes bosque profundos, musgo, marrones oscuros'
  ]);

  byId(D.moods, {
    moodEerie: 'inquietante',
    moodMysterious: 'misterioso',
    moodRomantic: 'romántico',
    moodSerene: 'sereno y apacible',
    moodDramatic: 'dramático e intenso',
    moodJoyful: 'alegre y vibrante',
    moodNostalgic: 'nostálgico y cálido',
    moodElegant: 'elegante y sofisticado',
    moodEpic: 'épico y cinematográfico',
    moodDreamy: 'soñador y etéreo',
    moodDark: 'oscuro y melancólico',
    moodMagical: 'mágico y encantador',
    moodCozy: 'acogedor y cálido',
    moodTense: 'tenso y de suspense',
    moodHopeful: 'esperanzador y elevador',
    moodMelancholic: 'melancólico y reflexivo',
    moodPlayful: 'juguetón y divertido',
    moodWhimsical: 'caprichoso y peculiar',
    moodLux: 'lujoso y refinado',
    moodMinimal: 'minimalista y limpio',
    moodFuturistic: 'futurista y pulido',
    moodApocalyptic: 'apocalíptico y sombrío',
    moodEnergetic: 'enérgico e intenso',
    moodCalm: 'calmado y silencioso',
    moodMystic: 'místico y espiritual'
  });

  applyOrder(
    D.backgroundPresets.reduce((acc, g) => acc.concat(g.options), []),
    [
      'cementerio gótico abandonado de noche, lápidas antiguas cubiertas de musgo, árboles retorcidos, verja oxidada al fondo, cielo gris púrpura con luna llena entre nubes',
      'mansión victoriana oscura, vidrieras rotas, jardín muerto, porche de madera crujiente, murciélagos en cielo iluminado por la luna',
      'bosque encantado oscuro, árboles retorcidos, ojos brillando entre sombras, sendero de piedra cubierto de hojas secas, niebla espesa entre troncos',
      'interior de guarida de bruja, caldero verde burbujeando, frascos y calaveras en estantes, telarañas, velas parpadeantes, grimorios antiguos',
      'calle adoquinada con niebla a medianoche, farolas de gas titilantes, siluetas lejanas, ladrillo viejo, atmósfera victoriana',
      'interior de capilla de piedra abandonada, bancos rotos, luz azul lunar por vidrieras, polvo flotando, silencio inquietante',
      'pasillo polvoriento con telarañas, retratos agrietados, tablas crujientes, vela tenue',
      'lago maldito de noche, árboles muertos emergiendo del agua, brillo verdoso, niebla fina sobre la superficie',
      'jardín exuberante a la luz suave de la tarde, cerezos en flor con pétalos cayendo, sendero de piedra, colinas verdes y cielo pastel',
      'campo de tulipanes vibrante hasta el horizonte, filas rojas, amarillas y moradas, molino al fondo, cielo azul con nubes',
      'jardín de hadas con setas gigantes luminosas, luces diminutas, flores con rocío, musgo suave, destellos dorados',
      'pradera tranquila con flores altas, roble solitario con luz dorada, montañas lejanas, arroyo reflejando el cielo',
      'campo de lavanda al atardecer, filas moradas, luz dorada cálida, brisa suave, cielo pastel',
      'granja soleada con valla de madera, pacas de heno, granero pequeño, prados verdes, cielo azul con nubes',
      'bosque de pinos nevado al crepúsculo, lago helado reflejando cielo púrpura, cabaña acogedora con luz cálida, nieve suave, humo de chimenea',
      'villa navideña nocturna, tejados nevados, farolas cálidas, árbol en la plaza, trineo lejano, nieve cayendo',
      'castillo helado en la cima, auroras en el cielo, cristales de hielo flotando, cascada congelada, atmósfera azul y púrpura',
      'lago helado con hielo liso, ventisqueros, pinos lejanos, sol invernal pálido, cielo azul intenso',
      'playa turquesa al atardecer, agua cristalina con arrecife, arena blanca y palmeras, islas lejanas, cielo dorado con nubes rosas',
      'cascada tropical en piscina esmeralda, vegetación exuberante, flores exóticas, rayos de sol entre la copa, bruma en el agua',
      'isla tropical aislada con laguna turquesa, arena blanca, palmeras, hamaca de madera, sol y cielo despejado',
      'callejón cyberpunk con neón nocturno, vallas holográficas, calle mojada reflectante, rascacielos, vehículos voladores lejanos, vapor',
      'calle de Tokio lluviosa de noche, neón reflejado en el suelo, cruces con paraguas, humo de puestos de comida, ambiente urbano cinematográfico',
      'interior de estación espacial futurista, ventanal con la Tierra en órbita, pantallas holográficas, arquitectura blanca y azul, LED ambiental, partículas flotando',
      'azotea urbana moderna de noche, perfil de rascacielos, ventanas iluminadas, luz de helicóptero lejana, brisa suave',
      'gran biblioteca europea con estanterías altas, luz cálida, escaleras de madera, butacas de cuero, luz dorada por ventanales arqueados, polvo en el aire',
      'salón de palacio estilo Versalles, candelabros de cristal, paredes doradas con pinturas renacentistas, suelo de mármol, gran escalera',
      'ruinas de templo griego a la hora dorada, columnas de mármol con hiedra, mar Mediterráneo al fondo, sombras largas, flores silvestres entre piedras',
      'interior de teatro de ópera vintage, asientos de terciopelo rojo, ornamentación dorada, luces de escena dramáticas, atmósfera elegante',
      'sendero forestal cubierto de hojas rojas y doradas, arces y robles otoñales, puente de madera sobre arroyo, luz cálida filtrada',
      'cabaña rural acogedora con techo de paja, árboles otoñales, calabazas en el patio, muro de piedra con hiedra rojiza, humo de chimenea',
      'parque urbano en otoño, hojas doradas arremolinándose, bancos con luz cálida, atardecer suave, calma'
    ]
  );

  const bgFlat = D.backgroundPresets.reduce((acc, g) => acc.concat(g.options), []);
  if (bgFlat.length !== 32) {
    console.warn('GPROMTS: número de fondos no coincide con traducciones ES.');
  }
})();
