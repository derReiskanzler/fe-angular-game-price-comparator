import { ApiGame, ApiGameTypes } from '../../api/models/api-game.interface';

export const apiGameMock: ApiGame = {
    name: 'The Witcher',
    type: ApiGameTypes.GAME,
    steam: {
        id: 13243,
        price: {
            initial_value: 50,
            final_value: 60,
            discount_percent: 0.2,
            currency: 'EUR',
            is_free: false,
        },
        link: 'https://url.to/game',
    },
    gog: {
        id: 802321,
        price: {
            initial_value: 40,
            final_value: 60,
            discount_percent: 0.34,
            currency: 'EUR',
            is_free: false,
        },
        link: 'https://url.to/game',
    },
    image: 'https://url.to/image.png',
    platforms: {
        windows: true,
        mac: false,
        linux: false,
    },
    short_description: 'short description',
    detailed_description: 'detailed description',
    about_the_game: 'about the game',
};