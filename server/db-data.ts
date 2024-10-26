import { Hero } from '../src/models/hero.model';

export const HEROES: Record<number, Hero> = {
  1: {
    id: 1,
    name: 'abaddon',
    description: 'Shields his allies or himself from attacks',
    iconUrl:
      'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png',
    category: 'UNIVERSAL',
  },
  2: {
    id: 2,
    name: 'puck',
    description: 'Sorbs to enemies and silences them',
    iconUrl:
      'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png',
    category: 'INTELLIGENCE',
  },
  3: {
    id: 3,
    name: 'axe',
    description: 'Taunts and forces enemies to attack him',
    iconUrl:
      'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png',
    category: 'STRENGTH',
  },
  4: {
    id: 4,
    name: 'anti mage',
    description: 'Slashes his foes with mana-draining attacks',
    iconUrl:
      'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
    category: 'AGILITY',
  },
};

export function findHeroById(heroId: number) {
  return HEROES[heroId];
}
