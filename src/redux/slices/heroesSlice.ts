import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../store";
import addOpponentsToHero from "../../functions/addOpponentsToHero";
import { ICounterHero, IHero, ISelectedHero } from "../../models/hero";
import getStrongOpponentsFromSelectedHeroes from "../../functions/getStrongOpponentsFromSelectedHeroes";
import { RootState } from "../store";

export const fetchAllHeroes = createAsyncThunk("heroes/fetchAllHeroes", async (rank: string) => {
    const response = await axios(`/heroes?rank=${rank}`);
    return response.data;
});

interface IState {
    allHeroes: IHero[];
    selectedHeroes: ISelectedHero[];
    selectedHeroesIds: number[];
    counterHeroes: ICounterHero[];
}

const initialState: IState = {
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
                selectedHeroesIds = state.selectedHeroesIds.filter((id) => id !== selectedHero.id);
                selectedHeroes = state.selectedHeroes.filter((hero) => hero.id !== selectedHero.id);
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
    extraReducers: (builder) => {
        builder.addCase(fetchAllHeroes.fulfilled, (state, action) => {
            return {
                ...state,
                allHeroes: action.payload
            };
        });
    }
});

export const { toggle } = heroesSlice.actions;

export const selectAllHeroes = (state: RootState) => state.heroes.allHeroes;

export default heroesSlice.reducer;
