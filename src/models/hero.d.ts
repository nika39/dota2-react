export interface IImage {
    id: number;
    path: string;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IHero {
    id: number;
    name: string;
    link: string;
    image: IImage;
    category: ICategory;
    positions: number[];
    strong_opponents: number[];
    weak_opponents: number[];
}

export interface ISelectedHero extends Omit<IHero, "strong_opponents"> {
    strong_opponents: {
        ids: number[];
        heroes: IHero[];
    };
}

export interface ICounterHero extends IHero {
    by: ISelectedHero[];
    strongs: ISelectedHero[];
}
