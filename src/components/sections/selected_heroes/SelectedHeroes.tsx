import { useAppSelector } from "../../../redux/hooks/hooks";
import SelectedHero from "./SelectedHero";

function SelectedHeroes() {
    const selectedHeroes = useAppSelector((state) => state.heroes.selectedHeroes);

    return (
        <div className="flex h-16 grow items-center space-x-3">
            {!selectedHeroes.length && (
                <h4 className="select-none text-lg italic text-slate-300">Selected Heroes...</h4>
            )}
            {selectedHeroes.map((hero) => {
                return (
                    <div key={hero.id} className="w-1/8">
                        <SelectedHero hero={hero} />
                    </div>
                );
            })}
        </div>
    );
}

export default SelectedHeroes;
