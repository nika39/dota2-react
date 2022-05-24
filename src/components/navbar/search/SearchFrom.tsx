import React, { useEffect, useRef, useState } from "react";
import { matchSorter } from "match-sorter/dist/match-sorter.umd";
import { toggle as selectHero } from "../../../redux/slices/heroesSlice";
import SearchResultContainer from "./search-container/SearchResultContainer";

import SearchResult from "./search-result/SearchResult";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { IHero } from "../../../models/hero";

function SearchFrom() {
    const allHeroes = useAppSelector(state => state.heroes.allHeroes);
    const dispatch = useAppDispatch();
    const [searchText, setSeachText] = useState<string>("");
    const [searchResult, setSearchResult] = useState<IHero[]>([]);
    const searchInput = useRef<HTMLInputElement | null>(null);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeachText(e.target.value);
        if (e.target.value.length) {
            setSearchResult(
                matchSorter(allHeroes, e.target.value.toLowerCase(), {
                    keys: ["name"]
                }).slice(0, 5)
            );
            return;
        }

        setSearchResult([]);
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchResult.length) dispatch(selectHero(searchResult[0]));
        setSeachText("");
        setSearchResult([]);
    };

    const selectHandler = (hero: IHero) => {
        dispatch(selectHero(hero));
        setSeachText("");
        setSearchResult([]);
        searchInput.current?.focus();
    };

    useEffect(() => {
        searchInput.current?.focus();
    }, []);

    const getSearchResultContainer = () => {
        if (searchText.length) {
            return (
                <SearchResultContainer>
                    {searchResult.length ? (
                        searchResult.map(hero => <SearchResult key={hero.id} hero={hero} onSelect={selectHandler} />)
                    ) : (
                        <div className="fs-7 p-2">Not Found!</div>
                    )}
                </SearchResultContainer>
            );
        }
    };

    return (
        <form className="relative flex" onSubmit={submitHandler}>
            <input
                className="w-80 appearance-none rounded border-none bg-slate-200 p-2.5 pr-10 text-sm text-gray-600 outline-none placeholder:text-neutral-500 placeholder:transition-colors focus:text-gray-600 focus:placeholder:text-gray-400 dark:bg-neutral-900 dark:text-white dark:focus:placeholder:text-white"
                type="text"
                placeholder="Search..."
                ref={searchInput}
                onChange={onInputChange}
                value={searchText}
            />
            <button
                type="button"
                className="absolute top-[13px] right-[13px] appearance-none border-none bg-transparent"
            >
                <svg
                    className="h-4 w-4 fill-gray-500 dark:fill-neutral-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z" />
                </svg>
            </button>
            {getSearchResultContainer()}
        </form>
    );
}

export default SearchFrom;
