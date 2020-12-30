import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../models/game.model';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {
  transform(games: Game[], arg: string): Game[] {
    const resultGame: Game[] = [];
    arg = arg.toLocaleLowerCase();
    games.forEach(game => {
      if (game.level == arg) {
        resultGame.push(game);
      }
    })
    return arg == 'all' ? games : resultGame
  }

}
