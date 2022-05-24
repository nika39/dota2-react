import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import addOpponentsToHero from "../../functions/addOpponentsToHero";
import { ICounterHero, IHero, ISelectedHero } from "../../models/hero";
import getStrongOpponentsFromSelectedHeroes from "../../functions/getStrongOpponentsFromSelectedHeroes";
import getHeroById from "../../functions/getHeroById";
import { RootState } from "../store";

export const fetchAllHeroes = createAsyncThunk("heroes/fetchAllHeroes", async (rank: string) => {
    const response = await axios(`/api/heroes?rank=${rank}`);
    return response.data;
});

interface IHeroesState {
    allHeroes: IHero[];
    selectedHeroes: ISelectedHero[];
    selectedHeroesIds: number[];
    counterHeroes: ICounterHero[];
}

const initialState: IHeroesState = {
    allHeroes: [],
    selectedHeroes: [],
    selectedHeroesIds: [],
    counterHeroes: []
};

export const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        toggle: (state, action) => {
            const selectedHero = addOpponentsToHero(action.payload, state.allHeroes);
            const isSelected = state.selectedHeroesIds.includes(selectedHero.id);
            if (!isSelected && state.selectedHeroes.length === 5) return state;

            let selectedHeroesIds;
            let selectedHeroes;
            if (isSelected) {
                selectedHeroesIds = state.selectedHeroesIds.filter(id => id !== selectedHero.id);
                selectedHeroes = state.selectedHeroes.filter(hero => hero.id !== selectedHero.id);
            } else {
                selectedHeroesIds = [...state.selectedHeroesIds, selectedHero.id];
                selectedHeroes = [...state.selectedHeroes, selectedHero];
            }

            const counterHeroes = getStrongOpponentsFromSelectedHeroes(selectedHeroes, selectedHeroesIds);

            return {
                ...state,
                selectedHeroesIds,
                selectedHeroes,
                counterHeroes
            };
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllHeroes.fulfilled, (state, action) => {
            const heroes: IHero[] = action.payload;

            const selectedHeroes = state.selectedHeroes.map(selectedHero => {
                const hero = getHeroById(selectedHero.id, heroes);

                return {
                    ...selectedHero,
                    positions: [...hero.positions]
                };
            });

            const counterHeroes = state.counterHeroes.map(counterHero => {
                const hero = getHeroById(counterHero.id, heroes);

                return {
                    ...counterHero,
                    positions: [...hero.positions]
                };
            });

            return {
                ...state,
                allHeroes: action.payload,
                selectedHeroes,
                counterHeroes
            };
        });
    }
});

export const { toggle } = heroesSlice.actions;

export const selectAllHeroes = (state: RootState) => state.heroes.allHeroes;

export default heroesSlice.reducer;
