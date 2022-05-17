import ReactDOM from "react-dom";
import getClassNames from "../../functions/getClassNames";
import useBadge from "../../hooks/useBadge";
import { ICounterHero } from "../../models/hero";
import TooltipHero from "./TooltipHero";

interface IProps {
    hero: ICounterHero;
    isStrong: boolean;
}

function OpponentsBadge({ hero, isStrong }: IProps) {
    const badge = useBadge();

    return (
        <div
            className={getClassNames(
                {
                    "bg-emerald-700": isStrong && hero.by.length > 2,
                    "bg-emerald-600": isStrong && hero.by.length === 2,
                    "bg-green-600": isStrong && hero.by.length === 1,
                    "bg-rose-600": !isStrong && hero.strongs.length >= 1,
                    "right-[3px]": isStrong,
                    "left-[3px]": !isStrong
                },
                "align-center absolute top-[3px] z-20 flex h-[17px] w-[17px] cursor-pointer justify-center rounded-full text-center text-[11px] text-white"
            )}
            ref={badge.setContainerElement}
        >
            {isStrong ? hero.by.length : hero.strongs.length}
            {ReactDOM.createPortal(
                <div
                    className="z-[1042] hidden rounded bg-slate-200 p-2 dark:bg-neutral-900"
                    ref={badge.setPopperElement}
                    style={badge.popper.styles.popper}
                    {...badge.popper.attributes.popper}
                >
                    <div className="flex -space-x-2">
                        {(isStrong ? hero.by : hero.strongs).map((hero) => (
                            <TooltipHero key={hero.id} hero={hero} />
                        ))}
                    </div>
                    <div
                        className="invisible bottom-0 h-1.5 w-1.5 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit"
                        ref={badge.setArrowElement}
                        style={badge.popper.styles.arrow}
                    />
                </div>,
                document.querySelector("#tooltip-root") as Element
            )}
        </div>
    );
}

export default OpponentsBadge;
