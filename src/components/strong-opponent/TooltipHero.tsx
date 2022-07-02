import { ISelectedHero } from "../../models/hero";

interface IProps {
    hero: ISelectedHero;
}

function TooltipHero({ hero }: IProps) {
    return (
        <div className="inline-block">
            <img
                width="40"
                height="40"
                className="h-10 w-10 rounded-full object-cover object-center ring-[3px] ring-slate-200 dark:ring-neutral-900"
                src={`${process.env.REACT_APP_URL}${hero.image.path}`}
                alt={`hero: ${hero.name}`}
            />
        </div>
    );
}

export default TooltipHero;
