import Rank from "./Rank";

function Ranks() {
    const ranks = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine"];

    return (
        <form className="flex space-x-2">
            {ranks.map((rank) => {
                return <Rank key={rank} rank={rank} />;
            })}
        </form>
    );
}

export default Ranks;
