import Position from "./positions/Position";

function HeroPositions() {
	return (
		<>
			<h5 className="mb-3 text-lg">Hero Positions</h5>
			<div className="-mx-1.5 flex flex-wrap">
				<Position title="Safe Lane" position={1} />
				<Position title="Mid Lane" position={2} />
				<Position title="Off Lane" position={3} />
				<Position title="Soft Support" position={4} />
				<Position title="Hard Support" position={5} />
			</div>
		</>
	);
}

export default HeroPositions;
