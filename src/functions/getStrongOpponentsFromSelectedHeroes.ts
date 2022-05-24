import { ISelectedHero, ICounterHero } from "../models/hero";
import { getStrongOpponentsOfStrongOpponent } from "./getStrongOpponentsOfStrongOpponent";

function getStrongOpponentsFromSelectedHeroes(
    selectedHeroes: ISelectedHero[],
    selectedHeroesIds: number[]
): ICounterHero[] {
    let strongOpponents: {
        ids: number[];
        opponents: ICounterHero[];
    } = {
        ids: [],
        opponents: []
    };

    selectedHeroes.forEach(selectedHero => {
        selectedHero.strong_opponents.heroes.forEach(strongOpponent => {
            if (selectedHeroesIds.includes(strongOpponent.id)) return;

            if (strongOpponents.ids.includes(strongOpponent.id)) {
                strongOpponents.opponents = strongOpponents.opponents.map(counterHero => {
                    if (counterHero.id === strongOpponent.id) {
                        strongOpponents.ids.push(strongOpponent.id);
                        counterHero.by.push(selectedHero);
                    }

                    return counterHero;
                });
            } else {
                strongOpponents.ids.push(strongOpponent.id);
                strongOpponents.opponents.push({
                    ...strongOpponent,
                    by: [selectedHero],
                    strongs: []
                });
            }
        });
    });

    strongOpponents.opponents.map(opponent => {
        opponent.strongs = getStrongOpponentsOfStrongOpponent(opponent.id, selectedHeroes);
        return opponent;
    });

    return strongOpponents.opponents;
}

export default getStrongOpponentsFromSelectedHeroes;
