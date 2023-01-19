import json from '../parser';
import read from '../reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    return new Promise((resolve) => {
      resolve((read().then((data) => json(data)).then((data) => new GameSaving(data))));
    });
  }
}
