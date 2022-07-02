import { ISelectedHero } from "../../../models/hero";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { toggle } from "../../../redux/slices/heroesSlice";

function SelectedHero({ hero }: { hero: ISelectedHero }) {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(toggle(hero));
    };

    return (
        <div className="relative rounded before:absolute before:inset-0 before:z-10 before:bg-black/10">
            <img
                width={110}
                height={60}
                className="h-auto w-full rounded object-cover shadow-md"
                src={`${process.env.REACT_APP_URL}${hero.image.path}`}
                alt={hero.name}
            />
            <h6 className="text-truncate absolute left-0 bottom-0 z-20 w-full bg-gradient-to-b from-black/0 via-black/20 to-black/60 py-[2px] px-1 text-[10px] text-neutral-200">
                <a href={`${hero.link}/Counters`} target="_blank" rel="noreferrer">
                    {hero.name}
                </a>
            </h6>
            <button
                onClick={handleRemove}
                className="align-center group absolute right-[3px] top-[3px] z-20 flex h-[17px] w-[17px] cursor-pointer justify-center rounded-full text-center text-[11px] text-white"
            >
                <svg className="h-4 w-4 drop-shadow-lg group-active:scale-90" viewBox="0 0 320 512">
                    <path
                        className="fill-current"
                        d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                    />
                </svg>
            </button>
        </div>
    );
}

export default SelectedHero;
