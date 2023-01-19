import GameSavingLoader from './class/GameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => error);
