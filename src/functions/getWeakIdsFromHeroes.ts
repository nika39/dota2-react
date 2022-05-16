import { ISelectedHero } from "../models/hero";

function getWeakIdsFromHeroes(heroes: ISelectedHero[]) {
	let ids: number[] = [];

	heroes.forEach((hero) => {
		hero.weak_opponents.forEach((opponentId) => {
			if (!ids.includes(opponentId)) ids.push(opponentId);
		});
	});

	return ids;
}

export default getWeakIdsFromHeroes;
