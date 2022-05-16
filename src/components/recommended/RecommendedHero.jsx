import { Hero, HeroBadge } from "../hero/Hero.styled";

function RecommendedHero({ hero }) {
	return (
		<Hero className="rounded-1 mt-3">
			<img
				className="img-fluid rounded-1"
				src={hero.image.path}
				alt={hero.name}
			/>
			<HeroBadge>{hero.by.length}</HeroBadge>
		</Hero>
	);
}

export default RecommendedHero;
