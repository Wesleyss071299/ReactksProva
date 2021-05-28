export interface IBet {
    id: number;
    numbers: number[];
    game_id: number
}

export interface ResponseBetData {
    data: IBet[];
}