import { ICounterHero } from "../models/hero";

function getHeroesFilteredByPosition(position: number, counterHeroes: ICounterHero[]) {
    return counterHeroes
        .filter(counterHero => counterHero.positions.includes(position))
        .sort((counterHeroA, counterHeroB) => {
            return counterHeroB.by.length - counterHeroA.by.length;
        })
        .sort((counterHeroA, counterHeroB) => {
            return counterHeroA.strongs.length - counterHeroB.strongs.length;
        });
}

export default getHeroesFilteredByPosition;
