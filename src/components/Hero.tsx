import { useState, useRef } from "react";
import { shallowEqual } from "react-redux";

import getClassNames from "../functions/getClassNames";
import { IHero } from "../models/hero";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { toggle } from "../redux/slices/heroesSlice";

interface IProps {
    hero: IHero;
}

function Hero({ hero }: IProps) {
    const heroElement = useRef<HTMLDivElement>(null);
    const [isExceeded, setIsExceeded] = useState(false);

    const { isSelected, isLimit } = useAppSelector(state => {
        const isLimit =
            !state.heroes.selectedHeroesIds.includes(hero.id) && state.heroes.selectedHeroesIds.length === 5;
        const isSelected = state.heroes.selectedHeroesIds.includes(hero.id);

        return { isSelected, isLimit };
    }, shallowEqual);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (isLimit) {
            setIsExceeded(true);

            setTimeout(() => {
                setIsExceeded(false);
            }, 2000);

            return;
        }

        dispatch(toggle(hero));
    };

    return (
        <div className="mt-1.5 w-1/7 px-1.5">
            <div
                ref={heroElement}
                onClick={handleClick}
                className={getClassNames(
                    {
                        "z-50 ring-purple-700 dark:bg-transparent dark:ring-amber-300": isSelected,
                        "ring-transparent": !isSelected,
                        "animate-denied": isExceeded
                    },
                    "relative cursor-pointer select-none rounded p-0.5 ring-[3px] transition dark:p-0"
                )}
            >
                <div className="relative rounded">
                    <img
                        className="h-auto max-w-full rounded"
                        src={`${process.env.REACT_APP_URL}/${hero.image.path}`}
                        alt={hero.name}
                        loading="lazy"
                    />
                    <h6 className="text-truncate absolute left-1/2 bottom-0 z-[1] w-full -translate-x-1/2 rounded-b bg-gradient-to-b from-black/0 via-black/20 to-black/60 py-[2px] px-1 text-[10px] text-neutral-300">
                        {hero.name}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Hero;
