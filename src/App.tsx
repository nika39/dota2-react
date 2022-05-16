import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Heroes from "./components/sections/Heroes";
import HeroPositions from "./components/sections/HeroPositions";
import { useAppDispatch } from "./redux/hooks/hooks";
import { fetchAllHeroes } from "./redux/slices/heroesSlice";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllHeroes("archon"));
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div className="container mt-6">
				<div className="row">
					<div className="col w-7/12">
						<div className="wrapper flex flex-col space-y-6">
							<Heroes />
						</div>
					</div>
					<div className="col w-5/12">
						<div className="wrapper">
							<HeroPositions />
						</div>
					</div>
					{/* <div className="col-1">
						<div className="p-3 rounded text-center">
							<RecommendedHeroes />
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default App;
