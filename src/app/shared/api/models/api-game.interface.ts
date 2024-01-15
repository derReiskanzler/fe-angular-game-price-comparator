export interface ApiGame {
    name: string;
    type?: ApiGameType;
    steam?: ApiGameInfo;
    gog?: ApiGameInfo;
    image: string;
    platforms: ApiGamePlatforms;
    short_description: string;
    detailed_description: string;
    about_the_game: string;
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
    intital_value: number;
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
