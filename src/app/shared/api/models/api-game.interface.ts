export interface ApiGame {
    name: string;
    type: ApiGameType|null;
    steam: ApiGameInfo|null;
    gog: ApiGameInfo|null;
    image: string;
    platforms: ApiGamePlatforms;
    short_description: string|null;
    detailed_description: string|null;
    about_the_game: string|null;
}

export type ApiGameType = 'game' | 'dlc';
export const ApiGameTypes = {
    GAME: 'game' as ApiGameType,
    DLC: 'dlc' as ApiGameType,
}

export interface ApiGameInfo {
    id?: number;
    price: ApiGamePrice;
    link: string;
}

export interface ApiGamePrice {
    initial_value: number;
    final_value: number;
    discount_percent: number;
    currency: string;
    is_free: boolean;
}

export interface ApiGamePlatforms {
    windows: boolean;
    mac: boolean;
    linux: boolean;
}
