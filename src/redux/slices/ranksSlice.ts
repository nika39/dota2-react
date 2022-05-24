import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RankType } from "../../models/Rank";

// export const fetchRanks = createAsyncThunk("ranks/fetchRanks", async (rank: string) => {
//     const response = await axios(`/api/ranks?rank=${rank}`);
//     return response.data;
// });

interface IRanksState {
    ranks: RankType[];
    selectedRank: RankType;
    fetched: boolean;
    fetching: boolean;
}

const ranks: RankType[] = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine"];

const initialState: IRanksState = {
    ranks,
    selectedRank:
        (ranks.includes(localStorage.rank) && localStorage.rank) || ((localStorage.rank = ranks[0]) && ranks[0]),
    fetched: true,
    fetching: false
};

export const ranksSlice = createSlice({
    name: "ranks",
    initialState,
    reducers: {
        selectRank: (state, action: PayloadAction<RankType>) => {
            localStorage.rank = action.payload;
            state.selectedRank = action.payload;
        }
    }
});

export const { selectRank } = ranksSlice.actions;

export default ranksSlice.reducer;
