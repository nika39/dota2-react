import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import SelectedHero from "../Selected/SelectedHero";

function SelectedHeroes() {
    const selectedHeroes = useAppSelector((state) => state.heroes.selectedHeroes);

    return (
        <>
            <h5 className="mb-3 text-lg">Counter Heroes</h5>
            <div className="-mx-1.5 flex flex-wrap">
                {selectedHeroes.map((hero) => (
                    <SelectedHero key={hero.id} hero={hero} />
                ))}
            </div>
        </>
    );
}

export default React.memo(SelectedHeroes);
