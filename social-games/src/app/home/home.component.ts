import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service'

import { Game } from '../models/game.model'
import { Router } from '@angular/router';
import { GAME_DIFFICULTY } from '../util/const'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Game[];
  game_difficulty = GAME_DIFFICULTY;
  filterGame = '';
  selected = 'All';

  constructor(public gamseService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.gamseService.getGames().subscribe(games => {
      this.games = games;
    })
  }

  detailsGame(id: number) {
    this.router.navigate(['details/', id])
  }

}
