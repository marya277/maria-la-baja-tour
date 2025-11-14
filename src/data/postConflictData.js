import reparacion from '../assets/reparacion.jpg';
import cultivos from '../assets/cultivos.jpg';
import bullerengue from '../assets/bullerengue.jpg';
import emprendimiento from '../assets/playon.jpg'; 

export const postConflictData = [
  {
    id: 1,
    key: 'reparation',
    icon: 'Users',
    gradient: 'from-blue-400 to-cyan-400',
    image: reparacion,
    description: {
      es: 'La Unidad para las Víctimas trabaja con comunidades afrodescendientes y campesinas en procesos de reparación integral, buscando desarrollo social y reactivación económica territorial.',
      en: 'The Victims Unit works with Afro-descendant and peasant communities in comprehensive reparation processes, seeking social development and territorial economic reactivation.',
      fr: 'L\'Unité pour les Victimes travaille avec les communautés afro-descendantes et paysannes dans des processus de réparation intégrale, recherchant le développement social et la réactivation économique territoriale.'
    }
  },
  {
    id: 2,
    key: 'economy',
    icon: 'Sprout',
    gradient: 'from-lime-400 to-green-400',
    image: cultivos,
    description: {
      es: 'Esfuerzos comunitarios por recuperar cultivos tradicionales (ñame, yuca, maíz) abandonados durante el conflicto. Organizaciones locales lideran procesos de seguridad alimentaria y economía solidaria.',
      en: 'Community efforts to recover traditional crops (yam, cassava, corn) abandoned during the conflict. Local organizations lead food security and solidarity economy processes.',
      fr: 'Efforts communautaires pour récupérer les cultures traditionnelles (igname, manioc, maïs) abandonnées pendant le conflit. Les organisations locales dirigent les processus de sécurité alimentaire et d\'économie solidaire.'
    }
  },
  {
    id: 3,
    key: 'memory',
    icon: 'Music',
    gradient: 'from-purple-400 to-pink-400',
    image: bullerengue,
    description: {
      es: 'Recuperación de costumbres ancestrales y memoria histórica a través del bullerengue, expresiones culturales y proyectos audiovisuales liderados por jóvenes y líderes comunitarios.',
      en: 'Recovery of ancestral customs and historical memory through bullerengue, cultural expressions, and audiovisual projects led by youth and community leaders.',
      fr: 'Récupération des coutumes ancestrales et de la mémoire historique à travers le bullerengue, les expressions culturelles et les projets audiovisuels dirigés par les jeunes et les leaders communautaires.'
    }
  },
  {
    id: 4,
    key: 'entrepreneurship',
    icon: 'Sparkles',
    gradient: 'from-amber-400 to-yellow-400',
    image: emprendimiento,
    description: {
      es: 'Iniciativas de emprendimiento lideradas por mujeres y jóvenes transforman el territorio. Artesanías, turismo comunitario y proyectos productivos impulsan el desarrollo local y la reactivación económica con identidad cultural.',
      en: 'Entrepreneurship initiatives led by women and youth transform the territory. Handicrafts, community tourism, and productive projects drive local development and economic reactivation with cultural identity.',
      fr: 'Des initiatives entrepreneuriales menées par des femmes et des jeunes transforment le territoire. Artisanat, tourisme communautaire et projets productifs stimulent le développement local et la réactivation économique avec une identité culturelle.'
    }
  }
];