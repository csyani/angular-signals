import { Request, Response } from 'express';
import { HEROES } from './db-data';
import { Hero } from '../src/type';

export function getAllHeroes(req: Request, res: Response) {
  setTimeout(() => {
    console.log(`Returning GET /api/heroes`);
    res.status(200).json({ heroes: Object.values(HEROES) });
  }, 1000);
}

export function getHeroById(req: Request, res: Response) {
  const heroId = req.params['id'];
  const heroes: Hero[] = Object.values(HEROES);
  const hero = heroes.find((hero: Hero) => hero.id === Number(heroId));
  res.status(200).json(hero);
}
