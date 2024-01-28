export interface Game {
    name: string;
    type: GameType|null;
    steam: GameInfo|null;
    gog: GameInfo|null;
    egs: EgsGameInfo|null;
    image: string;
    platforms: GamePlatforms;
    shortDescription: string|null;
    detailedDescription: string|null;
    aboutTheGame: string|null;
    isFavourite: boolean;
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

export type EgsGameInfo = Omit<GameInfo, 'id'> & {
    id?: string;
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
