import { IHero } from "../../../models/hero";

interface IProps {
    hero: IHero;
    onSelect: (hero: IHero) => void;
}

function SearchResult({ hero, onSelect }: IProps) {
    const selectHandler = () => {
        onSelect(hero);
    };

    return (
        <div
            className="
                align-center
                flex cursor-pointer
                bg-slate-200
                px-3 
                py-4 
                transition-colors
                first:bg-slate-50 
                hover:!bg-slate-50 
                group-hover:bg-slate-200 
                dark:bg-neutral-900 
                dark:first:bg-neutral-800
                dark:hover:!bg-neutral-800
                dark:group-hover:bg-neutral-900"
            onClick={selectHandler}
        >
            <img
                className="mr-2 h-12 w-12 rounded object-cover object-center"
                width="45"
                height="45"
                src={`${process.env.REACT_APP_URL}${hero.image.path}`}
                alt={hero.name}
            />
            <h6 className="text-sm">{hero.name}</h6>
        </div>
    );
}

export default SearchResult;
