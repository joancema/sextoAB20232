export interface ITVShow {
    id: number;
    name: string;
    director: string;
    investment: number;
    cast: string;
    seasons: ISeason[];
}
export interface ISeason {
    id: number;
    description: string;
    episodesNumber: number;
    tvshowId: number;
}