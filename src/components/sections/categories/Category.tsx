import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";

import Hero from "../../Hero";

interface IProps {
    title: string;
    category: number;
}

function Category({ title, category }: IProps) {
    const allHeroes = useAppSelector(state => state.heroes.allHeroes);

    const heroes = useMemo(
        () => allHeroes.filter(hero => hero.category.id === category).map(hero => <Hero key={hero.id} hero={hero} />),
        [allHeroes, category]
    );

    return (
        <>
            <div>
                <h1 className="mb-2 text-lg">{title}</h1>
                <div className="-mx-1.5 -mt-1.5 flex flex-wrap">{heroes}</div>
            </div>
        </>
    );
}

export default Category;
