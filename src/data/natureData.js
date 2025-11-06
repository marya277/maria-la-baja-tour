// src/data/natureData.js
import tierraAgricola from '../assets/tierra agricola.jpg';
import cultivoMaiz from '../assets/cultivo maiz.jpg';
import cienaga from '../assets/cienaga.jpg';
import atardecer from '../assets/atardecer.jpg';
import plazaMariaLaBaja from '../assets/plazamarialabaja.jpg';
import cerroCapiro from '../assets/cerro del capiro.jpeg';

export const natureData = [
  {
    id: 1,
    title: {
      es: "Agricultura de Pancoger",
      en: "Subsistence Agriculture",
      fr: "Agriculture Vivrière"
    },
    description: {
      es: "Tierras fértiles donde se cultivan yuca, ñame, frutales y otros alimentos tradicionales que nutren a la comunidad.",
      en: "Fertile lands where yuca, yam, fruits and other traditional foods that nourish the community are grown.",
      fr: "Terres fertiles où l'on cultive le yucca, l'igname, les fruits et d'autres aliments traditionnels qui nourrissent la communauté."
    },
    image: tierraAgricola
  },
  {
    id: 2,
    title: {
      es: "Cultivos de Maíz",
      en: "Corn Crops",
      fr: "Cultures de Maïs"
    },
    description: {
      es: "Extensos campos de maíz que representan la tradición agrícola de los Montes de María, base de nuestra alimentación.",
      en: "Extensive corn fields representing the agricultural tradition of Montes de María, foundation of our diet.",
      fr: "Vastes champs de maïs représentant la tradition agricole des Montes de María, base de notre alimentation."
    },
    image: cultivoMaiz
  },
  {
    id: 3,
    title: {
      es: "Ciénaga de María La Baja",
      en: "María La Baja Swamp",
      fr: "Marécage de María La Baja"
    },
    description: {
      es: "Espejo de agua donde la comunidad se refresca y pesca, rodeada de naturaleza y tradición. Refugio de vida acuática.",
      en: "Body of water where the community refreshes and fishes, surrounded by nature and tradition. Refuge of aquatic life.",
      fr: "Plan d'eau où la communauté se rafraîchit et pêche, entourée de nature et de tradition. Refuge de vie aquatique."
    },
    image: cienaga
  },
  {
    id: 4,
    title: {
      es: "Atardeceres del Caribe",
      en: "Caribbean Sunsets",
      fr: "Couchers de Soleil des Caraïbes"
    },
    description: {
      es: "El cielo se pinta de colores vibrantes al caer la tarde, un espectáculo natural que inspira paz y gratitud.",
      en: "The sky is painted with vibrant colors at dusk, a natural spectacle that inspires peace and gratitude.",
      fr: "Le ciel se peint de couleurs vibrantes au crépuscule, un spectacle naturel qui inspire paix et gratitude."
    },
    image: atardecer
  },
  {
    id: 5,
    title: {
      es: "Plaza de María La Baja",
      en: "María La Baja Town Square",
      fr: "Place de María La Baja"
    },
    description: {
      es: "Centro urbano donde convergen historia, cultura y vida cotidiana. El corazón del pueblo bajo la sombra de sus árboles centenarios.",
      en: "Urban center where history, culture and daily life converge. The heart of the town under the shade of its centenary trees.",
      fr: "Centre urbain où convergent l'histoire, la culture et la vie quotidienne. Le cœur du village à l'ombre de ses arbres centenaires."
    },
    image: plazaMariaLaBaja
  },
  {
    id: 6,
    title: {
      es: "Cerro Capiro",
      en: "Capiro Hill",
      fr: "Colline Capiro"
    },
    description: {
      es: "Territorio sagrado de 528 metros donde nacen los arroyos que nutren nuestras represas. Guardián de los Montes de María.",
      en: "Sacred territory of 528 meters where streams that nourish our reservoirs are born. Guardian of Montes de María.",
      fr: "Territoire sacré de 528 mètres où naissent les ruisseaux qui alimentent nos réservoirs. Gardien des Montes de María."
    },
    image: cerroCapiro
  }
];