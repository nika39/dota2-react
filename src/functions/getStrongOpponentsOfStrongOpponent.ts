import { ISelectedHero } from "../models/hero";

export function getStrongOpponentsOfStrongOpponent(strongOpponentId: number, selectedHeroes: ISelectedHero[]) {
    return selectedHeroes.filter(selectedHero => {
        return selectedHero.weak_opponents.some(weakOpponentId => weakOpponentId === strongOpponentId);
    });
}
