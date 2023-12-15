export interface Game {
    name: string;
    type: GameType;
    steam?: GameInfo;
    gog?: GameInfo;
    image: string;
    platforms: GamePlatforms;
    shortDescription: string;
    detailedDescription: string;
    aboutTheGame: string;
}

export type GameType = 'game' | 'dlc';
export const GameTypes = {
    GAME: 'game' as GameType,
    DLC: 'dlc' as GameType,
}

export interface GameInfo {
    id?: number;
    price: GamePrice;
    link: string;
}

export interface GamePrice {
    intital: number;
    final: number;
    discountPercent: number;
    currency: string;
    isFree: boolean;
}

export interface GamePlatforms {
    windows: boolean;
    mac: boolean;
    linux: boolean;
}
