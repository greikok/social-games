import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'

import { Game } from '../models/game.model'

import { GameData } from '../../assets/games-mock.json'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return of(GameData)
  }
}
