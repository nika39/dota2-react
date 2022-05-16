import React from "react";
import { useSelector } from "react-redux";

import RecommendedHero from "../recommended/RecommendedHero";

function RecommendedHeroes() {
    const counterHeroes = useSelector((state) => state.heroes.counterHeroes);

    const recommendedHeroes = counterHeroes
        .filter((hero) => hero.by.length > 1)
        .sort((heroA, heroB) => heroB.by.length - heroA.by.length)
        .map((hero) => <RecommendedHero key={hero.id} hero={hero} />);

    return (
        <>
            <h5 className="mb-3">AI</h5>
            <div className="recommended-heroes">{recommendedHeroes}</div>
        </>
    );
}

export default RecommendedHeroes;
