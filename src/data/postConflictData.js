import desplazamiento from '../assets/desplazamiento01.jpg';
import reparacion from  '../assets/reparacion.jpg';
import cultivos from  '../assets/cultivos.jpg';
import agua  from   '../assets/aguapotable.jpg';
import palma  from   '../assets/palma.jpg';
import bullerengue  from   '../assets/bullerengue.jpg';


export const postConflictData = [
  {
    id: 1,
    key: 'challenges',
    icon: 'AlertTriangle',
    gradient: 'from-red-400 to-orange-400',
    image: desplazamiento,
    description: {
      es: 'A pesar de la desmovilización de grupos armados, la violencia social, extorsiones, microtráfico e inseguridad persisten. Más de 34,255 personas fueron desplazadas en los últimos 30 años.',
      en: 'Despite armed group demobilization, social violence, extortion, drug trafficking, and insecurity persist. Over 34,255 people were displaced in the last 30 years.',
      fr: 'Malgré la démobilisation des groupes armés, la violence sociale, l\'extorsion, le trafic de drogue et l\'insécurité persistent. Plus de 34 255 personnes ont été déplacées au cours des 30 dernières années.'
    }
  },
  {
    id: 2,
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
    id: 3,
    key: 'water',
    icon: 'Droplet',
    gradient: 'from-cyan-400 to-blue-400',
    image: agua,
    description: {
      es: 'Más de 25,000 campesinos enfrentan escasez de agua potable. El distrito de riego, antes público, fue privatizado, limitando el acceso al recurso hídrico para cultivos y consumo.',
      en: 'Over 25,000 farmers face drinking water scarcity. The irrigation district, once public, was privatized, limiting access to water resources for crops and consumption.',
      fr: 'Plus de 25 000 agriculteurs sont confrontés à une pénurie d\'eau potable. Le district d\'irrigation, autrefois public, a été privatisé, limitant l\'accès aux ressources en eau pour les cultures et la consommation.'
    }
  },
  {
    id: 4,
    key: 'land',
    icon: 'TreePine',
    gradient: 'from-green-400 to-emerald-400',
    image: palma,
    description: {
      es: 'La disputa histórica por la tierra y el establecimiento de monocultivos de palma de aceite tras el desplazamiento masivo son factores clave en el conflicto y postconflicto regional.',
      en: 'Historical land disputes and the establishment of palm oil monocultures following mass displacement are key factors in the regional conflict and post-conflict situation.',
      fr: 'Les différends fonciers historiques et l\'établissement de monocultures de palmier à huile suite au déplacement massif sont des facteurs clés dans le conflit régional et la situation post-conflit.'
    }
  },
  {
    id: 5,
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
    id: 6,
    key: 'memory',
    icon: 'Music',
    gradient: 'from-purple-400 to-pink-400',
    image: bullerengue,
    description: {
      es: 'Recuperación de costumbres ancestrales y memoria histórica a través del bullerengue, expresiones culturales y proyectos audiovisuales liderados por jóvenes y líderes comunitarios.',
      en: 'Recovery of ancestral customs and historical memory through bullerengue, cultural expressions, and audiovisual projects led by youth and community leaders.',
      fr: 'Récupération des coutumes ancestrales et de la mémoire historique à travers le bullerengue, les expressions culturelles et les projets audiovisuels dirigés par les jeunes et les leaders communautaires.'
    }
  }
];