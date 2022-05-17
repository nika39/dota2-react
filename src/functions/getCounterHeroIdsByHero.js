import { IHero } from "../models/hero";
// import pluck from "./pluck";

function getCounterHeroIdsByHero(hero: IHero): number[] {
    return hero.strong_opponents;

    // const heroesIds: number[] = pluck(hero, "id");
    // const ids: number[] = [];
    // hero.forEach((hero) => {
    // 	getCounterHeroIdsByHero(hero).forEach((id) => {
    // 		if (heroesIds.includes(id) || ids.includes(id)) return;
    // 		ids.push(id);
    // 	});
    // });

    // return ids;
}

export default getCounterHeroIdsByHero;
