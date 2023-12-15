import { Game, GameTypes } from '../../models/game.interface';

export const gameMock: Game = {
    name: 'The Witcher',
    type: GameTypes.GAME,
    steam: {
        id: 13243,
        price: {
            intital: 50,
            final: 60,
            discountPercent: 0.2,
            currency: 'EUR',
            isFree: false,
        },
        link: 'https://url.to/game',
    },
    gog: {
        id: 802321,
        price: {
            intital: 40,
            final: 60,
            discountPercent: 0.34,
            currency: 'EUR',
            isFree: false,
        },
        link: 'https://url.to/game',
    },
    image: 'https://url.to/image.png',
    platforms: {
        windows: true,
        mac: false,
        linux: false,
    },
    shortDescription: 'short description',
    detailedDescription: 'detailed description',
    aboutTheGame: 'about the game',
};