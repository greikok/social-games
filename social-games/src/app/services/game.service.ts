import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Game } from '../models/game.model'

import { GameData } from '../../assets/games-mock.json'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  coins = 1000;
  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GameData)
  }

  setCoins(coins: number) {
    this.coins += coins;
  }
}
