import getClassNames from "../../functions/getClassNames";
import { ICounterHero } from "../../models/hero";
import OpponentsBadge from "./OpponentsBadge";

function StrongOpponent({ hero }: { hero: ICounterHero }) {
    return (
        <div className="relative rounded before:absolute before:inset-0 before:z-10 before:bg-black/10">
            <img
                className={getClassNames(
                    { "opacity-30": "strongs" in hero && hero.strongs.length >= 1 },
                    "h-auto max-w-full rounded object-cover"
                )}
                src={`${process.env.REACT_APP_URL}${hero.image.path}`}
                alt={hero.name}
            />
            <h6 className="text-truncate absolute left-1/2 bottom-0 z-20 w-full -translate-x-1/2 bg-gradient-to-b from-black/0 via-black/20 to-black/60 py-[2px] px-1 text-[10px] text-neutral-200">
                <a href={`${hero.link}/Counters`} target="_blank" rel="noreferrer">
                    {hero.name}
                </a>
            </h6>
            <OpponentsBadge hero={hero} isStrong={true} />
            {hero.strongs.length >= 1 && <OpponentsBadge hero={hero} isStrong={false} />}
        </div>
    );
}

export default StrongOpponent;
