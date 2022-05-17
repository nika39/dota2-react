import { IHero } from "../models/hero";

function getHeroById(id: number, allHeroes: IHero[]): IHero;
function getHeroById(id: number[], allHeroes: IHero[]): IHero[];

function getHeroById(id: number | number[], allHeroes: IHero[]) {
    if (Array.isArray(id)) {
        return allHeroes.filter((hero) => id.includes(hero.id));
    }

    return allHeroes.find((hero) => hero.id === id) as IHero;
}

export default getHeroById;
