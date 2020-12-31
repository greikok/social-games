import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../models/game.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: Game[], arg: string): Game[] {
    const resultGame: Game[] = [];
    arg = arg.toLocaleLowerCase();

    games.forEach(game => {
      const gamesValue = Object.values(game).toString().toLocaleLowerCase();

      if (gamesValue.includes(arg)) {
        resultGame.push(game);
      }
    })

    return arg == '' ? games : resultGame
  }

}
