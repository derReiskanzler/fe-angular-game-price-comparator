export interface ApiGame {
    name: string;
    type: ApiGameType;
    steam?: ApiGameInfo;
    gog?: ApiGameInfo;
    image: string;
    platforms: ApiGamePlatforms;
    shortDescription: string;
    detailedDescription: string;
    aboutTheGame: string;
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
    intital: number;
    final: number;
    discountPercent: number;
    currency: string;
    isFree: boolean;
}

export interface ApiGamePlatforms {
    windows: boolean;
    mac: boolean;
    linux: boolean;
}
