import { useAppSelector } from "../../../redux/hooks/hooks";
import Rank from "./Rank";

function Ranks() {
    const { ranks } = useAppSelector(({ ranks }) => ranks);

    return (
        <form className="flex space-x-2">
            {ranks.map(rank => {
                return <Rank key={rank} rank={rank} />;
            })}
        </form>
    );
}

export default Ranks;
