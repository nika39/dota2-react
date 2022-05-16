import { IHero, ISelectedHero } from "../models/hero";
import getHeroById from "./getHeroById";

function addOpponentsToHero(hero: IHero, allHeroes: IHero[]): ISelectedHero {
	return {
		...hero,
		strong_opponents: {
			ids: hero.strong_opponents,
			heroes: getHeroById(hero.strong_opponents, allHeroes)
		}
	};
}

export default addOpponentsToHero;
