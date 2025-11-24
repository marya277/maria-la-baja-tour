import tambores from '../assets/tambores.png';
import cantadoras from '../assets/cantadoras.jpg';
import danza from '../assets/danza.png';
import raices from '../assets/raices.png';

export const bullerengueData = [
  {
    id: 1,
    key: 'drums',
    icon: 'Music',
    gradient: 'from-amber-400 to-orange-500',
    image: tambores,
    title: {
      es: 'Los Tambores',
      en: 'The Drums',
      fr: 'Les Tambours'
    },
    description: {
      es: 'El corazón rítmico del bullerengue: el tambor alegre (hembra), el llamador (macho) y la tambora. Instrumentos artesanales que mantienen el pulso africano de esta tradición ancestral.',
      en: 'The rhythmic heart of bullerengue: the alegre drum (female), the llamador (male) and the tambora. Handcrafted instruments that maintain the African pulse of this ancestral tradition.',
      fr: 'Le cœur rythmique du bullerengue : le tambour alegre (femelle), le llamador (mâle) et la tambora. Instruments artisanaux qui maintiennent le pouls africain de cette tradition ancestrale.'
    }
  },
  {
    id: 2,
    key: 'singers',
    icon: 'Mic2',
    gradient: 'from-purple-400 to-pink-500',
    image: cantadoras,
    title: {
      es: 'Las Cantadoras',
      en: 'The Female Singers',
      fr: 'Les Chanteuses'
    },
    description: {
      es: 'Las matronas portadoras de la tradición oral. Mujeres que preservan historias, cantos y saberes ancestrales transmitidos de generación en generación, siendo el alma vocal del bullerengue.',
      en: 'The matrons who carry the oral tradition. Women who preserve stories, songs and ancestral knowledge passed down through generations, being the vocal soul of bullerengue.',
      fr: 'Les matriarches porteuses de la tradition orale. Femmes qui préservent histoires, chants et savoirs ancestraux transmis de génération en génération, étant l\'âme vocale du bullerengue.'
    }
  },
  {
    id: 3,
    key: 'dance',
    icon: 'Sparkles',
    gradient: 'from-rose-400 to-red-500',
    image: danza,
    title: {
      es: 'La Danza',
      en: 'The Dance',
      fr: 'La Danse'
    },
    description: {
      es: 'Baile femenino de fertilidad con movimientos de faldas y caderas. Representa resistencia, sensualidad y celebración a través de pasos ceremoniales que simbolizan la vida y la libertad.',
      en: 'Female fertility dance with movements of skirts and hips. Represents resistance, sensuality and celebration through ceremonial steps that symbolize life and freedom.',
      fr: 'Danse féminine de fertilité avec mouvements de jupes et de hanches. Représente résistance, sensualité et célébration à travers des pas cérémoniels qui symbolisent la vie et la liberté.'
    }
  },
  {
    id: 4,
    key: 'heritage',
    icon: 'Flame',
    gradient: 'from-emerald-400 to-teal-500',
    image: raices,
    title: {
      es: 'La Herencia Ancestral',
      en: 'Ancestral Heritage',
      fr: 'Héritage Ancestral'
    },
    description: {
      es: 'Expresión de resistencia cultural afrodescendiente nacida en los palenques. Festival que celebra identidad, memoria y paz a través de 30+ años de tradición en María la Baja.',
      en: 'Expression of Afro-descendant cultural resistance born in the palenques. Festival celebrating identity, memory and peace through 30+ years of tradition in María la Baja.',
      fr: 'Expression de résistance culturelle afro-descendante née dans les palenques. Festival célébrant identité, mémoire et paix à travers 30+ ans de tradition à María la Baja.'
    }
  }
];