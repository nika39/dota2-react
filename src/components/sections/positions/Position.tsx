import StrongOpponent from "../../strong-opponent/StrongOpponent";
import getHeroesFilteredByPosition from "../../../functions/getHeroesFilteredByPosition";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { ICounterHero } from "../../../models/hero";

interface IProp {
	title: string;
	position: number;
}

function Position({ title, position }: IProp) {
	const counterHeroes = useAppSelector((state) => state.heroes.counterHeroes);
	const heroes = getHeroesFilteredByPosition(position, counterHeroes);

	return (
		<div className="w-1/5 px-1.5">
			<h6 className="mb-2 text-xs">{title}</h6>
			<div className="space-y-2">
				{heroes.map((hero: ICounterHero) => (
					<StrongOpponent key={hero.id} hero={hero} />
				))}
			</div>
		</div>
	);
}

export default Position;
