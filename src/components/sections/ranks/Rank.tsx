import { RankType } from "../../../models/Rank";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { fetchAllHeroes } from "../../../redux/slices/heroesSlice";
import { selectRank } from "../../../redux/slices/ranksSlice";

function Rank({ rank }: { rank: RankType }) {
    const selectedRank = useAppSelector(({ ranks }) => ranks.selectedRank);
    const dispatch = useAppDispatch();

    const handleSelect = () => {
        dispatch(selectRank(rank));
        dispatch(fetchAllHeroes(rank.toLowerCase()));
    };

    return (
        <div className="flex items-center">
            <input
                type="radio"
                className="peer hidden"
                name="rank"
                id={`rank-${rank}`}
                onChange={handleSelect}
                defaultChecked={rank === selectedRank}
            />
            <label
                className="relative h-2 w-2 cursor-pointer rounded-full bg-purple-600 ring-1 ring-purple-600 ring-offset-1 ring-offset-slate-200 dark:bg-amber-400 dark:ring-amber-400 dark:ring-offset-neutral-900 peer-checked:[&>*]:scale-100"
                htmlFor={`rank-${rank}`}
            >
                <svg
                    className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 scale-0 transform transition-transform"
                    viewBox="0 0 448 512"
                >
                    <path
                        className="fill-white dark:fill-black"
                        d="M443.3 100.7C449.6 106.9 449.6 117.1 443.3 123.3L171.3 395.3C165.1 401.6 154.9 401.6 148.7 395.3L4.686 251.3C-1.562 245.1-1.562 234.9 4.686 228.7C10.93 222.4 21.06 222.4 27.31 228.7L160 361.4L420.7 100.7C426.9 94.44 437.1 94.44 443.3 100.7H443.3z"
                    />
                </svg>
            </label>
            <label
                className="cursor-pointer pl-1.5 text-sm capitalize peer-checked:text-purple-600 dark:peer-checked:text-amber-400"
                htmlFor={`rank-${rank}`}
            >
                {rank}
            </label>
        </div>
    );
}

export default Rank;
